"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Quote } from "lucide-react";

const photos = [
  { src: "/images/photo-2.jpg", alt: "The night of the fire, 2022" },
  { src: "/images/photo-3.jpg", alt: "Roof collapsed, sky visible through the rafters" },
  { src: "/images/photo-1.jpg", alt: "Burned interior after the fire" },
  { src: "/images/photo-5.jpg", alt: "Inside the home after the fire" },
  { src: "/images/photo-4.jpg", alt: "Structural damage throughout the home" },
];

export default function FounderStory() {
  return (
    <section id="story" className="relative py-20 md:py-28 bg-[#FBF8F4]">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="pill-ember mb-5">
            <Flame size={12} />
            OUR STORY
          </span>
          <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.1] tracking-tight text-[#1A1A1A] mb-6">
            Lt. Donald Coleman Jr. has responded to countless house fires.
            <span className="block text-[#9B2F0A] mt-2">In 2022, he came home to his own.</span>
          </h2>
        </motion.div>

        {/* Two-column bio + portrait */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="img-card aspect-[3/4] relative overflow-hidden rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <Image
                src="/founder-portrait.png"
                alt="Lt. Donald Coleman Jr., Founder of Forged By Fire"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6">
                <p className="text-[10px] uppercase tracking-widest text-[#F59E0B] mb-1">
                  Founder · Firefighter since 2015
                </p>
                <p className="text-white text-xl font-medium tracking-tight">
                  Lt. Donald Coleman Jr.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-5 text-[15px] text-[#1A1A1A]/75 leading-relaxed"
          >
            <p>
              Lt. Donald Coleman Jr. has proudly served as a firefighter since 2015,
              dedicating his life to protecting others in their most vulnerable moments.
              Through his work, he has witnessed firsthand the devastating impact that
              house fires have on families, not just physically, but emotionally and
              financially.
            </p>
            <p>
              <strong className="text-[#1A1A1A]">In 2022, that reality became deeply personal.</strong>{" "}
              While away on vacation, Donald&apos;s home in Springfield, Massachusetts
              was lost in a devastating fire. Had he been on duty, he would have been
              among the first responders arriving at his own address. Instead, he
              returned to find everything gone. The home was deemed a total loss,
              a lifetime of belongings reduced to ashes.
            </p>
            <p>
              This was not the first time fire had impacted his family. Just three
              years earlier, his grandparents&apos; home, where multiple generations
              had been raised and countless memories created. also suffered a fire.
              Though it had been vacant for years, it still stood as a symbol of
              family legacy and resilience.
            </p>
            <p>
              Faced with homelessness and the challenge of rebuilding, Donald took
              action. Over the course of two and a half years, he navigated setbacks,
              financial strain, and the emotional weight of restoring his grandparents&apos;
              home, not just a structure, but stability itself.
            </p>
            <p className="text-[#9B2F0A] font-medium">
              Through that journey, a greater purpose was born. Donald realized this
              home could become more than a place for himself, it could serve as a
              vessel for good. A place to support families who have experienced the
              same loss, but may not have the resources or support system to recover.
            </p>
            <p className="pt-2 text-[16px] text-[#1A1A1A] font-medium italic">
              From that vision, Forged By Fire was created.
            </p>
          </motion.div>
        </div>

        {/* Fire damage photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#E85D23] mb-2">
                THESE AREN&apos;T STOCK PHOTOS
              </p>
              <h3 className="text-[22px] md:text-[26px] font-normal tracking-tight text-[#1A1A1A]">
                This was Donald&apos;s home.
              </h3>
            </div>
            <p className="text-[12px] text-[#1A1A1A]/45 hidden md:block">
              Springfield, MA · 2022
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`img-card aspect-[4/3] relative ${
                  i === 0 ? "col-span-2 row-span-1" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card-ember p-8 md:p-12 relative overflow-hidden"
        >
          <Quote
            size={80}
            className="absolute -top-4 -left-2 text-[#E85D23]/10"
            strokeWidth={1}
          />
          <div className="relative max-w-3xl">
            <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-4">
              A MESSAGE FROM THE FOUNDER
            </p>
            <blockquote className="text-[20px] md:text-[26px] font-normal leading-[1.35] tracking-tight text-[#1A1A1A] mb-6">
              &ldquo;This is more than a project to me. This is personal. I have
              lived through the loss. I understand what it feels like to have
              everything taken in a moment. And I know how hard it is to rebuild
              without help. Forged By Fire was created so that others do not
              have to go through that journey alone.&rdquo;
            </blockquote>
            <cite className="not-italic text-[13px] text-[#1A1A1A]/55">
              Lt. Donald Coleman Jr., Founder
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
