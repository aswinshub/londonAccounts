import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import type { ProcessStep } from "@/types";

interface TimelineProps {
  steps: ProcessStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-y-0">
      {steps.map((step, index) => {
        const { title, description, icon: Icon, step: num } = step;
        const isLast = index === steps.length - 1;

        return (
          <RevealItem key={num} className="group relative">
            {/* Number circle + horizontal connector */}
            <div className="flex items-center">
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-secondary group-hover:shadow-[0_0_0_8px_rgba(74,144,226,0.14)]">
                {num}
              </span>
              {!isLast && (
                <span
                  className="absolute top-6 left-6 hidden h-0.5 w-[calc(100%+2rem)] -translate-y-1/2 overflow-hidden rounded-full lg:block"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 bg-border" />
                  <span
                    className="absolute inset-0 opacity-80"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, transparent 0%, transparent 25%, var(--color-secondary) 50%, transparent 75%, transparent 100%)",
                      backgroundSize: "200% 100%",
                      animation: "flow-line 2.4s linear infinite",
                    }}
                  />
                </span>
              )}
            </div>

            {/* Icon + title */}
            <div className="mt-6 -mx-4 rounded-2xl px-4 py-3 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:bg-card group-hover:shadow-soft lg:mr-4">
              <div className="flex items-center gap-2.5">
                <Icon
                  className="size-5 shrink-0 text-secondary transition-transform duration-300 ease-out group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold text-heading transition-colors duration-300 group-hover:text-primary">
                  {title}
                </h3>
              </div>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-body">
                {description}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
