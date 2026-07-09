"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Modern floating Scroll to Top button with a circular scroll progress indicator.
 * Positioned in the bottom-right corner of the viewport.
 * Uses Framer Motion's scroll tracking and spring physics for buttery-smooth animation.
 */
export function ScrollToTop() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position and calculate progress (0 to 1)
  const { scrollY, scrollYProgress } = useScroll();

  // Create a spring-animated version of the scroll progress for buttery-smooth updates
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    // Initial check in case page starts scrolled down
    setIsVisible(scrollY.get() > 100);
  }, [scrollY]);

  // Handle visibility state changes based on scroll threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  if (!mounted) return null;

  // Circle dimensions matching path length calculation
  const radius = 21;
  const strokeWidth = 2.5;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="fixed right-6 bottom-24 z-40 flex size-12 items-center justify-center rounded-full bg-card text-primary shadow-soft hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 border border-border/40"
          aria-label="Scroll to top"
        >
          {/* SVG Progress Ring */}
          <svg
            className="absolute inset-0 size-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            {/* Background Circle track */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-border/20 fill-none"
              strokeWidth={strokeWidth}
            />
            {/* Active Scroll Progress Circle */}
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-secondary fill-none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />
          </svg>

          {/* Central Arrow Icon */}
          <ArrowUp className="relative z-10 size-5 text-primary" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
