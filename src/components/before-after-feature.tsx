"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function BeforeAfterFeature() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF8F4]">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="pill-ember mb-5">
            <Home size={12} />
            BEFORE &amp; AFTER
          </span>
          <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.1] tracking-tight text-[#1A1A1A] mb-5">
            The Coleman Home, restored.
          </h2>
          <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl mx-auto">
            The grandparents&apos; Victorian. Two and a half years of work. Now
            the transitional housing unit Forged By Fire offers Springfield
            families after a fire.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative img-card aspect-[4/3] rounded-[18px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)] border border-[#1A1A1A]/8">
            <Image
              src="/images/real/before-after-composite.jpg"
              alt="The Coleman home before and after restoration: original Victorian, demolition phase, and fully restored"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-[12px] text-[#1A1A1A]/45 text-center mt-5">
            Springfield, Massachusetts. 2022 to 2024.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#2A1B12] text-white font-medium rounded-full transition-all duration-300"
          >
            See the full restoration story
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
