import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "House Cleaning Prices in Toronto and Mississauga",
  description:
    "House cleaning in Toronto and Mississauga starts at $45 per hour with a 3-hour minimum. Here is exactly what affects the price and what is included.",
  alternates: { canonical: "/pricing" },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "House Cleaning",
  provider: { "@id": "https://portuguesemaids.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
  ],
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "45.00",
      priceCurrency: "CAD",
      unitCode: "HUR",
      description: "Per hour, 3-hour minimum per visit",
    },
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingJsonLd} />

      {/* Hero */}
      <section className="bg-surface pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
              Pricing
            </span>
            <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
              Honest Pricing.
              <br />
              <em className="text-gold font-normal">No Surprises.</em>
            </h1>
            <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-md leading-relaxed">
              Most cleaning companies make you fill out a form before they tell
              you what it costs. Here is what we charge.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing breakdown */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="label-upper text-gold block mb-5">
                Our Rate
              </span>
              <p className="font-serif text-primary font-normal" style={{ fontSize: "clamp(4rem, 6vw, 7rem)", lineHeight: 1 }}>
                $45
              </p>
              <p className="font-serif text-on-surface-variant text-2xl mt-2 font-normal">
                per hour
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  3-hour minimum per visit
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  One-time, commercial, or heavy-duty jobs may cost more
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  You provide the cleaning supplies and equipment
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  Payment: cash or e-transfer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What affects the price */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Good to Know
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              What affects the price.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl">
            {[
              {
                title: "Size of your home",
                desc: "A one-bedroom condo takes less time than a four-bedroom house. Simple as that.",
              },
              {
                title: "Condition",
                desc: "A first clean always takes longer than an ongoing visit. Once we establish a baseline, each visit gets faster.",
              },
              {
                title: "Frequency",
                desc: "Weekly, bi-weekly, or monthly. More frequent visits mean less buildup each time.",
              },
              {
                title: "Specific requests",
                desc: "Laundry, inside the oven, organizing closets. We can do it. Just let Denise know.",
              },
              {
                title: "Number of cleaners",
                desc: "Some homes need two people to finish in a reasonable time. Denise will tell you upfront.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl text-primary mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-on-surface-variant text-[1.05rem] leading-relaxed mt-16 max-w-lg">
            This is why talking to Denise first is almost always the best
            starting point. Call{" "}
            <a
              href="tel:+19055011509"
              className="text-primary border-b border-on-surface-variant/30 hover:border-gold transition-colors"
            >
              (905) 501-1509
            </a>{" "}
            or{" "}
            <Link
              href="/request-a-call-back"
              className="text-primary border-b border-on-surface-variant/30 hover:border-gold transition-colors"
            >
              request a call back
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How we compare */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              For Context
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              How we compare.
            </h2>
          </div>
          <div className="max-w-2xl space-y-8 text-on-surface-variant text-[1.05rem] leading-relaxed">
            <p>
              Most franchises charge $55 to $75 per hour and send a different
              person each time. You re-explain your preferences on every visit.
            </p>
            <p>
              Most app-based services charge $45 to $65 and you never meet the
              same cleaner twice. There is no one to call if something is not
              right.
            </p>
            <p>
              Independent cleaners on Kijiji can be cheaper, but there is no
              accountability if something goes wrong. No owner, no team, no
              backup.
            </p>
            <p className="text-primary font-serif text-xl font-normal">
              We charge $45 per hour, send the same person every visit, and the
              owner answers the phone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-gold block mb-5">
              Get Started
            </span>
            <h2 className="font-serif fluid-heading font-normal mb-6">
              Ready to talk about your home?
            </h2>
            <p className="text-primary-fixed-dim/50 text-lg max-w-md mb-12 leading-relaxed">
              Call Denise or request a call back. She will give you an honest
              estimate based on what you actually need.
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
                className="font-serif text-on-primary text-base flex items-center gap-2 group"
              >
                <span className="border-b border-on-primary/30 group-hover:border-gold transition-colors pb-0.5">
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
