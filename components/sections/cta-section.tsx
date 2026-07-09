import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CONSULTATION_HREF } from "@/constants/site";

interface CTASectionProps {
  heading?: string;
  description?: string;
}

export function CTASection({
  heading = "Ready to Simplify Your Accounting?",
  description = "Book a free consultation today and discover how we can support your business.",
}: CTASectionProps) {
  return (
    <section className="pt-6 pb-20 lg:pt-8 lg:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center shadow-soft-lg sm:px-12 lg:py-20">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center z-10">
            <h2 className="text-[length:var(--text-section)] leading-[var(--text-section--line-height)] font-bold text-white text-balance">
              {heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              {description}
            </p>
            <Link
              href={CONSULTATION_HREF}
              className={buttonVariants({
                variant: "cta",
                size: "lg",
                className: "mt-9",
              })}
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Decorative illustration in bottom-right corner */}
          <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0 translate-y-4 translate-x-4 md:translate-y-0 md:translate-x-0">
            <Image
              src="/consulting.png"
              width={160}
              height={160}
              alt=""
              className="object-contain opacity-35 md:opacity-75 transition-opacity duration-300"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
