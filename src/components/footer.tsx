"use client";

import { ArrowUpRight, Heart, MapPin } from "lucide-react";
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
  { label: "Founder's Message", href: "/about" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 bg-[#F5F0EA]">
      <div className="section-divider mb-16" />
      <div className="container-tight">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
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
            <p className="text-[13px] text-[#1A1A1A]/55 leading-relaxed mb-5">
              Emergency resources and transitional housing for Springfield families
              affected by house fires. Every little bit counts.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#1A1A1A]/45">
              <MapPin size={11} />
              <span>Springfield, Massachusetts</span>
            </div>
            <p className="text-[10px] text-[#1A1A1A]/30 mt-3 uppercase tracking-widest">
              Est. 2015
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4">
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
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4">
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
            <h4 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/42 mb-4">
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
              <li className="pt-2">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-1 text-[13px] text-[#1A1A1A]/55 hover:text-[#E85D23] transition-colors duration-300"
                >
                  Contact Us
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
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

        {/* Bottom bar */}
        <div className="border-t border-[#1A1A1A]/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#1A1A1A]/35 text-center sm:text-left">
            <p>&copy; {year} Forged By Fire. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-[#1A1A1A]/25">
              501(c)(3) pending. Donations may become tax-deductible once status is confirmed.
            </p>
          </div>
          <a
            href="https://madebyrecipe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#1A1A1A]/25 hover:text-[#1A1A1A]/55 transition-colors duration-300"
          >
            Built by Recipe Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
