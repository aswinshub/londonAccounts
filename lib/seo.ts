import type { Metadata } from "next";

import { SITE } from "@/constants/site";

const OG_IMAGE = {
  url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — accounting for small businesses in London`,
};

/**
 * Builds page-level metadata with sensible OpenGraph / Twitter defaults.
 */
export function buildMetadata({
  title,
  description = SITE.description,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url,
      locale: SITE.locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * JSON-LD structured data describing the firm as a LocalBusiness.
 */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: OG_IMAGE.url,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:30",
      },
    ],
    sameAs: [
      SITE.social.linkedin,
      SITE.social.twitter,
      SITE.social.facebook,
    ],
  };
}
