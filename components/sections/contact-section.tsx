import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/constants/site";

export function ContactSection({ id }: { id?: string }) {
  const { address } = SITE;

  return (
    <section id={id} className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <Reveal className="flex flex-col">
            <span className="inline-flex w-fit items-center rounded-full bg-secondary/10 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
              Contact
            </span>
            <h2 className="mt-4 text-[length:var(--text-section)] leading-[var(--text-section--line-height)] font-bold text-heading">
              Let&rsquo;s talk about your business
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
              Book your free, no-obligation consultation. Tell us where you are
              today and we&rsquo;ll show you how we can help.
            </p>

            <dl className="mt-10 space-y-6">
              <ContactRow icon={<Phone className="size-5" />} label="Phone">
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {SITE.phoneDisplay}
                </a>
              </ContactRow>

              <ContactRow icon={<Mail className="size-5" />} label="Email">
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </ContactRow>

              <ContactRow icon={<MapPin className="size-5" />} label="Office">
                <address className="not-italic">
                  {address.street}
                  <br />
                  {address.locality}, {address.postalCode}
                </address>
              </ContactRow>

              <ContactRow
                icon={<Clock className="size-5" />}
                label="Business hours"
              >
                <ul className="space-y-1">
                  {SITE.hours.map((h) => (
                    <li key={h.days}>
                      <span className="font-medium text-heading">{h.days}:</span>{" "}
                      {h.time}
                    </li>
                  ))}
                </ul>
              </ContactRow>
            </dl>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
        {icon}
      </span>
      <div>
        <dt className="text-sm font-semibold tracking-wide text-heading uppercase">
          {label}
        </dt>
        <dd className="mt-1 text-body">{children}</dd>
      </div>
    </div>
  );
}
