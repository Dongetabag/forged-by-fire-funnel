import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { Flame, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Board",
  description:
    "Meet the leadership behind Forged By Fire: founder Lt. Donald Coleman Jr. and the team building a fire relief nonprofit in Springfield, Massachusetts.",
  alternates: { canonical: "/leadership" },
  keywords: [
    "Forged By Fire leadership",
    "Lt Donald Coleman Jr founder",
    "Springfield MA nonprofit leadership",
    "Forged By Fire board of directors",
  ],
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Leadership"
          title="The team behind"
          highlight="Forged By Fire."
          subtitle="Firefighter-founded, Springfield-rooted, community-accountable. The people building the nonprofit that shows up in the first 48 hours."
          image="/images/community-surveying.jpg"
          imageAlt="Community gathering after a Springfield fire"
        />

        {/* Founder */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="max-w-2xl mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                FOUNDER
              </p>
              <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Lt. Donald Coleman Jr.
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="img-card aspect-[3/4] relative rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/founder-portrait.png"
                    alt="Lt. Donald Coleman Jr."
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-1">
                    FOUNDER & EXECUTIVE DIRECTOR
                  </p>
                  <p className="text-lg font-medium text-[#1A1A1A] tracking-tight">
                    Lt. Donald Coleman Jr.
                  </p>
                  <p className="text-[13px] text-[#1A1A1A]/55 mt-1">
                    Springfield Fire Department · Firefighter since 2015
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-5 text-[15px] text-[#1A1A1A]/75 leading-relaxed">
                <p>
                  Lt. Donald Coleman Jr. has served the Springfield community as
                  a firefighter since 2015. In 2022, a house fire destroyed his
                  own home while he was away on vacation. He spent 2.5 years
                  restoring his grandparents&apos; home, a property that became
                  the foundation of Forged By Fire.
                </p>
                <p>
                  Donald leads Forged By Fire&apos;s day-to-day operations, the
                  partnership with the Springfield Fire Department, and the
                  intake of families following a fire. He is a firefighter first
                  and a nonprofit leader second; the nonprofit exists because
                  he saw a gap no one else was filling.
                </p>
                <p>
                  Donald&apos;s background includes active service as a lieutenant
                  with the Springfield Fire Department, community organizing in
                  the Pioneer Valley, and the personal lived experience of
                  rebuilding after total loss.
                </p>
                <p className="text-[#9B2F0A] font-medium italic">
                  &ldquo;This is more than a project to me. This is personal. I
                  have lived through the loss. Forged By Fire was created so that
                  others do not have to go through that journey alone.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="max-w-2xl mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                BOARD OF DIRECTORS
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Independent governance. Local accountability.
              </h2>
            </div>

            <div className="card-ember p-8 md:p-10 max-w-3xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E85D23]/15 flex items-center justify-center shrink-0">
                  <Users size={20} className="text-[#E85D23]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-2">
                    BOARD FORMATION IN PROGRESS
                  </p>
                  <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-3 tracking-tight">
                    We&apos;re seating our founding board alongside our 501(c)(3) filing.
                  </h3>
                  <p className="text-[14px] text-[#1A1A1A]/72 leading-relaxed mb-4">
                    A five-member board, representing Springfield community
                    leadership, nonprofit governance, legal counsel, financial
                    oversight, and fire-service expertise, is being seated.
                    Full board roster and bios will appear here once the roster
                    is confirmed.
                  </p>
                  <p className="text-[13px] text-[#1A1A1A]/60 leading-relaxed">
                    Interested in serving on our board? Reach out via the Contact
                    page with your background and a note of interest.
                  </p>
                </div>
              </div>
            </div>

            {/* Governance pillars */}
            <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-4xl">
              {[
                {
                  title: "Conflict of interest",
                  desc: "All board members sign and annually re-affirm a standard conflict-of-interest policy. Related-party transactions are disclosed and require board approval.",
                },
                {
                  title: "Financial oversight",
                  desc: "Independent financial review each fiscal year. Once 501(c)(3) status is confirmed, annual Form 990 filings will be public on this site.",
                },
                {
                  title: "Whistleblower protection",
                  desc: "We protect employees, volunteers, and partners who raise concerns about governance, ethics, or conduct in good faith.",
                },
              ].map((p) => (
                <div key={p.title} className="card-glass p-6">
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

        {/* CTA */}
        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <Flame size={28} className="mx-auto mb-4 text-[#E85D23]" />
            <h3 className="text-2xl font-normal text-white mb-4 tracking-tight">
              Want to review our financials or governance documents?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/financials" className="px-6 py-3 bg-[#E85D23] hover:bg-[#C84914] text-white rounded-full text-sm font-semibold transition-all duration-300">
                View Financials
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2">
                Request Documents <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
