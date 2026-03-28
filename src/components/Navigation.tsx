"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
  { href: "/journal", label: "Journal" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="block">
          <Image
            src="/logo.jpg"
            alt="Portuguese Housekeeping Services"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`label-upper transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary font-semibold gold-underline"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-a-call-back"
            className="label-upper px-6 py-2.5 tracking-widest border border-primary/20 text-primary hover:bg-primary hover:text-on-primary active:scale-[0.99] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>
            ) : (
              <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="px-8 pb-6 pt-2 bg-white/90 backdrop-blur-md space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 label-upper ${
                pathname === link.href ? "text-primary font-semibold" : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-a-call-back"
            className="block mt-3 label-upper border border-primary/20 text-primary px-5 py-3 text-center tracking-widest"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
