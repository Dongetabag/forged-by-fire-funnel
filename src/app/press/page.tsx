import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, Camera, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media Kit",
  description:
    "Press and media resources for Forged By Fire: boilerplate, founder bio, logo downloads, and media contact for Springfield, Massachusetts fire relief coverage.",
  alternates: { canonical: "/press" },
  keywords: [
    "Forged By Fire press kit",
    "Forged By Fire media contact",
    "Springfield MA fire relief media",
    "Lt Donald Coleman Jr press",
  ],
};

const boilerplate = `Forged By Fire is a Springfield, Massachusetts nonprofit providing emergency resources and transitional housing to families affected by house fires. Founded in 2015 by Lt. Donald Coleman Jr., a Springfield firefighter who lost his home in a 2022 fire, the organization delivers a $500 emergency debit card and family essentials within 48 hours of a fire through a direct partnership with the Springfield Fire Department. Its transitional housing program supports up to five families at a time. Forged By Fire's 501(c)(3) status is pending. Learn more at theforgedbyfire.org.`;

const shortBio = `Lt. Donald Coleman Jr. has served as a firefighter with the Springfield Fire Department since 2015. In 2022, a house fire destroyed his own home while he was away on vacation. He spent 2.5 years restoring his grandparents' home, a property that became the foundation of Forged By Fire, the nonprofit he founded to support Springfield families walking the same road he walked.`;

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Press & Media Kit"
          title="Resources for"
          highlight="journalists & partners."
          subtitle="Boilerplate, founder bio, downloadable logo, and media contact for coverage of Forged By Fire and Springfield, Massachusetts fire relief."
        />

        {/* Media contact */}
        <section className="py-20 md:py-24">
          <div className="container-tight max-w-4xl mx-auto">
            <div className="card-ember p-8 md:p-10 mb-12 flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-2">
                  MEDIA CONTACT
                </p>
                <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] mb-2 tracking-tight">
                  Interviews, quotes, b-roll, and background
                </h2>
                <p className="text-[14px] text-[#1A1A1A]/72 leading-relaxed max-w-xl">
                  Email our team for interview requests, quotes, photo
                  clearance, and background. We respond to media inquiries
                  within 24 hours.
                </p>
              </div>
              <a
                href="mailto:press@theforgedbyfire.org"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full"
              >
                <Mail size={15} />
                press@theforgedbyfire.org
              </a>
            </div>

            {/* Boilerplate */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#E85D23]/10 flex items-center justify-center">
                  <Quote size={16} className="text-[#E85D23]" />
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] tracking-tight">
                  Organization boilerplate
                </h2>
              </div>
              <div className="card-light p-7 md:p-8">
                <p className="text-[14px] text-[#1A1A1A]/80 leading-relaxed italic">
                  {boilerplate}
                </p>
              </div>
            </div>

            {/* Founder bio */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#E85D23]/10 flex items-center justify-center">
                  <Camera size={16} className="text-[#E85D23]" />
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] tracking-tight">
                  Short founder bio
                </h2>
              </div>
              <div className="card-light p-7 md:p-8">
                <p className="text-[14px] text-[#1A1A1A]/80 leading-relaxed italic">
                  {shortBio}
                </p>
              </div>
            </div>

            {/* Downloads */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#E85D23]/10 flex items-center justify-center">
                  <Download size={16} className="text-[#E85D23]" />
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] tracking-tight">
                  Logo & brand downloads
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/fbf-logo.png"
                  download
                  className="card-light p-6 flex items-center gap-4 hover:border-[#E85D23]/30 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#1A1A1A] shrink-0">
                    <Image src="/fbf-logo.png" alt="FBF Logo" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-[#1A1A1A]">Phoenix mark (PNG)</p>
                    <p className="text-[11px] text-[#1A1A1A]/50 mt-0.5">1024×1024 · transparent background variant available on request</p>
                  </div>
                  <Download size={16} className="text-[#1A1A1A]/30 group-hover:text-[#E85D23] transition-colors" />
                </a>
                <a
                  href="/founder-portrait.png"
                  download
                  className="card-light p-6 flex items-center gap-4 hover:border-[#E85D23]/30 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#1A1A1A] shrink-0">
                    <Image src="/founder-portrait.png" alt="Lt. Donald Coleman Jr." width={64} height={64} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-[#1A1A1A]">Founder portrait (PNG)</p>
                    <p className="text-[11px] text-[#1A1A1A]/50 mt-0.5">Formal dress-uniform portrait of Lt. Donald Coleman Jr.</p>
                  </div>
                  <Download size={16} className="text-[#1A1A1A]/30 group-hover:text-[#E85D23] transition-colors" />
                </a>
              </div>
              <p className="text-[12px] text-[#1A1A1A]/50 mt-4">
                Additional asset requests (vector logos, b-roll, high-res photos). Email press@theforgedbyfire.org.
              </p>
            </div>

            {/* Brand quick facts */}
            <div className="card-glass p-7 md:p-8">
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-4 tracking-tight">
                Quick facts
              </h3>
              <dl className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-[13px]">
                <div className="flex justify-between border-b border-[#1A1A1A]/8 pb-2">
                  <dt className="text-[#1A1A1A]/55">Organization name</dt>
                  <dd className="text-[#1A1A1A] font-medium">Forged By Fire</dd>
                </div>
                <div className="flex justify-between border-b border-[#1A1A1A]/8 pb-2">
                  <dt className="text-[#1A1A1A]/55">Founded</dt>
                  <dd className="text-[#1A1A1A] font-medium">2015</dd>
                </div>
                <div className="flex justify-between border-b border-[#1A1A1A]/8 pb-2">
                  <dt className="text-[#1A1A1A]/55">Location</dt>
                  <dd className="text-[#1A1A1A] font-medium">Springfield, MA</dd>
                </div>
                <div className="flex justify-between border-b border-[#1A1A1A]/8 pb-2">
                  <dt className="text-[#1A1A1A]/55">Founder</dt>
                  <dd className="text-[#1A1A1A] font-medium">Lt. Donald Coleman Jr.</dd>
                </div>
                <div className="flex justify-between border-b border-[#1A1A1A]/8 pb-2">
                  <dt className="text-[#1A1A1A]/55">501(c)(3) status</dt>
                  <dd className="text-[#1A1A1A] font-medium">Pending</dd>
                </div>
                <div className="flex justify-between border-b border-[#1A1A1A]/8 pb-2">
                  <dt className="text-[#1A1A1A]/55">Tagline</dt>
                  <dd className="text-[#1A1A1A] font-medium">Every Little Bit Counts</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#1A1A1A]/55">Primary service area</dt>
                  <dd className="text-[#1A1A1A] font-medium">Springfield, MA</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#1A1A1A]/55">Key partner</dt>
                  <dd className="text-[#1A1A1A] font-medium">Springfield Fire Department</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
