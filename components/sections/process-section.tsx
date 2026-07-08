import { Container } from "@/components/ui/container";
import { Timeline } from "@/components/timeline";
import { Reveal } from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/constants/content";

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold tracking-[0.15em] text-secondary uppercase">
            How It Works
          </span>
          <h2 className="mt-3 text-[length:var(--text-section)] leading-[var(--text-section--line-height)] font-bold text-heading">
            A simple, transparent process
          </h2>
        </Reveal>
        <div className="mt-16">
          <Timeline steps={PROCESS_STEPS} />
        </div>
      </Container>
    </section>
  );
}
