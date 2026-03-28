import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Cleaning Services Across the GTA",
  description:
    "Professional house cleaning services in Toronto and Mississauga. Explore the neighbourhoods we serve across the Greater Toronto Area.",
  alternates: { canonical: "/cleaning-services" },
};

export default function CleaningServicesHub() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            Service Areas
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-4xl">
            Cleaning Services Across the{" "}
            <em className="text-gold font-normal">Greater Toronto Area</em>
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg">
            Based in Mississauga, serving Toronto neighbourhoods for over 30
            years. Same cleaner every visit, wherever you call home.
          </p>
        </div>
      </section>

      {/* Area grid */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {serviceAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/cleaning-services/${area.slug}`}
                className={`group p-10 lg:p-12 transition-colors duration-500 ${
                  i === 0
                    ? "bg-surface-lowest whisper-shadow"
                    : "bg-transparent hover:bg-surface-lowest"
                }`}
              >
                <span className="label-upper text-on-surface-variant/40 block mb-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-2xl text-primary mb-4 font-normal group-hover:text-gold transition-colors duration-300">
                  {area.name}
                </h2>
                <p className="text-on-surface-variant leading-relaxed text-[0.95rem] mb-6">
                  {area.description}
                </p>
                <span className="label-upper text-gold/60 group-hover:text-gold transition-colors duration-300">
                  View neighbourhoods &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-xl">
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Not sure if we serve your area?
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Give us a call. If you&apos;re in the GTA, chances are we already
              clean homes near you.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/request-a-call-back"
                className="cta-square bg-gold text-gold-dark"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+19055011509"
                className="font-serif text-base flex items-center gap-2 group"
              >
                <span className="border-b border-white/30 group-hover:border-gold transition-colors pb-0.5">
                  Call (905) 501-1509
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
