"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Baby, Heart, Home, Shield, HandHeart, ArrowRight } from "lucide-react";

const groups = [
  {
    icon: Users,
    name: "Families with Children",
    stat: "Primary focus",
    desc: "Emergency support packages built around family needs — clothes for every child, essentials, stability.",
    image: "/images/family-kitchen.jpg",
  },
  {
    icon: Baby,
    name: "Single Parents",
    stat: "Higher-priority response",
    desc: "Families led by a single parent face the steepest recovery curve. We make sure they aren't doing it alone.",
    image: "/images/family-together.jpg",
  },
  {
    icon: Heart,
    name: "Elderly & Fixed Income",
    stat: "Dignity-first support",
    desc: "Seniors displaced by fire often lose irreplaceable memories and face housing barriers. We help them rebuild with dignity.",
    image: "/images/family-rehoused.jpg",
  },
  {
    icon: Home,
    name: "Renters Without Insurance",
    stat: "Most common gap",
    desc: "Many Springfield renters have no renters insurance. When fire hits, they're the most vulnerable. We step in first.",
    image: "/images/community-helping.jpg",
  },
  {
    icon: Shield,
    name: "Springfield Fire Department",
    stat: "Direct partnership",
    desc: "We work directly with the SFD Public Information Officer to get referrals in the first hours after a fire.",
    image: "/images/fire-scene-2.jpg",
  },
  {
    icon: HandHeart,
    name: "Community Partners",
    stat: "Coordinated referrals",
    desc: "Local shelters, churches, and social-service agencies that refer affected families to us for emergency support.",
    image: "/images/community-surveying.jpg",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-light overflow-hidden group"
            >
              <div className="img-card aspect-[4/3] relative">
                <Image
                  src={g.image}
                  alt={g.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full">
                  <g.icon size={12} className="text-[#F59E0B]" />
                  <span className="text-[10px] uppercase tracking-widest text-white font-semibold">
                    {g.stat}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-base font-semibold mb-2 text-[#1A1A1A] tracking-tight">
                  {g.name}
                </h3>
                <p className="text-[13px] text-[#1A1A1A]/60 leading-relaxed">
                  {g.desc}
                </p>
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
          <Link
            href="/who-we-help"
            className="group inline-flex items-center gap-3 text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors"
          >
            Learn more about the families we serve
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
