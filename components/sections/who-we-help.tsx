"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AUDIENCES } from "@/constants/content";
import { cn } from "@/lib/utils";

const AUDIENCE_IMAGES: Record<string, string> = {
  "Sole Traders": "/solo.jpg",
  "Limited Companies": "/limited compnay.jpg",
  "Growing Businesses": "/Growing business.jpg",
};

interface WhoWeHelpProps {
  id?: string;
  className?: string;
}

export function WhoWeHelp({ id, className }: WhoWeHelpProps) {
  const container = useRef<HTMLElement>(null);

  // Track this section's progress through the viewport and translate the
  // background image for an advanced (fixed + clip-path) parallax effect.
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <section
      id={id}
      ref={container}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-24 lg:py-32",
        className,
      )}
      // clip-path (rather than overflow-hidden) is what crops the fixed
      // background layer below to this section's bounds.
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* Parallax background — position: fixed, cropped by the clip-path above */}
      <div className="pointer-events-none fixed inset-x-0 top-[-10vh] left-0 -z-10 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Navy overlay keeps foreground text and cards readable */}
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            Who We Help
          </span>
          <h2 className="text-[length:var(--text-section)] leading-[var(--text-section--line-height)] font-bold text-white">
            Built for Businesses Like Yours
          </h2>
          <p className="text-lg leading-relaxed text-white/85">
            From your very first invoice to your next stage of growth, we
            support businesses at every step.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCES.map(({ title, description, icon: Icon }) => {
            const bgImage = AUDIENCE_IMAGES[title];
            return (
              <RevealItem key={title} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-white/20 p-8 shadow-soft-lg card-hover hover:border-white/45">
                  {/* Background Image layer */}
                  {bgImage && (
                    <div className="absolute inset-0 -z-20 h-full w-full">
                      <Image
                        src={bgImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 -z-10 bg-black/75 transition-colors duration-300 group-hover:bg-black/70" />

                  <span className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-cta group-hover:text-white">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
