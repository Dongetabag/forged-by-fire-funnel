import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { Newspaper, Mail, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "News, milestones, and stories from Forged By Fire. Springfield, Massachusetts fire relief nonprofit updates from the field.",
  alternates: { canonical: "/news" },
  keywords: [
    "Forged By Fire news",
    "Springfield fire relief updates",
    "Forged By Fire milestones",
  ],
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="News & Updates"
          title="From the"
          highlight="field."
          subtitle="Milestones, stories, and updates from Forged By Fire's work in Springfield, Massachusetts. The newsroom is launching soon."
        />

        <section className="py-20 md:py-24">
          <div className="container-tight max-w-3xl mx-auto">
            <div className="card-ember p-8 md:p-12 text-center">
              <Newspaper size={40} className="mx-auto mb-5 text-[#E85D23]" />
              <h2 className="text-[24px] md:text-[32px] font-normal tracking-tight text-[#1A1A1A] mb-4 leading-[1.2]">
                The newsroom is launching soon.
              </h2>
              <p className="text-[15px] text-[#1A1A1A]/72 leading-relaxed mb-6 max-w-xl mx-auto">
                Once our 501(c)(3) is confirmed and our first fiscal year closes,
                we&apos;ll publish regular field updates here. stories from
                families we&apos;ve supported, community events, donor spotlights,
                and partnership milestones.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300"
                >
                  <Mail size={15} />
                  Subscribe for Updates
                </Link>
                <Link
                  href="/press"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/60 border border-[#1A1A1A]/10 hover:bg-white/90 text-[#1A1A1A] font-semibold rounded-full transition-all duration-300"
                >
                  Press & Media Kit
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-[12px] uppercase tracking-widest text-[#9B2F0A] mb-3 font-semibold">
                FOLLOW ALONG
              </p>
              <p className="text-[13px] text-[#1A1A1A]/55 max-w-md mx-auto leading-relaxed">
                Social profiles launch alongside our first press outreach. Until
                then, email is the best way to stay in the loop on the
                mission.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
