"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useScrolled } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants/navigation";

import { CONSULTATION_HREF } from "@/constants/site";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                isActive(item.href) ||
                (item.href === "#home" && pathname === "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200",
                      active
                        ? "text-primary"
                        : "text-body hover:text-primary",
                    )}
                  >
                    <span className="nav-link-flip">
                      <span className="nav-link-flip-primary">{item.label}</span>
                      <span className="nav-link-flip-secondary" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "absolute bottom-1 left-4 right-4 h-px bg-primary/50 origin-left transition-transform duration-[350ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href={CONSULTATION_HREF}
              className={buttonVariants({
                variant: "cta",
                size: "sm",
                className: "animate-pulse-ring",
              })}
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-xl text-heading transition-colors hover:bg-primary/[0.05] lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <Container className="py-5">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-primary/[0.06] text-primary"
                          : "text-body hover:bg-primary/[0.04] hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={CONSULTATION_HREF}
                className={buttonVariants({
                  variant: "cta",
                  size: "md",
                  className: "mt-4 w-full animate-pulse-ring",
                })}
              >
                Book a Free Consultation
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
