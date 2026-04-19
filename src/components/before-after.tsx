"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pairs = [
  {
    src: "/images/before-after-1.jpg",
    caption: "A charred exterior becomes a bright, lived-in home again.",
  },
  {
    src: "/images/before-after-2.jpg",
    caption: "From total loss to a family's first night back under their own roof.",
  },
  {
    src: "/images/before-after-3.jpg",
    caption: "Rebuilt structure. Restored stability. A place to start over.",
  },
  {
    src: "/images/before-after-4.jpg",
    caption: "Two and a half years later. a vessel for good.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-24 bg-[#FBF8F4]">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
            WHAT RECOVERY LOOKS LIKE
          </p>
          <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.1] tracking-tight text-[#1A1A1A] mb-5">
            From ashes to a home families can walk into.
          </h2>
          <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl">
            Every restored home is a family&apos;s second chance. These images
            show what&apos;s possible when a community decides no one rebuilds
            alone. Your donation funds this work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {pairs.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-light overflow-hidden group"
            >
              <div className="img-card aspect-[3/4] relative">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A]/85 backdrop-blur-sm rounded-full">
                  <span className="text-[9px] uppercase tracking-widest text-white font-semibold">
                    BEFORE · AFTER
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[13px] text-[#1A1A1A]/70 leading-relaxed">
                  {p.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors"
          >
            Read the full story of Donald&apos;s 2.5-year restoration
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
