import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Landgasthof Linde Niederhofen",
};

export default function ImpressumPage() {
  return (
    <div className="bg-[#F7F2EA] min-h-screen pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <Link href="/" className="text-[#C49A2E] text-[10px] tracking-[0.25em] uppercase font-medium hover:text-[#1E3D26] transition-colors mb-10 inline-block">
          ← Zurück
        </Link>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#0C1810] mb-12">Impressum</h1>

        <div className="space-y-8 text-sm text-[#3D3328]/70 leading-loose font-light divide-y divide-[#D4C5B0]/50">
          <div className="pb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Angaben gemäß § 5 TMG</p>
            <p>Tanja Voloder<br />Landgasthof Linde<br />Lindenstraße 20<br />74193 Schwaigern</p>
          </div>
          <div className="py-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Kontakt</p>
            <p>
              Telefon: <a href="tel:017662960837" className="text-[#1E3D26] hover:text-[#C49A2E] transition-colors">0176 62960837</a><br />
              E-Mail: <a href="mailto:info@linde-niederhofen.de" className="text-[#1E3D26] hover:text-[#C49A2E] transition-colors">info@linde-niederhofen.de</a>
            </p>
          </div>
          <div className="py-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Verantwortlich nach § 55 Abs. 2 RStV</p>
            <p>Tanja Voloder · Lindenstraße 20 · 74193 Schwaigern</p>
          </div>
          <div className="py-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Haftungsausschluss</p>
            <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
