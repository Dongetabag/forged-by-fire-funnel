import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { insertLead } from "@/lib/insert-lead";

// Zoho SMTP configuration. Zoho Mail is the authoritative mailbox for
// contact@theforgedbyfire.org — we send AS that address using an app password,
// so inbound + outbound both live in the same Zoho inbox (ready for the
// AI-monitoring integration later on).
const SMTP_HOST = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
const SMTP_PORT = Number(process.env.ZOHO_SMTP_PORT || 465);
const SMTP_USER = process.env.ZOHO_SMTP_USER || "contact@theforgedbyfire.org";
const SMTP_PASS = process.env.ZOHO_SMTP_PASS || "";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "contact@theforgedbyfire.org";
const FROM_NAME = "Forged By Fire";

function getTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // SSL on 465, STARTTLS on 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

const INTEREST_LABEL: Record<string, string> = {
  "I need emergency help after a fire": "EMERGENCY SUPPORT REQUEST",
  "I want to donate financially": "DONATION INQUIRY",
  "I want to donate items or clothing": "ITEM DONATION",
  "I'd like to volunteer": "VOLUNTEER INTEREST",
  "I'd like to partner with Forged By Fire": "PARTNERSHIP INQUIRY",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Name, email, and how-we-can-help are required" },
        { status: 400 }
      );
    }

    // Persist (no-op if DB isn't provisioned yet)
    try {
      await insertLead({
        name,
        email,
        phone,
        interest,
        message,
        source: "landing_page",
      });
    } catch (dbErr) {
      console.error("FBF lead insert error:", dbErr);
    }

    if (!SMTP_PASS) {
      console.error("FBF: ZOHO_SMTP_PASS not set on Vercel");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = getTransporter();
    const firstName = name.split(" ")[0];
    const badge = INTEREST_LABEL[interest] ?? "NEW INQUIRY";
    const isEmergency = interest.toLowerCase().includes("emergency");

    const fromHeader = `"${FROM_NAME}" <${SMTP_USER}>`;

    // 1) Internal notification into the Zoho inbox
    try {
      await transporter.sendMail({
        from: fromHeader,
        to: NOTIFY_EMAIL,
        replyTo: `"${name}" <${email}>`,
        subject: `${isEmergency ? "🔥 EMERGENCY " : ""}New ${badge.toLowerCase()}: ${name}`,
        text: `New inquiry to Forged By Fire\n\nType: ${interest}\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message || "(no note)"}\n\n${isEmergency ? "⚠️  EMERGENCY — respond within 24 hours (same-day if possible).\n\n" : ""}Reply to this email to contact ${firstName} directly.\n\n—\ntheforgedbyfire.org`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #F5F0EA; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F0EA; padding: 40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
        <tr><td style="padding: 0 0 32px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.4); font-weight: 500;">
                FORGED BY FIRE
              </td>
              <td align="right">
                <span style="display: inline-block; background: ${isEmergency ? "#E85D23" : "rgba(232,93,35,0.1)"}; border: 1px solid rgba(232,93,35,0.25); border-radius: 999px; padding: 6px 16px; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: ${isEmergency ? "#fff" : "#9B2F0A"}; font-weight: 600;">
                  ${badge}
                </span>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="background: #FBF8F4; border: 1px solid rgba(26,26,26,0.06); border-radius: 16px; padding: 40px 36px;">
          <h1 style="margin: 0 0 4px 0; font-size: 28px; font-weight: 500; letter-spacing: -0.5px; color: #1A1A1A; line-height: 1.2;">
            ${name}
          </h1>
          <p style="margin: 0 0 32px 0; font-size: 15px; color: rgba(26,26,26,0.55); line-height: 1.6;">
            reached out to Forged By Fire
          </p>
          <div style="height: 1px; background: rgba(26,26,26,0.08); margin-bottom: 28px;"></div>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 10px 0; width: 130px; vertical-align: top; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500;">EMAIL</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1A1A1A;">
                <a href="mailto:${email}" style="color: #9B2F0A; text-decoration: none; border-bottom: 1px solid rgba(232,93,35,0.3);">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; width: 130px; vertical-align: top; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500;">PHONE</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1A1A1A;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; width: 130px; vertical-align: top; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500;">TYPE</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1A1A1A; font-weight: 600;">${interest}</td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 10px 0; width: 130px; vertical-align: top; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500;">NOTE</td>
              <td style="padding: 10px 0; font-size: 15px; color: #1A1A1A; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
          ${isEmergency ? `<div style="background: rgba(232,93,35,0.08); border: 1px solid rgba(232,93,35,0.25); border-radius: 8px; padding: 14px 16px; margin-top: 20px;">
            <p style="margin: 0; font-size: 13px; color: #9B2F0A; font-weight: 600;">⚠️  This is an emergency request. Respond within 24 hours — same-day if possible.</p>
          </div>` : ""}
          <div style="height: 1px; background: rgba(26,26,26,0.08); margin: 24px 0;"></div>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td align="center">
              <a href="mailto:${email}" style="display: inline-block; background: #E85D23; color: #fff; border-radius: 999px; padding: 12px 32px; font-size: 13px; font-weight: 600; text-decoration: none; letter-spacing: 0.5px;">
                Reply to ${firstName}
              </a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding: 24px 0 0 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size: 11px; color: rgba(26,26,26,0.3); letter-spacing: 1px;">theforgedbyfire.org</td>
              <td align="right" style="font-size: 11px; color: rgba(26,26,26,0.3); letter-spacing: 1px;">Landing Page Inquiry</td>
            </tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
        `,
      });
    } catch (notifyErr) {
      console.error("Zoho notify send error:", notifyErr);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    // 2) Confirmation email to the visitor
    try {
      await transporter.sendMail({
        from: fromHeader,
        to: email,
        replyTo: NOTIFY_EMAIL,
        subject: `We hear you, ${firstName}. Welcome to Forged By Fire.`,
        headers: {
          "X-Entity-Ref-ID": `fbf-confirm-${Date.now()}`,
          "List-Unsubscribe": `<mailto:${NOTIFY_EMAIL}?subject=Unsubscribe>`,
        },
        text: `Thanks for reaching out, ${firstName}.\n\nWe've received your message and someone from the Forged By Fire team will respond within 24 hours, faster if this is an emergency after a house fire.\n\nYOUR REQUEST\nType: ${interest}\n${message ? `Note: ${message}\n` : ""}\nWHAT HAPPENS NEXT\n1. A member of our team reviews your request personally\n2. We reach out within 24 hours, same day for emergencies\n3. We connect you with the right resources and next steps\n\n"This is more than a project to me. This is personal. Forged By Fire was created so that others do not have to go through that journey alone." Lt. Donald Coleman Jr., Founder\n\nEvery little bit counts.\n\n—\nForged By Fire\nSpringfield, MA\ntheforgedbyfire.org\n\nTo unsubscribe, reply with "Unsubscribe" in the subject line.`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #F5F0EA; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F0EA; padding: 40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
        <tr><td style="padding: 0 0 32px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.4); font-weight: 500;">
                FORGED BY FIRE
              </td>
              <td align="right">
                <span style="display: inline-block; background: rgba(232,93,35,0.1); border: 1px solid rgba(232,93,35,0.25); border-radius: 999px; padding: 6px 16px; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #9B2F0A; font-weight: 600;">
                  RECEIVED
                </span>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="background: #FBF8F4; border: 1px solid rgba(26,26,26,0.06); border-radius: 16px; padding: 40px 36px;">
          <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 500; letter-spacing: -0.5px; color: #1A1A1A; line-height: 1.2;">
            We hear you, ${firstName}.
          </h1>
          <p style="margin: 0 0 28px 0; font-size: 15px; color: rgba(26,26,26,0.6); line-height: 1.7;">
            Thank you for reaching out to Forged By Fire. Someone from our team will respond within 24 hours, faster if this is an emergency after a house fire.
          </p>
          <div style="height: 1px; background: rgba(26,26,26,0.08); margin-bottom: 28px;"></div>
          <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500; margin: 0 0 16px 0;">
            YOUR REQUEST
          </p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 8px 0; width: 130px; vertical-align: top; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500;">TYPE</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1A1A1A; font-weight: 500;">${interest}</td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 8px 0; width: 130px; vertical-align: top; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500;">NOTE</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1A1A1A; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
          <div style="height: 1px; background: rgba(26,26,26,0.08); margin: 20px 0 24px 0;"></div>
          <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(26,26,26,0.42); font-weight: 500; margin: 0 0 16px 0;">
            WHAT HAPPENS NEXT
          </p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                <span style="display: inline-block; width: 24px; height: 24px; border-radius: 50%; background: rgba(232,93,35,0.12); text-align: center; line-height: 24px; font-size: 12px; color: #9B2F0A; font-weight: 600;">1</span>
              </td>
              <td style="padding: 8px 0; font-size: 14px; color: rgba(26,26,26,0.65); line-height: 1.6;">
                A member of our team reviews your request personally
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                <span style="display: inline-block; width: 24px; height: 24px; border-radius: 50%; background: rgba(232,93,35,0.12); text-align: center; line-height: 24px; font-size: 12px; color: #9B2F0A; font-weight: 600;">2</span>
              </td>
              <td style="padding: 8px 0; font-size: 14px; color: rgba(26,26,26,0.65); line-height: 1.6;">
                We reach out within 24 hours, same-day for emergencies
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; vertical-align: top; width: 32px;">
                <span style="display: inline-block; width: 24px; height: 24px; border-radius: 50%; background: rgba(232,93,35,0.12); text-align: center; line-height: 24px; font-size: 12px; color: #9B2F0A; font-weight: 600;">3</span>
              </td>
              <td style="padding: 8px 0; font-size: 14px; color: rgba(26,26,26,0.65); line-height: 1.6;">
                We connect you with the right resources and next steps
              </td>
            </tr>
          </table>
          <div style="height: 1px; background: rgba(26,26,26,0.08); margin: 24px 0;"></div>
          <div style="border-left: 3px solid #E85D23; padding-left: 20px; margin-bottom: 28px;">
            <p style="font-size: 15px; color: rgba(26,26,26,0.72); font-style: italic; line-height: 1.6; margin: 0 0 8px 0;">
              &ldquo;This is more than a project to me. This is personal. Forged By Fire was created so that others do not have to go through that journey alone.&rdquo;
            </p>
            <p style="font-size: 12px; color: rgba(26,26,26,0.45); margin: 0; letter-spacing: 0.5px; text-transform: uppercase;">
              Lt. Donald Coleman Jr., Founder
            </p>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td align="center">
              <a href="https://theforgedbyfire.org" style="display: inline-block; background: #E85D23; color: #fff; border-radius: 999px; padding: 12px 32px; font-size: 13px; font-weight: 600; text-decoration: none; letter-spacing: 0.5px;">
                Every Little Bit Counts
              </a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding: 24px 0 0 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size: 11px; color: rgba(26,26,26,0.3); letter-spacing: 1px;">
                theforgedbyfire.org &middot; Springfield, MA
              </td>
              <td align="right" style="font-size: 11px; color: rgba(26,26,26,0.3); letter-spacing: 1px;">
                Confirmation
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
        `,
      });
    } catch (confirmErr) {
      console.error("Zoho confirmation send error:", confirmErr);
      // Don't fail the request: internal notification already succeeded
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("FBF lead submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
