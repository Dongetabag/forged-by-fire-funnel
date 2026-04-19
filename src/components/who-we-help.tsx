"use client";

import { motion } from "framer-motion";
import { Users, Baby, Heart, Home, Shield, HandHeart, ArrowRight } from "lucide-react";

const groups = [
  {
    icon: Users,
    name: "Families with Children",
    stat: "Primary focus",
    desc: "Emergency support packages built around family needs — clothes for every child, essentials, stability.",
  },
  {
    icon: Baby,
    name: "Single Parents",
    stat: "Higher-priority response",
    desc: "Families led by a single parent face the steepest recovery curve. We make sure they aren't doing it alone.",
  },
  {
    icon: Heart,
    name: "Elderly & Fixed Income",
    stat: "Dignity-first support",
    desc: "Seniors displaced by fire often lose irreplaceable memories and face housing barriers. We help them rebuild with dignity.",
  },
  {
    icon: Home,
    name: "Renters Without Insurance",
    stat: "Most common gap",
    desc: "Many Springfield renters have no renters insurance. When fire hits, they're the most vulnerable. We step in first.",
  },
  {
    icon: Shield,
    name: "Springfield Fire Department",
    stat: "Direct partnership",
    desc: "We work directly with the SFD Public Information Officer to get referrals in the first hours after a fire.",
  },
  {
    icon: HandHeart,
    name: "Community Partners",
    stat: "Coordinated referrals",
    desc: "Local shelters, churches, and social-service agencies that refer affected families to us for emergency support.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
            WHO WE HELP
          </p>
          <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight mb-4 text-[#1A1A1A] leading-[1.15]">
            Every Springfield family hit by fire deserves a path forward.
          </h2>
          <p className="text-[15px] text-[#1A1A1A]/55 max-w-xl mx-auto">
            We serve families most vulnerable to the financial and emotional toll of
            losing a home — and we partner with the organizations that know them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="card-glass p-5 md:p-6 group cursor-default hover:border-[#E85D23]/25 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mb-4 group-hover:bg-[#E85D23]/20 transition-colors duration-300">
                <g.icon size={20} className="text-[#E85D23]" />
              </div>
              <h3 className="text-sm font-semibold mb-1.5 text-[#1A1A1A]">
                {g.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#9B2F0A] mb-3">
                {g.stat}
              </p>
              <p className="text-[13px] text-[#1A1A1A]/60 leading-relaxed">
                {g.desc}
              </p>
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
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors"
          >
            Partner with Forged By Fire
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
