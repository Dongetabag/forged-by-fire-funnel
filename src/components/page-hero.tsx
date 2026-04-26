"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  hideStatusDot?: boolean;
}

export default function PageHero({ label, title, highlight, subtitle, image, imageAlt, hideStatusDot }: PageHeroProps) {
  return (
    <section className="relative pt-[92px]">
      <div className="px-3 md:px-4 pt-3 md:pt-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-[20px] md:rounded-[24px] min-h-[440px] md:min-h-[520px]"
        >
          {/* Dark ember base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F08] via-[#2A1B12] to-[#0F0705]" />

          {image && (
            <>
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0705] via-[#1A0F08]/50 to-[#1A0F08]/30" />
            </>
          )}

          {/* Ember glows */}
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#E85D23] opacity-15 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#F59E0B] opacity-10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 container-tight h-full flex items-end pb-12 md:pb-16 pt-24 md:pt-28">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#F59E0B] mb-5">
                {!hideStatusDot && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D23] ember-flicker" />}
                {label}
              </p>
              <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-normal tracking-tight leading-[1.06] text-white mb-4">
                {title}
                {highlight && (
                  <>
                    {" "}
                    <span className="bg-gradient-to-r from-[#F59E0B] via-[#E85D23] to-[#C84914] bg-clip-text text-transparent">
                      {highlight}
                    </span>
                  </>
                )}
              </h1>
              {subtitle && (
                <p className="text-[15px] md:text-lg text-white/75 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
