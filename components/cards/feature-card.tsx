import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon: Icon } = feature;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft card-hover hover:shadow-soft-lg">
      <span className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
        <Icon className="size-7" aria-hidden="true" />
      </span>
      <h3 className="text-xl font-bold text-heading">{title}</h3>
      <p className="mt-3 leading-relaxed text-body">{description}</p>
    </div>
  );
}
