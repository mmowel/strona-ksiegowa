import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const faqs = [
  {
    q: "Czym jest KSeF?",
    a: "Krajowy System e-Faktur (KSeF) to centralna platforma Ministerstwa Finansów do wystawiania, otrzymywania i archiwizowania faktur ustrukturyzowanych w Polsce.",
  },
  {
    q: "Od kiedy KSeF jest obowiązkowy?",
    a: "Obowiązek korzystania z KSeF dla większości czynnych podatników VAT wchodzi etapowo — kluczowe terminy znajdziesz w komunikatach Ministerstwa Finansów. Pomożemy Ci zaplanować wdrożenie z odpowiednim wyprzedzeniem.",
  },
  {
    q: "Czy moja firma musi korzystać z KSeF?",
    a: "Co do zasady KSeF obejmie podatników VAT prowadzących działalność w Polsce. Zwolnienia dotyczą wybranych grup (np. konsumentów, niektórych transakcji zagranicznych). Zweryfikujemy Twoją sytuację bezpłatnie.",
  },
  {
    q: "Jak wygląda wdrożenie KSeF z Księgowa360?",
    a: "Działamy w czterech krokach: analiza obecnego procesu, dobór narzędzi i konfiguracja, szkolenie zespołu i wsparcie powdrożeniowe. Przez cały czas masz jedną osobę odpowiedzialną.",
  },
  {
    q: "Czy potrzebuję nowego programu do faktur?",
    a: "Niekoniecznie. Sprawdzimy, czy Twój obecny system można zintegrować z KSeF. Jeśli nie — zaproponujemy rozwiązanie dopasowane do skali Twojej firmy.",
  },
  {
    q: "Co z fakturami zagranicznymi i B2C?",
    a: "Faktury B2C i część transakcji zagranicznych mogą pozostać poza KSeF. Pokażemy Ci, jak prowadzić oba obiegi równolegle bez chaosu.",
  },
  {
    q: "Ile kosztuje wdrożenie KSeF?",
    a: "Cena zależy od wielkości firmy i liczby faktur. Audyt i pierwsza konsultacja są bezpłatne — później przedstawiamy konkretną wycenę przed startem prac.",
  },
  {
    q: "Co jeśli nie zdążę z wdrożeniem na czas?",
    a: "Im wcześniej zaczniemy, tym mniej stresu. Mamy ekspresową ścieżkę wdrożenia dla firm, które zostawiły KSeF na ostatnią chwilę — odezwij się.",
  },
];

export const Route = createFileRoute("/faq-ksef")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ KSeF — Odpowiedzi na najczęstsze pytania | Księgowa360" },
      { name: "description", content: "Krajowy System e-Faktur w pigułce: terminy, koszty, wdrożenie, integracje, faktury B2C i zagraniczne. Odpowiedzi od księgowych z Księgowa360." },
      { property: "og:title", content: "FAQ KSeF — Najczęstsze pytania o e-faktury" },
      { property: "og:description", content: "Wszystko, co musisz wiedzieć o KSeF, w jednym miejscu." },
      { property: "og:url", content: "/faq-ksef" },
    ],
    links: [{ rel: "canonical", href: "/faq-ksef" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-white transition-colors hover:border-primary">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-bold">{q}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-brand text-white shadow-glow">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && <div className="px-6 pb-6 text-base leading-relaxed text-dark-soft">{a}</div>}
    </div>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ KSeF"
        title={<>Najczęstsze pytania o <span className="gradient-text">KSeF</span></>}
        subtitle="Krótkie, konkretne odpowiedzi na pytania, które dostajemy od klientów. Czegoś brakuje? Napisz — uzupełnimy."
      />
      <section className="mx-auto max-w-[920px] px-6 py-20">
        <div className="space-y-4">
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
        <div className="mt-12 rounded-3xl border border-border bg-soft-bg p-8 text-center">
          <p className="text-lg font-semibold">Masz inne pytanie o KSeF?</p>
          <p className="mt-2 text-dark-soft">Odpowiemy w ciągu 1 dnia roboczego.</p>
          <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow">
            Zadaj pytanie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
