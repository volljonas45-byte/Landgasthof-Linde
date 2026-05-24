"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#kueche",       label: "Küche" },
  { href: "#speisekarte",  label: "Speisekarte" },
  { href: "#aktuelles",    label: "Aktuelles" },
  { href: "#reservierung", label: "Reservierung" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#0C1810]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <span
              style={{ fontFamily: "var(--font-great-vibes)" }}
              className="text-[1.9rem] text-white/90 group-hover:text-white transition-colors duration-300 leading-none"
            >
              Linde
            </span>
            <div className="h-5 w-px bg-white/15 group-hover:bg-white/25 transition-colors duration-300" />
            <span className="font-sans text-[7.5px] tracking-[0.3em] text-white/30 uppercase font-medium">
              Landgasthof
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#reservierung"
              className="border border-white/20 hover:border-white/50 text-white/60 hover:text-white text-[11px] tracking-[0.15em] uppercase font-medium px-5 py-2 transition-all duration-300 whitespace-nowrap"
            >
              Reservieren
            </a>
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/70 hover:text-white p-1 transition-colors"
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0C1810] border-t border-white/5">
          <nav className="flex flex-col px-5 py-6 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[12px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors font-medium border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:017662960837"
              className="mt-4 text-center py-3 border border-white/15 text-white/60 text-[12px] tracking-[0.12em] uppercase font-medium"
            >
              0176 62960837
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
