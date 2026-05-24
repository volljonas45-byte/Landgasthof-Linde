import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080F0A] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[1px] h-7 bg-white/10" />
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] text-white/20 uppercase leading-none mb-0.5">Landgasthof</p>
            <p style={{ fontFamily: "var(--font-great-vibes)" }} className="text-xl text-white/40 leading-none">
              Linde · Niederhofen
            </p>
          </div>
        </div>
        <p className="text-[10px] tracking-widest text-white/20 uppercase">© 2025 Tanja Voloder</p>
        <div className="flex gap-5 text-[10px] tracking-[0.12em] uppercase text-white/20">
          <Link href="/impressum" className="hover:text-white/50 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white/50 transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
