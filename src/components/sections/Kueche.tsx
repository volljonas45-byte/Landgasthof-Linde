import { assetPath } from '@/lib/assetPath';

export default function Kueche() {
  return (
    <section id="kueche" className="bg-[#F7F2EA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Text */}
          <div>
            <p data-fade="" className="text-[#1E3D26]/50 text-[10px] tracking-[0.35em] uppercase font-medium mb-6">
              Unsere Philosophie
            </p>
            <h2 data-fade="" data-delay="1" className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-[#0C1810] leading-tight mb-8">
              Aus der Küche,<br />
              <em className="text-[#1E3D26]">mit Herzblut.</em>
            </h2>

            <div data-fade="" data-delay="2" className="h-px w-10 bg-[#1E3D26]/20 mb-8" />

            <p data-fade="" data-delay="3" className="text-[#3D3328]/65 text-base leading-loose font-light mb-5">
              Im Landgasthof Linde steht schwäbische Hausmannskost im Mittelpunkt –
              frisch zubereitet, mit regionalen Zutaten und ohne Kompromisse beim
              Geschmack.
            </p>
            <p data-fade="" data-delay="4" className="text-[#3D3328]/65 text-base leading-loose font-light mb-10">
              Ob der wöchentliche Mittagstisch, ein Sonntagsbraten oder ein festliches
              Ereignis – wir empfangen Sie mit der Wärme und Gastfreundschaft, die
              einen echten Landgasthof ausmacht.
            </p>

            <div data-fade="" data-delay="5" className="flex flex-col sm:flex-row gap-8">
              {[
                { num: "11,50", unit: "€", label: "Mittagstisch inkl. Salat" },
                { num: "15+", unit: "",   label: "Personen · Gruppen auf Anfrage" },
              ].map(({ num, unit, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl font-light text-[#0C1810]">
                    {num}<span className="text-[#1E3D26] text-xl">{unit}</span>
                  </p>
                  <p className="text-[10px] tracking-[0.12em] uppercase text-[#3D3328]/40 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div data-fade="scale" className="relative">
            <div className="aspect-[4/5] bg-[#E8E0D0] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/images/ae8a28b5-b30f-cc31-27eb-8eb70b487350.jpeg")}
                alt="Aus der Lindenküche"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#1E3D26]/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
