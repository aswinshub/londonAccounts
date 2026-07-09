"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { fadeIn, slideUp } from "@/lib/motion";
import { TRUST_BADGES } from "@/constants/content";
import { CONSULTATION_HREF } from "@/constants/site";

const PHRASES = ["Small Businesses", "Sole Traders", "Limited Companies"] as const;

const TYPE_MS = 55;
const DELETE_MS = 40;
const PAUSE_MS = 1800;

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let cancelled = false;
    let phraseIndex = 0;
    let visibleLength = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = (delay: number, fn: () => void) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    const tick = () => {
      const phrase = PHRASES[phraseIndex];

      if (!deleting) {
        if (visibleLength < phrase.length) {
          visibleLength += 1;
          setDisplayedText(phrase.slice(0, visibleLength));
          schedule(TYPE_MS, tick);
          return;
        }

        schedule(PAUSE_MS, () => {
          deleting = true;
          tick();
        });
        return;
      }

      if (visibleLength > 0) {
        visibleLength -= 1;
        setDisplayedText(phrase.slice(0, visibleLength));
        schedule(DELETE_MS, tick);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % PHRASES.length;
      tick();
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col">
            <Reveal variants={fadeIn}>
              <span className="inline-flex w-fit items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-soft">
                Trusted accountants in London
              </span>
            </Reveal>

            <Reveal variants={slideUp} className="mt-6">
              <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] font-extrabold text-heading">
                <span className="block">Reliable Accounting</span>
                <span className="block mt-1">for Growing</span>
                <span className="mt-4 block w-fit">
                  <span className="relative inline-flex items-center justify-start">
                    {/* Reserved space for the longest phrase to prevent layout shifts */}
                    <span className="invisible pointer-events-none select-none py-1.5 pr-2" aria-hidden="true">
                      Limited Companies
                    </span>
                    <span className="absolute inset-0 flex items-center justify-start overflow-hidden">
                      <span className="absolute inset-y-0 left-0 flex items-center justify-start">
                        <span className="inline-flex items-center bg-[#EAF8EE] text-[#2e8b57] py-1.5 pr-2">
                          {displayedText}
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal variants={fadeIn} delay={0.1} className="mt-6">
              <p className="max-w-xl text-lg leading-relaxed text-body sm:text-xl">
                Supporting sole traders and limited companies across London with
                responsive, personal accounting services you can trust.
              </p>
            </Reveal>

            <Reveal
              variants={fadeIn}
              delay={0.2}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href={CONSULTATION_HREF}
                className={buttonVariants({ variant: "cta", size: "lg" })}
              >
                Book a Free Consultation
              </Link>
              <Link
                href="#services"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Our Services
              </Link>
            </Reveal>

            <Reveal
              variants={fadeIn}
              delay={0.3}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-body"
                >
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-cta/10 text-cta">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {badge.label}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Right */}
          <Reveal variants={fadeIn} delay={0.15} className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-soft-lg">
              <Image
                src="/hero.jpg"
                alt="Accountant at a desk giving a thumbs up while working with a calculator and laptop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-5 shadow-soft-lg sm:block">
              <p className="font-heading text-3xl font-extrabold text-primary">
                100+
              </p>
              <p className="text-sm text-body">Businesses supported</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
