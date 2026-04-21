"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Home,
  Flame,
  Users,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const trustMetrics = [
  { value: "$500", label: "Emergency Debit Card", icon: Heart },
  { value: "3", label: "Family Housing Capacity", icon: Home },
  { value: "2015", label: "Serving Springfield", icon: Users },
];

const supportOptions = [
  "I need emergency help after a fire",
  "I want to donate financially",
  "I want to donate items or clothing",
  "I'd like to volunteer",
  "I'd like to partner with Forged By Fire",
];

export default function Hero() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-white/85 border border-white/40 rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/35 transition-all duration-300 focus:bg-white focus:border-[#E85D23]/40 focus:ring-0 outline-none";

  return (
    <section id="top" className="relative pt-[92px]">
      {/* Cover Card */}
      <div className="px-3 md:px-4 pt-3 md:pt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden rounded-[20px] md:rounded-[24px]"
          style={{ minHeight: "calc(100vh - 116px)" }}
        >
          {/* Ember-dark base background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F08] via-[#2A1B12] to-[#0F0705]" />

          {/* Fire damage photo. positioned on the LEFT, faded into dark on the right */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full lg:w-[62%] h-full">
              <Image
                src="/images/fire-scene-1.jpg"
                alt="Springfield Fire Department responding to a house fire at dusk"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover object-center"
              />
              {/* Darkening overlay so copy stays readable over the photo */}
              <div className="absolute inset-0 bg-[#0F0705]/60" />
              {/* Fade to dark on the right side so the form sits on a clean dark surface */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A0F08]/40 to-[#1A0F08]" />
              {/* Bottom-to-top fade for footer breathing room */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0705] via-transparent to-transparent" />
            </div>
          </div>

          {/* Ember glow accents */}
          <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-[#E85D23] opacity-20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#F59E0B] opacity-10 blur-[140px] rounded-full pointer-events-none" />

          {/* Content. split layout */}
          <div
            className="relative z-10 flex flex-col justify-between h-full"
            style={{ minHeight: "calc(100vh - 116px)" }}
          >
            {/* Top bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D23] ember-flicker" />
                <span className="text-[10px] uppercase tracking-widest text-white/70">
                  Springfield, Massachusetts
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/50">
                  Est. 2015 · Firefighter-founded nonprofit
                </span>
              </div>
            </motion.div>

            {/* Main content */}
            <div className="flex-1 flex items-end">
              <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 px-6 md:px-10 pb-8 md:pb-12">
                {/* Left. Copy */}
                <div className="flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#F59E0B] mb-5">
                      <Flame size={13} className="text-[#E85D23]" />
                      When You Lose Everything
                    </p>
                    <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-normal tracking-tight leading-[1.04] text-white mb-5">
                      Every Little{" "}
                      <span className="bg-gradient-to-r from-[#F59E0B] via-[#E85D23] to-[#C84914] bg-clip-text text-transparent">
                        Bit Counts
                      </span>
                    </h1>
                    <p className="text-[15px] md:text-base text-white/80 max-w-md leading-relaxed mb-6">
                      A Springfield, MA nonprofit founded by Lt. Donald Coleman Jr.,
                      a firefighter who lost everything in a 2022 house fire and turned
                      that loss into a mission to help families rebuild.
                    </p>
                  </motion.div>

                  {/* Proof points */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex flex-col gap-2.5 mb-8 lg:mb-0"
                  >
                    {[
                      "24-hour response after a Springfield house fire",
                      "$500 emergency debit card delivered within 48 hours",
                      "Transitional housing for families rebuilding",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-[#F59E0B] shrink-0" />
                        <span className="text-[13px] text-white/80">{point}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Scroll indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="hidden lg:flex items-center gap-3 mt-8"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-white/45">
                      Scroll for our story
                    </span>
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    >
                      <ChevronDown size={14} className="text-white/45" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right. Get Support Form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="w-full max-w-md lg:max-w-none lg:ml-auto lg:w-[92%]"
                >
                  {status === "success" ? (
                    <div className="bg-white/12 backdrop-blur-xl border border-white/15 rounded-2xl p-8 text-center">
                      <CheckCircle2 size={48} className="mx-auto mb-4 text-[#F59E0B]" />
                      <h3 className="text-xl font-medium text-white mb-2">
                        We hear you.
                      </h3>
                      <p className="text-sm text-white/75">
                        Our team will reach out within 24 hours. If this is an
                        emergency after a fire in Springfield, we&apos;ll respond faster.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 md:p-7 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                    >
                      <div className="mb-1">
                        <h3 className="text-base font-medium text-white mb-1">
                          Get Help or Get Involved
                        </h3>
                        <p className="text-[12px] text-white/60">
                          Tell us how we can support you. takes 30 seconds.
                        </p>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1.5 block">
                          How can we help? *
                        </label>
                        <select
                          name="interest"
                          required
                          defaultValue=""
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="" disabled>
                            Choose one
                          </option>
                          {supportOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1.5 block">
                            Name *
                          </label>
                          <input
                            name="name"
                            required
                            placeholder="Your name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1.5 block">
                            Email *
                          </label>
                          <input
                            name="email"
                            type="email"
                            required
                            placeholder="you@email.com"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1.5 block">
                          Phone (optional)
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="(413) 555-0100"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-white/60 mb-1.5 block">
                          Anything we should know? (optional)
                        </label>
                        <textarea
                          name="message"
                          rows={2}
                          placeholder="A short note helps us respond faster"
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white text-sm font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_32px_rgba(232,93,35,0.35)]"
                      >
                        {status === "idle" && (
                          <>
                            Send to Forged By Fire
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}
                        {status === "sending" && "Sending..."}
                        {status === "error" && "Try again"}
                      </button>

                      <p className="text-[10px] text-white/50 text-center">
                        We respond within 24 hours · Emergencies first · Springfield, MA
                      </p>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container-tight mt-6 md:mt-8"
      >
        <div className="card-glass p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center"
              >
                <metric.icon size={18} className="mx-auto mb-3 text-[#E85D23]/70" />
                <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 text-[#1A1A1A]">
                  {metric.value}
                </div>
                <div className="text-[10px] text-[#1A1A1A]/45 uppercase tracking-widest">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
