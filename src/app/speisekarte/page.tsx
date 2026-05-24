import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Leaf, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Speisekarte – Landgasthof Linde Niederhofen",
  description: "Unser aktueller Mittagstisch und unsere Speisekarte. Schwäbische Küche, frisch zubereitet.",
};

const mittagstisch = [
  { date: "Mo, 4.5.", dish: "Sommerlicher Salatteller mit Hähnchenbrust und Baguette", price: "11,50 €" },
  { date: "Fr, 8.5.", dish: "Hackbraten mit Spinat-Spargelgemüse und Nudeln", price: "11,50 €" },
  { date: "Mo, 11.5.", dish: "Schwäbische Lasagne mit Salat", price: "11,50 €" },
  { date: "Fr, 15.5.", dish: "Grillteller mit Pommes Frites", price: "11,50 €" },
  { date: "Mo, 18.5.", dish: "Schaschlik-Gulasch mit Kroketten und Salat", price: "11,50 €" },
  { date: "Fr, 22.5.", dish: "Lachsfilet aus dem Ofen mit Rosmarinkartoffeln und Salat", price: "11,50 €" },
  { date: "Do, 29.5.", dish: "Hausgemachte Schweine-Roulade mit Petersilienkartoffeln und Salat", price: "11,50 €" },
];

export default function SpeisekartePage() {
  return (
    <>
      <PageHeader
        title="Speisekarte"
        subtitle="Schwäbische Küche mit frischen Zutaten – hausgemacht und mit Herzblut zubereitet."
        tag="Was wir kochen"
      />

      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Mittagstisch */}
          <div className="mb-16">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-[#B8922A] text-xs tracking-widest uppercase mb-2">
                  <span className="w-6 h-px bg-[#B8922A]" />
                  Mai 2026
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
                  Mittagstisch
                </h2>
                <p className="text-[#1C1C1C]/60 text-sm mt-1">
                  Montag & Freitag · 12:00–14:00 Uhr · inkl. Salat
                </p>
              </div>
              <div className="flex-shrink-0 bg-[#2A4A2E] text-white text-center rounded-xl px-4 py-3">
                <div className="font-serif text-2xl font-bold">11,50</div>
                <div className="text-white/60 text-xs">Euro</div>
              </div>
            </div>

            <div className="space-y-2">
              {mittagstisch.map(({ date, dish, price }) => (
                <div
                  key={date}
                  className="group flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-[#E8DDD0]/50 hover:border-[#B8922A]/30 hover:shadow-sm transition-all"
                >
                  <div className="w-20 flex-shrink-0 text-[#B8922A] text-xs font-semibold">{date}</div>
                  <div className="flex-1 text-[#1C1C1C]/80 text-sm leading-relaxed group-hover:text-[#1C1C1C] transition-colors">
                    {dish}
                  </div>
                  <div className="flex-shrink-0 text-[#1C1C1C]/40 text-sm">{price}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 text-[#1C1C1C]/40 text-xs px-1">
              <Leaf size={12} className="text-[#2A4A2E]" />
              Täglich auch vegetarisches Tagesgericht für denselben Preis · Kein Mittagstisch am 1. Mai und Pfingstmontag
            </div>
          </div>

          {/* Kleine Karte Hinweis */}
          <div className="bg-[#2A4A2E] rounded-2xl p-8 text-white text-center">
            <h3 className="font-serif text-xl font-bold mb-2">Kleine Speisekarte</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Neben dem Mittagstisch bieten wir eine kleine, feine Karte mit schwäbischen Klassikern
              und saisonalen Gerichten an. Fragen Sie uns gerne nach dem aktuellen Angebot.
            </p>
            <a
              href="tel:017662960837"
              className="inline-flex items-center gap-2 bg-[#B8922A] hover:bg-[#D4A843] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              <Phone size={15} />
              Jetzt anfragen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
