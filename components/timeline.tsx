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
              <span
                className="absolute top-6 left-6 hidden h-[2px] -translate-y-1/2 lg:block"
                style={
                  isLast
                    ? {
                        width: "120px",
                        maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)",
                      }
                    : {
                        width: "calc(100% + 2rem)",
                      }
                }
                aria-hidden="true"
              >
                <span className="absolute inset-0 dashed-mask">
                  <span className="absolute inset-0 bg-border opacity-10" />
                  <span
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, var(--color-secondary) 0%, var(--color-cta) 50%, var(--color-secondary) 100%)",
                      backgroundSize: "200% 100%",
                      animation: "flow-line 3s linear infinite",
                    }}
                  />
                </span>
              </span>
            </div>

            {/* Icon + title */}
            <div className="mt-6 -mx-4 rounded-2xl px-4 py-3 card-hover group-hover:bg-card group-hover:shadow-soft lg:mr-4">
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
