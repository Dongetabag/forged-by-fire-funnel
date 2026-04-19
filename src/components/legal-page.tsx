import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import type { ReactNode } from "react";

interface LegalPageProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: { heading: string; body: string }[];
  children?: ReactNode;
}

/**
 * Shared layout for text-heavy legal / policy / statement pages.
 * Handles the consistent PageHero + narrow reading column + section stack.
 */
export default function LegalPage({ label, title, highlight, subtitle, lastUpdated, sections, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <PageHero label={label} title={title} highlight={highlight} subtitle={subtitle} />
        <section className="py-16 md:py-20">
          <div className="container-tight">
            <div className="max-w-3xl mx-auto">
              {lastUpdated && (
                <p className="text-[12px] uppercase tracking-widest text-[#9B2F0A] mb-10">
                  Last updated: {lastUpdated}
                </p>
              )}
              <div className="space-y-10">
                {sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] mb-3 tracking-tight">
                      {s.heading}
                    </h2>
                    <p className="text-[14px] text-[#1A1A1A]/72 leading-relaxed whitespace-pre-line">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
