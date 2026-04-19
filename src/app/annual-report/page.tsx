import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { FileText, Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Report",
  description:
    "Forged By Fire annual reports — families served, donations received, and program impact in Springfield, Massachusetts.",
  alternates: { canonical: "/annual-report" },
  keywords: [
    "Forged By Fire annual report",
    "Springfield fire relief impact report",
    "Forged By Fire program outcomes",
  ],
};

export default function AnnualReportPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Annual Report"
          title="Families served."
          highlight="Dollars delivered."
          subtitle="A yearly public accounting of how Forged By Fire put donations to work in Springfield, Massachusetts."
        />

        <section className="py-20 md:py-24">
          <div className="container-tight max-w-3xl mx-auto">
            <div className="card-ember p-8 md:p-12 text-center mb-12">
              <FileText size={40} className="mx-auto mb-5 text-[#E85D23]" />
              <h2 className="text-[24px] md:text-[32px] font-normal tracking-tight text-[#1A1A1A] mb-4 leading-[1.2]">
                Our first full annual report is in progress.
              </h2>
              <p className="text-[15px] text-[#1A1A1A]/72 leading-relaxed mb-6 max-w-xl mx-auto">
                Forged By Fire is building its first full fiscal-year record.
                Once the 2025 cycle closes and numbers are independently
                reviewed, we&apos;ll publish the full annual report here with:
              </p>
              <ul className="text-left text-[14px] text-[#1A1A1A]/72 space-y-2 max-w-md mx-auto mb-6">
                {[
                  "Families served and fires responded to",
                  "Total donations received and allocation",
                  "Transitional housing outcomes",
                  "Volunteer hours contributed",
                  "Partnership and community milestones",
                  "Board and governance updates",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E85D23] mt-2.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-[#1A1A1A]/45">
                Expected publication: Q2 2026, after fiscal-year close and review.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[15px] text-[#1A1A1A]/72 mb-5">
                Want to be notified when the annual report is published?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#2A1B12] text-white font-semibold rounded-full transition-all duration-300"
              >
                Subscribe for Updates
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <Heart size={28} className="mx-auto mb-4 text-[#E85D23]" />
            <h3 className="text-2xl font-normal text-white mb-4 tracking-tight">
              Want to make sure next year&apos;s report shows more families served?
            </h3>
            <Link href="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full">
              <Heart size={15} className="fill-white" />
              Donate Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
