import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import FounderStory from "@/components/founder-story";
import ColemanHome from "@/components/coleman-home";
import WhyFbf from "@/components/why-fbf";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story. Lt: Donald Coleman Jr. & the Founding of Forged By Fire",
  description:
    "The story of Lt. Donald Coleman Jr., a Springfield, Massachusetts firefighter who lost his home in a 2022 fire and spent 2.5 years restoring his grandparents' home. the foundation of Forged By Fire.",
  alternates: { canonical: "/about" },
  keywords: [
    "Lt. Donald Coleman Jr. Springfield firefighter",
    "Forged By Fire founder story",
    "Springfield firefighter nonprofit founder",
    "Donald Coleman Jr house fire 2022",
    "Springfield MA firefighter",
  ],
};

const timeline = [
  { year: "2015", title: "Firefighter since day one", desc: "Lt. Donald Coleman Jr. joined the Springfield Fire Department, dedicating his career to protecting others in their most vulnerable moments." },
  { year: "2019", title: "First fire in the family", desc: "Donald's grandparents' home. a symbol of family legacy. suffered a fire, though it had stood vacant for years." },
  { year: "2022", title: "His own home is lost", desc: "While on vacation, Donald's home in Springfield, MA was destroyed by a fire. He returned to a total loss. A lifetime of belongings reduced to ashes." },
  { year: "2022 to 2024", title: "Two and a half years of restoration", desc: "Donald rebuilt his grandparents' home. navigating setbacks, financial strain, and the emotional weight of reconstructing stability itself." },
  { year: "2024", title: "Forged By Fire is born", desc: "Out of that restoration came a new vision: the home wouldn't just be for himself. It would be a vessel for good, a place to support families walking the same road." },
];

const values = [
  {
    title: "Compassion over pity",
    desc: "We understand the trauma of losing everything because our founder lived it. No family we serve is treated as a recipient of charity. they're neighbors deserving of dignity.",
  },
  {
    title: "Urgency over bureaucracy",
    desc: "Most relief requires applications and waiting. We built the opposite: a 24-hour reach, 48-hour delivery, no paperwork gauntlet.",
  },
  {
    title: "Partnership over silos",
    desc: "Our direct referral partnership with the Springfield Fire Department gets us in the door the same day. We can't do this alone. and we don't pretend to.",
  },
  {
    title: "Action over awareness",
    desc: "Every little bit counts means every dollar reaches a family. Operations are funded separately. We measure by what's delivered, not what's promised.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Story"
          title="Born from personal loss."
          highlight="Driven by community."
          subtitle="Forged By Fire was created by a Springfield firefighter who walked through a fire of his own. and decided no family should walk it alone."
          image="/images/community-surveying.jpg"
          imageAlt="Community gathering after a Springfield house fire"
        />

        {/* Full founder story (reuse existing component) */}
        <FounderStory />

        {/* Coleman Home: flagship home narrative + restoration gallery */}
        <ColemanHome />

        {/* Timeline */}
        <section className="py-20 md:py-28">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                TIMELINE
              </p>
              <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                How we got here. year by year.
              </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-[24px] md:left-[40px] top-0 bottom-0 w-px bg-[#E85D23]/25" />
              {timeline.map((t, i) => (
                <div key={t.year} className="relative pl-16 md:pl-24 pb-10 last:pb-0">
                  <div className="absolute left-0 top-0 w-12 md:w-20 flex items-start justify-center">
                    <div className="relative z-10 px-3 py-1 bg-[#E85D23] text-white rounded-full text-[10px] font-semibold uppercase tracking-widest shadow-[0_4px_14px_rgba(232,93,35,0.35)]">
                      {t.year}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] mb-2 tracking-tight">
                    {t.title}
                  </h3>
                  <p className="text-[14px] text-[#1A1A1A]/65 leading-relaxed max-w-xl">
                    {t.desc}
                  </p>
                  {i === timeline.length - 1 && (
                    <p className="mt-3 text-[12px] italic text-[#9B2F0A]">
                      &ldquo;From that vision, Forged By Fire was created.&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                WHAT WE BELIEVE
              </p>
              <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Four values. One commitment.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="card-glass p-7">
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why FBF pillars */}
        <WhyFbf />
      </main>
      <Footer />
    </>
  );
}
