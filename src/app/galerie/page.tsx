import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Galerie – Landgasthof Linde Niederhofen",
  description: "Bilder aus der Lindenküche und unserem Gastraum.",
};

const images = [
  { src: "/images/Screenshot 2026-05-22 220318.png", alt: "Hausgemachtes Gericht" },
  { src: "/images/4e5a46a8-a5ca-8f4b-1471-dbbf07cdf201.jpeg", alt: "Schnitzel mit Pilzrahmsoße" },
  { src: "/images/0136c4b1-ef19-db41-e77e-3d94ebf0099d.jpeg", alt: "Schwäbische Maultaschen" },
  { src: "/images/7ff8342a-34a5-a0fb-517a-e26f5ae79631.jpeg", alt: "Schnitzel mit Spätzle" },
  { src: "/images/800941f1-aac7-833d-fd82-6fe9c9e0d85f.jpeg", alt: "Käsespätzle" },
  { src: "/images/Screenshot 2026-05-22 220332.png", alt: "Lammkoteletts mit Spargel" },
  { src: "/images/debbe53d-3d78-3939-8e44-1dd4d100eda7.jpeg", alt: "Wurstsalat" },
  { src: "/images/c56977bf-d0c0-8820-dc10-cf43e2fd902b.jpeg", alt: "Wurstsalat mit Pommes" },
  { src: "/images/Screenshot 2026-05-22 220412.png", alt: "Pasta mit Sommergemüse" },
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
                  src={assetPath(src)}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
