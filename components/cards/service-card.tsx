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
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-soft-lg focus-visible:-translate-y-1.5"
    >
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
    </Link>
  );
}
