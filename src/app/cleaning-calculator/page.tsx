"use client";

import Link from "next/link";
import { Calculator } from "@/components/Calculator";

export default function CleaningCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-32 pb-16">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
              Pricing Tool
            </span>
            <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
              Cleaning Cost{" "}
              <em className="text-gold font-normal">Calculator</em>
            </h1>
            <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg leading-relaxed">
              Get a rough estimate for your home. This is not a quote. Every
              home is different, and a conversation with Denise is the best way
              to get an exact number.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-surface-low">
        <div className="max-w-2xl mx-auto px-8">
          <Calculator source="standalone" />
        </div>
      </section>

      {/* How we calculate */}
      <section className="py-24 bg-surface">
        <div className="max-w-2xl mx-auto px-8">
          <span className="label-upper text-gold block mb-5">
            How This Estimate Works
          </span>
          <div className="space-y-5 text-on-surface-variant text-[0.95rem] leading-relaxed">
            <p>
              We start with the square footage of your home. Larger spaces take
              more time to clean. Bathrooms get extra time because of the
              fixtures, tiles, and detail work involved.
            </p>
            <p>
              The estimate includes extra time for first visits, because your
              cleaner needs to learn your home. Where the supplies are, how the
              dog reacts, which rooms need the most attention. That first visit
              is always a bit longer. After that, things move faster.
            </p>
            <p>
              Deep cleans take about 35% longer than a standard clean because we
              go inside the oven, behind the furniture, and into the window
              tracks.
            </p>
            <p>
              We round up, not down. We would rather give you a number that is
              slightly high and come in under it than the other way around. For a
              more accurate number, call Denise at{" "}
              <a
                href="tel:+19055011509"
                className="text-primary hover:text-gold transition-colors"
              >
                (905) 501-1509
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-gold block mb-8">
            Related Reading
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { href: "/pricing", title: "Our Full Pricing Breakdown", desc: "Detailed rates, what affects cost, how we compare." },
              { href: "/journal/house-cleaning-cost-toronto-2026", title: "What Cleaning Costs in Toronto in 2026", desc: "Market rates across different company types." },
              { href: "/journal/hourly-vs-flat-rate-cleaning", title: "Hourly vs Flat Rate Cleaning", desc: "Why we charge by the hour and what that means for you." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-6 bg-surface-lowest hover:bg-surface whisper-shadow transition-colors duration-300"
              >
                <h3 className="font-serif text-primary text-lg font-normal mb-2 group-hover:text-gold transition-colors">
                  {link.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
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
