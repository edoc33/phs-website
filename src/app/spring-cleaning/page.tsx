import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Spring Cleaning Services in Toronto and Mississauga",
  description:
    "Book your spring deep clean in Toronto or Mississauga. We reset your home after winter. Same cleaner, $45 per hour, 30+ years trusted service.",
  alternates: { canonical: "/spring-cleaning" },
};

const springCleaningJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spring Cleaning",
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

export default function SpringCleaningPage() {
  return (
    <>
      <JsonLd data={springCleaningJsonLd} />

      {/* Hero */}
      <section className="bg-surface pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
                Seasonal
              </span>
              <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
                Spring Cleaning for{" "}
                <em className="text-gold font-normal">Toronto Homes</em>
              </h1>
              <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-md leading-relaxed">
                Five months of sealed windows, road salt, and dust. Your home
                needs a reset.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/seasonal/spring-cleaning.png"
                  alt="Toronto residential street in spring with cherry blossoms"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What a spring clean covers */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Room by Room
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              What a spring clean covers.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <ul className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  <strong className="text-primary font-normal font-serif">Kitchen.</strong>{" "}
                  Inside the oven and fridge, behind appliances, degreased range hood, wiped cabinets inside and out.
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  <strong className="text-primary font-normal font-serif">Bathrooms.</strong>{" "}
                  Tile grout scrubbed, exhaust fans cleaned, mirrors, fixtures, and every surface sanitized.
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  <strong className="text-primary font-normal font-serif">Bedrooms.</strong>{" "}
                  Under the bed, behind furniture, baseboards, light fixtures, ceiling fans, and windowsills.
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  <strong className="text-primary font-normal font-serif">Living areas.</strong>{" "}
                  Radiators, vents, blinds, all surfaces, and a thorough vacuum and mop of every floor.
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  <strong className="text-primary font-normal font-serif">Entryway.</strong>{" "}
                  Salt residue removed from floors and mats, coat closets wiped down, front door and frame cleaned.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-surface-lowest p-10 whisper-shadow">
                <p className="font-serif text-primary text-lg font-normal mb-4">
                  Want the full checklist?
                </p>
                <p className="text-on-surface-variant text-[0.95rem] leading-relaxed mb-6">
                  We wrote a room-by-room spring cleaning guide for Toronto
                  homes. It covers everything we do and what you can tackle
                  yourself.
                </p>
                <Link
                  href="/journal/spring-cleaning-checklist-toronto"
                  className="label-upper text-gold hover:text-gold-light transition-colors duration-200"
                >
                  Read the checklist &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why spring is the busiest time */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Fair Warning
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              Spring is our busiest season.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed">
            <p>
              Everyone calls at the same time. March through May, our schedule
              fills up weeks in advance. This has been true every year for the
              past 30 years.
            </p>
            <p>
              If you want a spring clean, call early. We can not always
              accommodate last-minute requests during this window.
            </p>
            <p className="text-primary font-serif text-xl font-normal">
              The earlier you book, the more flexibility you have with dates
              and times.
            </p>
          </div>
        </div>
      </section>

      {/* Toronto-specific spring issues */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Toronto Specific
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              Winter leaves a mess you can not see.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl">
            {[
              {
                title: "Road salt damage",
                desc: "Salt tracked in all winter eats into hardwood and tile grout. A spring clean removes the residue before it does permanent damage.",
              },
              {
                title: "Pollen buildup",
                desc: "Toronto's tree pollen season hits hard in April and May. Surfaces, vents, and windowsills collect layers of it while windows are still closed.",
              },
              {
                title: "Condensation grime",
                desc: "Windows sealed for months trap moisture. That grey film on your glass and frames is mould-friendly condensation buildup.",
              },
              {
                title: "Radiator dust",
                desc: "Baseboard heaters and radiators collect dust all winter and bake it on. By spring, they need a proper wipe-down.",
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
        </div>
      </section>

      {/* Pricing */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="label-upper text-gold block mb-5">
                Pricing
              </span>
              <p
                className="font-serif text-primary font-normal"
                style={{ fontSize: "clamp(4rem, 6vw, 7rem)", lineHeight: 1 }}
              >
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
                  A spring deep clean typically takes 4 to 6 hours for a 3-bedroom home
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  You provide the cleaning supplies and equipment
                </li>
              </ul>
              <p className="text-on-surface-variant text-[1.05rem] leading-relaxed mt-10">
                Want a full breakdown?{" "}
                <Link
                  href="/pricing"
                  className="text-primary border-b border-on-surface-variant/30 hover:border-gold transition-colors"
                >
                  See our pricing page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Related Reading
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              More on spring cleaning.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl">
            {[
              {
                href: "/journal/spring-allergy-cleaning",
                title: "Spring Allergy Cleaning",
                desc: "How to reduce allergens in your home before pollen season hits Toronto.",
              },
              {
                href: "/journal/salt-damage-floors-toronto",
                title: "Salt Damage on Toronto Floors",
                desc: "What road salt does to your hardwood and tile, and how to fix it.",
              },
              {
                href: "/journal/first-open-window-clean",
                title: "The First Open Window Clean",
                desc: "What to clean the day you finally open your windows after winter.",
              },
              {
                href: "/journal/baseboard-cleaning",
                title: "Baseboard Cleaning",
                desc: "How to clean baseboards properly and why they collect so much dust over winter.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block"
              >
                <h3 className="font-serif text-xl text-primary mb-3 font-normal group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-[0.95rem] leading-relaxed mb-4">
                  {post.desc}
                </p>
                <span className="label-upper text-gold/60 group-hover:text-gold transition-colors duration-300">
                  Read &rarr;
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
            <span className="label-upper text-gold block mb-5">
              Book Early
            </span>
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Ready to reset your home for spring?
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Call Denise or request a call back. Spring fills up fast, so the
              sooner you reach out, the better your options.
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
