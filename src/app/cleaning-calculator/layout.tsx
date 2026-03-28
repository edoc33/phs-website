import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Cost Calculator",
  description:
    "Estimate how much house cleaning costs for your home in Toronto or Mississauga. Enter your rooms and get a conservative estimate at $45 per hour.",
  alternates: { canonical: "/cleaning-calculator" },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
