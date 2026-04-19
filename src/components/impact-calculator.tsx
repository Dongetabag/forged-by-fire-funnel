"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Shirt, Utensils, Home, CreditCard, Sparkles } from "lucide-react";

// Impact tiers. what each dollar amount translates to in tangible support
const tiers = [
  { min: 10, max: 24, icon: Utensils, label: "A hot meal & basics", desc: "Covers a warm meal for a family on the night of their fire" },
  { min: 25, max: 49, icon: Shirt, label: "Clothing essentials", desc: "A set of clothing, shoes, or pajamas for a displaced family member" },
  { min: 50, max: 99, icon: Shirt, label: "Full outfit for a child", desc: "Replaces clothes, shoes, and essentials for one displaced child" },
  { min: 100, max: 249, icon: CreditCard, label: "Partial emergency card", desc: "Contributes toward a family's $500 emergency debit card" },
  { min: 250, max: 499, icon: Sparkles, label: "Half of a family's support", desc: "Covers half of the emergency support package for one Springfield family" },
  { min: 500, max: 999, icon: Heart, label: "One full family supported", desc: "Fully funds emergency support for one family after a house fire" },
  { min: 1000, max: 4999, icon: Home, label: "Transitional housing month", desc: "Funds a month of transitional housing support for a rebuilding family" },
  { min: 5000, max: Infinity, icon: Home, label: "Sustained program support", desc: "Sustained support across multiple families and housing operations" },
];

const presetAmounts = [25, 50, 100, 500];

export default function ImpactCalculator() {
  const [amount, setAmount] = useState(100);

  const tier = useMemo(
    () => tiers.find((t) => amount >= t.min && amount <= t.max) ?? tiers[tiers.length - 1],
    [amount]
  );

  const familiesSupported = useMemo(() => {
    const partial = amount / 500;
    if (partial >= 1) return Math.floor(partial);
    return 0;
  }, [amount]);

  return (
    <section id="impact" className="relative py-20 md:py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
            YOUR IMPACT
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight mb-4 text-[#1A1A1A] max-w-2xl mx-auto leading-[1.15]">
            Every dollar goes directly to Springfield families.
          </h2>
          <p className="text-[15px] text-[#1A1A1A]/55 max-w-lg mx-auto">
            See the exact support your donation delivers. Slide to explore
            the impact at any amount.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card-light p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left. amount input */}
            <div>
              <label className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 mb-3 block">
                Your Donation
              </label>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[40px] md:text-[56px] font-normal text-[#E85D23] leading-none">
                  ${amount.toLocaleString()}
                </span>
              </div>

              {/* Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min={10}
                  max={5000}
                  step={10}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A1A1A]/8 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E85D23] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(232,93,35,0.2)]"
                />
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-[#1A1A1A]/38">
                  <span>$10</span>
                  <span>$5,000</span>
                </div>
              </div>

              {/* Preset chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`px-4 py-2 rounded-full text-[12px] font-medium uppercase tracking-widest transition-all ${
                      amount === preset
                        ? "bg-[#E85D23] text-white"
                        : "bg-[#1A1A1A]/5 text-[#1A1A1A]/65 hover:bg-[#E85D23]/10 hover:text-[#9B2F0A]"
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
                <input
                  type="number"
                  min={10}
                  value={amount}
                  onChange={(e) => setAmount(Math.max(10, Number(e.target.value) || 10))}
                  className="w-24 px-4 py-2 bg-[#1A1A1A]/5 rounded-full text-[12px] text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E85D23]/40"
                  placeholder="Custom"
                />
              </div>

              <a
                href="#donate"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,35,0.38)]"
              >
                <Heart size={15} className="fill-white" />
                Donate ${amount.toLocaleString()}
              </a>
            </div>

            {/* Right. impact display */}
            <div className="card-ember p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E85D23] flex items-center justify-center shrink-0 shadow-[0_6px_20px_rgba(232,93,35,0.35)]">
                  <tier.icon size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#9B2F0A] mb-1">
                    YOUR ${amount.toLocaleString()} PROVIDES
                  </p>
                  <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-2 tracking-tight">
                    {tier.label}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">
                    {tier.desc}
                  </p>

                  {familiesSupported > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#E85D23]/15">
                      <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-1">
                        FAMILY IMPACT
                      </p>
                      <p className="text-[15px] text-[#1A1A1A] font-medium">
                        {familiesSupported}{" "}
                        {familiesSupported === 1 ? "family" : "families"} fully supported
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-[11px] text-[#1A1A1A]/45 text-center mt-8">
            Every little bit counts. 100% of donations go to families in need —
            operations are covered separately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
