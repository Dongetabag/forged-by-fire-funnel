"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Flame, ArrowRight, Utensils, Shirt, CreditCard, Home } from "lucide-react";

const tiers = [
  {
    amount: 25,
    label: "Essentials",
    icon: Utensils,
    desc: "Meals & basics for a family on the night of the fire",
  },
  {
    amount: 50,
    label: "Clothing",
    icon: Shirt,
    desc: "A full outfit and shoes for one displaced family member",
  },
  {
    amount: 100,
    label: "Partial Card",
    icon: CreditCard,
    desc: "A meaningful contribution toward a $500 emergency debit card",
  },
  {
    amount: 500,
    label: "Full Family",
    icon: Heart,
    desc: "Fully funds emergency support for one Springfield family",
    featured: true,
  },
  {
    amount: 1000,
    label: "Housing Month",
    icon: Home,
    desc: "One month of transitional housing support for a rebuilding family",
  },
];

export default function DonateSection() {
  const [selected, setSelected] = useState<number>(500);
  const [custom, setCustom] = useState("");

  const amount = custom ? Number(custom) : selected;

  return (
    <section id="donate" className="relative py-20 md:py-28 bg-[#1A0F08] overflow-hidden">
      {/* Ember background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E85D23] opacity-15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#F59E0B] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E85D23]/15 border border-[#E85D23]/30 rounded-full text-[11px] uppercase tracking-widest text-[#F59E0B] mb-5">
            <Flame size={12} />
            Make a Difference
          </span>
          <h2 className="text-[32px] md:text-[46px] font-normal tracking-tight text-white mb-5 leading-[1.08]">
            Every dollar goes directly to a{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#E85D23] to-[#C84914] bg-clip-text text-transparent">
              Springfield family.
            </span>
          </h2>
          <p className="text-[15px] md:text-[16px] text-white/70 max-w-xl mx-auto leading-relaxed">
            $500 fully supports one family after a fire. $50 replaces clothing for
            a displaced parent. $10 provides a hot meal. Every little bit counts.
          </p>
        </motion.div>

        {/* Tier grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8"
        >
          {tiers.map((tier, i) => {
            const active = !custom && selected === tier.amount;
            return (
              <button
                key={tier.amount}
                onClick={() => {
                  setSelected(tier.amount);
                  setCustom("");
                }}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                  active
                    ? "bg-[#E85D23] border-[#E85D23] shadow-[0_10px_40px_rgba(232,93,35,0.4)]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25"
                } ${tier.featured && !active ? "md:ring-1 md:ring-[#F59E0B]/40" : ""}`}
                style={{
                  gridColumn: tier.featured ? undefined : undefined,
                }}
              >
                {tier.featured && !active && (
                  <span className="absolute -top-2 left-4 px-2 py-0.5 bg-[#F59E0B] text-[#1A1A1A] rounded-full text-[9px] uppercase tracking-widest font-bold">
                    Most Impact
                  </span>
                )}
                <tier.icon
                  size={20}
                  className={active ? "text-white mb-4" : "text-[#F59E0B] mb-4"}
                />
                <div className={`text-[28px] font-normal tracking-tight mb-1 ${active ? "text-white" : "text-white"}`}>
                  ${tier.amount}
                </div>
                <p
                  className={`text-[10px] uppercase tracking-widest mb-2 ${
                    active ? "text-white/80" : "text-[#F59E0B]"
                  }`}
                >
                  {tier.label}
                </p>
                <p className={`text-[12px] leading-relaxed ${active ? "text-white/85" : "text-white/55"}`}>
                  {tier.desc}
                </p>
              </button>
            );
          })}
        </motion.div>

        {/* Custom amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-8"
        >
          <label className="text-[10px] uppercase tracking-widest text-white/55 mb-2 block text-center">
            Or enter a custom amount
          </label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60 text-lg">$</span>
            <input
              type="number"
              min={1}
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setSelected(0);
              }}
              placeholder="Custom amount"
              className="w-full pl-10 pr-4 py-3.5 bg-white/8 border border-white/15 rounded-full text-white placeholder:text-white/35 text-center text-lg focus:bg-white/12 focus:border-[#E85D23]/50 focus:outline-none focus:ring-2 focus:ring-[#E85D23]/30 transition-all"
            />
          </div>
        </motion.div>

        {/* Donate CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={`#contact?donate=${amount || 500}`}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#E85D23] hover:bg-[#C84914] text-white text-base font-semibold rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(232,93,35,0.45)] hover:shadow-[0_12px_50px_rgba(232,93,35,0.6)]"
          >
            <Heart size={18} className="fill-white" />
            Donate ${(amount || 500).toLocaleString()}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="text-[11px] text-white/45 mt-5 max-w-md mx-auto">
            Payment integration coming soon. For now, click to be connected with
            our team — every donor gets a personal thank-you from Lt. Coleman.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
