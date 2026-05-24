const hours = [
  { day: "Montag & Freitag",      lunch: "12:00 – 14:00",  dinner: "17:30 – 21:30", open: true },
  { day: "Samstag",               lunch: "–",               dinner: "17:30 – 21:30", open: true },
  { day: "Sonntag",               lunch: "12:00 – 15:00",   dinner: "17:30 – 20:30", open: true },
  { day: "Dienstag – Donnerstag", lunch: "–",               dinner: "–",             open: false },
];

export default function Reservierung() {
  return (
    <section id="reservierung" className="bg-[#0C1810]">
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Öffnungszeiten */}
          <div>
            <p data-fade="" className="text-white/25 text-[10px] tracking-[0.35em] uppercase font-medium mb-5">
              Wann wir für Sie da sind
            </p>
            <h2 data-fade="" data-delay="1" className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-white leading-tight mb-12">
              Öffnungszeiten
            </h2>

            <div className="divide-y divide-white/[0.06]">
              {hours.map(({ day, lunch, dinner, open }, i) => (
                <div
                  key={day}
                  data-fade=""
                  data-delay={String(i + 2)}
                  className="grid grid-cols-[1fr_auto_auto] gap-6 items-center py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${open ? "bg-[#4A8A5A]" : "bg-white/12"}`} />
                    <span className={`text-sm font-light tracking-wide ${open ? "text-white/75" : "text-white/20"}`}>
                      {day}
                    </span>
                  </div>
                  <span className={`text-sm font-light tabular-nums ${open ? "text-white/35" : "text-white/12"}`}>
                    {lunch}
                  </span>
                  <span className={`text-sm font-light tabular-nums text-right ${open ? "text-white/55" : "text-white/12"}`}>
                    {open ? dinner : "Ruhetag"}
                  </span>
                </div>
              ))}
            </div>

            <p data-fade="" data-delay="6" className="text-white/20 text-[11px] tracking-wide mt-6 leading-relaxed">
              Die Küche schließt abends 30 Minuten früher.<br />
              Gruppen ab 15 Personen auch Di – Do auf Anfrage.
            </p>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p data-fade="" data-delay="1" className="text-white/25 text-[10px] tracking-[0.35em] uppercase font-medium mb-5">
                Kontakt & Reservierung
              </p>
              <h2 data-fade="" data-delay="2" className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-white leading-tight mb-10">
                Wir freuen uns<br /><em>auf Sie.</em>
              </h2>

              <div className="space-y-7">
                <div data-fade="" data-delay="3">
                  <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-1.5">Telefon</p>
                  <a
                    href="tel:017662960837"
                    className="font-serif text-2xl font-light text-white/80 hover:text-white transition-colors"
                  >
                    0176 62960837
                  </a>
                </div>
                <div data-fade="" data-delay="4">
                  <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-1.5">E-Mail</p>
                  <a
                    href="mailto:info@linde-niederhofen.de"
                    className="font-serif text-xl font-light text-white/55 hover:text-white/85 transition-colors"
                  >
                    info@linde-niederhofen.de
                  </a>
                </div>
                <div data-fade="" data-delay="5">
                  <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase mb-1.5">Adresse</p>
                  <address className="not-italic">
                    <p className="text-white/50 font-light leading-relaxed">
                      Lindenstraße 20<br />74193 Schwaigern
                    </p>
                  </address>
                </div>
              </div>
            </div>

            <a
              data-fade=""
              data-delay="6"
              href="tel:017662960837"
              className="group flex items-center justify-between border border-white/10 hover:border-white/30 hover:bg-white/[0.03] px-7 py-5 transition-all duration-300"
            >
              <span className="font-serif text-lg font-light text-white/70 group-hover:text-white transition-colors">
                Jetzt reservieren
              </span>
              <span className="text-white/25 group-hover:text-white/60 text-xl transition-colors">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full h-[360px] md:h-[420px] relative">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <iframe
          src="https://maps.google.com/maps?q=Lindenstra%C3%9Fe+20%2C+74193+Schwaigern&output=embed&z=15&hl=de"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(30%) contrast(95%) brightness(85%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Landgasthof Linde – Karte"
        />
      </div>
    </section>
  );
}
