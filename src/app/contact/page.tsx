import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact: Emergency Help, Donate, Volunteer, Partner",
  description:
    "Reach Forged By Fire in Springfield, Massachusetts for emergency support after a house fire, donations, volunteering, or partnership. Response within 24 hours, same-day for active emergencies.",
  alternates: { canonical: "/contact" },
  keywords: [
    "Springfield house fire help contact",
    "Forged By Fire contact",
    "Springfield MA fire relief phone",
    "emergency fire assistance Springfield contact",
  ],
};

const info = [
  {
    icon: Mail,
    label: "Email",
    primary: "contact@forgedbyfire.org",
    secondary: "Monitored daily · 24-hour response",
    href: "mailto:contact@forgedbyfire.org",
  },
  {
    icon: Phone,
    label: "Phone",
    primary: "Coming soon",
    secondary: "Direct line launches with our formal nonprofit setup",
    href: null,
  },
  {
    icon: MapPin,
    label: "Service Area",
    primary: "Springfield, Massachusetts",
    secondary: "Pioneer Valley referrals reviewed case-by-case",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    primary: "Within 24 hours",
    secondary: "Active emergencies receive same-day response",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Contact"
          title="How can we help you —"
          highlight="or how can you help us?"
          subtitle="Whether you need emergency support after a fire, want to donate, or want to partner with Forged By Fire, the path starts here."
          image="/images/massachusetts-town.jpg"
          imageAlt="A Massachusetts town at dusk"
        />

        {/* 3 paths. reuse homepage contact component */}
        <ContactForm />

        {/* Contact details */}
        <section className="py-20 md:py-24 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                DIRECT CHANNELS
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Prefer to reach out directly?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {info.map((i) => {
                const Wrapper = i.href ? "a" : "div";
                const wrapperProps = i.href ? { href: i.href } : {};
                return (
                  <Wrapper
                    key={i.label}
                    {...wrapperProps}
                    className={`card-light p-7 text-center ${i.href ? "hover:border-[#E85D23]/30 transition-all" : ""}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#E85D23]/10 flex items-center justify-center mx-auto mb-4">
                      <i.icon size={22} className="text-[#E85D23]" />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/45 mb-2 font-semibold">
                      {i.label}
                    </p>
                    <p className="text-[14px] font-semibold text-[#1A1A1A] mb-1 break-all">
                      {i.primary}
                    </p>
                    <p className="text-[11px] text-[#1A1A1A]/50 leading-relaxed">
                      {i.secondary}
                    </p>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#F59E0B] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85D23] ember-flicker" />
              EMERGENCY AFTER A SPRINGFIELD FIRE
            </p>
            <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 tracking-tight">
              If you or someone you know just lost a home to fire. use the form above and check &ldquo;I need emergency help.&rdquo;
            </h3>
            <p className="text-[14px] text-white/65 max-w-lg mx-auto">
              Active emergencies receive same-day response. The Springfield
              Fire Department&apos;s PIO may also refer you to us directly at
              the scene.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
