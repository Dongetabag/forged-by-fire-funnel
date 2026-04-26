"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Home, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    label: "EMERGENCY RESOURCES",
    title: "The first 48 hours matter most",
    description:
      "When a Springfield family loses their home to fire, we step in within 24 hours with immediate, tangible support. no paperwork gauntlet, no waiting weeks for help.",
    bullets: [
      "$500 emergency debit card for immediate needs",
      "Clothing, shoes, and essentials for every family member",
      "Resource navigation and case coordination",
      "Direct partnership with Springfield Fire Department",
    ],
    stat: "Delivered in 48 hours",
    image: "/images/community-cleanup.jpg",
    cta: "Request Emergency Support",
    ctaHref: "/contact",
  },
  {
    icon: Home,
    label: "TRANSITIONAL HOUSING",
    title: "A safe place to start over",
    description:
      "Our transitional housing program provides stable, supportive temporary shelter for families rebuilding after a fire, with case management, life-skills resources, and a path to permanent housing.",
    bullets: [
      "Capacity for up to 3 families at a time",
      "Case management and support services",
      "Life-skills and financial-literacy resources",
      "Structured transition into permanent housing",
    ],
    stat: "3-family capacity",
    image: "/images/real/restored-victorian-front.jpg",
    cta: "Apply for Housing Support",
    ctaHref: "/contact",
  },
];

const commitment = {
  icon: Clock,
  label: "OUR COMMITMENT",
  title: "No family rebuilds alone in Springfield",
  description:
    "Most fire-relief programs show up days or weeks after the fire. We believe the first 48 hours, when families are still in shock, still wearing the same clothes they evacuated in, are when support matters most. That's the gap we close.",
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16"
        >
          <div className="max-w-xl">
            <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
              HOW WE HELP
            </p>
            <h2 className="text-[28px] md:text-[34px] font-normal leading-[1.12] tracking-tight text-[#1A1A1A]">
              Two pillars of support. One mission: no Springfield family
              rebuilds alone.
            </h2>
          </div>
          <a
            href="#contact"
            className="pill hidden md:inline-flex hover:bg-[#E85D23]/10 hover:text-[#9B2F0A] transition-colors"
          >
            GET STARTED
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group card-light overflow-hidden flex flex-col"
            >
              {/* Image. taller aspect + top-anchored so faces stay in frame */}
              <div className="img-card aspect-[4/3] relative">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-widest text-white">
                    <pillar.icon size={11} className="text-[#F59E0B]" />
                    {pillar.label}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-[#E85D23] rounded-full shadow-[0_4px_14px_rgba(232,93,35,0.4)]">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white">
                    {pillar.stat}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-[22px] font-medium text-[#1A1A1A] mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                  {pillar.description}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {pillar.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="text-[#E85D23] shrink-0 mt-0.5"
                      />
                      <span className="text-[13px] text-[#1A1A1A]/72 leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={pillar.ctaHref}
                  className="group/btn inline-flex items-center gap-2 self-start text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors"
                >
                  {pillar.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-ember p-8 md:p-10 flex flex-col md:flex-row items-start gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E85D23]/15 flex items-center justify-center shrink-0">
            <commitment.icon size={22} className="text-[#E85D23]" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] tracking-widest uppercase text-[#9B2F0A] mb-1">
              {commitment.label}
            </p>
            <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
              {commitment.title}
            </h3>
            <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl">
              {commitment.description}
            </p>
          </div>
          <a
            href="#donate"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#2A1B12]"
          >
            Fuel the Mission
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
