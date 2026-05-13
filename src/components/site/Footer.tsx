import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Więcej niż Biuro Rachunkowe.
          </p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-primary hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">
            Nawigacja
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/oferta" className="hover:text-primary">
                Oferta
              </Link>
            </li>
            <li>
              <Link to="/ksef" className="hover:text-primary">
                KSeF
              </Link>
            </li>
            <li>
              <Link to="/faq-ksef" className="hover:text-primary">
                FAQ KSeF
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-primary">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">
            Kontakt
          </h4>

          <div className="mt-4 divide-y divide-white/10 text-sm text-white/70">
            <div className="pb-4">
              <p className="font-semibold text-white">Dane kontaktowe</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="tel:+48500360390" className="hover:text-primary">
                    500 360 390
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kontakt@ksiegowa360.pl"
                    className="hover:text-primary"
                  >
                    kontakt@ksiegowa360.pl
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-4">
              <p className="font-semibold text-white">Godziny pracy biura</p>
              <ul className="mt-2 space-y-2">
                <li>pn–pt: 9:00 – 17:00</li>
              </ul>
            </div>

            <div className="pt-4">
              <p className="font-semibold text-white">Godziny pracy online</p>
              <ul className="mt-2 space-y-2">
                <li>pn–pt: 8:00 – 20:00</li>
                <li>sobota: 8:00 – 15:00</li>
                <li>niedziela: 8:00 – 20:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Grupa Czupryniak — Wszystkie prawa
            zastrzeżone.
          </p>
          <p>Made with care in Poland.</p>
        </div>
      </div>
    </footer>
  );
}