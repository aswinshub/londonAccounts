import Image from "next/image";
import { Star } from "lucide-react";

import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, business, quote, rating, image } = testimonial;

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft-lg">
      <div
        className="flex items-center gap-1"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < rating
                ? "size-5 fill-amber-400 text-amber-400"
                : "size-5 text-border"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-body">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={`${name}, ${business}`}
          width={52}
          height={52}
          className="size-[52px] rounded-full object-cover"
        />
        <div>
          <p className="font-heading font-bold text-heading">{name}</p>
          <p className="text-sm text-body">{business}</p>
        </div>
      </figcaption>
    </figure>
  );
}
