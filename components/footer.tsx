import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { LinkedInIcon, XIcon, FacebookIcon } from "@/components/icons/social";
import { NAV_ITEMS } from "@/constants/navigation";
import { SERVICES } from "@/constants/content";
import { SITE } from "@/constants/site";

const SOCIALS = [
  { label: "LinkedIn", href: SITE.social.linkedin, icon: LinkedInIcon },
  { label: "X (Twitter)", href: SITE.social.twitter, icon: XIcon },
  { label: "Facebook", href: SITE.social.facebook, icon: FacebookIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs leading-relaxed text-body">
              Reliable, personal accounting for growing small businesses, sole
              traders and limited companies across London.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-body transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="font-heading text-sm font-bold tracking-wide text-heading uppercase">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h2 className="font-heading text-sm font-bold tracking-wide text-heading uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="#services"
                    className="text-body transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-sm font-bold tracking-wide text-heading uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-body transition-colors hover:text-primary"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-body transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic text-body">
                  {SITE.address.street}, {SITE.address.locality},{" "}
                  {SITE.address.postalCode}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-body sm:flex-row">
          <p>
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Registered in England &amp; Wales.</p>
        </div>
      </Container>
    </footer>
  );
}
