"use client";

import { motion } from "framer-motion";
import { Phone, PhoneCall, HandHeart, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Fire Department Referral",
    description:
      "The Springfield Fire Department Public Information Officer asks affected families if they'd like support from Forged By Fire. No self-application needed in the chaos.",
    detail: "Same-day referral",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "We Reach Out — Within 24 Hours",
    description:
      "Our team contacts the family within 24 hours of the fire to listen, understand their specific situation, and identify what they need most urgently.",
    detail: "Within 24 hours",
  },
  {
    number: "03",
    icon: HandHeart,
    title: "Immediate Support Delivered",
    description:
      "A $500 emergency debit card and resource package are delivered within 48 hours. Clothing, essentials, and direct help — nothing to fill out, no waiting.",
    detail: "Within 48 hours",
  },
  {
    number: "04",
    icon: Heart,
    title: "Ongoing Care & Housing",
    description:
      "We follow up weekly, connect families with transitional housing if needed, and stay in their corner as they rebuild — for as long as it takes.",
    detail: "For as long as it takes",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
            THE PROCESS
          </p>
          <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight mb-4 text-[#1A1A1A]">
            From the moment of disaster to the path forward
          </h2>
          <p className="text-[15px] text-[#1A1A1A]/55 max-w-lg mx-auto">
            Four steps, built around what families actually need in the
            first week after a fire. No red tape. No waiting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] right-[-12px] h-px bg-[#E85D23]/25 z-0" />
              )}

              <div className="card-glass p-6 md:p-7 h-full flex flex-col hover:border-[#E85D23]/25 transition-all duration-500 relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[32px] font-light text-[#E85D23]/20 leading-none tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center">
                    <step.icon size={20} className="text-[#E85D23]" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold mb-2 text-[#1A1A1A] leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#1A1A1A]/55 leading-relaxed flex-1">
                  {step.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#1A1A1A]/5">
                  <span className="text-[10px] tracking-wider uppercase text-[#9B2F0A] font-semibold">
                    {step.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#1A1A1A] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#2A1B12]"
          >
            Request Support for a Family
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
