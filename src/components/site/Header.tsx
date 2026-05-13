import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { label: "Start", to: "/" as const },
  { label: "Oferta", to: "/oferta" as const },
  { label: "KSeF", to: "/ksef" as const },
  { label: "O nas", to: "/o-nas" as const },
  { label: "Opinie", to: "/opinie" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/82 shadow-[0_10px_40px_-30px_rgba(42,37,43,0.35)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/72">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <div className="transition-transform duration-300 hover:-translate-y-0.5">
          <Logo />
        </div>

        {/*
        <nav
          className="hidden items-center gap-2 rounded-full border border-border bg-white/70 px-2 py-2 shadow-soft lg:flex"
          aria-label="Główna nawigacja"
        >
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-foreground text-white shadow-soft" }}
              inactiveProps={{
                className: "text-dark-soft hover:bg-soft-bg hover:text-foreground",
              }}
              className="rounded-full px-4 py-2 text-sm font-bold transition-all duration-300"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        */}

        <div className="flex items-center gap-3">
          <a
            href="tel:+48500360390"
            className="hidden rounded-full border border-border bg-white px-4 py-3 text-sm font-extrabold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary md:inline-flex"
          >
            500 360 390
          </a>

          <Link
            to="/kontakt"
            className="hidden items-center gap-2 rounded-full gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-22px_rgba(136,85,215,0.65)] sm:inline-flex"
          >
            Umów konsultację
            <ArrowRight className="h-4 w-4" />
          </Link>

          <details className="group relative lg:hidden">
            <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-2xl border border-border bg-white text-foreground shadow-soft transition-all duration-300 hover:border-primary [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" />
            </summary>

            <div className="absolute right-0 top-14 w-[min(88vw,320px)] overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-soft animate-fade-down">
              {/*
              <nav className="grid gap-1" aria-label="Menu mobilne">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{ className: "bg-foreground text-white" }}
                    inactiveProps={{
                      className: "text-dark-soft hover:bg-soft-bg hover:text-foreground",
                    }}
                    className="rounded-2xl px-4 py-3 text-sm font-bold transition-colors"
                  >
                    {n.label}
                  </Link>
                ))}

                <Link
                  to="/kontakt"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl gradient-brand px-4 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  Umów konsultację
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </nav>
              */}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}