import { Utensils, Heart, Calendar, Users } from "lucide-react";

const items = [
  {
    icon: Utensils,
    title: "Schwäbische Küche",
    desc: "Hausgemachte Gerichte mit regionalen Zutaten – von der Maultasche bis zur Schweine-Roulade.",
  },
  {
    icon: Heart,
    title: "Familiäre Atmosphäre",
    desc: "Seit Jahren ein Treffpunkt für Familien, Stammgäste und alle, die echte Gastfreundschaft schätzen.",
  },
  {
    icon: Calendar,
    title: "Mittagstisch",
    desc: "Jeden Montag und Freitag frische Tagesgerichte für 11,50 € inkl. Salat – auch vegetarisch.",
  },
  {
    icon: Users,
    title: "Gruppen & Events",
    desc: "Auch Di–Do öffnen wir gerne für Gruppen ab 15 Personen. Jetzt anfragen und Termin sichern.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#B8922A] text-xs tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-[#B8922A]" />
            Was uns ausmacht
            <span className="w-8 h-px bg-[#B8922A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-bold">
            Echte Gastfreundschaft
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-[#E8DDD0]/50 hover:shadow-md hover:border-[#B8922A]/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#2A4A2E]/10 flex items-center justify-center mb-4 group-hover:bg-[#2A4A2E] transition-colors duration-300">
                <Icon size={20} className="text-[#2A4A2E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1C1C1C] mb-2">{title}</h3>
              <p className="text-sm text-[#1C1C1C]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
