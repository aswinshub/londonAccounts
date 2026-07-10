import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  href?: string;
}

export function ServiceCard({ service, href = "#contact" }: ServiceCardProps) {
  const { title, description, icon: Icon } = service;

  return (
    <Link
      href={href}
      className="group relative overflow-hidden flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft card-hover hover:border-secondary/30 hover:shadow-soft-lg focus-visible:-translate-y-1.5"
    >
      {/* Large decorative background icon that pops up on hover */}
      <div className="absolute right-2 -bottom-4 text-primary/[0.05] pointer-events-none translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0">
        <Icon className="size-32" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <span className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-7" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-heading">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-body">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Enquire now
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
