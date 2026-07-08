import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-secondary/10 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[length:var(--text-section)] leading-[var(--text-section--line-height)] font-bold text-heading">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed text-body",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
