"use client";

import { Heart, MapPin, Mail } from "lucide-react";
import Image from "next/image";

const servicesLinks = [
  { label: "Emergency Resources", href: "/services#emergency" },
  { label: "Transitional Housing", href: "/services#housing" },
  { label: "Our 4-Step Process", href: "/process" },
  { label: "Request Support", href: "/contact" },
];

const involvedLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate Items", href: "/donate" },
  { label: "Partner With Us", href: "/contact" },
];

const orgLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Leadership & Board", href: "/leadership" },
  { label: "Financials", href: "/financials" },
  { label: "Annual Report", href: "/annual-report" },
  { label: "Press & Media Kit", href: "/press" },
];

const resourcesLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "News & Updates", href: "/news" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Nondiscrimination", href: "/nondiscrimination" },
  { label: "Donor Bill of Rights", href: "/donor-rights" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 bg-[#F5F0EA]" role="contentinfo">
      <div className="section-divider mb-16" />
      <div className="container-tight">
        <div className="grid md:grid-cols-6 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/fbf-logo.png"
                alt="Forged By Fire"
                width={36}
                height={36}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold tracking-tight text-[#1A1A1A]">
                Forged By Fire
              </h3>
            </div>
            <p className="text-[13px] text-[#1A1A1A]/55 leading-relaxed mb-5 max-w-xs">
              Emergency resources and transitional housing for Springfield, MA
              families after house fires. Firefighter-founded, community-accountable.
              Every little bit counts.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#1A1A1A]/45 mb-2">
              <MapPin size={11} />
              <span>Springfield, Massachusetts</span>
            </div>
            <a
              href="mailto:contact@forgedbyfire.org"
              className="flex items-center gap-1.5 text-[11px] text-[#1A1A1A]/45 hover:text-[#E85D23] transition-colors"
            >
              <Mail size={11} />
              <span>contact@forgedbyfire.org</span>
            </a>
            <p className="text-[10px] text-[#1A1A1A]/30 mt-3 uppercase tracking-widest">
              Est. 2015 · 501(c)(3) Pending
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#1A1A1A]/55 hover:text-[#E85D23] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4 font-semibold">
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {involvedLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#1A1A1A]/55 hover:text-[#E85D23] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4 font-semibold">
              Organization
            </h4>
            <ul className="space-y-2.5">
              {orgLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#1A1A1A]/55 hover:text-[#E85D23] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4 font-semibold">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#1A1A1A]/55 hover:text-[#E85D23] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Donate CTA strip */}
        <div className="card-ember px-6 py-6 md:px-10 md:py-7 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-1.5">
              Rising from the ashes, together
            </p>
            <h4 className="text-lg md:text-xl font-medium text-[#1A1A1A] tracking-tight">
              Your donation delivers support to a Springfield family within 48 hours.
            </h4>
          </div>
          <a
            href="/donate"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#E85D23] hover:bg-[#C84914] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)]"
          >
            <Heart size={14} className="fill-white" />
            Donate Now
          </a>
        </div>

        {/* Legal row */}
        <div className="border-t border-[#1A1A1A]/8 pt-6 pb-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[11px] text-[#1A1A1A]/45 hover:text-[#1A1A1A]/80 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#1A1A1A]/35 text-center md:text-left">
            <p>&copy; {year} Forged By Fire. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-[#1A1A1A]/25">
              Forged By Fire&apos;s 501(c)(3) status is pending. Donations may
              become tax-deductible once status is formally confirmed.
            </p>
          </div>
          <a
            href="https://elevenviews.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#1A1A1A]/25 hover:text-[#1A1A1A]/55 transition-colors duration-300"
          >
            Designed by Eleven Views
          </a>
        </div>
      </div>
    </footer>
  );
}
