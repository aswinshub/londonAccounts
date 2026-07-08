import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { getLocalBusinessJsonLd } from "@/lib/seo";
import { SITE } from "@/constants/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Accounting for Small Businesses in London`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "accountant London",
    "small business accountant",
    "sole trader accounting",
    "limited company accounts",
    "bookkeeping London",
    "VAT returns",
    "payroll services",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <script
          type="application/ld+json"
          // Structured data for search engines (Local Business).
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessJsonLd()),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
