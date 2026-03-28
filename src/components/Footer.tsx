import Link from "next/link";
import Image from "next/image";
import { serviceAreas } from "@/lib/service-areas";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-on-primary">
      <div className="mx-auto max-w-screen-2xl px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Portuguese Housekeeping Services"
                width={160}
                height={34}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40 max-w-xs">
              Trusted housekeeping in Toronto and Mississauga since 1994.
              Family-owned. Referral-built.
            </p>
          </div>

          <div>
            <h3 className="label-upper text-gold mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about-us", label: "About" },
                { href: "/contact-us", label: "Contact" },
                { href: "/journal", label: "Journal" },
                { href: "/request-a-call-back", label: "Get a Free Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-upper text-gold mb-5">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/cleaning-services/${area.slug}`}
                    className="text-sm text-white/40 hover:text-gold transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-upper text-gold mb-5">Get in Touch</h3>
            <div className="space-y-3 text-sm text-white/40">
              <a href="tel:+19055011509" className="block hover:text-gold transition-colors duration-200">
                (905) 501-1509
              </a>
              <address className="not-italic leading-relaxed">
                45 Kingsbridge Garden Circle
                <br />Suite #2007
                <br />Mississauga, ON L5R 3K4
              </address>
              <a
                href="https://g.page/r/CeChYsKR9LGLEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-gold/70 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Leave us a Google Review
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Portuguese Housekeeping Services.
          </p>
          <p className="text-xs text-white/25">
            Serving the Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
