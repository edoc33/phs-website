import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  title: {
    default: "Portuguese Housekeeping Services | Toronto & Mississauga",
    template: "%s | Portuguese Maids",
  },
  description:
    "Trusted residential and commercial housekeeping in Toronto and Mississauga for over 30 years. Weekly, bi-weekly, and monthly cleaning visits. Call (905) 501-1509 for a free quote.",
  keywords: [
    "housekeeping",
    "cleaning services",
    "Toronto",
    "Mississauga",
    "residential cleaning",
    "commercial cleaning",
    "Portuguese",
    "GTA",
  ],
  openGraph: {
    title: "Portuguese Housekeeping Services",
    description:
      "Trusted housekeeping in Toronto & Mississauga for over 30 years.",
    url: "https://portuguesemaids.ca",
    siteName: "Portuguese Housekeeping Services",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
