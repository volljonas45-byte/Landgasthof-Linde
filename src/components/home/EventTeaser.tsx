import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

const events = [
  {
    date: "14. Mai 2026",
    title: "Vatertag",
    desc: "Durchgehend 10–20 Uhr geöffnet. Weißwurstfrühstück ab 10 Uhr, Bierbraten, Grillteller und mehr.",
    tag: "Feiertag",
  },
  {
    date: "24.–25. Mai 2026",
    title: "Niederhofener Jagd – Pfingsten",
    desc: "Maibock und Pfingstwochenende! Sonntag & Montag ab 12 Uhr geöffnet. Reservierung erforderlich.",
    tag: "Sonderöffnung",
  },
];

export default function EventTeaser() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#B8922A] text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-px bg-[#B8922A]" />
              Kommende Termine
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-bold">
              Aktuelles & Events
            </h2>
          </div>
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-2 text-[#2A4A2E] hover:text-[#B8922A] font-medium text-sm transition-colors group flex-shrink-0"
          >
            Alle Events anzeigen
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(({ date, title, desc, tag }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DDD0]/50 hover:shadow-md hover:border-[#B8922A]/20 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-[#2A4A2E] to-[#B8922A]" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-[#B8922A] text-xs font-medium">
                    <CalendarDays size={14} />
                    {date}
                  </div>
                  <span className="bg-[#2A4A2E]/10 text-[#2A4A2E] text-xs font-medium px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#2A4A2E] transition-colors">
                  {title}
                </h3>
                <p className="text-[#1C1C1C]/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
