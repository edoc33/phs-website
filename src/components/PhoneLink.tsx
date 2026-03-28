"use client";

import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

interface PhoneLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneLink({ children, className }: PhoneLinkProps) {
  const pathname = usePathname();

  return (
    <a
      href="tel:+19055011509"
      className={className}
      onClick={() => trackEvent("phone_click", { page: pathname })}
    >
      {children}
    </a>
  );
}
