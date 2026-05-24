import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Clock, Phone, Mail, MapPin, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Öffnungszeiten – Landgasthof Linde Niederhofen",
  description: "Unsere Öffnungszeiten, Adresse und Kontaktdaten. Reservierungen unter 0176 62960837.",
};

const hours = [
  { day: "Montag", lunch: "12:00–14:00 Uhr", dinner: "17:30–21:30 Uhr", open: true },
  { day: "Dienstag", lunch: "–", dinner: "–", open: false, note: "Ruhetag" },
  { day: "Mittwoch", lunch: "–", dinner: "–", open: false, note: "Ruhetag" },
  { day: "Donnerstag", lunch: "–", dinner: "–", open: false, note: "Ruhetag" },
  { day: "Freitag", lunch: "12:00–14:00 Uhr", dinner: "17:30–21:30 Uhr", open: true },
  { day: "Samstag", lunch: "–", dinner: "17:30–21:30 Uhr", open: true },
  { day: "Sonntag", lunch: "12:00–15:00 Uhr", dinner: "17:30–20:30 Uhr", open: true },
];

export default function OeffnungszeitenPage() {
  return (
    <>
      <PageHeader
        title="Öffnungszeiten"
        subtitle="Wir freuen uns auf Ihren Besuch – schauen Sie einfach vorbei oder reservieren Sie Ihren Tisch."
        tag="Wann wir für Sie da sind"
      />

      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Hours table */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDD0]/50 overflow-hidden mb-8">
            <div className="grid grid-cols-3 bg-[#2A4A2E] px-6 py-3 text-white/60 text-xs tracking-widest uppercase">
              <span>Wochentag</span>
              <span className="text-center">Mittags</span>
              <span className="text-right">Abends</span>
            </div>
            {hours.map(({ day, lunch, dinner, open, note }) => (
              <div
                key={day}
                className={`grid grid-cols-3 items-center px-6 py-4 border-b border-[#E8DDD0]/40 last:border-0 ${
                  !open ? "bg-[#FAF7F2]/50" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${open ? "bg-[#2A4A2E]" : "bg-[#1C1C1C]/20"}`} />
                  <span className={`font-medium text-sm ${open ? "text-[#1C1C1C]" : "text-[#1C1C1C]/40"}`}>
                    {day}
                  </span>
                </div>
                <span className={`text-sm text-center ${open ? "text-[#1C1C1C]/70" : "text-[#1C1C1C]/25"}`}>
                  {note ?? lunch}
                </span>
                <span className={`text-sm text-right ${open ? "text-[#1C1C1C]/70" : "text-[#1C1C1C]/25"}`}>
                  {open ? dinner : ""}
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="flex items-start gap-3 bg-[#B8922A]/10 border border-[#B8922A]/20 rounded-xl px-5 py-4 mb-12 text-sm text-[#1C1C1C]/70">
            <AlertCircle size={16} className="text-[#B8922A] mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-[#1C1C1C]">Hinweis:</strong> Die Küche schließt abends 30 Minuten vor der angegebenen Zeit.
              An Feiertagen (z. B. 1. Mai) kann der Mittagstisch entfallen. Gruppen ab 15 Personen können auch dienstags–donnerstags
              nach Absprache reservieren.
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A2E] rounded-2xl p-7 text-white">
              <h2 className="font-serif text-xl font-bold mb-5">Reservierung</h2>
              <div className="space-y-4">
                <a href="tel:017662960837" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-[#B8922A]/20 flex items-center justify-center group-hover:bg-[#B8922A] transition-colors">
                    <Phone size={15} className="text-[#D4A843] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">Telefon</div>
                    <div className="text-white font-medium text-sm">0176 62960837</div>
                  </div>
                </a>
                <a href="mailto:info@linde-niederhofen.de" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-[#B8922A]/20 flex items-center justify-center group-hover:bg-[#B8922A] transition-colors">
                    <Mail size={15} className="text-[#D4A843] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">E-Mail</div>
                    <div className="text-white font-medium text-sm">info@linde-niederhofen.de</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#E8DDD0]/50 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-[#1C1C1C] mb-5">Anfahrt</h2>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2A4A2E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#2A4A2E]" />
                </div>
                <div>
                  <div className="text-[#1C1C1C]/50 text-xs mb-0.5">Adresse</div>
                  <div className="text-[#1C1C1C] font-medium text-sm mb-3">
                    Lindenstraße 20<br />74193 Schwaigern
                  </div>
                  <a
                    href="https://maps.google.com/?q=Lindenstraße+20+74193+Schwaigern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#B8922A] hover:text-[#2A4A2E] text-xs font-medium transition-colors"
                  >
                    In Google Maps öffnen →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
