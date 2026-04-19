import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import ImpactCalculator from "@/components/impact-calculator";
import DonateSection from "@/components/donate-section";
import Image from "next/image";
import Link from "next/link";
import { Heart, Package, Building2, Repeat, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to Springfield Fire Victims — Forged By Fire",
  description:
    "100% of donations to Forged By Fire reach Springfield, Massachusetts families affected by house fires. $500 funds one family's full emergency response. Every little bit counts.",
  alternates: { canonical: "/donate" },
  keywords: [
    "donate to Springfield fire victims",
    "Springfield MA fire relief donation",
    "help Springfield family after house fire",
    "Springfield nonprofit donation",
    "fire victim charity Springfield",
  ],
};

const waysToGive = [
  {
    icon: Heart,
    title: "One-Time Donation",
    desc: "A single gift that funds emergency support for Springfield families right now. $500 fully covers one family's first 48 hours.",
    cta: "Give Now",
  },
  {
    icon: Repeat,
    title: "Monthly Giving",
    desc: "Sustaining donors are the backbone of our response capacity. A recurring $25/mo gift funds a month of essentials for a family each quarter.",
    cta: "Become a Sustainer",
    soon: true,
  },
  {
    icon: Package,
    title: "Item Donations",
    desc: "Clothing, toiletries, household goods, and new (unopened) essentials. We maintain a tight intake process to ensure items are family-ready.",
    cta: "See What We Need",
  },
  {
    icon: Building2,
    title: "Corporate & Foundation",
    desc: "Sponsorships, employee matching, foundation grants, and in-kind partnerships. Ideal for local Springfield businesses.",
    cta: "Partner With Us",
  },
];

const transparency = [
  { label: "Dollars to families", value: "100%", desc: "Every donation reaches a Springfield family — operations are funded separately." },
  { label: "First dollar to delivery", value: "≤ 48 hrs", desc: "Donations received today can fund an emergency response tomorrow." },
  { label: "501(c)(3) status", value: "Pending", desc: "Tax-deductible status pending confirmation. We'll update donors when filed." },
];

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Donate"
          title="Every dollar reaches a"
          highlight="Springfield family."
          subtitle="100% of donations go directly to families affected by house fires. Operations are covered separately. Every little bit counts — and every little bit actually counts."
          image="/images/family-moving-in-2.jpg"
          imageAlt="A family settled into transitional housing"
        />

        {/* Impact calculator reused */}
        <ImpactCalculator />

        {/* Tiered donate section reused */}
        <DonateSection />

        {/* Ways to Give grid */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                WAYS TO GIVE
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Four paths. Same destination.
              </h2>
              <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed mt-4 max-w-xl mx-auto">
                Pick the one that fits your situation. All of them put support
                in the hands of a Springfield family in the first 48 hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {waysToGive.map((w) => (
                <div key={w.title} className="card-light p-7 md:p-8 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center shrink-0">
                      <w.icon size={20} className="text-[#E85D23]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight flex items-center gap-2">
                        {w.title}
                        {w.soon && (
                          <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#F59E0B]/15 text-[#9B2F0A] rounded-full font-semibold">
                            Soon
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed mb-5 flex-1">
                    {w.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors self-start"
                  >
                    {w.cta}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                TRANSPARENCY
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Where your money actually goes.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {transparency.map((t) => (
                <div key={t.label} className="card-glass p-7 text-center">
                  <div className="text-[36px] md:text-[44px] font-normal text-[#E85D23] leading-none mb-3 tracking-tight">
                    {t.value}
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-3 font-semibold">
                    {t.label}
                  </p>
                  <p className="text-[12px] text-[#1A1A1A]/60 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact story */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="img-card aspect-[4/5] relative">
                <Image src="/images/before-after-4.jpg" alt="A home restored through the work of Forged By Fire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                  YOUR DONATION IN ACTION
                </p>
                <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] mb-5 leading-[1.15]">
                  This is what &ldquo;every little bit counts&rdquo; actually looks like.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                  A $500 donation is exactly one family&apos;s emergency support
                  package. Twenty-five $25 donations fund a family. A hundred
                  $5 gifts does the same.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed">
                  The math is simple and the math is the point: Forged By Fire
                  was built so every contribution, no matter how small, ladders
                  directly to a Springfield family rebuilding after the worst
                  day of their life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
