import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Clock,
  Globe2,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Logo } from "./Logo";

const socialLinks = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/ksiegowa360/",
    label: "Facebook Księgowa360",
  },
  {
    Icon: Instagram,
    href: "#",
    label: "Instagram Księgowa360",
  },
  {
    Icon: Linkedin,
    href: "#",
    label: "LinkedIn Księgowa360",
  },
];

const footerLinks = [
  { label: "Oferta", to: "/oferta" as const },
  { label: "KSeF", to: "/ksef" as const },
  { label: "FAQ KSeF", to: "/faq-ksef" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050B16] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(22,208,202,0.16),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(224,64,247,0.16),transparent_30%),linear-gradient(180deg,#08111F_0%,#050B16_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Logo light />

            <p className="mt-4 max-w-sm text-base text-white/70">
              Więcej niż Biuro Rachunkowe.
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              Nowoczesna księgowość, wsparcie online i pomoc w przygotowaniu do
              KSeF dla firm, które chcą mieć porządek w finansach.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] text-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-white/10 lg:border-l lg:pl-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Nawigacja
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-3 transition-colors hover:text-primary"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-white/10 lg:border-l lg:pl-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Kontakt
            </h4>

            <div className="mt-6 divide-y divide-white/10 text-sm text-white/70">
              <div className="flex gap-4 pb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-white">Dane kontaktowe</p>

                  <ul className="mt-2 space-y-1.5">
                    <li>
                      <a
                        href="tel:+48500360390"
                        className="transition-colors hover:text-primary"
                      >
                        500 360 390
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:kontakt@ksiegowa360.pl"
                        className="transition-colors hover:text-primary"
                      >
                        kontakt@ksiegowa360.pl
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-white">Godziny pracy biura</p>
                  <p className="mt-2">pn–pt: 9:00 – 17:00</p>
                </div>
              </div>

              <div className="flex gap-4 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E040F7]/10 text-[#E040F7]">
                  <Globe2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-white">Godziny pracy online</p>

                  <ul className="mt-2 space-y-1.5">
                    <li>pn–pt: 8:00 – 20:00</li>
                    <li>sobota: 8:00 – 15:00</li>
                    <li>niedziela: 8:00 – 20:00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-7 text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Grupa Czupryniak — Wszystkie prawa
            zastrzeżone.
          </p>

          <p className="inline-flex items-center gap-2">
            Made with care in Poland.
            <Heart className="h-4 w-4 text-[#E040F7]" />
          </p>
        </div>
      </div>
    </footer>
  );
}