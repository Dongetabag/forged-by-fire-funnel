import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { Phone, PhoneCall, HandHeart, Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our 4-Step Process: Fire Relief in Springfield, MA",
  description:
    "How Forged By Fire responds to Springfield, Massachusetts house fires: Fire Department referral → 24-hour outreach → 48-hour emergency delivery → ongoing care and transitional housing. No red tape.",
  alternates: { canonical: "/process" },
  keywords: [
    "Springfield house fire response process",
    "Springfield Fire Department referral",
    "48 hour fire relief Springfield",
    "fire victim support timeline Springfield",
  ],
};

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Fire Department Referral",
    timeframe: "Same-day referral",
    long: "The Springfield Fire Department's Public Information Officer is our direct partner. When a family loses their home, they're asked, at the scene or shortly after, if they'd like support from Forged By Fire. The family never has to track us down in the chaos.",
    detail: [
      "Direct partnership with SFD. no middlemen",
      "Family gives consent; we get the referral same day",
      "No forms, no applications in the first contact",
    ],
    image: "/images/fire-scene-1.jpg",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "We Reach Out: Within 24 Hours",
    timeframe: "Within 24 hours",
    long: "Our team contacts the family within 24 hours of the fire. The first call is about listening. understanding the specific family, what they lost, what they have left, who needs what. Not a needs-assessment form. A real conversation.",
    detail: [
      "Warm, unhurried phone call. no checklists",
      "Identify most-urgent needs in the next 48 hours",
      "Confirm safe contact point and delivery logistics",
    ],
    image: "/images/family-surveying.jpg",
  },
  {
    number: "03",
    icon: HandHeart,
    title: "Immediate Support Delivered",
    timeframe: "Within 48 hours",
    long: "A $500 pre-loaded emergency debit card, clothing for every family member, and essentials are delivered within 48 hours of the fire. Not weeks. Not after verification. When the family is still processing, the support shows up.",
    detail: [
      "$500 debit card. use for what they need most",
      "Clothing, shoes, toiletries sized for every family member",
      "Resource packet: insurance, Red Cross, local housing partners",
    ],
    image: "/images/family-moving-in.jpg",
  },
  {
    number: "04",
    icon: Heart,
    title: "Ongoing Care & Transitional Housing",
    timeframe: "For as long as it takes",
    long: "We follow up weekly. Families who need transitional housing can move into our unit, up to 3 families at a time, with case management and a clear path to permanent housing. Some families need a week. Others need six months. We stay until they're rebuilt.",
    detail: [
      "Weekly check-ins and individualized support plan",
      "Transitional housing with case management",
      "Referrals to counseling, financial literacy, long-term services",
    ],
    image: "/images/restored-home-golden.jpg",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="The Process"
          title="From disaster"
          highlight="to the path forward."
          subtitle="Most fire-relief programs take weeks. Ours takes 48 hours. Here's exactly what happens when a Springfield family works with Forged By Fire."
          image="/images/fire-scene-3.jpg"
          imageAlt="Fire truck at the scene of a Springfield house fire"
        />

        {/* Steps. alternating layout */}
        <div className="py-20 md:py-24">
          <div className="container-tight">
            {steps.map((step, i) => (
              <section
                key={step.number}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i > 0 ? "mt-20 md:mt-28" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="img-card aspect-[4/3] relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[56px] md:text-[72px] font-light text-[#E85D23]/25 leading-none tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#E85D23]/10 flex items-center justify-center">
                      <step.icon size={22} className="text-[#E85D23]" />
                    </div>
                    <span className="pill-ember">{step.timeframe}</span>
                  </div>
                  <h2 className="text-[26px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] mb-4 leading-[1.15]">
                    {step.title}
                  </h2>
                  <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                    {step.long}
                  </p>
                  <ul className="space-y-2">
                    {step.detail.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[#E85D23] mt-2.5 shrink-0" />
                        <span className="text-[14px] text-[#1A1A1A]/75 leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Partnership strip */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="card-ember p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-3">
                THE KEYSTONE
              </p>
              <h3 className="text-[24px] md:text-[32px] font-normal tracking-tight text-[#1A1A1A] mb-4 leading-[1.2]">
                Our partnership with the Springfield Fire Department is what makes this possible.
              </h3>
              <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-0">
                Without the Springfield Fire Department&apos;s same-day referrals,
                we&apos;d be chasing fires in the news. With them, we&apos;re at
                the table the moment it matters. We are deeply grateful for
                their trust and partnership.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <Heart size={28} className="mx-auto mb-4 text-[#E85D23]" />
            <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 tracking-tight">
              Help us keep showing up in the first 48 hours.
            </h3>
            <p className="text-[15px] text-white/65 mb-6">
              Your donation funds the response. $500 covers one family&apos;s
              full emergency package.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full shadow-[0_8px_32px_rgba(232,93,35,0.35)] transition-all duration-300"
            >
              <Heart size={16} className="fill-white" />
              Donate to Forged By Fire
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
