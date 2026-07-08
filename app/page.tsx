import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accounting for Small Businesses in London",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection id="services" />
      <AboutSection id="about" />
      <WhoWeHelp id="who-we-help" />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection id="contact" />
    </>
  );
}
