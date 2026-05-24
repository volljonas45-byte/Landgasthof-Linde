import Link from "next/link";
import { ArrowRight } from "lucide-react";

const dishes = [
  { date: "Montag, 4.5.", dish: "Sommerlicher Salatteller mit Hähnchenbrust und Baguette" },
  { date: "Freitag, 8.5.", dish: "Hackbraten mit Spinat-Spargelgemüse und Nudeln" },
  { date: "Montag, 11.5.", dish: "Schwäbische Lasagne mit Salat" },
  { date: "Freitag, 15.5.", dish: "Grillteller mit Pommes Frites" },
  { date: "Montag, 18.5.", dish: "Schaschlik-Gulasch mit Kroketten und Salat" },
  { date: "Freitag, 22.5.", dish: "Lachsfilet aus dem Ofen mit Rosmarinkartoffeln und Salat" },
  { date: "Donnerstag, 29.5.", dish: "Hausgemachte Schweine-Roulade mit Petersilienkartoffeln und Salat" },
];

export default function Mittagstisch() {
  return (
    <section className="bg-[#2A4A2E] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8922A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8922A]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#D4A843] text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-px bg-[#D4A843]" />
              Täglich frisch
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
              Mittagstisch
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Jeden <strong className="text-white">Montag und Freitag</strong> von{" "}
              <strong className="text-white">12:00 bis 14:00 Uhr</strong> bieten wir
              ein wechselndes Tagesmenü an – frisch zubereitet, mit Salat serviert.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">Preis pro Gericht</span>
                <span className="text-[#D4A843] font-serif text-2xl font-bold">11,50 €</span>
              </div>
              <p className="text-white/50 text-xs">inkl. Salat · auch vegetarische Option erhältlich</p>
            </div>
            <Link
              href="/speisekarte"
              className="inline-flex items-center gap-2 text-[#D4A843] hover:text-white font-medium text-sm transition-colors group"
            >
              Zur vollständigen Speisekarte
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Dish list */}
          <div className="space-y-2">
            {dishes.map(({ date, dish }) => (
              <div
                key={date}
                className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl px-4 py-3.5 transition-colors group"
              >
                <div className="flex-shrink-0 w-28 text-[#D4A843] text-xs font-medium mt-0.5">
                  {date}
                </div>
                <div className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {dish}
                </div>
              </div>
            ))}
            <p className="text-white/30 text-xs px-1 pt-1">
              * Kein Mittagstisch am 1. Mai und Pfingstmontag
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
