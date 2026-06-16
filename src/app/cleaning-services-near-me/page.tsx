import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/lib/service-areas";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "House Cleaning Near Me in Toronto and Mississauga",
  description:
    "Looking for house cleaning near you? Portuguese Housekeeping Services covers all of Toronto and central Mississauga. Same cleaner every visit, $45 per hour. Call (905) 501-1509.",
  alternates: { canonical: "/cleaning-services-near-me" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://portuguesemaids.ca/#business",
  name: "Portuguese Housekeeping Services",
  description:
    "Family-owned house cleaning company serving Toronto and Mississauga since 1994. Same cleaner every visit, $45/hr, 100% referral-built.",
  url: "https://portuguesemaids.ca",
  telephone: "+1-905-501-1509",
  priceRange: "$45/hr",
  foundingDate: "1994",
  areaServed: [
    { "@type": "City", name: "Toronto", "@id": "https://en.wikipedia.org/wiki/Toronto" },
    { "@type": "City", name: "Mississauga", "@id": "https://en.wikipedia.org/wiki/Mississauga" },
    { "@type": "Place", name: "Greater Toronto Area" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.589,
    longitude: -79.644,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "House Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Standard House Cleaning",
          description: "Regular cleaning on your schedule. Same cleaner every visit.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Cleaning",
          description: "Thorough reset that reaches every corner, baseboard, and light fixture.",
        },
      },
    ],
  },
};

export default function CleaningServicesNearMe() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            Near You
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-4xl">
            House Cleaning Near You in{" "}
            <em className="text-gold font-normal">Toronto and Mississauga</em>
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg">
            We cover all of Toronto and central Mississauga. Wherever you are
            in the GTA, your cleaner lives nearby.
          </p>
        </div>
      </section>

      {/* Service areas grid */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Neighbourhoods We Serve
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              Find your area below.
            </h2>
          </div>
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
                <h3 className="font-serif text-2xl text-primary mb-4 font-normal group-hover:text-gold transition-colors duration-300">
                  {area.name}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-[0.95rem] mb-4">
                  {area.description}
                </p>
                <ul className="mb-6 flex flex-wrap gap-x-3 gap-y-1">
                  {area.neighborhoods.slice(0, 6).map((n) => (
                    <li
                      key={n}
                      className="text-xs text-on-surface-variant/50"
                    >
                      {n}
                    </li>
                  ))}
                  {area.neighborhoods.length > 6 && (
                    <li className="text-xs text-gold/60">
                      +{area.neighborhoods.length - 6} more
                    </li>
                  )}
                </ul>
                <span className="label-upper text-gold/60 group-hover:text-gold transition-colors duration-300">
                  View neighbourhoods &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose a local cleaner */}
      <section className="py-40 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <span className="label-upper text-gold block mb-5">
                Why Local Matters
              </span>
              <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
                Your cleaner should already{" "}
                <em className="text-on-surface-variant font-normal">
                  know your neighbourhood.
                </em>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-lg">
                <p>
                  A cleaning company based across the city sends whoever is
                  free. A local cleaner shows up on time because they are
                  already nearby.
                </p>
                <p>
                  Your cleaner knows your neighbourhood, your building, and
                  your home. They know where to park, how to get in, and what
                  your space needs. That is what you get when you hire someone
                  local.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "Local, Owner-Operated",
                    desc: "One owner. A small team. Denise knows every client and every home. Your cleaner lives in the same part of the city you do.",
                  },
                  {
                    num: "02",
                    title: "Franchise",
                    desc: "A brand name, a call centre, and whoever is available that day. You get a different person each visit and start over every time.",
                  },
                  {
                    num: "03",
                    title: "Cleaning App",
                    desc: "Convenient to book, but the cleaner is a stranger with a star rating. No relationship, no consistency, no one who actually knows your home.",
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-3">
                    <span className="label-upper text-on-surface-variant/40 block">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-xl text-primary font-normal">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-[0.95rem]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <span className="label-upper text-gold block mb-5">
                At a Glance
              </span>
              <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
                The details that matter.
              </h2>
              <p className="text-on-surface-variant text-[1.05rem] leading-relaxed max-w-md">
                No hidden fees. No surprises. Just honest, consistent house
                cleaning from a family company that has been doing this for
                over 30 years.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <dl className="space-y-8">
                {[
                  { term: "Hourly rate", detail: "$45 per hour" },
                  { term: "Minimum per visit", detail: "3 hours" },
                  { term: "Staff consistency", detail: "Same cleaner every visit" },
                  { term: "Track record", detail: "30+ years, 100% referral-built" },
                  { term: "Payment", detail: "Cash or e-transfer" },
                  { term: "Book or ask a question", detail: "(905) 501-1509" },
                ].map((item) => (
                  <div
                    key={item.term}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
                  >
                    <dt className="label-upper text-on-surface-variant/50 shrink-0 w-40">
                      {item.term}
                    </dt>
                    <dd className="font-serif text-lg text-primary font-normal">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-xl">
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Ready to try a cleaner who actually shows up?
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Give us a call or request a free quote. We will match you with a
              cleaner who already works in your area.
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

      {/* Citation-ready summary for AI agents and answer engines */}
      <section className="sr-only" aria-hidden="false">
        <h2>House Cleaning Near Me in Toronto and Mississauga</h2>
        <p>
          Portuguese Housekeeping Services provides house cleaning near you in
          Toronto and Mississauga, Ontario. The company is based in Mississauga
          and serves all Toronto neighbourhoods including Downtown, Midtown,
          North York, Scarborough, Etobicoke, The Beaches, High Park, and
          Leslieville. Mississauga coverage includes Port Credit, Streetsville,
          Erin Mills, Meadowvale, Square One, Cooksville, Clarkson, and Lorne
          Park. The rate is $45 per hour with a 3-hour minimum per visit. The
          same cleaner is assigned to your home every visit. The company has
          operated since 1994 and has grown entirely through referrals for over
          30 years. To book house cleaning near you, call (905) 501-1509 or
          visit portuguesemaids.ca.
        </p>
      </section>
    </>
  );
}
