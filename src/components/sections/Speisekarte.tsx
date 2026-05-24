const mittagstisch = [
  { date: "Mo, 4.5.",  dish: "Sommerlicher Salatteller mit Hähnchenbrust und Baguette" },
  { date: "Fr, 8.5.",  dish: "Hackbraten mit Spinat-Spargelgemüse und Nudeln" },
  { date: "Mo, 11.5.", dish: "Schwäbische Lasagne mit Salat" },
  { date: "Fr, 15.5.", dish: "Grillteller mit Pommes Frites" },
  { date: "Mo, 18.5.", dish: "Schaschlik-Gulasch mit Kroketten und Salat" },
  { date: "Fr, 22.5.", dish: "Lachsfilet aus dem Ofen mit Rosmarinkartoffeln und Salat" },
  { date: "Do, 29.5.", dish: "Hausgemachte Schweine-Roulade mit Petersilienkartoffeln und Salat" },
];

const speisekarte = [
  {
    name: "Hauspaniertes Schweineschnitzel mit Zitrone",
    desc: "Bratensoße oder Champignonrahm · mit Spätzle, hausgemachtem Kartoffelsalat, Pommes Frites oder Salat",
    price: "18,90 €",
    veg: false,
  },
  {
    name: "Cordon Bleu vom Schwein",
    desc: "Gefüllt mit herzhaftem Bergkäse & Schinken · Zitrone & Soße nach Wahl · mit Spätzle, Kartoffelsalat, Pommes Frites oder Salat",
    price: "22,90 €",
    veg: false,
  },
  {
    name: "Zwiebelrostbraten vom Black Angus Rind",
    desc: "Kräftige Soße, Schmorzwiebeln, junger Lauch & Spätzle",
    price: "29,00 €",
    veg: false,
  },
  {
    name: "Herzhafte Linsen-Tomatenbolognese",
    desc: "Hausgemachte Spätzle, Basilikum, Parmesanschnee & Salat",
    price: "16,90 €",
    veg: true,
  },
];

export default function Speisekarte() {
  return (
    <section id="speisekarte" className="bg-[#111D14]">
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-24 md:py-32">

        {/* Header */}
        <div data-fade="" className="text-center mb-20">
          <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase font-medium mb-6">
            Täglich frisch
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,6vw,5rem)] font-light text-white leading-none">
            Speise<em>karte</em>
          </h2>
        </div>

        {/* ── KLEINE SPEISEKARTE ── */}
        <div className="mb-20">
          <div data-fade="" data-delay="1" className="flex items-center gap-5 mb-10">
            <div className="h-px flex-1 bg-white/[0.07]" />
            <p className="text-white/25 text-[10px] tracking-[0.28em] uppercase font-medium whitespace-nowrap">
              Kleiner Auszug aus unserer Speisekarte
            </p>
            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="divide-y divide-white/[0.06]">
            {speisekarte.map(({ name, desc, price, veg }, i) => (
              <div
                key={name}
                data-fade=""
                data-delay={String(i + 2)}
                className="group py-6 hover:bg-white/[0.02] px-2 -mx-2 transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3 className="font-serif text-lg sm:text-xl font-light text-white/85 group-hover:text-white transition-colors leading-tight">
                        {name}
                      </h3>
                      {veg && (
                        <span className="flex-shrink-0 text-[9px] tracking-[0.15em] uppercase text-[#4A8A5A] border border-[#4A8A5A]/40 px-1.5 py-0.5 leading-none">
                          Vegetarisch
                        </span>
                      )}
                    </div>
                    <p className="text-white/35 text-sm font-light leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right pt-0.5">
                    <span className="font-serif text-xl font-light text-white/70 tabular-nums">
                      {price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div data-fade="" className="flex items-center gap-4 my-4">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <div className="w-1 h-1 rotate-45 bg-[#C49A2E]/40" />
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {/* ── AKTIONEN / MITTAGSTISCH ── */}
        <div className="mt-16">
          <div data-fade="" className="flex items-center gap-5 mb-8">
            <div className="h-px flex-1 bg-white/[0.07]" />
            <div className="text-center">
              <p className="text-white/25 text-[10px] tracking-[0.28em] uppercase font-medium whitespace-nowrap">
                Aktionen · Mittagstisch Mai 2026
              </p>
              <p className="text-white/15 text-[10px] tracking-wide mt-0.5">
                Montag & Freitag · 12–14 Uhr · 11,50 € inkl. Salat
              </p>
            </div>
            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="divide-y divide-white/[0.05]">
            {mittagstisch.map(({ date, dish }, i) => (
              <div
                key={date}
                data-fade=""
                data-delay={String(i + 1)}
                className="group flex items-baseline justify-between gap-6 py-4 hover:bg-white/[0.03] px-2 -mx-2 transition-colors"
              >
                <span className="text-white/30 text-xs tracking-[0.08em] font-medium whitespace-nowrap flex-shrink-0 w-20">
                  {date}
                </span>
                <span className="text-white/60 group-hover:text-white/85 text-sm sm:text-base font-light leading-snug flex-1 transition-colors">
                  {dish}
                </span>
                <span className="text-white/25 text-sm font-light tabular-nums flex-shrink-0">
                  11,50 €
                </span>
              </div>
            ))}
          </div>
          <p data-fade="" className="text-white/15 text-[11px] tracking-wide mt-4 text-right">
            Inkl. Salat · auch vegetarisch erhältlich · kein Mittagstisch am 1. Mai & Pfingstmontag
          </p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
