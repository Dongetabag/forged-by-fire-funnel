"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { MessageCircle, X, Send, Paperclip, Download, ImageIcon } from "lucide-react";
import type { ChatMessage, ChatAction, ContactInfo } from "./chat-types";
import { INITIAL_FAQS } from "./chat-types";
import ContactGate from "./contact-gate";
import FaqChips from "./faq-chips";
import ChatActions from "./chat-actions";

const GREETING =
  "Hi — I'm ATLAS, the intake assistant for Forged By Fire. We're a Springfield nonprofit supporting families affected by house fires. How can I help — emergency support, donating, volunteering, or something else?";

function makeMsg(role: ChatMessage["role"], content: string, extra?: Partial<ChatMessage>): ChatMessage {
  return { id: crypto.randomUUID(), role, content, timestamp: Date.now(), ...extra };
}

function cleanMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*]\s+/gm, "• ")
    .replace(/`([^`]+)`/g, "$1");
}

/** Use visualViewport to get real visible height (accounts for virtual keyboard) */
function useViewportHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const vv = window.visualViewport;
      setHeight(vv ? vv.height : window.innerHeight);
    };
    update();

    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", update);
      vv.addEventListener("scroll", update);
    }
    window.addEventListener("resize", update);

    return () => {
      if (vv) {
        vv.removeEventListener("resize", update);
        vv.removeEventListener("scroll", update);
      }
      window.removeEventListener("resize", update);
    };
  }, []);

  return height;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([makeMsg("assistant", GREETING)]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [pendingPreview, setPendingPreview] = useState<string>("");
  const [showInitialChips, setShowInitialChips] = useState(true);
  const [contextualChips, setContextualChips] = useState<ChatAction[]>([]);
  const [showContactGate, setShowContactGate] = useState(false);

  const messagesEnd = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const viewportHeight = useViewportHeight();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const scrollToBottom = useCallback(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, showContactGate, scrollToBottom]);
  useEffect(() => { if (open && !isMobile) inputRef.current?.focus(); }, [open, isMobile]);

  // Simple body scroll lock — no position:fixed tricks
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // Listen for external CTA events
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.message) {
        setOpen(true);
        setTimeout(() => sendMessage(detail.message), 300);
      } else {
        setOpen(true);
      }
    };
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swipe down to close
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 80 || info.velocity.y > 400) {
      setOpen(false);
    }
  };

  const handleContactSubmit = async (info: ContactInfo) => {
    setContactInfo(info);
    setShowContactGate(false);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: info.name, email: info.email, phone: info.phone, interest: "Chatbot - Contact Captured", source: "api" }),
      });
    } catch {}
    const syntheticMsg = `[CONTACT_PROVIDED: name="${info.name}" email="${info.email}"]`;
    setMessages((prev) => [...prev, makeMsg("system", `Thanks, ${info.name} — our team now has your info and will follow up within 24 hours.`)]);
    sendMessage(syntheticMsg, true);
  };

  const handleContactSkip = () => setShowContactGate(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { alert("File must be under 10MB"); return; }
    if (!file.type.startsWith("image/")) { alert("Please upload an image file"); return; }
    setPendingFile(file);
    setPendingPreview(URL.createObjectURL(file));
  };

  const handleUploadClick = () => {
    if (!contactInfo) { setShowContactGate(true); return; }
    fileInputRef.current?.click();
  };

  const clearFile = () => {
    setPendingFile(null);
    if (pendingPreview) URL.revokeObjectURL(pendingPreview);
    setPendingPreview("");
  };

  const downloadChat = () => {
    const header = `ATLAS — Forged By Fire Chat Transcript\n${new Date().toLocaleDateString()}\nhttps://forgedbyfire.org\n${"=".repeat(50)}\n\n`;
    const text = messages
      .filter((m) => m.role !== "system" || !m.content.startsWith("["))
      .map((m) => {
        const role = m.role === "user" ? "You" : m.role === "system" ? "System" : "ATLAS";
        return `[${new Date(m.timestamp).toLocaleString()}] ${role}:\n${m.content}\n`;
      })
      .join("\n---\n\n");
    const blob = new Blob([header + text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `forged-by-fire-chat-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAction = (action: ChatAction) => {
    if (action.href === "upload") handleUploadClick();
    else if (action.href?.startsWith("/") || action.href?.startsWith("http")) window.open(action.href, "_blank");
    else if (action.href?.startsWith("#")) { setOpen(false); document.querySelector(action.href)?.scrollIntoView({ behavior: "smooth" }); }
    else if (action.faqQuestion) sendMessage(action.faqQuestion);
  };

  const sendMessage = async (text?: string, silent = false) => {
    const msgText = text || input.trim();
    if (!msgText && !pendingFile) return;
    if (streaming) return;

    if (!silent) {
      setMessages((prev) => [...prev, makeMsg("user", msgText || "Analyze my utility bill", {
        attachments: pendingFile ? [{ type: "image", url: pendingPreview, name: pendingFile.name, mimeType: pendingFile.type }] : undefined,
      })]);
    }

    setInput("");
    setShowInitialChips(false);
    setContextualChips([]);
    setStreaming(true);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "", timestamp: Date.now() }]);

    const history = messages.filter((m) => m.role === "user" || m.role === "assistant").map((m) => ({ role: m.role, content: m.content }));

    let imagePayload: { base64: string; mimeType: string } | undefined;
    if (pendingFile) { imagePayload = { base64: await fileToBase64(pendingFile), mimeType: pendingFile.type }; clearFile(); }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msgText || "I'm sharing an image — can you help me?", history, image: imagePayload }),
      });
      if (!res.ok) throw new Error("Chat request failed");
      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === "text") {
              setMessages((prev) => { const u = [...prev]; const l = u.find((m) => m.id === assistantId); if (l) l.content += data.text; return [...u]; });
            } else if (data.type === "text_replace") {
              setMessages((prev) => { const u = [...prev]; const l = u.find((m) => m.id === assistantId); if (l) l.content = data.text; return [...u]; });
            } else if (data.type === "contact_request") { setShowContactGate(true); }
            else if (data.type === "actions") {
              setMessages((prev) => { const u = [...prev]; const l = u.find((m) => m.id === assistantId); if (l) l.actions = data.actions; return [...u]; });
            } else if (data.type === "faq_chips") { setContextualChips(data.chips); }
          } catch { /* skip */ }
        }
      }

      setMessages((prev) => {
        const u = [...prev]; const l = u.find((m) => m.id === assistantId);
        if (l) { l.content = l.content.replace(/\[ACTION_BUTTON:[^\]]+\]/g, "").replace(/\[FAQ_CHIPS:[^\]]+\]/g, "").replace(/\[CONTACT_REQUEST\]/g, "").replace(/\[LEAD_CAPTURE:[^\]]+\]/g, "").replace(/\[CONTACT_PROVIDED:[^\]]+\]/g, "").replace(/\n{3,}/g, "\n\n").trim(); }
        return [...u];
      });
    } catch {
      setMessages((prev) => { const u = [...prev]; const l = u.find((m) => m.id === assistantId); if (l) l.content = "Sorry, something went wrong. Please try again."; return [...u]; });
    } finally { setStreaming(false); }
  };

  const placeholder = pendingFile ? "Add a note (optional)..." : contactInfo ? "Ask me anything about Forged By Fire..." : "How can we help today?";

  // Mobile: use visualViewport height, capped. Desktop: fixed 600px.
  const mobileHeight = viewportHeight ? Math.min(viewportHeight * 0.78, 560) : 560;

  return (
    <>
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />

      {/* FAB */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E85D23] text-white shadow-[0_8px_32px_rgba(232,93,35,0.35)] flex items-center justify-center hover:bg-[#C84914] transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle size={20} className="sm:!w-6 sm:!h-6" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-[#F59E0B] rounded-full pulse-dot" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop — mobile only */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed z-50 flex flex-col bg-white overflow-hidden bottom-0 inset-x-0 rounded-t-2xl sm:rounded-2xl sm:bottom-5 sm:right-5 sm:left-auto sm:w-[400px]"
            style={{
              height: isMobile ? `${mobileHeight}px` : 600,
              maxHeight: isMobile ? undefined : 600,
              boxShadow: "0 -4px 30px rgba(0,0,0,0.12), 0 8px 30px rgba(0,0,0,0.08)",
            }}
          >
            {/* Swipeable header zone — mobile */}
            <motion.div
              drag={isMobile ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              className="shrink-0 touch-none sm:touch-auto"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-2 pb-1 sm:hidden">
                <div className="w-9 h-[3px] rounded-full bg-[#111]/12" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-2.5 sm:py-3.5 border-b border-[#111]/6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E85D23] flex items-center justify-center shrink-0">
                    <MessageCircle size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium tracking-tight text-[#1A1A1A]">ATLAS</p>
                    <p className="text-[11px] tracking-wide text-[#1A1A1A]/50 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
                      Forged By Fire Assistant
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  <button onClick={downloadChat} className="w-8 h-8 rounded-full hover:bg-[#111]/5 flex items-center justify-center transition-colors" aria-label="Download chat" title="Download transcript">
                    <Download size={15} className="text-[#111]/35" />
                  </button>
                  <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full hover:bg-[#111]/5 flex items-center justify-center transition-colors" aria-label="Close chat">
                    <X size={17} className="text-[#111]/40" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Messages — flex-1 + min-h-0 ensures proper flex shrinking */}
            <div className="flex-1 min-h-0 overflow-y-auto py-3 overscroll-contain">
              {messages.map((msg) => (
                <div key={msg.id}>
                  {msg.role === "system" ? (
                    <div className="px-5 py-1.5">
                      <p className="text-[11px] tracking-wide text-[#16A34A] text-center font-medium">{msg.content}</p>
                    </div>
                  ) : (
                    <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} px-5 py-1.5`}>
                      <div className={`max-w-[82%] px-4 py-3 ${msg.role === "user" ? "bg-[#111] text-[#EAEDEF] rounded-2xl rounded-br-md" : "bg-[#F5F5F5] text-[#111] rounded-2xl rounded-bl-md"}`}>
                        {msg.attachments?.map((att, i) => (
                          <div key={i} className="mb-2 rounded-lg overflow-hidden">
                            <img src={att.url} alt={att.name} className="max-h-32 w-auto rounded-lg" />
                          </div>
                        ))}
                        {msg.content ? (
                          <span className="whitespace-pre-wrap text-[14px] leading-[24px] font-normal">{msg.role === "assistant" ? cleanMarkdown(msg.content) : msg.content}</span>
                        ) : (
                          <span className="typing-dots flex gap-1 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#111]/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#111]/30" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#111]/30" />
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {msg.role === "assistant" && msg.actions && <ChatActions actions={msg.actions} onAction={handleAction} />}
                </div>
              ))}
              {showContactGate && !contactInfo && <ContactGate onSubmit={handleContactSubmit} onSkip={handleContactSkip} />}
              {showInitialChips && !streaming && messages.length <= 1 && <FaqChips chips={INITIAL_FAQS} onSelect={(q) => sendMessage(q)} />}
              {!showInitialChips && contextualChips.length > 0 && !streaming && <FaqChips chips={contextualChips} onSelect={(q) => sendMessage(q)} />}
              <div ref={messagesEnd} />
            </div>

            {/* File preview */}
            {pendingFile && (
              <div className="shrink-0 px-5 py-2 border-t border-[#111]/6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  {pendingPreview ? <img src={pendingPreview} alt="" className="w-full h-full object-cover" /> : <ImageIcon size={16} className="text-[#111]/30" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-[#111]/70 truncate">{pendingFile.name}</p>
                  <p className="text-[10px] text-[#111]/30">{(pendingFile.size / 1024).toFixed(0)} KB</p>
                </div>
                <button onClick={clearFile} className="text-[#111]/30 hover:text-[#111]/60"><X size={14} /></button>
              </div>
            )}

            {/* Input — 16px font prevents iOS zoom */}
            <div className="shrink-0 px-3 py-2.5 border-t border-[#111]/6" style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}>
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-1.5">
                <button type="button" onClick={handleUploadClick} disabled={streaming} className="w-9 h-9 rounded-full hover:bg-[#F5F5F5] flex items-center justify-center shrink-0 disabled:opacity-30 transition-colors" aria-label="Upload utility bill">
                  <Paperclip size={17} className="text-[#111]/35" />
                </button>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  disabled={streaming}
                  autoComplete="off"
                  enterKeyHint="send"
                  className="flex-1 min-w-0 bg-[#F5F5F5] rounded-full px-4 py-2 text-[16px] text-[#111] placeholder:text-[#111]/30 disabled:opacity-50 outline-none"
                />
                <button type="submit" disabled={(!input.trim() && !pendingFile) || streaming} className="w-9 h-9 rounded-full bg-[#111] text-white flex items-center justify-center shrink-0 disabled:opacity-20 hover:bg-[#333] transition-colors" aria-label="Send">
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > 2 * 1024 * 1024) {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxDim = 1500;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) { const r = Math.min(maxDim / width, maxDim / height); width = Math.round(width * r); height = Math.round(height * r); }
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d")?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL(file.type || "image/jpeg", 0.85).split(",")[1]);
        URL.revokeObjectURL(img.src);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    } else {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    }
  });
}
