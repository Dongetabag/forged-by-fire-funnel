import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Flame, Home, Clock, Heart, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Forged By Fire",
  description:
    "Two pillars of support for Springfield families affected by house fires — Emergency Resources delivered in 48 hours and Transitional Housing for rebuilding.",
};

const emergencyBullets = [
  "$500 pre-loaded emergency debit card, delivered within 48 hours of the fire",
  "Clothing, shoes, and essentials for every family member — sized to fit",
  "Resource navigation: insurance claims, Red Cross, local housing assistance",
  "Direct coordination with the Springfield Fire Department's PIO",
  "Meals and hygiene kits for the first critical nights",
];

const housingBullets = [
  "Capacity for up to 5 families at a time in our transitional housing unit",
  "Case management: weekly check-ins and individualized support plans",
  "Life-skills and financial-literacy resources for long-term stability",
  "Structured transition into permanent housing — not a permanent stay",
  "Counseling referrals and community connection",
];

const eligibility = [
  {
    icon: Flame,
    title: "You (or someone you know) had a fire in Springfield, MA",
    desc: "Our primary service area is the city of Springfield. Referrals from other Pioneer Valley towns are reviewed case-by-case when capacity allows.",
  },
  {
    icon: Home,
    title: "The fire caused significant loss of home or possessions",
    desc: "Partial damage, full destruction, or displacement — we respond when a family can't stay in their home and needs immediate help.",
  },
  {
    icon: Clock,
    title: "You're in the first 30 days after the fire",
    desc: "Our model is built around the first month of recovery. After that window, we'll still connect you with partners for continued support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Services"
          title="Two pillars of support."
          highlight="One urgent response."
          subtitle="When fire hits a Springfield family, we show up within 24 hours with emergency resources — and we stay for the rebuild with transitional housing."
          image="/images/fire-scene-2.jpg"
          imageAlt="Fire truck responding to a Springfield house fire"
        />

        {/* Emergency Resources */}
        <section id="emergency" className="py-20 md:py-28">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="order-2 lg:order-1">
                <span className="pill-ember mb-5">
                  <Flame size={12} />
                  EMERGENCY RESOURCES
                </span>
                <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.12] tracking-tight text-[#1A1A1A] mb-5">
                  The first 48 hours matter most.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                  When a family loses their home, they&apos;re often still wearing the
                  same clothes they evacuated in. Insurance takes weeks. Applications
                  take months. We close the gap.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-8">
                  Every Forged By Fire emergency response is built around one idea:
                  when you lose everything, every little bit counts — and it counts
                  most in the first two days.
                </p>

                <ul className="space-y-3 mb-8">
                  {emergencyBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#E85D23] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#1A1A1A]/75 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,35,0.38)]"
                >
                  Request Emergency Support
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
                <div className="img-card aspect-[3/4] relative col-span-2 md:col-span-1">
                  <Image src="/images/fire-on-roof.jpg" alt="Firefighters on a burning roof" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                </div>
                <div className="img-card aspect-[3/4] relative hidden md:block">
                  <Image src="/images/fire-truck-flames.jpg" alt="Fire truck on scene" fill sizes="40vw" className="object-cover" />
                </div>
                <div className="img-card aspect-[16/10] relative col-span-2">
                  <Image src="/images/community-cleanup.jpg" alt="Community helping cleanup after a fire" fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transitional Housing */}
        <section id="housing" className="py-20 md:py-28 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="img-card aspect-[4/5] relative mb-4">
                  <Image src="/images/family-moving-in.jpg" alt="Family moving into transitional housing" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="img-card aspect-[4/3] relative">
                    <Image src="/images/family-kitchen.jpg" alt="Family thriving in transitional housing" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <div className="img-card aspect-[4/3] relative">
                    <Image src="/images/restored-home-golden.jpg" alt="Restored home at golden hour" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <span className="pill-ember mb-5">
                  <Home size={12} />
                  TRANSITIONAL HOUSING
                </span>
                <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.12] tracking-tight text-[#1A1A1A] mb-5">
                  A safe place to start over.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                  The home Donald restored over two and a half years is now
                  Forged By Fire&apos;s transitional housing — offering families
                  stable, supportive shelter while they rebuild their lives.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-8">
                  This isn&apos;t a shelter. It&apos;s a bridge. With case
                  management, life-skills resources, and a clear path to
                  permanent housing, families move forward — not in circles.
                </p>

                <ul className="space-y-3 mb-8">
                  {housingBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#E85D23] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#1A1A1A]/75 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#2A1B12] text-white font-semibold rounded-full transition-all duration-300"
                >
                  Apply for Housing Support
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 md:py-28">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                WHO QUALIFIES
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                If any of these describe your situation, reach out.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {eligibility.map((e) => (
                <div key={e.title} className="card-glass p-7">
                  <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mb-4">
                    <e.icon size={20} className="text-[#E85D23]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 tracking-tight">
                    {e.title}
                  </h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#9B2F0A] hover:text-[#E85D23] transition-colors"
              >
                Not sure if you qualify? Reach out anyway — we&apos;ll help.
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight">
            <div className="max-w-3xl mx-auto text-center">
              <Heart size={28} className="mx-auto mb-4 text-[#E85D23]" />
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 tracking-tight">
                Your donation is what makes this response possible.
              </h3>
              <p className="text-[15px] text-white/65 mb-6 max-w-xl mx-auto">
                100% of donations go directly to Springfield families. Every
                $500 fully covers one family&apos;s emergency response.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full shadow-[0_8px_32px_rgba(232,93,35,0.35)] transition-all duration-300"
              >
                <Heart size={16} className="fill-white" />
                Donate to Forged By Fire
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
