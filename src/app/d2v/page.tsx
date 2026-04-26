import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import FaqSchema from "@/components/faq-schema";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Zap, CheckCircle2, Users, ArrowRight, Eye } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D2V — Direct-2-Victim Fire Relief Fundraising in Springfield, MA",
  description:
    "D2V (Direct-2-Victim) is Forged By Fire's verified, fire-by-fire campaign system. When a Springfield, MA family loses their home, the community can fund their reloadable debit card directly — without the family having to launch their own GoFundMe.",
  alternates: { canonical: "/d2v" },
  keywords: [
    "Direct-2-Victim Springfield",
    "D2V fire relief",
    "Springfield house fire fundraising",
    "fire victim debit card Springfield",
    "donate to specific Springfield family",
    "Springfield neighbor fire support",
    "fire relief alternative to GoFundMe",
    "verified fire incident donation",
  ],
};

const d2vFaqs = [
  {
    question: "What does D2V stand for?",
    answer:
      "D2V stands for Direct-2-Victim. It's Forged By Fire's fundraising mechanism that lets the Springfield community donate directly to a specific verified fire incident — not a general fund. 100% of D2V donations are loaded onto the affected family's reloadable debit card.",
  },
  {
    question: "How is D2V different from a GoFundMe?",
    answer:
      "On a GoFundMe, the affected family has to set up the campaign, write the story, find photos, and promote it — in the middle of the worst week of their life. With D2V, Forged By Fire publishes the verified campaign on the family's behalf, with their consent. The family doesn't lift a finger; the community gives; we load the card.",
  },
  {
    question: "How is each D2V campaign verified?",
    answer:
      "Every D2V campaign is tied to a fire incident verified by the Springfield Fire Department or our direct intake. We do not run general-fund campaigns under D2V — only specific, real, recent residential fires.",
  },
  {
    question: "Where exactly does the money go?",
    answer:
      "100% of D2V donations are loaded onto a reloadable debit card issued to the affected family. The family uses it for whatever they need first — food, clothes, prescriptions, hotel, transportation. Operations and admin for Forged By Fire are funded separately, never from D2V donations.",
  },
  {
    question: "What happens if more donations come in than the family needs?",
    answer:
      "We keep loading the card as donations come in. There's no cap. If a family stabilizes faster than expected, we communicate with the family and donors and, where appropriate, redirect surplus to other open D2V campaigns or to Forged By Fire's transitional housing program — always disclosed transparently.",
  },
  {
    question: "Is my D2V donation tax-deductible?",
    answer:
      "Forged By Fire's 501(c)(3) status is currently pending. Once approved, D2V donations will be tax-deductible to the extent allowed by law and we'll issue receipts. Until then, donors should not assume deductibility.",
  },
  {
    question: "Can I refer a Springfield family who just had a fire?",
    answer:
      "Yes. Use the Contact page or call our team. The fastest path is the Springfield Fire Department's PIO referral, but neighbors, churches, shelters, and family members can refer too. We confirm before publishing any D2V campaign.",
  },
];

const flow = [
  {
    number: "01",
    icon: Shield,
    title: "Verified incident",
    long: "A residential fire occurs in Springfield. The Springfield Fire Department's PIO refers the family to Forged By Fire — usually the same day. Or a neighbor, church, or partner organization makes the referral, and we confirm the incident with the SFD.",
    detail: "Same day",
  },
  {
    number: "02",
    icon: Users,
    title: "Family consent + verified facts",
    long: "Within 24 hours we contact the family. We listen, we document the basic case-specific facts they're comfortable sharing publicly (or anonymously if they prefer), and we get explicit consent before publishing any campaign details.",
    detail: "Within 24 hours",
  },
  {
    number: "03",
    icon: Heart,
    title: "Campaign goes live",
    long: "We publish a verified D2V campaign tied to that specific fire. The community can donate directly to it. Neighbors, family, the broader Springfield community, anyone moved to act — they all give to that exact family, not a general fund.",
    detail: "Within 48 hours",
  },
  {
    number: "04",
    icon: Zap,
    title: "Card loaded — and reloaded",
    long: "Donations load onto a reloadable debit card issued to the family. The first $500 (our standard emergency package) hits same-day. Every additional dollar that comes in keeps loading the card. The family uses it for whatever matters most, in real time.",
    detail: "Real-time, continuous",
  },
];

