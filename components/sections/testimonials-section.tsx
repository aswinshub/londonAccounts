import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/constants/content";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  className?: string;
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={cn("bg-card/60 py-20 lg:py-28", className)}>
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by Business Owners"
          description="Don't just take our word for it — here's what our clients say about working with us."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <RevealItem key={testimonial.name} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
