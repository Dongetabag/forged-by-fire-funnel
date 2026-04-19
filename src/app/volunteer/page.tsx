"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { motion } from "framer-motion";
import { Package, Truck, Megaphone, Briefcase, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

// NOTE: page-level metadata can't be exported from a "use client" file.
// Volunteer metadata is handled by the layout template + the homepage link.

const volunteerPaths = [
  {
    icon: Package,
    title: "Sort & Package Donations",
    time: "2 to 4 hours / month",
    desc: "We receive clothing and essentials constantly. Volunteers help sort, size, and package items into family-ready kits in our transitional housing unit.",
  },
  {
    icon: Truck,
    title: "Deliver Support Packages",
    time: "1 delivery per call",
    desc: "When a Springfield family needs a package, a volunteer helps deliver it, often the first human contact after the fire. Warm, respectful, practical.",
  },
  {
    icon: Megaphone,
    title: "Share Our Story",
    time: "5 minutes",
    desc: "The most valuable volunteer work is word-of-mouth. Share our site, post our story, tell a neighbor. Awareness is how families find us.",
  },
  {
    icon: Briefcase,
    title: "Skills-Based Volunteering",
    time: "Project-based",
    desc: "Accountants for bookkeeping, lawyers for 501(c)(3) filing, designers for materials, developers for tooling, writers for outreach. If you have a skill, we have a need.",
  },
];

export default function VolunteerPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: "I'd like to volunteer",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-[#1A1A1A]/12 rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/35 transition-all duration-300 focus:border-[#E85D23]/50 outline-none";

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Volunteer"
          title="Springfield takes care of"
          highlight="its own."
          subtitle="Forged By Fire runs on community. Donations fund the packages. volunteers are how they actually reach families."
          image="/images/community-cleanup.jpg"
          imageAlt="Volunteers helping a family clean up after a fire"
        />

        {/* Paths */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                WAYS TO HELP
              </p>
              <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                Four paths. All of them matter.
              </h2>
              <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed mt-4 max-w-xl mx-auto">
                Whether you have two hours a month or a highly specialized
                skill. there&apos;s a way you can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {volunteerPaths.map((p) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-light p-7 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center shrink-0">
                      <p.icon size={20} className="text-[#E85D23]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight mb-1">
                        {p.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-[#9B2F0A] font-semibold">
                        {p.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community impact image strip */}
        <section className="py-16 md:py-20 bg-[#FBF8F4]">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div>
                <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                  WHY YOUR TIME MATTERS
                </p>
                <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] mb-5 leading-[1.15]">
                  You&apos;re often the first human-feeling contact a family has after the fire.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed mb-4">
                  When a volunteer delivers a support package, they&apos;re not
                  dropping off a box. They&apos;re showing a family that
                  Springfield sees them. That people they don&apos;t know are
                  showing up with care.
                </p>
                <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed">
                  That&apos;s the quiet power of this work. Donations move
                  money. Volunteers move trust.
                </p>
              </div>
              <div className="img-card aspect-[4/3] relative">
                <Image src="/images/community-helping.jpg" alt="Community members helping after a fire" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* Signup form */}
        <section className="py-20 md:py-24">
          <div className="container-tight">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">
                  SIGN UP
                </p>
                <h2 className="text-[28px] md:text-[34px] font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
                  Ready to pitch in?
                </h2>
                <p className="text-[14px] text-[#1A1A1A]/55 mt-3">
                  Tell us a bit about yourself and how you&apos;d like to help.
                  We&apos;ll reach out within 24 hours.
                </p>
              </div>

              {status === "success" ? (
                <div className="card-ember p-10 text-center">
                  <CheckCircle2 size={48} className="mx-auto mb-4 text-[#E85D23]" />
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">
                    Thank you for stepping up.
                  </h3>
                  <p className="text-[14px] text-[#1A1A1A]/65">
                    We&apos;ll reach out within 24 hours to get you plugged in.
                    Welcome to Forged By Fire.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-light p-7 md:p-9 space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/55 mb-1.5 block">
                        Name *
                      </label>
                      <input name="name" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/55 mb-1.5 block">
                        Email *
                      </label>
                      <input name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/55 mb-1.5 block">
                      Phone (optional)
                    </label>
                    <input name="phone" type="tel" placeholder="(413) 555-0100" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/55 mb-1.5 block">
                      How would you like to help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your availability, skills, or what you're drawn to. sorting donations, deliveries, skills-based work, etc."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300 disabled:opacity-50 shadow-[0_4px_16px_rgba(232,93,35,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,35,0.38)]"
                  >
                    {status === "sending" ? "Sending..." : status === "error" ? "Try again" : "Sign Up to Volunteer"}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11px] text-[#1A1A1A]/40 text-center">
                    We respond within 24 hours · Springfield, MA
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <Heart size={28} className="mx-auto mb-4 text-[#E85D23]" />
            <h3 className="text-2xl font-normal text-white mb-4 tracking-tight">
              Can&apos;t volunteer right now? Donations still move the mission forward.
            </h3>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300"
            >
              Donate Instead
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
