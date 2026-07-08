import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { StatsCard } from "@/components/cards/stats-card";
import { fadeIn } from "@/lib/motion";
import { STATS } from "@/constants/content";
import { CONSULTATION_HREF } from "@/constants/site";

const HIGHLIGHTS = [
  "A small, dedicated team who know you by name",
  "Experienced accountants across every service",
  "Genuine, long-term personal relationships",
  "Reliable advice you can act on with confidence",
];

interface AboutSectionProps {
  id?: string;
  showCta?: boolean;
}

export function AboutSection({ id, showCta = true }: AboutSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variants={fadeIn} className="relative order-last lg:order-first">
            <Image
              src="/about-us.png"
              alt="Accountant working on a laptop with financial charts and analytics"
              width={1287}
              height={1222}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
                About Us
              </span>
              <h2 className="mt-4 text-[length:var(--text-section)] leading-[var(--text-section--line-height)] font-bold text-heading">
                A small, dedicated team who genuinely care
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                We&rsquo;re a boutique accounting firm supporting small
                businesses across London. Because our team is deliberately
                small, you always speak to someone who knows your business — not
                a call centre.
              </p>
            </Reveal>

            <RevealGroup as="ul" className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <RevealItem as="li" key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cta/10 text-cta">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-body">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>

            {showCta && (
              <Reveal className="mt-9">
                <Link
                  href={CONSULTATION_HREF}
                  className={buttonVariants({ variant: "cta", size: "lg" })}
                >
                  Book a Free Consultation
                </Link>
              </Reveal>
            )}
          </div>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <RevealItem key={stat.label} className="h-full">
              <StatsCard stat={stat} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
