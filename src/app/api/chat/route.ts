import { NextRequest } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { CHATBOT_SYSTEM_PROMPT } from '@/lib/chatbot-prompt';
import { insertLead } from '@/lib/insert-lead';

const textRateLimit = new Map<string, { count: number; reset: number }>();
const imageRateLimit = new Map<string, { count: number; reset: number }>();

function checkRate(map: Map<string, { count: number; reset: number }>, ip: string, limit: number): boolean {
  const now = Date.now();
  const entry = map.get(ip);
  if (!entry || now > entry.reset) {
    map.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

function parseStructuredTags(fullText: string) {
  const actions: { type: string; label: string; href?: string; variant?: string }[] = [];
  const faqChips: { type: string; label: string; faqQuestion: string }[] = [];
  let hasContactRequest = false;
  let leadName = '';
  let leadEmail = '';

  // Action buttons
  const actionRegex = /\[ACTION_BUTTON:\s*label="([^"]+)"\s*href="([^"]+)"\s*variant="([^"]+)"\]/g;
  let m;
  while ((m = actionRegex.exec(fullText)) !== null) {
    actions.push({ type: 'link', label: m[1], href: m[2], variant: m[3] });
  }

  // FAQ chips
  const faqMatch = fullText.match(/\[FAQ_CHIPS:\s*"([^"]+)"(?:,\s*"([^"]+)")?(?:,\s*"([^"]+)")?\]/);
  if (faqMatch) {
    for (let i = 1; i <= 3; i++) {
      if (faqMatch[i]) {
        faqChips.push({ type: 'faq', label: faqMatch[i], faqQuestion: faqMatch[i] });
      }
    }
  }

  // Contact request
  if (fullText.includes('[CONTACT_REQUEST]')) {
    hasContactRequest = true;
  }

  // Lead capture
  const leadMatch = fullText.match(/\[LEAD_CAPTURE:\s*name="([^"]+)"\s*email="([^"]+)"\]/);
  if (leadMatch) {
    leadName = leadMatch[1];
    leadEmail = leadMatch[2];
  }

  // Clean text (remove all tags)
  const cleanText = fullText
    .replace(/\[ACTION_BUTTON:[^\]]+\]/g, '')
    .replace(/\[FAQ_CHIPS:[^\]]+\]/g, '')
    .replace(/\[CONTACT_REQUEST\]/g, '')
    .replace(/\[LEAD_CAPTURE:[^\]]+\]/g, '')
    .replace(/\[CONTACT_PROVIDED:[^\]]+\]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return { actions, faqChips, hasContactRequest, leadName, leadEmail, cleanText };
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Chat unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { message, history, image } = body;

    const hasImage = image && image.base64 && image.mimeType;

    // Apply rate limit (stricter for images)
    if (hasImage) {
      if (!checkRate(imageRateLimit, ip, 5)) {
        return new Response(JSON.stringify({ error: 'Image analysis rate limit exceeded' }), {
          status: 429, headers: { 'Content-Type': 'application/json' },
        });
      }
    } else {
      if (!checkRate(textRateLimit, ip, 20)) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
          status: 429, headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    if (!message && !hasImage) {
      return new Response(JSON.stringify({ error: 'Message or image required' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Build user content (text + optional image)
    const userContent: Anthropic.ContentBlockParam[] = [];

    if (hasImage) {
      userContent.push({
        type: 'image',
        source: {
          type: 'base64',
          media_type: image.mimeType as 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif',
          data: image.base64,
        },
      });
    }

    userContent.push({
      type: 'text',
      text: message || 'Please analyze this utility bill and provide a custom savings plan.',
    });

    const client = new Anthropic({ apiKey });

    const messages: Anthropic.MessageParam[] = [
      ...(history || []).slice(-20),
      { role: 'user', content: userContent },
    ];

    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: CHATBOT_SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    let fullText = '';

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              const text = event.delta.text;
              fullText += text;
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', text })}\n\n`));
            }
          }

          // Parse structured tags
          const { actions, faqChips, hasContactRequest, leadName, leadEmail, cleanText } = parseStructuredTags(fullText);

          // Send clean text replacement if tags were present
          if (cleanText !== fullText) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text_replace', text: cleanText })}\n\n`));
          }

          // Emit structured events
          if (hasContactRequest) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'contact_request' })}\n\n`));
          }

          if (actions.length > 0) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'actions', actions })}\n\n`));
          }

          if (faqChips.length > 0) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'faq_chips', chips: faqChips })}\n\n`));
          }

          // Persist lead if captured
          if (leadName && leadEmail) {
            try {
              await insertLead({ name: leadName, email: leadEmail, source: 'api', interest: 'Chatbot inquiry' });
            } catch (e) {
              console.error('Lead capture from chat failed:', e);
            }
          }

          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done' })}\n\n`));
          controller.close();
        } catch (err) {
          console.error('Stream error:', err);
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', text: 'Something went wrong.' })}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
