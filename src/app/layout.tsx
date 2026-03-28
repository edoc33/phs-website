import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portuguesemaids.ca"),
  title: {
    default: "House Cleaning Services in Toronto & Mississauga | Portuguese Maids",
    template: "%s | Portuguese Maids",
  },
  description:
    "Trusted house cleaning in Toronto & Mississauga for 30+ years. Same cleaner every visit. Weekly, bi-weekly & monthly. Call (905) 501-1509 for a free quote.",
  keywords: [
    "house cleaning Toronto",
    "house cleaning Mississauga",
    "maid service Toronto",
    "cleaning services GTA",
    "residential cleaning Mississauga",
    "commercial cleaning Toronto",
    "Portuguese cleaning service",
    "housekeeping Toronto",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "House Cleaning Services in Toronto & Mississauga | Portuguese Maids",
    description:
      "Trusted house cleaning in Toronto & Mississauga for 30+ years. Same cleaner every visit. Call (905) 501-1509.",
    url: "https://portuguesemaids.ca",
    siteName: "Portuguese Housekeeping Services",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/HousekeepingService",
  "@id": "https://portuguesemaids.ca/#business",
  name: "Portuguese Housekeeping Services",
  url: "https://portuguesemaids.ca",
  telephone: "+1-905-501-1509",
  foundingDate: "1994",
  priceRange: "$$",
  description:
    "Family-owned house cleaning company serving Toronto and Mississauga for over 30 years. Owner-operated by Denise, with the same trusted cleaner assigned to every visit. 100% referral-built.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Kingsbridge Garden Circle, Suite #2007",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5R 3K4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5923,
    longitude: -79.6458,
  },
  areaServed: [
    { "@type": "City", name: "Toronto", sameAs: "https://en.wikipedia.org/wiki/Toronto" },
    { "@type": "City", name: "Mississauga", sameAs: "https://en.wikipedia.org/wiki/Mississauga" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  logo: "https://portuguesemaids.ca/logo.png",
  image: "https://portuguesemaids.ca/images/hero.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={localBusinessJsonLd} />
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`}
            </Script>
          </>
        )}
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
