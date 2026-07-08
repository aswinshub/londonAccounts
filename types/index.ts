import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Audience {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  business: string;
  quote: string;
  rating: number;
  image: string;
}

export interface TrustBadge {
  label: string;
}
