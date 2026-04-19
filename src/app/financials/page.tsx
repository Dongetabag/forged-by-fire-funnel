import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { PieChart, Shield, Receipt, Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financials & Transparency",
  description:
    "Financial transparency at Forged By Fire — 100% of donations go directly to Springfield, Massachusetts families. Learn about our funding model, governance, and accountability.",
  alternates: { canonical: "/financials" },
  keywords: [
    "Forged By Fire financials",
    "nonprofit transparency Springfield MA",
    "Forged By Fire 100% to families",
    "fire relief nonprofit accountability",
  ],
};

const principles = [
  {
    icon: Heart,
    title: "100% of donations to families",
    desc: "Every dollar given by donors goes directly to emergency response and transitional housing for Springfield families. Operational costs are funded separately.",
  },
  {
    icon: Receipt,
    title: "Separate operations funding",
    desc: "Admin, marketing, and infrastructure are paid through founder contribution, in-kind support from partners, and operational-specific grants — not general donations.",
  },
  {
    icon: Shield,
    title: "Independent oversight",
    desc: "Annual independent financial review. Board-approved conflict-of-interest, gift-acceptance, and spending policies. Full Form 990 publication once 501(c)(3) status is confirmed.",
  },
  {
    icon: PieChart,
    title: "Public reporting",
    desc: "Our Annual Report is published each fiscal year with detailed breakdown of donations received, families served, and program outcomes.",
  },
];

export default function FinancialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Financials"
          title="Where the money"
          highlight="actually goes."
          subtitle="Forged By Fire is built on a simple promise: 100% of donations reach Springfield families. Here's how that works and how we stay accountable to donors."
        />

        {/* The 100% model */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
              <div>
                <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                  THE 100% MODEL
                </p>
                <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.1] tracking-tight text-[#1A1A1A] mb-5">
                  Every dollar donated reaches a family.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-4">
                  Most nonprofits split incoming donations between program
                  expenses, administration, and fundraising — which means a
                  portion of every gift is used to pay for overhead.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed">
                  We intentionally separate those streams. Donations to our
                  emergency fund go entirely to emergency support and
                  transitional housing. Operations and administration are
                  funded through a separate operating fund — covered by our
                  founder, in-kind partner support, and operational grants.
                </p>
              </div>

              <div className="card-ember p-8 md:p-10">
                <div className="text-center mb-6">
                  <div className="text-[72px] md:text-[96px] font-normal text-[#E85D23] leading-none tracking-tight">
                    100%
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mt-2 font-semibold">
                    OF DONATIONS TO FAMILIES
                  </p>
                </div>
                <div className="space-y-3 text-[13px] text-[#1A1A1A]/70">
                  <div className="flex justify-between pb-2 border-b border-[#1A1A1A]/10">
                    <span>Emergency debit cards</span>
                    <span className="font-semibold text-[#1A1A1A]">~65%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#1A1A1A]/10">
                    <span>Clothing, essentials, support kits</span>
                    <span className="font-semibold text-[#1A1A1A]">~20%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#1A1A1A]/10">
                    <span>Transitional housing upkeep</span>
                    <span className="font-semibold text-[#1A1A1A]">~12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Family-direct contingency</span>
                    <span className="font-semibold text-[#1A1A1A]">~3%</span>
                  </div>
                </div>
                <p className="text-[10px] text-[#1A1A1A]/45 mt-5 leading-relaxed">
                  Allocation is indicative based on historical program design;
                  actual allocation reported annually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                PRINCIPLES
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Four commitments we make to every donor.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {principles.map((p) => (
                <div key={p.title} className="card-light p-7">
                  <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-[#E85D23]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                DOCUMENTS
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Reports and filings.
              </h2>
              <p className="text-[14px] text-[#1A1A1A]/55 mt-4">
                Once our 501(c)(3) status is confirmed, Form 990 filings and
                annual reports will be published here.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              {[
                { name: "Annual Report 2025", status: "In progress", href: "/annual-report" },
                { name: "IRS Form 990", status: "Pending 501(c)(3)" },
                { name: "Massachusetts charity registration", status: "In progress" },
                { name: "Bylaws & board policies", status: "Available on request", href: "/contact" },
                { name: "Conflict of interest policy", status: "Available on request", href: "/contact" },
              ].map((doc) => {
                const Wrapper = doc.href ? Link : "div";
                const wrapperProps = doc.href ? { href: doc.href } : {};
                return (
                  <Wrapper
                    key={doc.name}
                    {...wrapperProps}
                    className={`card-light p-5 flex items-center justify-between ${doc.href ? "hover:border-[#E85D23]/30 transition-colors group" : ""}`}
                  >
                    <div>
                      <p className="text-[14px] font-medium text-[#1A1A1A]">{doc.name}</p>
                      <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mt-1">{doc.status}</p>
                    </div>
                    {doc.href && <ArrowRight size={16} className="text-[#1A1A1A]/30 group-hover:text-[#E85D23] group-hover:translate-x-1 transition-all" />}
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
