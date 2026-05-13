type Props = { eyebrow: string; title: React.ReactNode; subtitle?: string };

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[360px] w-[360px] rounded-full bg-[#16D0CA]/25 blur-3xl" />
        <div className="absolute top-10 right-0 h-[320px] w-[320px] rounded-full bg-[#8855D7]/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-24">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-dark-soft">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
