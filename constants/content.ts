import {
  BookOpen,
  Calculator,
  ClipboardCheck,
  Users,
  Building2,
  Lightbulb,
  ShieldCheck,
  Zap,
  HeartHandshake,
  UserRound,
  Briefcase,
  TrendingUp,
  CalendarCheck,
  MessagesSquare,
  Sparkles,
  LifeBuoy,
} from "lucide-react";

import type {
  Service,
  Feature,
  Stat,
  Audience,
  ProcessStep,
  Testimonial,
  TrustBadge,
} from "@/types";

export const TRUST_BADGES: TrustBadge[] = [

  { label: "Fast Response" },
  { label: "Personal Service" },
];

export const FEATURES: Feature[] = [
  {
    title: "Reliable",
    description:
      "Helping businesses make confident financial decisions with accurate, dependable advice.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive",
    description:
      "Quick, clear responses whenever you need support — no waiting weeks for an answer.",
    icon: Zap,
  },
  {
    title: "Personal",
    description:
      "Dedicated accountants who take the time to genuinely understand your business.",
    icon: HeartHandshake,
  },
];

export const SERVICES: Service[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    description:
      "Accurate, up-to-date records so you always know exactly where your business stands.",
    icon: BookOpen,
  },
  {
    slug: "accounts-preparation",
    title: "Accounts Preparation",
    description:
      "Clear year-end accounts prepared correctly, on time, and free of surprises.",
    icon: ClipboardCheck,
  },
  {
    slug: "vat-returns",
    title: "VAT Returns",
    description:
      "MTD-compliant VAT returns handled end to end, keeping you on the right side of HMRC.",
    icon: Calculator,
  },
  {
    slug: "payroll",
    title: "Payroll",
    description:
      "Reliable payroll processing, payslips and RTI submissions so your team is always paid right.",
    icon: Users,
  },
  {
    slug: "company-accounts",
    title: "Company Accounts",
    description:
      "Statutory accounts and corporation tax for limited companies, filed accurately and on time.",
    icon: Building2,
  },
  {
    slug: "business-advice",
    title: "Business Advice",
    description:
      "Practical, proactive guidance to help you plan ahead and grow with confidence.",
    icon: Lightbulb,
  },
];

export const STATS: Stat[] = [
  { value: "3+", label: "Team Members" },
  { value: "100+", label: "Businesses Supported" },
  { value: "15+", label: "Years of Experience" },
  { value: "24h", label: "Fast Response Time" },
];

export const AUDIENCES: Audience[] = [
  {
    title: "Sole Traders",
    description:
      "Straightforward, jargon-free accounting so you can focus on the work you do best.",
    icon: UserRound,
  },
  {
    title: "Limited Companies",
    description:
      "Complete statutory compliance, tax planning and reporting tailored to your company.",
    icon: Briefcase,
  },
  {
    title: "Growing Businesses",
    description:
      "Scalable support for ambitious businesses under £500k turnover ready for their next stage.",
    icon: TrendingUp,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Book a Free Consultation",
    description: "A relaxed 30-minute chat to understand where you are today.",
    icon: CalendarCheck,
  },
  {
    step: 2,
    title: "Understand Your Business",
    description: "We take time to learn your goals, structure and priorities.",
    icon: MessagesSquare,
  },
  {
    step: 3,
    title: "Tailored Accounting Advice",
    description: "A clear plan and quote — no jargon, no surprise fees.",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "Your dedicated accountant, available whenever you need us.",
    icon: LifeBuoy,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Whitfield",
    business: "Whitfield Interiors",
    rating: 5,
    quote:
      "They took the stress out of my accounts completely. Every question is answered quickly and in plain English — I finally feel in control of my finances.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "James Okafor",
    business: "Okafor Construction Ltd",
    rating: 5,
    quote:
      "Switching was the best decision we made. Proactive advice, always on time, and they genuinely care about how the business is doing.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    business: "Bloom Digital Studio",
    rating: 5,
    quote:
      "Personal, responsive and reliable. It feels like having a finance director on the team without the overhead. I couldn't recommend them more highly.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
];
