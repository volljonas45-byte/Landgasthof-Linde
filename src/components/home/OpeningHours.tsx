import { Clock, Phone, MapPin } from "lucide-react";

const hours = [
  { day: "Montag & Freitag", time: "12:00–14:00 Uhr  &  17:30–21:30 Uhr", open: true },
  { day: "Samstag", time: "17:30–21:30 Uhr", open: true },
  { day: "Sonntag", time: "12:00–15:00 Uhr  &  17:30–20:30 Uhr", open: true },
  { day: "Dienstag – Donnerstag", time: "Ruhetag", open: false },
];

export default function OpeningHours() {
  return (
    <section className="bg-[#E8DDD0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hours */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#B8922A] text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-px bg-[#B8922A]" />
              Wann wir für Sie da sind
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-bold mb-8">
              Öffnungszeiten
            </h2>

            <div className="space-y-3">
              {hours.map(({ day, time, open }) => (
                <div
                  key={day}
                  className={`flex items-center justify-between rounded-xl px-5 py-4 ${
                    open ? "bg-white shadow-sm" : "bg-white/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${open ? "bg-[#2A4A2E]" : "bg-[#1C1C1C]/20"}`} />
                    <span className={`font-medium text-sm ${open ? "text-[#1C1C1C]" : "text-[#1C1C1C]/40"}`}>
                      {day}
                    </span>
                  </div>
                  <span className={`text-sm ${open ? "text-[#1C1C1C]/70" : "text-[#1C1C1C]/30 italic"}`}>
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[#1C1C1C]/50 text-xs mt-4 flex items-center gap-1.5">
              <Clock size={12} />
              Die Küche schließt abends 30 Minuten früher. Gruppen ab 15 Personen auch Di–Do möglich.
            </p>
          </div>

          {/* Right: Contact */}
          <div className="bg-[#2A4A2E] rounded-3xl p-8 md:p-10 text-white">
            <h3 className="font-serif text-2xl font-bold mb-2">Kontakt & Anfahrt</h3>
            <p className="text-white/60 text-sm mb-8">
              Reservierungen nehmen wir gerne telefonisch oder per E-Mail entgegen.
            </p>

            <div className="space-y-5">
              <a
                href="tel:017662960837"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B8922A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8922A] transition-colors">
                  <Phone size={16} className="text-[#D4A843] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-0.5">Telefon</div>
                  <div className="text-white font-medium text-sm">0176 62960837</div>
                </div>
              </a>

              <a
                href="mailto:info@linde-niederhofen.de"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B8922A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8922A] transition-colors">
                  <svg className="text-[#D4A843] group-hover:text-white transition-colors" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-0.5">E-Mail</div>
                  <div className="text-white font-medium text-sm">info@linde-niederhofen.de</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#B8922A]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#D4A843]" />
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-0.5">Adresse</div>
                  <div className="text-white font-medium text-sm">
                    Lindenstraße 20<br />74193 Schwaigern
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=Lindenstraße+20+74193+Schwaigern"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B8922A] hover:bg-[#D4A843] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors w-full justify-center"
              >
                In Google Maps öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