export default function D2vPage() {
  return (
    <>
      <Navbar />
      <FaqSchema id="d2v" faqs={d2vFaqs} />
      <main>
        <PageHero
          label="D2V · Direct-2-Victim"
          title="One verified fire."
          highlight="One direct campaign. 100% to the family."
          subtitle="D2V is the fundraising mechanism unique to Forged By Fire. Like a GoFundMe — except the Springfield, MA family doesn't have to launch it themselves."
          image="/images/real/fire-scene-springfield.jpg"
          imageAlt="Springfield Fire Department responding to a residential fire"
        />

        {/* Why this exists */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
              <div>
                <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                  WHY D2V EXISTS
                </p>
                <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] mb-5 leading-[1.15]">
                  Trauma + a fundraising platform isn&apos;t a model.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed mb-4">
                  In the days after losing a home to fire, families are dealing
                  with displacement, insurance, kids, medical follow-ups, and
                  shock. Asking them to write GoFundMe copy, upload photos of
                  their burned house, and chase social-media shares is —
                  honestly — cruel.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed mb-4">
                  But the community wants to give. Neighbors will write a check
                  the same day if they know exactly where it&apos;s going.
                  We saw the gap. D2V closes it.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed">
                  We do the campaign work — the verification, the publishing,
                  the consent, the disbursement — so the family can do the work
                  that matters: rebuilding their life.
                </p>
              </div>
              <div className="img-card aspect-[4/5] relative rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/real/fire-scene-springfield.jpg"
                  alt="Active fire scene in Springfield, MA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4-step flow */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                THE D2V FLOW
              </p>
              <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                From incident to relief — four steps.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
              {flow.map((step) => (
                <div key={step.number} className="card-glass p-6 md:p-7 h-full flex flex-col hover:border-[#E85D23]/25 transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[32px] font-light text-[#E85D23]/20 leading-none tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center">
                      <step.icon size={20} className="text-[#E85D23]" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-[#1A1A1A] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/60 leading-relaxed flex-1">
                    {step.long}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#1A1A1A]/5">
                    <span className="text-[10px] tracking-wider uppercase text-[#9B2F0A] font-semibold">
                      {step.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency principles */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                TRANSPARENCY
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                The four guarantees we make on every D2V campaign.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Verified, never general-fund",
                  desc: "Every D2V campaign is tied to one specific verified Springfield fire. We do not run blanket campaigns under D2V.",
                },
                {
                  icon: Heart,
                  title: "100% to the family — period",
                  desc: "Every dollar donated to a D2V campaign loads onto that family's debit card. Nothing comes off the top. Operations are funded separately.",
                },
                {
                  icon: Eye,
                  title: "Family consent, public reporting",
                  desc: "We never publish details a family hasn't approved. Once a campaign closes, we publish the totals raised + delivered (anonymously if requested).",
                },
                {
                  icon: Zap,
                  title: "Real time, real money",
                  desc: "Card loads same-day. No 'pledge' delays. As donations keep arriving, we keep reloading. The card grows with the community's response.",
                },
              ].map((p) => (
                <div key={p.title} className="card-light p-7">
                  <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-[#E85D23]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">D2V FAQ</p>
              <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Common questions about Direct-2-Victim.
              </h2>
            </div>

            <div className="space-y-3">
              {d2vFaqs.map((f) => (
                <details key={f.question} className="card-light p-6 group">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <h3 className="text-base font-medium text-[#1A1A1A] tracking-tight">
                      {f.question}
                    </h3>
                    <span className="text-[#E85D23] shrink-0 group-open:rotate-45 transition-transform duration-300 text-2xl leading-none font-light">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[14px] text-[#1A1A1A]/72 leading-relaxed">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <Heart size={28} className="mx-auto mb-4 text-[#E85D23]" />
            <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 tracking-tight">
              When the next Springfield fire happens, the campaign goes live within 48 hours.
            </h3>
            <p className="text-[15px] text-white/65 mb-6">
              Subscribe to be notified when D2V campaigns open — or refer a family we should reach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full shadow-[0_4px_16px_rgba(232,93,35,0.35)]"
              >
                Get D2V Notifications
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold rounded-full"
              >
                Refer a Springfield Family
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
