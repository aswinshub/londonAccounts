"use client";

import { useEffect, useRef, useState } from "react";

const FINANCIAL_SYMBOLS = [
  "£",
  "%",
  "+",
  "−",
  "=",
  "VAT",
  "TAX",
  "ROI",
  "Ledger",
  "Growth",
  "Audit",
  "Asset",
  "Equity",
] as const;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: "symbol" | "node";
  text?: string;
  alpha: number;
  maxAlpha: number;
  fadeIn: boolean;
}

export function AccountingBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // We only want this animation running on screen widths < 1024px (mobile/tablet viewports)
    // where the static hero background is hidden.
    const checkViewport = () => {
      setIsEnabled(window.innerWidth < 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(35, Math.floor((canvas.width * canvas.height) / 18000));
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const isSymbol = Math.random() > 0.4;
        const size = isSymbol ? Math.random() * 10 + 12 : Math.random() * 2 + 1.5;
        const maxAlpha = isSymbol ? Math.random() * 0.12 + 0.05 : Math.random() * 0.25 + 0.1;

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: isSymbol ? -Math.random() * 0.25 - 0.15 : (Math.random() - 0.5) * 0.2, // Symbols float up, nodes drift
          size,
          type: isSymbol ? "symbol" : "node",
          text: isSymbol ? FINANCIAL_SYMBOLS[Math.floor(Math.random() * FINANCIAL_SYMBOLS.length)] : undefined,
          alpha: Math.random() * maxAlpha,
          maxAlpha,
          fadeIn: Math.random() > 0.5,
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first
      const connectionDist = 110;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.type !== "node") continue;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.type !== "node") continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            // Draw line connecting the nodes
            const alpha = (1 - dist / connectionDist) * 0.12 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(74, 144, 226, ${alpha})`; // Subtle secondary brand blue
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Animate alpha (fade in/out pulsing)
        if (p.fadeIn) {
          p.alpha += 0.002;
          if (p.alpha >= p.maxAlpha) {
            p.alpha = p.maxAlpha;
            p.fadeIn = false;
          }
        } else {
          p.alpha -= 0.002;
          if (p.alpha <= 0.02) {
            p.alpha = 0.02;
            p.fadeIn = true;
          }
        }

        // Out of bounds wrapping / reset
        if (p.type === "symbol") {
          // If a symbol goes above the top, reset it to the bottom
          if (p.y < -30) {
            p.y = canvas.height + 20;
            p.x = Math.random() * canvas.width;
            p.alpha = 0;
            p.fadeIn = true;
          }
        } else {
          // Wrap nodes horizontally/vertically
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }

        // Draw particle
        if (p.type === "symbol" && p.text) {
          ctx.font = `bold ${p.size}px var(--font-heading), system-ui`;
          ctx.fillStyle = `rgba(31, 58, 95, ${p.alpha})`; // Primary brand navy with opacity
          ctx.fillText(p.text, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(74, 144, 226, ${p.alpha * 1.5})`; // Secondary brand blue
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 block pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
}
