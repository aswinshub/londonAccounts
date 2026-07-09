"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, User, Mail, ChevronDown, Loader2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { fadeIn, slideUp } from "@/lib/motion";
import { TRUST_BADGES } from "@/constants/content";
import { CONSULTATION_HREF } from "@/constants/site";

const PHRASES = ["Small Businesses", "Sole Traders", "Limited Companies"] as const;

const TYPE_MS = 55;
const DELETE_MS = 40;
const PAUSE_MS = 1800;

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+44",
    phone: "",
    service: "",
    turnover: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let phraseIndex = 0;
    let visibleLength = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = (delay: number, fn: () => void) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    const tick = () => {
      const phrase = PHRASES[phraseIndex];

      if (!deleting) {
        if (visibleLength < phrase.length) {
          visibleLength += 1;
          setDisplayedText(phrase.slice(0, visibleLength));
          schedule(TYPE_MS, tick);
          return;
        }

        schedule(PAUSE_MS, () => {
          deleting = true;
          tick();
        });
        return;
      }

      if (visibleLength > 0) {
        visibleLength -= 1;
        setDisplayedText(phrase.slice(0, visibleLength));
        schedule(DELETE_MS, tick);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % PHRASES.length;
      tick();
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28"
      style={{
        backgroundImage: "url('/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column (Text & CTAs) */}
          <div className="flex flex-col max-w-xl">
            <Reveal variants={fadeIn}>
              <span className="inline-flex w-fit items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-soft">
                Trusted accountants in London
              </span>
            </Reveal>

            <Reveal variants={slideUp} className="mt-6">
              <h1 className="text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] font-extrabold text-heading">
                <span className="block">Reliable Accounting</span>
                <span className="block mt-1">for Growing</span>
                <span className="mt-4 block w-fit">
                  <span className="relative inline-flex items-center justify-start">
                    {/* Reserved space for the longest phrase to prevent layout shifts */}
                    <span className="invisible pointer-events-none select-none py-1.5 pr-2" aria-hidden="true">
                      Limited Companies
                    </span>
                    <span className="absolute inset-0 flex items-center justify-start overflow-hidden">
                      <span className="absolute inset-y-0 left-0 flex items-center justify-start">
                        <span className="inline-flex items-center bg-[#EAF8EE]/50 text-[#2e8b57] py-1.5 pr-2 rounded-lg">
                          {displayedText}
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal variants={fadeIn} delay={0.1} className="mt-6">
              <p className="max-w-md text-base leading-relaxed text-body sm:text-lg">
                Trusted accounting for sole traders and small businesses across London.
              </p>
            </Reveal>

            <Reveal
              variants={fadeIn}
              delay={0.2}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href={CONSULTATION_HREF}
                className={buttonVariants({ variant: "cta", size: "lg" })}
              >
                Book a Free Consultation
              </Link>
              {/* <Link
                href="#services"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Our Services
              </Link> */}
            </Reveal>

            <Reveal
              variants={fadeIn}
              delay={0.3}
              className="mt-10 flex flex-wrap gap-x-4 gap-y-3"
            >
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full bg-[#EAF8EE]/50 border border-[#2e8b57]/20 text-[#2e8b57] px-3.5 py-1 text-sm font-semibold"
                >
                  <span className="inline-flex size-4.5 items-center justify-center rounded-full bg-[#2e8b57]/15 text-[#2e8b57]">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {badge.label}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Right Column (Consultation Form Card) */}
          <Reveal variants={fadeIn} delay={0.15} className="relative w-full max-w-sm lg:ml-auto">
            {/* Stats Card positioned left of the form (no overlap) */}
            <div className="absolute top-12 -left-[210px] z-20 hidden lg:block rounded-2xl border border-border bg-card p-5 shadow-soft-lg max-w-fit">
              <p className="font-heading text-3xl font-extrabold text-primary">
                100+
              </p>
              <p className="text-xs text-body font-medium mt-0.5">Businesses supported</p>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-white p-5 shadow-soft-lg sm:p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 min-h-[400px]">
                  <div className="inline-flex size-16 items-center justify-center rounded-full bg-[#EAF8EE] text-[#2e8b57] mb-6 shadow-soft">
                    <Check className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-heading">Thank You!</h3>
                  <p className="mt-3 text-body leading-relaxed text-sm">
                    Your consultation request has been received. One of our senior partners will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Name field */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-body/40">
                      <User className="size-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Full Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full pl-10 pr-3 py-2.5 text-sm border border-border rounded-xl bg-transparent text-heading placeholder-body/40 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-body/40">
                      <Mail className="size-4" />
                    </span>
                    <input
                      type="email"
                      placeholder="Email address*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full pl-10 pr-3 py-2.5 text-sm border border-border rounded-xl bg-transparent text-heading placeholder-body/40 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div className="relative flex items-center border border-border rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-secondary focus-within:border-secondary">
                    <div className="relative flex items-center bg-card border-r border-border px-3 py-2.5 shrink-0">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="appearance-none bg-transparent pr-5 text-sm font-medium text-heading focus:outline-none cursor-pointer"
                      >
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                      </select>
                      <span className="absolute right-2 pointer-events-none text-body/40">
                        <ChevronDown className="size-3" />
                      </span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="block w-full px-3 py-2.5 text-sm bg-transparent text-heading placeholder-body/40 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Service dropdown */}
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="appearance-none block w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-transparent text-heading focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary cursor-pointer transition-colors"
                      required
                    >
                      <option value="" disabled>Service Required</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="accounts-preparation">Accounts Preparation</option>
                      <option value="vat-returns">VAT Returns</option>
                      <option value="payroll">Payroll</option>
                      <option value="company-accounts">Company Accounts</option>
                      <option value="business-advice">Business Advice</option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-body/40">
                      <ChevronDown className="size-4" />
                    </span>
                  </div>

                  {/* Turnover dropdown */}
                  <div className="relative">
                    <select
                      value={formData.turnover}
                      onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                      className="appearance-none block w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-transparent text-heading focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary cursor-pointer transition-colors"
                      required
                    >
                      <option value="" disabled>What is your company's monthly turnover?</option>
                      <option value="under-2k">Under £2,000</option>
                      <option value="2k-5k">£2,000 - £5,000</option>
                      <option value="5k-10k">£5,000 - £10,000</option>
                      <option value="10k-25k">£10,000 - £25,000</option>
                      <option value="25k-40k">£25,000 - £40,000</option>
                      <option value="over-40k">Over £40,000</option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-body/40">
                      <ChevronDown className="size-4" />
                    </span>
                  </div>

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      placeholder="Please share details about your business and tax needs."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="block w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-transparent text-heading placeholder-body/40 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary h-16 resize-none transition-colors"
                    />
                  </div>

                  {/* Consent Check/Text */}
                  <div className="py-0.5">
                    <p className="text-[11px] leading-relaxed text-body/80">
                      I accept the Terms and Conditions.{" "}
                      <Link href="/privacy" className="text-[#e25c5c] hover:underline font-medium">
                        Privacy Policy
                      </Link>{" "}
                      &{" "}
                      <Link href="/terms" className="text-[#e25c5c] hover:underline font-medium">
                        Terms & Conditions
                      </Link>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 btn-cta-slide text-white font-bold rounded-xl shadow-soft transition-all duration-300 ease-out hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
