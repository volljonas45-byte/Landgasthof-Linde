interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export default function PageHeader({ title, subtitle, tag }: PageHeaderProps) {
  return (
    <section className="bg-[#2A4A2E] pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {tag && (
          <div className="inline-flex items-center gap-2 text-[#D4A843] text-xs tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-[#D4A843]" />
            {tag}
            <span className="w-8 h-px bg-[#D4A843]" />
          </div>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
