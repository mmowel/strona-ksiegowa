import { createFileRoute } from "@tanstack/react-router";
import { Clock, MessageCircle, Globe, Heart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/o-nas")({
  component: ONasPage,
  head: () => ({
    meta: [
      { title: "O nas — Zespół Księgowa360 | Biuro rachunkowe online" },
      { name: "description", content: "Poznaj zespół Księgowa360. Terminowość, stały kontakt, obsługa online i indywidualne podejście do każdej firmy." },
      { property: "og:title", content: "O nas — Księgowa360" },
      { property: "og:description", content: "Zespół biura rachunkowego, który traktuje Twoją firmę jak własną." },
      { property: "og:url", content: "/o-nas" },
    ],
    links: [{ rel: "canonical", href: "/o-nas" }],
  }),
});

const reasons = [
  { icon: Clock, title: "Terminowość", desc: "Dotrzymujemy każdego deadline'u — bez stresu i pośpiechu." },
  { icon: MessageCircle, title: "Stały kontakt", desc: "Odpisujemy szybko. Telefon, e-mail, czat — jak Ci wygodnie." },
  { icon: Globe, title: "Obsługa online", desc: "Wszystkie dokumenty w chmurze. Pracujemy z Tobą zdalnie." },
  { icon: Heart, title: "Indywidualne podejście", desc: "Znamy Twoją firmę po imieniu. Doradzamy, a nie tylko księgujemy." },
];

const audiences = [
  "Jednoosobowe działalności",
  "Spółki",
  "Małe i średnie firmy",
  "Branża usługowa",
  "E-commerce",
  "Firmy lokalne",
];

function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="O nas"
        title={<>Więcej niż <span className="gradient-text">biuro rachunkowe</span></>}
        subtitle="Jesteśmy zespołem księgowych i doradców, który łączy precyzję z ludzkim podejściem. Wierzymy, że dobra księgowość to spokój głowy właściciela."
      />

      <section className="bg-soft-bg py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">Dlaczego Księgowa360?</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-soft">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">Dla kogo pracujemy</h2>
        <p className="mt-3 max-w-2xl text-lg text-dark-soft">Obsługujemy firmy w różnym wieku i o różnej skali. Wspólny mianownik: chcą prowadzić biznes spokojnie.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {audiences.map((a, i) => (
            <div key={a} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white text-sm font-bold">0{i + 1}</span>
              <p className="font-semibold text-foreground">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
