import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/ksef")({
  component: KsefPage,
  head: () => ({
    meta: [
      { title: "KSeF — Wdrożenie Krajowego Systemu e-Faktur | Księgowa360" },
      { name: "description", content: "Pomożemy Ci wdrożyć KSeF krok po kroku: analiza procesu, konfiguracja, szkolenie zespołu i bieżące wsparcie. Spokojna droga do e-faktur." },
      { property: "og:title", content: "KSeF — Wdrożenie e-faktur z Księgowa360" },
      { property: "og:description", content: "Spokojne i przewidywalne przejście Twojej firmy na KSeF." },
      { property: "og:url", content: "/ksef" },
    ],
    links: [{ rel: "canonical", href: "/ksef" }],
  }),
});

const steps = [
  "Analiza obecnego procesu fakturowania",
  "Wdrożenie rozwiązań dopasowanych do firmy",
  "Wsparcie księgowe na każdym etapie",
  "Bieżąca obsługa po uruchomieniu KSeF",
];

function KsefPage() {
  return (
    <>
      <PageHero
        eyebrow="KSeF"
        title={<>Jesteśmy gotowi na <span className="gradient-text">KSeF</span>. A Ty?</>}
        subtitle="Pomagamy firmom przejść przez zmiany związane z Krajowym Systemem e-Faktur — spokojnie, jasno i krok po kroku."
      />
      <section className="bg-soft-bg py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Plan wdrożenia w 4 krokach</h2>
            <p className="mt-4 text-lg text-dark-soft">Każdy etap prowadzony przez jedną osobę odpowiedzialną — bez chaosu i bez przerzucania odpowiedzialności.</p>
            <Link to="/faq-ksef" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Najczęstsze pytania o KSeF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <ul className="space-y-5">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-brand text-white shadow-glow">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-primary">Krok 0{i + 1}</p>
                    <p className="text-base font-semibold text-foreground">{step}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="rounded-3xl border border-border bg-white p-10 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-glow">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-bold">Bezstresowe przejście na KSeF</p>
                <p className="text-sm text-muted-foreground">Zaczynamy od bezpłatnego audytu procesu.</p>
              </div>
            </div>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow">
              Umów konsultację KSeF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
