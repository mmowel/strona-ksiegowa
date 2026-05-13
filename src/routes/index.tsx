import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, Calculator, Users, FileText, Briefcase, Check, Star, ArrowRight,
} from "lucide-react";
import ownerPortrait from "@/assets/owner-portrait.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Księgowa360 — Nowoczesne biuro rachunkowe online | KSeF, kadry, płace" },
      {
        name: "description",
        content:
          "Księgowa360 to nowoczesne biuro rachunkowe online. Kompleksowa księgowość, kadry, płace i wdrożenie KSeF. Umów bezpłatną konsultację: 500 360 390.",
      },
      { name: "keywords", content: "biuro rachunkowe, księgowość online, KSeF, kadry i płace, doradztwo podatkowe" },
      { property: "og:title", content: "Księgowa360 — Nowoczesne biuro rachunkowe online" },
      { property: "og:description", content: "Księgowość, kadry, płace i KSeF dla firm. Spokój w biznesie w jednym miejscu." },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Księgowa360 — Nowoczesne biuro rachunkowe online" },
      { name: "twitter:description", content: "Księgowość, kadry, płace i KSeF dla firm." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  { icon: Calculator, title: "Księgowość dla firm", desc: "Pełna i uproszczona księgowość, JPK, deklaracje i bieżące doradztwo." },
  { icon: Users, title: "Kadry i płace", desc: "Umowy, listy płac, ZUS, urlopy i pełna obsługa pracownicza." },
  { icon: FileText, title: "KSeF i fakturowanie", desc: "Wdrożenie e-faktur, integracje i wsparcie zespołu." },
  { icon: Briefcase, title: "Doradztwo podatkowe", desc: "Optymalizacja, forma opodatkowania i decyzje strategiczne." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#16D0CA]/30 blur-3xl animate-float-slow" />
          <div className="absolute top-20 right-1/3 h-[360px] w-[360px] rounded-full bg-[#1D87E6]/25 blur-3xl animate-float-slow delay-200" />
          <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[#8855D7]/25 blur-3xl animate-float-slow delay-400" />
          <div className="absolute top-40 right-10 h-[260px] w-[260px] rounded-full bg-[#E040F7]/20 blur-3xl animate-float-slow delay-500" />
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-dark-soft backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Więcej niż biuro rachunkowe
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Księgowość, która daje Ci <span className="gradient-text">spokój</span> w biznesie
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dark-soft">
              Obsługujemy firmy kompleksowo — księgowość, kadry, płace i przygotowanie do KSeF w jednym miejscu.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5">
                Umów bezpłatną konsultację <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/oferta" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary">
                Zobacz ofertę
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-white gradient-brand" style={{ filter: `hue-rotate(${i * 40}deg)` }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground">+200 zadowolonych firm</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up delay-200">
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-4 -z-10 rounded-[40px] gradient-brand animate-gradient opacity-30 blur-2xl" />
              <div className="overflow-hidden rounded-[32px] border border-border bg-soft-bg shadow-soft transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
                <img src={ownerPortrait} alt="Właścicielka biura Księgowa360" width={900} height={1100} className="h-[560px] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-soft animate-fade-up delay-400">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Zadzwoń teraz</p>
                  <p className="text-lg font-bold tracking-tight">500 360 390</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-4 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-soft animate-fade-up delay-500">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold">Gotowi na KSeF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 animate-fade-up">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Oferta</span>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Jak możemy Ci pomóc?</h2>
            <p className="mt-4 text-lg text-dark-soft">Wybierz pełną opiekę albo konkretny obszar — dopasujemy współpracę do Twojej firmy.</p>
          </div>
          <Link to="/oferta" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Zobacz pełną ofertę <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-soft">
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand animate-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-soft">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 animate-fade-up">
        <div className="relative overflow-hidden rounded-[40px] gradient-brand animate-gradient p-12 md:p-16 shadow-glow">
          <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-[#E040F7]/30 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">Porozmawiajmy o księgowości Twojej firmy</h2>
              <p className="mt-5 max-w-xl text-lg text-white/90">Zadzwoń lub napisz — sprawdzimy, jak możemy Ci pomóc. Pierwsza konsultacja jest bezpłatna.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-foreground transition-transform hover:-translate-y-0.5">
                  Skontaktuj się <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:500360390" className="text-2xl font-extrabold text-white">500 360 390</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Bezpłatna konsultacja</p>
              <ul className="mt-5 space-y-3 text-white">
                {["30 minut rozmowy", "Audyt obecnej księgowości", "Plan dla KSeF", "Bez zobowiązań"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20"><Check className="h-4 w-4" strokeWidth={3} /></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
