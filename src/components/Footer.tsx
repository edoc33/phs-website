import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-on-primary">
      <div className="mx-auto max-w-screen-2xl px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="Portuguese Housekeeping Services"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert"
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
                { href: "/blog", label: "Journal" },
                { href: "/request-a-call-back", label: "Book a Visit" },
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
