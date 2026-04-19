export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  attachments?: ChatAttachment[];
  actions?: ChatAction[];
  faqChips?: ChatAction[];
  isContactRequest?: boolean;
}

export interface ChatAttachment {
  type: "image";
  url: string;
  name: string;
  mimeType: string;
}

export interface ChatAction {
  type: "link" | "faq" | "contact_form" | "upload";
  label: string;
  href?: string;
  faqQuestion?: string;
  variant?: "primary" | "secondary" | "warm";
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  capturedAt: number;
}

export const INITIAL_FAQS: ChatAction[] = [
  { type: "faq", label: "I need emergency help", faqQuestion: "I just had a house fire in Springfield , I need emergency help" },
  { type: "faq", label: "How can I donate?", faqQuestion: "I'd like to donate to Forged By Fire , how does my donation help?" },
  { type: "faq", label: "What's your impact?", faqQuestion: "What does $500 actually do for a family after a fire?" },
  { type: "faq", label: "I want to volunteer", faqQuestion: "How can I volunteer or donate items to Forged By Fire?" },
  { type: "faq", label: "Our founder's story", faqQuestion: "Who founded Forged By Fire and why?" },
];
