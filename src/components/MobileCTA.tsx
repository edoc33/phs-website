"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function MobileCTA() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-primary px-3 py-2.5">
      <div className="flex gap-2">
        {/* Call button */}
        <a
          href="tel:+19055011509"
          onClick={() => trackEvent("phone_click", { page: pathname })}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-on-primary text-sm font-semibold rounded transition-colors hover:bg-primary-deep"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call
        </a>

        {/* Quote button */}
        <Link
          href="/request-a-call-back"
          onClick={() => trackEvent("quote_click", { source: "mobile_cta" })}
          className="flex-1 inline-flex items-center justify-center py-2.5 bg-gold text-gold-dark text-sm font-semibold rounded transition-colors hover:bg-gold-light"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
