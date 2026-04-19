"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Clock, Flame, Heart, Users } from "lucide-react";

const paths = [
  {
    icon: Flame,
    iconColor: "text-[#E85D23]",
    iconBg: "bg-[#E85D23]/12",
    title: "I Need Help After a Fire",
    desc: "If you or someone you know in Springfield lost a home to fire, we respond within 24 hours, same-day for active emergencies.",
    cta: "Get Emergency Support",
    message: "I need emergency help after a house fire in Springfield",
    ctaColor: "bg-[#E85D23] hover:bg-[#C84914] text-white",
  },
  {
    icon: Heart,
    iconColor: "text-[#9B2F0A]",
    iconBg: "bg-[#E85D23]/10",
    title: "I Want to Donate",
    desc: "Financial gifts or item donations. 100% of donations go directly to supporting families, every little bit counts.",
    cta: "Make a Donation",
    message: "I'd like to donate to Forged By Fire",
    ctaColor: "bg-[#1A1A1A] hover:bg-[#2A1B12] text-white",
  },
  {
    icon: Users,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#F59E0B]/12",
    title: "I Want to Volunteer or Partner",
    desc: "Sort donations, deliver support packages, share our story, or partner as an organization. We need you.",
    cta: "Join Us",
    message: "I'd like to volunteer or partner with Forged By Fire",
    ctaColor: "bg-[#1A1A1A] hover:bg-[#2A1B12] text-white",
  },
];

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight mb-4 text-[#1A1A1A]">
            How can we help you. or how can you help us?
          </h2>
          <p className="text-[15px] text-[#1A1A1A]/55 max-w-lg mx-auto">
            Whatever brought you here, there&apos;s a path forward. Choose the one
            that fits and we&apos;ll take it from there.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-14">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-light p-7 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}>
                <p.icon size={22} className={p.iconColor} />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{p.title}</h3>
              <p className="text-[13px] text-[#1A1A1A]/55 leading-relaxed mb-6 flex-1">
                {p.desc}
              </p>
              <button
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("open-chat", { detail: { message: p.message } })
                  )
                }
                className={`w-full px-6 py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 ${p.ctaColor}`}
              >
                {p.cta}
                <ArrowRight size={14} className="inline ml-1.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Direct contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass p-7 md:p-8 grid md:grid-cols-3 gap-6 md:gap-4 items-center max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-[#E85D23]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/45 mb-0.5">
                Email
              </p>
              <a
                href="mailto:contact@forgedbyfire.org"
                className="text-[13px] font-medium text-[#1A1A1A] hover:text-[#E85D23] transition-colors"
              >
                contact@forgedbyfire.org
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-[#E85D23]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/45 mb-0.5">
                Phone. Coming Soon
              </p>
              <span className="text-[13px] font-medium text-[#1A1A1A]/55">
                Direct line launching with our formal nonprofit setup
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 flex items-center justify-center shrink-0">
              <Clock size={18} className="text-[#16A34A]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/45 mb-0.5">
                Response
              </p>
              <p className="text-[13px] font-medium text-[#1A1A1A]">
                Within 24 hours · Emergencies same-day
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
