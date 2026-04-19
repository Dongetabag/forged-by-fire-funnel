"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, ArrowRight } from "lucide-react";
import type { ContactInfo } from "./chat-types";

interface Props {
  onSubmit: (info: ContactInfo) => void;
  onSkip: () => void;
}

export default function ContactGate({ onSubmit, onSkip }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError("Name is required");
    if (!email.trim() || !email.includes("@")) return setError("Valid email required");
    setError("");
    onSubmit({ name: name.trim(), email: email.trim(), phone: phone.trim() || undefined, capturedAt: Date.now() });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-5 my-2"
    >
      <div className="rounded-xl p-4 bg-[#F5F5F5] border border-[#111]/6">
        <p className="text-[13px] font-medium tracking-tight text-[#111] mb-3">
          Share your info so we can send personalized savings data
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="relative">
            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/25" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="chat-contact-input"
            />
          </div>
          <div className="relative">
            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/25" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              className="chat-contact-input"
            />
          </div>
          <div className="relative">
            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111]/25" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone (optional)"
              className="chat-contact-input"
            />
          </div>
          {error && <p className="text-[11px] text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#111] text-white text-[12px] font-medium tracking-wide hover:bg-[#333] transition-colors"
          >
            Continue
            <ArrowRight size={14} />
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="w-full text-[11px] text-[#111]/30 hover:text-[#111]/50 transition-colors py-1"
          >
            Skip for now
          </button>
        </form>
      </div>
    </motion.div>
  );
}
