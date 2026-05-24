import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Galerie – Landgasthof Linde Niederhofen",
  description: "Bilder aus der Lindenküche und unserem Gastraum.",
};

const images = [
  { src: "/images/galerie/bild-1.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-2.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-3.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-4.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-5.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-6.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-7.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-8.jpg", alt: "Aus der Lindenküche" },
  { src: "/images/galerie/bild-9.jpg", alt: "Aus der Lindenküche" },
];

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        title="Galerie"
        subtitle="Einige Bilder aus der Lindenküche und unserem Gastraum."
        tag="Einblicke"
      />

      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map(({ src, alt }, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden bg-[#E8DDD0] aspect-square relative group"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Placeholder overlay shown when image not found */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#E8DDD0] text-[#1C1C1C]/20 text-sm font-medium select-none pointer-events-none">
                  Bild folgt
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#1C1C1C]/40 text-sm mt-10">
            Hier einige Bilder aus der Lindenküche
          </p>
        </div>
      </section>
    </>
  );
}
