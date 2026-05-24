const events = [
  {
    date: "14. Mai 2026",
    tag: "Feiertag",
    title: "Vatertag",
    body: "Durchgehend 10–20 Uhr geöffnet. Weißwurstfrühstück von 10–12 Uhr, anschließend Bierbraten, Grillteller mit Berner Speck-Käsewurst und panierte Kotelette.",
    reservation: false,
    closed: false,
  },
  {
    date: "24.–25. Mai 2026",
    tag: "Pfingsten",
    title: "Niederhofener Jagd",
    body: "Maibock-Spezialmenü zu Pfingsten. Sonntag & Montag ab 12 Uhr geöffnet. Tischreservierung erforderlich – wir freuen uns auf Ihren Anruf.",
    reservation: true,
    closed: false,
  },
  {
    date: "8. Mai 2026",
    tag: "Externer Event",
    title: "Traubenwerkstatt Niederhofen",
    body: "Jahrgangs-Präsentation der Traubenwerkstatt. Wir sorgen für die Verpflegung. Beginn 16 Uhr, Ottilienhöfen 3. Das Restaurant ist an diesem Tag geschlossen.",
    reservation: false,
    closed: true,
  },
];

export default function Aktuelles() {
  return (
    <section id="aktuelles" className="bg-[#F7F2EA]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-24 md:py-32">

        <div data-fade="" className="text-center mb-16">
          <p className="text-[#1E3D26]/40 text-[10px] tracking-[0.35em] uppercase font-medium mb-5">
            Termine & Events
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,6vw,5rem)] font-light text-[#0C1810] leading-none">
            Aktuelles
          </h2>
        </div>

        <div className="space-y-px">
          {events.map(({ date, tag, title, body, reservation, closed }, i) => (
            <div
              key={title}
              data-fade=""
              data-delay={String(i + 1)}
              className={`group flex flex-col md:flex-row gap-6 md:gap-12 p-7 md:p-10 border-l-[1.5px] transition-all duration-300 ${
                closed
                  ? "border-[#C8BFB0] bg-[#EDE5D5]/40"
                  : "border-[#1E3D26]/20 bg-white hover:border-[#1E3D26]/50 hover:shadow-[0_2px_30px_rgba(30,61,38,0.06)]"
              }`}
            >
              <div className="flex-shrink-0 md:w-44">
                <p className="text-[#1E3D26]/50 text-[10px] tracking-[0.2em] uppercase font-medium mb-1.5">{date}</p>
                <p className={`text-[10px] tracking-[0.15em] uppercase font-medium ${closed ? "text-[#C8BFB0]" : "text-[#3D3328]/30"}`}>
                  {closed ? "Geschlossen" : tag}
                </p>
              </div>

              <div className="flex-1">
                <h3 className={`font-serif text-2xl font-light mb-3 ${closed ? "text-[#3D3328]/35" : "text-[#0C1810]"}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed font-light ${closed ? "text-[#3D3328]/30" : "text-[#3D3328]/60"}`}>
                  {body}
                </p>
                {reservation && (
                  <a
                    href="tel:017662960837"
                    className="inline-flex items-center gap-2 mt-5 text-[#1E3D26] text-[11px] tracking-[0.2em] uppercase font-medium hover:text-[#0C1810] transition-colors"
                  >
                    Jetzt reservieren →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
