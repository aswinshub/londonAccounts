import Link from "next/link";

import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-lg font-heading text-lg font-extrabold",
          isLight ? "bg-white text-primary" : "bg-primary text-white",
        )}
        aria-hidden="true"
      >
        {SITE.name.charAt(0)}
      </span>
      <span
        className={cn(
          "font-heading text-lg font-extrabold tracking-tight",
          isLight ? "text-white" : "text-heading",
        )}
      >
        {SITE.name}
      </span>
    </Link>
  );
}
