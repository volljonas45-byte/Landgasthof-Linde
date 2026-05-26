import LindeScript from './LindeScript';
import { assetPath } from '@/lib/assetPath';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0C1810]">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url('${assetPath('/images/Screenshot%202026-05-22%20220359.png')}')` }}
      />
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1810]/70 via-transparent to-[#0C1810]" />
      {/* Subtle top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto w-full">

        {/* Eyebrow */}
        <p className="hero-eyebrow text-white/30 text-[10px] tracking-[0.4em] uppercase font-medium mb-10">
          Niederhofen · Schwaigern
        </p>

        {/* Headline */}
        <h1 className="leading-none mb-2">
          <span className="hero-title block font-serif font-light text-white/80 text-[clamp(2rem,6vw,4.5rem)] tracking-[0.05em] uppercase mb-1">
            Landgasthof
          </span>
          {/* SVG handwriting animation for "Linde" */}
          <LindeScript />
        </h1>

        {/* Thin rule */}
        <div className="hero-divider flex items-center justify-center gap-5 my-10">
          <div className="h-px w-14 bg-white/15" />
          <div className="w-1 h-1 rotate-45 bg-[#C49A2E]/50" />
          <div className="h-px w-14 bg-white/15" />
        </div>

        <p className="hero-sub text-white/45 text-base sm:text-lg font-light leading-relaxed max-w-md mx-auto mb-10 tracking-wide">
          Schwäbische Küche mit Herzblut –<br />
          hausgemacht, ehrlich, herzlich.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reservierung"
            className="inline-flex items-center justify-center bg-[#1E3D26] hover:bg-[#2D5A38] text-white text-[11px] tracking-[0.2em] uppercase font-semibold px-8 py-3.5 transition-all duration-300"
          >
            Tisch reservieren
          </a>
          <a
            href="#speisekarte"
            className="inline-flex items-center justify-center border border-white/15 hover:border-white/40 text-white/55 hover:text-white/90 text-[11px] tracking-[0.2em] uppercase font-medium px-8 py-3.5 transition-all duration-300"
          >
            Speisekarte
          </a>
        </div>

        {/* Quick info */}
        <div className="hero-info mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {[
            { label: "Mittagstisch", value: "Mo & Fr · 12–14 Uhr" },
            { label: "Abends",       value: "Ab 17:30 Uhr" },
            { label: "Ruhetag",      value: "Di – Do" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-1">{label}</p>
              <p className="text-white/40 text-sm font-light">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20 mx-auto" />
      </div>
    </section>
  );
}
