"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Volunteer", href: "/volunteer" },
];

const RIGHT_LINKS = [
  { label: "Contact", href: "/contact" },
];

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden inline-block"
      style={{ height: "16px" }}
    >
      <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
        <span className="text-[11px] leading-[16px] uppercase tracking-widest text-[#1A1A1A]/55 transition-colors duration-300 whitespace-nowrap">
          {label}
        </span>
        <span className="text-[11px] leading-[16px] uppercase tracking-widest text-[#1A1A1A] whitespace-nowrap" aria-hidden>
          {label}
        </span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0EA]/92 backdrop-blur-md border-b border-[#1A1A1A]/6">
      <nav className="container-tight">
        <div className="flex items-center justify-between h-[80px]">
          {/* Left — Logo + Nav Links */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/fbf-logo.png"
                alt="Forged By Fire"
                width={40}
                height={40}
                className="rounded-md"
                priority
              />
              <span className="text-[15px] font-semibold tracking-tight text-[#1A1A1A] hidden sm:inline">
                Forged By Fire
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.href} label={link.label} href={link.href} />
              ))}
            </div>
          </div>

          {/* Right — Contact + Donate CTA */}
          <div className="hidden md:flex items-center gap-8">
            {RIGHT_LINKS.map((link) => (
              <NavItem key={link.href} label={link.label} href={link.href} />
            ))}
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E85D23] hover:bg-[#C84914] rounded-full text-[11px] uppercase tracking-widest text-white font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)] hover:shadow-[0_6px_20px_rgba(232,93,35,0.38)]"
            >
              <Heart size={13} className="fill-white" />
              Donate Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#1A1A1A]/70"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="md:hidden overflow-hidden bg-[#F5F0EA] border-t border-[#1A1A1A]/8"
          >
            <div className="container-tight py-6 flex flex-col gap-4">
              {[...NAV_LINKS, ...RIGHT_LINKS].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#1A1A1A]/65 hover:text-[#1A1A1A] py-2 transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E85D23] hover:bg-[#C84914] rounded-full text-[11px] uppercase tracking-widest text-white font-semibold transition-all duration-300 text-center"
              >
                <Heart size={13} className="fill-white" />
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
