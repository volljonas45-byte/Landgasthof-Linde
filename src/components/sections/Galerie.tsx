const photos = [
  { src: "/images/Screenshot%202026-05-22%20220318.png", alt: "Hausgemachtes Gericht" },
  { src: "/images/4e5a46a8-a5ca-8f4b-1471-dbbf07cdf201.jpeg", alt: "Schnitzel mit Pilzrahmsoße" },
  { src: "/images/0136c4b1-ef19-db41-e77e-3d94ebf0099d.jpeg", alt: "Schwäbische Maultaschen" },
  { src: "/images/7ff8342a-34a5-a0fb-517a-e26f5ae79631.jpeg", alt: "Schnitzel mit Spätzle" },
  { src: "/images/800941f1-aac7-833d-fd82-6fe9c9e0d85f.jpeg", alt: "Käsespätzle" },
  { src: "/images/Screenshot%202026-05-22%20220332.png", alt: "Lammkoteletts mit Spargel" },
  { src: "/images/debbe53d-3d78-3939-8e44-1dd4d100eda7.jpeg", alt: "Wurstsalat" },
  { src: "/images/c56977bf-d0c0-8820-dc10-cf43e2fd902b.jpeg", alt: "Wurstsalat mit Pommes" },
  { src: "/images/Screenshot%202026-05-22%20220412.png", alt: "Pasta mit Sommergemüse" },
];

export default function Galerie() {
  return (
    <section className="bg-[#0E1A11]">
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div data-fade="" className="text-center mb-12">
          <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
            Einblicke
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-white leading-none">
            Aus der Lindenküche
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
          {photos.map(({ src, alt }, i) => (
            <div
              key={i}
              data-fade=""
              data-delay={String(Math.min(i, 8))}
              className="break-inside-avoid overflow-hidden group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
