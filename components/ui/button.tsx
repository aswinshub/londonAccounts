import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-out hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        cta: "btn-cta-slide text-white shadow-soft",
        primary: "bg-primary text-white shadow-soft hover:bg-[#182d49]",
        secondary: "bg-secondary text-white shadow-soft hover:bg-[#3a7bd0]",
        outline:
          "border border-border bg-card text-heading hover:border-primary/30 hover:bg-primary/[0.03]",
        ghost: "text-heading hover:bg-primary/[0.05]",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "cta",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
