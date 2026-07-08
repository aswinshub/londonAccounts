"use client";

import { motion, type Variants } from "framer-motion";

import { fadeUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Animates its children into view once, using a subtle fade/slide.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Parent that staggers the reveal of its RevealItem children.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={cn(className)} variants={variants}>
      {children}
    </MotionTag>
  );
}
