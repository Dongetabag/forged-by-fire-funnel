import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { Users, Baby, Heart, Home, Shield, HandHeart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Help — Families & Partners in Springfield, MA",
  description:
    "Forged By Fire serves Springfield, Massachusetts families most vulnerable after a house fire — families with children, single parents, seniors, and uninsured renters — plus the Springfield Fire Department, shelters, and community partners.",
  alternates: { canonical: "/who-we-help" },
  keywords: [
    "Springfield MA family fire assistance",
    "single parent fire relief Springfield",
    "senior fire victim help Springfield",
    "uninsured renter fire Springfield",
    "Springfield community partners fire",
  ],
};

const groups = [
  {
    icon: Users,
    name: "Families with Children",
    stat: "Primary focus",
    desc: "Emergency response packages are tailored to each child — sizes, ages, and needs. School supplies, diapers, car seats, whatever a family tells us they need.",
    image: "/images/family-kitchen.jpg",
  },
  {
    icon: Baby,
    name: "Single Parents",
    stat: "Higher-priority response",
    desc: "A single parent carrying the full weight of rebuilding faces the steepest recovery curve. We reach out more often and coordinate more services for them — no one should shoulder this alone.",
    image: "/images/family-together.jpg",
  },
  {
    icon: Heart,
    name: "Elderly & Fixed Income",
    stat: "Dignity-first support",
    desc: "Senior residents displaced by fire often face compounding challenges: lost memories, limited mobility, difficulty navigating housing systems. We slow down, listen, and coordinate patiently.",
    image: "/images/family-rehoused.jpg",
  },
  {
    icon: Home,
    name: "Renters Without Insurance",
    stat: "Most common gap",
    desc: "Only about half of US renters carry renters insurance. In Springfield, the gap can be wider. When fire hits, these families have nothing between them and zero. We step in first.",
    image: "/images/community-helping.jpg",
  },
];

const partners = [
  {
    icon: Shield,
    name: "Springfield Fire Department",
    desc: "Direct referral partnership with the SFD Public Information Officer gets us in the door the same day — before the paperwork and applications start.",
  },
  {
    icon: HandHeart,
    name: "Local Shelters & Churches",
    desc: "When families need more than we can provide alone, we coordinate with shelters, churches, and social-service agencies across Springfield for connected support.",
  },
  {
    icon: Users,
    name: "Red Cross & Insurance Navigators",
    desc: "We handle the first 48 hours. Red Cross handles mid-term displacement. Insurance navigators handle long-term recovery. We work together, not in silos.",
  },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Who We Help"
          title="Every Springfield family"
          highlight="deserves a path forward."
          subtitle="We serve the families most vulnerable to the financial and emotional toll of losing a home — and partner with the organizations that know them best."
          image="/images/springfield-street.jpg"
          imageAlt="A Springfield, Massachusetts neighborhood"
        />

        {/* Primary groups with photos */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                PEOPLE WE SERVE
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Four groups we prioritize first.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {groups.map((g) => (
                <div key={g.name} className="card-light overflow-hidden group">
                  <div className="relative aspect-[4/3] img-card">
                    <Image
                      src={g.image}
                      alt={g.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full">
                      <g.icon size={13} className="text-[#F59E0B]" />
                      <span className="text-[10px] uppercase tracking-widest text-white font-semibold">
                        {g.stat}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 tracking-tight">
                      {g.name}
                    </h3>
                    <p className="text-[14px] text-[#1A1A1A]/65 leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner strip */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                COMMUNITY PARTNERS
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                We don&apos;t do this alone — and we don&apos;t pretend to.
              </h2>
              <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed mt-4 max-w-xl mx-auto">
                The best nonprofits know their lane. Ours is the first 48 hours
                and transitional housing. For everything else, we partner.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {partners.map((p) => (
                <div key={p.name} className="card-glass p-7">
                  <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-[#E85D23]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors"
              >
                Interested in partnering with us?
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Community photo strip */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="img-card aspect-[4/5] relative">
                <Image src="/images/community-surveying.jpg" alt="Springfield community surveying a fire-damaged home" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                  OUR COMMUNITY
                </p>
                <h2 className="text-[28px] md:text-[36px] font-normal tracking-tight text-[#1A1A1A] mb-5 leading-[1.15]">
                  Springfield takes care of its own.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                  We&apos;re a Springfield-first nonprofit. Our founder is a
                  Springfield firefighter. Our families are our neighbors. Our
                  first dollar came from someone down the street.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed">
                  That local focus is what lets us move fast. It&apos;s also
                  what makes the mission meaningful — these aren&apos;t
                  strangers. They&apos;re the family a few blocks over whose
                  house you drove past last Tuesday.
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
