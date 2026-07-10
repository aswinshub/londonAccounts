"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string; // e.g. "3+", "100+", "15+", "24h"
  duration?: number; // in seconds
}

export function Counter({ value, duration = 1.5 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    // Parse the number and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];

    let start = 0;
    const end = target;
    const totalFrames = Math.max(Math.floor(duration * 60), 1);
    let frame = 0;

    const counter = () => {
      frame++;
      // Easing out quad
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const current = Math.round(start + (end - start) * easeProgress);

      setDisplayValue(`${current}${suffix}`);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setDisplayValue(value);
      }
    };

    const animationFrame = requestAnimationFrame(counter);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return <span ref={ref}>{displayValue}</span>;
}
