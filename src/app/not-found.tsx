import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
              404
            </span>
            <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
              This page doesn&apos;t{" "}
              <em className="text-gold font-normal">exist.</em>
            </h1>
            <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-md leading-relaxed">
              You may have followed an old link or typed the wrong address.
              Here are the pages most people are looking for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              {
                href: "/pricing",
                label: "01",
                title: "Pricing",
                desc: "$45 per hour. See the full breakdown and try our cost calculator.",
              },
              {
                href: "/cleaning-services",
                label: "02",
                title: "Service Areas",
                desc: "Toronto, Mississauga, and every neighbourhood in between.",
              },
              {
                href: "/services/standard-cleaning",
                label: "03",
                title: "Our Services",
                desc: "Standard cleaning and deep cleaning for recurring home care.",
              },
              {
                href: "/cleaning-calculator",
                label: "04",
                title: "Cost Calculator",
                desc: "Get a rough estimate for your home before you call.",
              },
              {
                href: "/contact-us",
                label: "05",
                title: "Contact",
                desc: "Call (905) 501-1509 or fill out the form.",
              },
              {
                href: "/journal",
                label: "06",
                title: "Journal",
                desc: "Cleaning tips and home care advice for Toronto homes.",
              },
            ].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group p-10 lg:p-12 transition-colors duration-500 ${
                  i === 0
                    ? "bg-surface-lowest whisper-shadow"
                    : "bg-transparent hover:bg-surface-lowest"
                }`}
              >
                <span className="label-upper text-on-surface-variant/40 block mb-6">
                  {link.label}
                </span>
                <h2 className="font-serif text-2xl text-primary mb-4 font-normal group-hover:text-gold transition-colors duration-300">
                  {link.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-[0.95rem]">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
