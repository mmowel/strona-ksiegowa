import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/opinie")({
  component: OpiniePage,
  head: () => ({
    meta: [
      { title: "Opinie klientów — Co mówią o Księgowa360" },
      { name: "description", content: "Realne opinie firm, które powierzyły nam swoją księgowość. Jednoosobowe działalności, spółki, e-commerce — same 5-gwiazdkowe rekomendacje." },
      { property: "og:title", content: "Opinie klientów — Księgowa360" },
      { property: "og:description", content: "Sprawdź, co mówią klienci biura rachunkowego Księgowa360." },
      { property: "og:url", content: "/opinie" },
    ],
    links: [{ rel: "canonical", href: "/opinie" }],
  }),
});

const reviews = [
  { name: "Aleksandra K.", text: "Bardzo polecam! Magda jest rzetelna, profesjonalna, zawsze pomocna i dostępna, gdy pojawia się jakiś problem. Wszystko jest dopilnowane. Jestem bardzo zadowolona ze współpracy!" },
  { name: "Michał R.", role: "Sklep e-commerce", text: "Wdrożenie KSeF poszło bezboleśnie. Czuję, że mam partnera, a nie tylko biuro rachunkowe." },
  { name: "Ewa N.", role: "Spółka z o.o.", text: "Profesjonalizm, terminowość i ludzkie podejście. Polecam każdej rozwijającej się firmie." },
  { name: "Tomasz W.", role: "Jednoosobowa działalność", text: "Szybkie odpowiedzi, jasne faktury, zero niespodzianek. Dokładnie tego potrzebowałem." },
  { name: "Karolina M.", role: "Agencja marketingowa", text: "Ogarnęli kadry, płace i ZUS w tydzień. Wreszcie mogę skupić się na klientach." },
  { name: "Piotr S.", role: "Restauracja", text: "Bardzo merytoryczne doradztwo przy wyborze formy opodatkowania. Dziękuję!" },
];

function OpiniePage() {
  return (
    <>
      <PageHero
        eyebrow="Opinie"
        title={<>Co mówią <span className="gradient-text">nasi klienci</span></>}
        subtitle="Średnia ocena 5/5 z setek współprac. Poniżej kilka głosów od osób, z którymi pracujemy na co dzień."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="flex flex-col rounded-3xl border border-border bg-white p-8 shadow-soft">
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-dark-soft">"{r.text}"</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-bold">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
