"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Verified incidents only",
    description:
      "Every D2V campaign is tied to a verified fire incident, confirmed by the Springfield Fire Department or our intake. No general-fund pooling.",
  },
  {
    icon: Heart,
    title: "100% to the family",
    description:
      "Every dollar donated to a D2V campaign goes directly onto the affected family's reloadable debit card. Operations are funded separately.",
  },
  {
    icon: Zap,
    title: "Continuous reload",
    description:
      "As donations keep coming in, we keep loading the card — even after the initial $500 emergency package. No 'pledge' delays. Real money, real time.",
  },
];

const flow = [
  { step: "01", title: "A Springfield fire happens", desc: "Springfield Fire Department refers the family to Forged By Fire — same day." },
  { step: "02", title: "We launch a D2V campaign", desc: "Within 24 hours we publish a verified, family-specific campaign with the case details we're authorized to share." },
  { step: "03", title: "Community gives directly", desc: "Neighbors, family, the broader Springfield community can donate to that exact incident — not a general fund." },
  { step: "04", title: "Card gets loaded — and reloaded", desc: "Funds load onto the family's reloadable debit card the same day. As more donations come in, the card keeps growing." },
];

export default function D2vSection() {
  return (
    <section id="d2v" className="relative py-20 md:py-28 bg-[#FBF8F4]">
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
            <Heart size={12} />
            INTRODUCING D2V · DIRECT-2-VICTIM
          </span>
          <h2 className="text-[28px] md:text-[44px] font-normal leading-[1.08] tracking-tight text-[#1A1A1A] mb-6">
            When a Springfield family loses their home,
            <span className="block text-[#9B2F0A] mt-2">they shouldn&apos;t have to launch a GoFundMe.</span>
          </h2>
          <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed max-w-2xl">
            D2V is a fundraising mechanism unique to Forged By Fire. Each verified
            fire becomes its own campaign. Neighbors and the wider community can
            donate directly to that specific family — not a general pool.
            100% of those donations load onto the family&apos;s debit card in
            real time.
          </p>
        </motion.div>

        {/* Hero visual + key claim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16"
        >
          <div className="img-card aspect-[4/3] relative rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/real/fire-scene-springfield.jpg"
              alt="Springfield Fire Department on scene at a residential fire"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#F59E0B] mb-1">
                A real Springfield, MA fire
              </p>
              <p className="text-white text-lg font-medium tracking-tight leading-tight">
                The kind of moment D2V is built for
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4 tracking-tight leading-[1.2]">
              Like a GoFundMe, but the family doesn&apos;t lift a finger.
            </h3>
            <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed mb-4">
              In the moment after a fire, families are processing trauma — not
              opening a fundraising account, finding photos to upload, writing
              copy, and chasing shares. The ones who need help most are the
              least equipped to ask for it.
            </p>
            <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed">
              Forged By Fire publishes the campaign for them. With consent, we
              share the verified facts. The community gives. We load the card.
              The family gets to focus on what matters.
            </p>
          </div>
        </motion.div>

        {/* Three principles */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-light p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-[#E85D23]" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 tracking-tight">{p.title}</h3>
              <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card-ember p-8 md:p-12 mb-12"
        >
          <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-3">
            HOW D2V WORKS, START TO FINISH
          </p>
          <h3 className="text-[22px] md:text-[28px] font-normal text-[#1A1A1A] tracking-tight mb-8 leading-[1.2]">
            Four steps from incident to relief.
          </h3>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
            {flow.map((f) => (
              <div key={f.step} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#E85D23] flex items-center justify-center text-white text-[12px] font-bold tracking-tight">
                  {f.step}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#1A1A1A] mb-1">{f.title}</p>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Transparency note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {[
            { stat: "100%", label: "Of D2V donations to the family" },
            { stat: "Same day", label: "Card loaded after donation" },
            { stat: "Verified", label: "By Springfield Fire Dept referral" },
          ].map((m) => (
            <div key={m.label} className="card-glass p-6 text-center">
              <p className="text-[36px] md:text-[42px] font-normal text-[#E85D23] leading-none mb-3 tracking-tight">{m.stat}</p>
              <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] font-semibold">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/d2v"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)]"
          >
            <Heart size={15} className="fill-white" />
            Read the full D2V model
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#2A1B12] text-white font-medium rounded-full transition-all duration-300"
          >
            Refer a Springfield family
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
