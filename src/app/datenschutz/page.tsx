import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – Landgasthof Linde Niederhofen",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-[#F7F2EA] min-h-screen pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <Link href="/" className="text-[#C49A2E] text-[10px] tracking-[0.25em] uppercase font-medium hover:text-[#1E3D26] transition-colors mb-10 inline-block">
          ← Zurück
        </Link>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-[#0C1810] mb-12">Datenschutz</h1>

        <div className="space-y-8 text-sm text-[#3D3328]/70 leading-loose font-light divide-y divide-[#D4C5B0]/50">
          <div className="pb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Verantwortlicher</p>
            <p>Tanja Voloder · Landgasthof Linde · Lindenstraße 20 · 74193 Schwaigern<br />
              <a href="tel:017662960837" className="text-[#1E3D26] hover:text-[#C49A2E] transition-colors">0176 62960837</a> ·{" "}
              <a href="mailto:info@linde-niederhofen.de" className="text-[#1E3D26] hover:text-[#C49A2E] transition-colors">info@linde-niederhofen.de</a>
            </p>
          </div>
          <div className="py-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Datenerfassung</p>
            <p>Diese Website verwendet keine Tracking-Cookies. Der Hosting-Provider erfasst automatisch Server-Log-Dateien (IP-Adresse, Browsertyp, Datum/Uhrzeit), die nach 7 Tagen gelöscht werden. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.</p>
          </div>
          <div className="py-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C49A2E] mb-3">Ihre Rechte</p>
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten personenbezogenen Daten. Wenden Sie sich hierzu an die oben genannte Kontaktadresse.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
