import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { CalendarDays, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Aktuelles & Events – Landgasthof Linde Niederhofen",
  description: "Aktuelle Veranstaltungen, Events und Sonderöffnungen im Landgasthof Linde Niederhofen.",
};

const events = [
  {
    date: "8. Mai 2026",
    title: "Jahrgangs-Präsentation Traubenwerkstatt Niederhofen",
    time: "Ab 16:00 Uhr (Ottilienhöfen 3) · Essen ab 17:00 Uhr",
    desc: "Wir sorgen für die Verpflegung bei der Jahrgangs-Präsentation der Traubenwerkstatt Niederhofen. Bitte beachten: Das Restaurant ist an diesem Tag geschlossen.",
    tag: "Externer Event",
    closed: true,
  },
  {
    date: "14. Mai 2026 – Vatertag",
    title: "Vatertag – Großer Familientag",
    time: "10:00–20:00 Uhr durchgehend geöffnet",
    desc: "Starten Sie mit einem Weißwurstfrühstück von 10–12 Uhr. Ab Mittag gibt es Bierbraten, Grillteller mit Berner Speck-Käsewurst und panierte Kotelette.",
    tag: "Feiertag",
    menu: ["Weißwurstfrühstück (10–12 Uhr)", "Bierbraten", "Grillteller mit Berner Speck-Käsewurst", "Panierte Kotelette"],
  },
  {
    date: "24.–25. Mai 2026 – Pfingsten",
    title: "Niederhofener Jagd – Pfingst-Spezialmenü",
    time: "Sonntag & Montag ab 12:00 Uhr geöffnet",
    desc: "Genießen Sie an Pfingsten unseren Maibock im Rahmen der Niederhofener Jagd. Tischreservierung ist erforderlich – bitte frühzeitig anrufen.",
    tag: "Sonderöffnung",
    reservation: true,
  },
];

export default function AktuellesPage() {
  return (
    <>
      <PageHeader
        title="Aktuelles & Events"
        subtitle="Besondere Veranstaltungen, Feiertags-Sonderöffnungen und aktuelle Neuigkeiten aus dem Landgasthof Linde."
        tag="Termine & Events"
      />

      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {events.map(({ date, title, time, desc, tag, menu, reservation, closed }) => (
              <article
                key={title}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DDD0]/50 shadow-sm"
              >
                <div className={`h-1.5 ${closed ? "bg-[#E8DDD0]" : "bg-gradient-to-r from-[#2A4A2E] to-[#B8922A]"}`} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 text-[#B8922A] text-xs font-medium">
                      <CalendarDays size={13} />
                      {date}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      closed
                        ? "bg-red-50 text-red-500"
                        : "bg-[#2A4A2E]/10 text-[#2A4A2E]"
                    }`}>
                      {closed ? "Restaurant geschlossen" : tag}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1C1C1C] mb-2">
                    {title}
                  </h2>

                  <div className="flex items-center gap-2 text-[#1C1C1C]/50 text-sm mb-4">
                    <Clock size={13} />
                    {time}
                  </div>

                  <p className="text-[#1C1C1C]/70 text-sm leading-relaxed mb-4">{desc}</p>

                  {menu && (
                    <div className="bg-[#FAF7F2] rounded-xl p-4 mb-4">
                      <div className="text-xs text-[#1C1C1C]/50 uppercase tracking-wider mb-2">Angebot</div>
                      <ul className="space-y-1.5">
                        {menu.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-[#1C1C1C]/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B8922A] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {reservation && (
                    <a
                      href="tel:017662960837"
                      className="inline-flex items-center gap-2 bg-[#B8922A] hover:bg-[#D4A843] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
                    >
                      <Phone size={14} />
                      Jetzt reservieren – 0176 62960837
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
