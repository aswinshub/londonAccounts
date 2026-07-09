import { Star } from "lucide-react";

import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { name, business, quote, rating } = testimonial;

  // Extract initials (e.g. "Sarah Whitfield" -> "SW")
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Distinct light pastel colors with contrasting text colors for readability
  const avatarColors = [
    { bg: "bg-blue-50/90", text: "text-blue-600" },      // Light Indigo/Blue
    { bg: "bg-amber-50/90", text: "text-amber-700" },    // Light Amber/Orange
    { bg: "bg-emerald-50/90", text: "text-emerald-700" }, // Light Emerald/Green
  ];

  const colorConfig = avatarColors[index % avatarColors.length];

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 md:p-6 shadow-soft card-hover hover:shadow-soft-lg">
      <div
        className="flex items-center gap-1"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < rating
                ? "size-4 fill-amber-400 text-amber-400"
                : "size-4 text-border"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div
          className={`flex size-[44px] shrink-0 select-none items-center justify-center rounded-full font-heading text-base font-bold tracking-wider ${colorConfig.bg} ${colorConfig.text}`}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-heading font-bold text-heading text-sm md:text-base leading-snug">{name}</p>
          <p className="text-xs text-body leading-normal">{business}</p>
        </div>
      </figcaption>
    </figure>
  );
}
