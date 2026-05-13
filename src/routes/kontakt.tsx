import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
  head: () => ({
    meta: [
      { title: "Kontakt — Umów bezpłatną konsultację | Księgowa360" },
      { name: "description", content: "Zadzwoń 500 360 390 lub napisz kontakt@ksiegowa360.pl. Bezpłatna konsultacja, audyt księgowości i plan dla KSeF — bez zobowiązań." },
      { property: "og:title", content: "Kontakt — Księgowa360" },
      { property: "og:description", content: "Skontaktuj się z biurem rachunkowym Księgowa360." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Kontakt — Księgowa360",
        url: "/kontakt",
      }),
    }],
  }),
});

const items = [
  { icon: Phone, label: "Telefon", value: "500 360 390", href: "tel:500360390" },
  { icon: Mail, label: "E-mail", value: "kontakt@ksiegowa360.pl", href: "mailto:kontakt@ksiegowa360.pl" },
  { icon: Clock, label: "Godziny", value: "pn–pt 8:00 – 16:00" },
  { icon: MapPin, label: "Obsługa", value: "Cała Polska, online" },
];

function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>Porozmawiajmy o <span className="gradient-text">Twojej firmie</span></>}
        subtitle="Pierwsza konsultacja jest bezpłatna i niezobowiązująca. Sprawdzimy, czy będzie nam dobrze razem."
      />

      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-bold">Napisz lub zadzwoń</h2>
            <p className="mt-2 text-dark-soft">Odpowiadamy w ciągu 1 dnia roboczego.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((i) => (
                <a
                  key={i.label}
                  href={i.href ?? "#"}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-soft-bg p-5 transition-colors hover:border-primary"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand text-white shadow-glow">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{i.label}</p>
                    <p className="mt-1 text-base font-bold text-foreground">{i.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 text-white shadow-glow">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Bezpłatna konsultacja</p>
            <h3 className="mt-3 text-3xl font-extrabold leading-tight">30 minut, które oszczędzą Ci miesiące</h3>
            <ul className="mt-6 space-y-3">
              {["Audyt obecnej księgowości", "Plan dla KSeF", "Wycena współpracy", "Bez zobowiązań"].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20"><Check className="h-4 w-4" strokeWidth={3} /></span>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <a href="tel:500360390" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-foreground">
              500 360 390 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
