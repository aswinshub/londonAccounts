import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { TESTIMONIALS } from "@/constants/content";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  // Double the testimonials array for continuous infinite scroll
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className={cn("bg-card/60 pt-20 pb-8 lg:pt-28 lg:pb-10 overflow-hidden", className)}>
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by Business Owners"
          description="Don't just take our word for it — here's what our clients say about working with us."
        />
      </Container>

      {/* Full-width marquee container with horizontal fade mask */}
      <div className="mt-14 w-full relative mask-marquee overflow-hidden">
        <div className="flex w-max animate-marquee pause-on-hover gap-6 py-4 px-4">
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0"
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
