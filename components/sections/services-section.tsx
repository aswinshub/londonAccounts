import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/cards/service-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SERVICES } from "@/constants/content";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  id?: string;
  /** Render without the outer <section> wrapper padding (e.g. inside another layout). */
  className?: string;
  showHeading?: boolean;
}

export function ServicesSection({
  id,
  className,
  showHeading = true,
}: ServicesSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 bg-card/60 py-20 lg:py-28", className)}
    >
      <Container>
        {showHeading && (
          <SectionTitle
            eyebrow="Our Services"
            title="Accounting Services Built Around You"
            description="Everything you need to stay compliant, save time and make confident decisions — all in one place."
          />
        )}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
