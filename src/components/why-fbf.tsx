"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Clock, HandHeart } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Firefighter-founded",
    description:
      "Lt. Donald Coleman Jr. has served the Springfield community as a firefighter since 2015. He's also a fire survivor. No one understands the gap between disaster and recovery better.",
  },
  {
    icon: Clock,
    title: "Within 48 hours, not weeks",
    description:
      "Most relief programs require applications, verification, and waiting. We deliver emergency support within 48 hours of the fire because that's when it matters most.",
  },
  {
    icon: HandHeart,
    title: "100% to families",
    description:
      "Every dollar donated goes directly to the families we serve. Operations are covered separately. Every little bit counts, and every little bit actually reaches someone in crisis.",
  },
];

export default function WhyFbf() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
              WHY FORGED BY FIRE
            </p>
            <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight mb-6 text-[#1A1A1A] leading-[1.15]">
              We don&apos;t just respond to fires.
              <br />
              <span className="text-[#9B2F0A]">We&apos;ve lived through one.</span>
            </h2>
            <p className="text-[15px] text-[#1A1A1A]/60 leading-relaxed mb-5">
              Forged By Fire is a Springfield, MA nonprofit built on a single idea:
              no family should have to rebuild alone. We exist because our founder
              lived through the exact moment we help families navigate, and knows
              how fragile those first 48 hours are.
            </p>
            <p className="text-[15px] text-[#1A1A1A]/60 leading-relaxed mb-8">
              Our partnership with the Springfield Fire Department means we get a
              direct, same-day referral. Your donation, or your time, lets us close
              the gap between disaster and the first real help.
            </p>

            <div className="border-l-2 border-[#E85D23]/50 pl-6 mb-8">
              <p className="text-lg text-[#1A1A1A]/72 italic leading-relaxed">
                &ldquo;When you lose everything: all your clothes, your sneakers,
                your socks. Anything you can get is a blessing. Every little bit
                counts.&rdquo;
              </p>
              <p className="text-[12px] text-[#1A1A1A]/45 mt-2 uppercase tracking-widest">
                Lt. Donald Coleman Jr., Founder
              </p>
            </div>

            <a
              href="#donate"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-medium rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,35,0.38)]"
            >
              Fuel a Family&apos;s Recovery
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <div className="flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="card-glass p-6 flex items-start gap-5 hover:border-[#E85D23]/25 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center shrink-0">
                  <pillar.icon size={22} className="text-[#E85D23]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1.5 text-[#1A1A1A]">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
