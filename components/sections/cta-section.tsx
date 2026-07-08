import Link from "next/link";

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
    <section className="py-20 lg:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center shadow-soft-lg sm:px-12 lg:py-20">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
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
        </Reveal>
      </Container>
    </section>
  );
}
