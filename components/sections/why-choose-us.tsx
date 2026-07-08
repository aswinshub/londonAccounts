import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FeatureCard } from "@/components/cards/feature-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { FEATURES } from "@/constants/content";

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Businesses Trust Us"
          description="We combine dependable expertise with a genuinely personal approach, so you always feel supported."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <RevealItem key={feature.title} className="h-full">
              <FeatureCard feature={feature} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
