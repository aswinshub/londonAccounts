import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { fadeIn } from "@/lib/motion";
import { STATS } from "@/constants/content";
import { CONSULTATION_HREF, SITE } from "@/constants/site";
import CircularText from "@/components/ui/circular-text";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/counter";

const HIGHLIGHTS = [
  "A small, dedicated team who know you by name",
  "Experienced accountants across every service",
  "Genuine, long-term personal relationships",
  "Reliable advice you can act on with confidence",
];

const TEAM_MEMBERS = [
  {
    name: "Alistair Vance",
    role: "Senior Accountant",
    image: "/team-alistair-v2.png",
    description: "12+ years optimizing corporate tax structure and advisory.",
  },
  {
    name: "Clara Reynolds",
    role: "Tax Specialist",
    image: "/team-clara-v2.png",
    description: "Expert in VAT, MTD compliance, and HMRC corporate tax filings.",
  },
  {
    name: "Marcus Sterling",
    role: "Client Manager",
    image: "/team-marcus-v2.png",
    description: "Dedicated client partner helping startups scale and manage payroll.",
  },
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
            <div className="absolute -top-6 left-4 sm:-top-8 sm:-left-6 md:-top-10 md:-left-10 z-10">
              <CircularText
                text="EXPERIENCED • ACCOUNTS • TEAM • "
                spinDuration={25}
                onHover="speedUp"
                className="text-primary hover:text-secondary transition-colors duration-300"
                style={{
                  "--size": "140px",
                  "--font-size": "13px",
                  "--padding-top": "10px",
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 m-auto size-11 rounded-full bg-primary flex items-center justify-center text-white text-[9px] font-black tracking-wider uppercase font-heading shadow-inner">
                  LA
                </div>
              </CircularText>
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
          {/* Left Side: Counter/Stats Grid (borderless & shadowless) */}
          <Reveal className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col text-left">
                  <p className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                    <Counter value={stat.value} />
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-body/80 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Side: 3 Team Profiles (side-by-side) */}
          <RevealGroup className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {TEAM_MEMBERS.map((member) => (
              <RevealItem key={member.name} className="group">
                <div className="flex flex-col">
                  {/* Aspect ratio 4/3 like reference image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 shadow-soft">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                    {/* Hover Overlay: Dark shade with slide-in from bottom and opacity */}
                    <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-4 text-center gap-2 z-10 profile-overlay">
                      <p className="text-[11px] leading-relaxed text-zinc-300 font-medium max-w-[90%]">
                        {member.description}
                      </p>
                      <Link
                        href={SITE.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-cta hover:text-cta-hover hover:underline transition-colors mt-1"
                      >
                        Connect Now
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 text-left">
                    <h4 className="font-heading text-base font-bold text-heading group-hover:text-primary transition-colors truncate">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-primary/80 mt-1 truncate">
                      {member.role}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
