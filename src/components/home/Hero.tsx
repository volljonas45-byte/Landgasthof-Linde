"use client";

import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8922A] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#B8922A]/20 border border-[#B8922A]/40 text-[#D4A843] text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          Herzlich Willkommen
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-tight mb-4">
          Landgasthof{" "}
          <span className="text-[#D4A843] italic">Linde</span>
        </h1>

        <p className="text-white/70 text-base sm:text-lg tracking-widest uppercase mb-6">
          Niederhofen · Schwaigern
        </p>

        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Schwäbische Küche mit Herzblut – frische Zutaten, hausgemachte
          Gerichte und eine Atmosphäre, in der Sie sich sofort wie zu Hause
          fühlen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:017662960837"
            className="inline-flex items-center justify-center gap-2 bg-[#B8922A] hover:bg-[#D4A843] text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm shadow-lg shadow-[#B8922A]/30"
          >
            <Phone size={16} />
            Tisch reservieren
          </a>
          <Link
            href="/speisekarte"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm backdrop-blur-sm"
          >
            Zur Speisekarte
          </Link>
        </div>

        {/* Opening hint */}
        <div className="mt-12 inline-flex items-center gap-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
          <div className="text-center">
            <div className="text-[#D4A843] text-xs tracking-widest uppercase mb-1">Mittagstisch</div>
            <div className="text-white text-sm font-medium">Mo & Fr · 12–14 Uhr</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[#D4A843] text-xs tracking-widest uppercase mb-1">Abends</div>
            <div className="text-white text-sm font-medium">Ab 17:30 Uhr</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[#D4A843] text-xs tracking-widest uppercase mb-1">Ruhetag</div>
            <div className="text-white text-sm font-medium">Di – Do</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/90 transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
