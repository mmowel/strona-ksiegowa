import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Users, FileText, Briefcase, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/oferta")({
  component: OfertaPage,
  head: () => ({
    meta: [
      { title: "Oferta — Księgowość, kadry, płace, KSeF | Księgowa360" },
      { name: "description", content: "Pełna oferta biura rachunkowego Księgowa360: księgowość firm, kadry i płace, wdrożenie KSeF, doradztwo podatkowe. Sprawdź zakres usług." },
      { property: "og:title", content: "Oferta — Księgowa360" },
      { property: "og:description", content: "Księgowość, kadry, płace, KSeF i doradztwo podatkowe dla firm." },
      { property: "og:url", content: "/oferta" },
    ],
    links: [{ rel: "canonical", href: "/oferta" }],
  }),
});

const services = [
  {
    icon: Calculator, title: "Księgowość dla firm",
    desc: "Pełna i uproszczona księgowość, JPK, deklaracje VAT, CIT i PIT, bieżące doradztwo bez zbędnej papierologii.",
    bullets: ["Książka przychodów i rozchodów", "Pełne księgi handlowe", "Ryczałt ewidencjonowany", "Rozliczenia roczne"],
  },
  {
    icon: Users, title: "Kadry i płace",
    desc: "Umowy, listy płac, ZUS, urlopy i pełna obsługa pracownicza prowadzona z dbałością o szczegóły.",
    bullets: ["Umowy o pracę i zlecenia", "Listy płac i deklaracje ZUS", "Ewidencja czasu pracy", "PPK i benefity"],
  },
  {
    icon: FileText, title: "KSeF i fakturowanie",
    desc: "Wdrożenie Krajowego Systemu e-Faktur, integracje z Twoimi systemami i wsparcie zespołu.",
    bullets: ["Audyt procesu fakturowania", "Konfiguracja KSeF", "Szkolenie zespołu", "Wsparcie powdrożeniowe"],
  },
  {
    icon: Briefcase, title: "Doradztwo podatkowe",
    desc: "Optymalizacja podatkowa, wybór formy opodatkowania i konsultacje przy ważnych decyzjach.",
    bullets: ["Wybór formy opodatkowania", "Optymalizacja kosztów", "Konsultacje strategiczne", "Wsparcie w kontrolach"],
  },
];

function OfertaPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title={<>Wszystko, czego potrzebuje Twoja <span className="gradient-text">firma</span></>}
        subtitle="Cztery obszary, jedna umowa, jeden zespół. Wybierz pełną opiekę albo konkretną usługę — dopasujemy zakres do skali i etapu Twojego biznesu."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-3xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-soft">
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-glow">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h2 className="text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 text-base text-dark-soft">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" strokeWidth={3} /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-4 text-base font-semibold text-white shadow-glow">
            Wycena dla Twojej firmy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
