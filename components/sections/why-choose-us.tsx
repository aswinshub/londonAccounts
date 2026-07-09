import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FeatureCard } from "@/components/cards/feature-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { FEATURES } from "@/constants/content";

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative bg-background bg-lined-paper overflow-hidden border-y border-slate-100">
      {/* Subtle border lines to box in the note board effect */}
      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Businesses Trust Us"
          description="We combine dependable expertise with a genuinely personal approach, so you always feel supported."
        />
        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <RevealItem key={feature.title} className="h-full">
              <FeatureCard feature={feature} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
