import type { Stat } from "@/types";

interface StatsCardProps {
  stat: Stat;
}

export function StatsCard({ stat }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft card-hover hover:shadow-soft-lg">
      <p className="font-heading text-4xl font-extrabold tracking-tight text-primary">
        {stat.value}
      </p>
      <p className="mt-2 text-sm font-medium text-body">{stat.label}</p>
    </div>
  );
}
