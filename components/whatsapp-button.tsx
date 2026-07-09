"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/constants/site";

/**
 * Sticky floating WhatsApp button positioned in the bottom-right corner of the viewport.
 * Uses Framer Motion for fade-in entrance and micro-interactions on hover/tap.
 * Incorporates a subtle CSS-based shadow pulse animation to attract user attention.
 */
export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.a
      href={SITE.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full shadow-soft hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 animate-whatsapp-pulse cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.svg"
        alt="Chat on WhatsApp"
        width={48}
        height={48}
        className="size-full object-contain"
        priority
      />
    </motion.a>
  );
}
