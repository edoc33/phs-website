import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Call Back",
  description:
    "Request a call back from Portuguese Housekeeping Services. We'll contact you within one business day with a free cleaning quote.",
  alternates: { canonical: "/request-a-call-back" },
};

export default function RequestCallBackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
