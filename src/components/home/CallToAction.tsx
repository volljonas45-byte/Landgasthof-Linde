import Link from "next/link";
import { Phone, Images } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

export default function CallToAction() {
  return (
    <section className="relative bg-[#1C2B1F] py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('${assetPath('/images/Screenshot%202026-05-22%20220332.png')}')` }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-[#D4A843] text-xs tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-[#D4A843]" />
          Wir freuen uns auf Sie
          <span className="w-8 h-px bg-[#D4A843]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
          Ihr Tisch wartet
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Reservieren Sie noch heute – per Telefon oder E-Mail. Wir freuen uns auf
          Ihren Besuch und sorgen dafür, dass Sie sich bei uns wohl fühlen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="tel:017662960837"
            className="inline-flex items-center justify-center gap-2 bg-[#B8922A] hover:bg-[#D4A843] text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm shadow-lg shadow-[#B8922A]/20"
          >
            <Phone size={16} />
            0176 62960837
          </a>
          <Link
            href="/galerie"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
          >
            <Images size={16} />
            Galerie ansehen
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white/40 text-xs">
          <span>Tanja Voloder</span>
          <span>·</span>
          <span>Lindenstraße 20, 74193 Schwaigern</span>
          <span>·</span>
          <span>info@linde-niederhofen.de</span>
        </div>
      </div>
    </section>
  );
}
