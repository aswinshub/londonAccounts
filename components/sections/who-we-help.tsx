import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AUDIENCES } from "@/constants/content";
import { cn } from "@/lib/utils";

interface WhoWeHelpProps {
  id?: string;
  className?: string;
}

export function WhoWeHelp({ id, className }: WhoWeHelpProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 bg-card/60 py-20 lg:py-28", className)}
    >
      <Container>
        <SectionTitle
          eyebrow="Who We Help"
          title="Built for Businesses Like Yours"
          description="From your very first invoice to your next stage of growth, we support businesses at every step."
        />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCES.map(({ title, description, icon: Icon }) => (
            <RevealItem key={title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft-lg">
                <span className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-heading">{title}</h3>
                <p className="mt-3 leading-relaxed text-body">{description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
