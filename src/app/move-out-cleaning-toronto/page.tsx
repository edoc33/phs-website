import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Services in Toronto and Mississauga",
  description:
    "Moving out of your Toronto apartment or condo? We handle the cleaning so you get your deposit back. Same-day quotes, $45 per hour.",
  alternates: { canonical: "/move-out-cleaning-toronto" },
};

const moveOutCleaningJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Move-Out Cleaning",
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

export default function MoveOutCleaningPage() {
  return (
    <>
      <JsonLd data={moveOutCleaningJsonLd} />

      {/* Hero */}
      <section className="bg-surface pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
                Moving
              </span>
              <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
                Move-Out Cleaning.{" "}
                <em className="text-gold font-normal">Leave It Spotless.</em>
              </h1>
              <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-md leading-relaxed">
                Your landlord's standards and your standards are probably
                different. We meet both.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/seasonal/move-out-cleaning.png"
                  alt="Empty spotless Toronto apartment ready for move-out"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What move-out cleaning includes */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Wall to Wall
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              What move-out cleaning includes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 max-w-3xl">
            {[
              "Every wall wiped down, scuff marks removed",
              "Inside all cabinets and closets",
              "Oven cleaned inside and out",
              "Fridge emptied, shelves scrubbed",
              "Bathroom grout scrubbed, fixtures sanitized",
              "All floors vacuumed and mopped",
              "Window tracks and sills cleaned",
              "Baseboards, door frames, and switch plates",
              "Light fixtures and ceiling fans",
              "Balcony swept and wiped if accessible",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <p className="text-on-surface-variant text-[1.05rem] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condo-specific */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <span className="label-upper text-gold block mb-5">
                Condo Moves
              </span>
              <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
                We know how condos work.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-lg">
                <p>
                  Toronto condo moves have their own logistics. Elevator
                  bookings, concierge rules, tight move-out windows. We have
                  cleaned hundreds of condos across the GTA and know how to
                  work within those constraints.
                </p>
                <p>
                  If your building requires a cleaning before the final
                  inspection, we can coordinate timing with your movers so
                  the clean happens right after furniture is out.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "Elevator and access",
                    desc: "We work around your elevator booking. Tell us the window and we will be there.",
                  },
                  {
                    num: "02",
                    title: "Concierge coordination",
                    desc: "If your building needs advance notice or a vendor form, let us know and we will sort it.",
                  },
                  {
                    num: "03",
                    title: "Same-day turnaround",
                    desc: "Movers leave at noon, we start at 1 PM. Most condo move-outs take 3 to 5 hours.",
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

      {/* Broom clean vs actually clean */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Be Honest
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              "Broom clean" is not actually clean.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed">
            <p>
              Most people try to clean on moving day. You are exhausted, the
              movers just left, boxes are everywhere, and you have two hours
              before the keys are due. You sweep the floors, wipe the
              counters, and hope for the best.
            </p>
            <p>
              Your landlord notices. The oven is greasy. There is hair in the
              bathroom drain. The baseboards have not been touched in a year.
              The deposit discussion gets uncomfortable.
            </p>
            <p className="text-primary font-serif text-xl font-normal">
              Hire someone who does this every week. We know what landlords
              look for because we have cleaned hundreds of move-outs.
            </p>
          </div>
        </div>
      </section>

      {/* Move-in cleaning too */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <span className="label-upper text-gold block mb-5">
                Moving In?
              </span>
              <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
                We do move-in cleaning too.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-lg">
                <p>
                  The previous tenant's version of clean is not your version
                  of clean. A move-in clean before your furniture arrives means
                  you start fresh in a home you actually trust is clean.
                </p>
                <p>
                  Same service, same rate. We clean every surface before your
                  first box comes through the door.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-6">
                <Link
                  href="/journal/move-in-cleaning-guide-gta"
                  className="label-upper text-gold hover:text-gold-light transition-colors duration-200"
                >
                  Move-in cleaning guide &rarr;
                </Link>
                <Link
                  href="/services/move-in-move-out"
                  className="label-upper text-gold hover:text-gold-light transition-colors duration-200"
                >
                  Move-in/move-out service &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-surface-lowest p-10 whisper-shadow">
                <p className="font-serif text-primary text-lg font-normal mb-4">
                  Moving within Toronto?
                </p>
                <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                  Some clients book us for both. We clean the old place after
                  you leave and the new place before you arrive. Two different
                  cleaners, same day, coordinated by Denise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-36 bg-surface-low">
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
                  One-time and move-out jobs may cost more depending on condition
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  Most condo move-outs take 3 to 5 hours
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                  You provide the cleaning supplies and equipment
                </li>
              </ul>
              <p className="text-on-surface-variant text-[1.05rem] leading-relaxed mt-10">
                Full details on our{" "}
                <Link
                  href="/pricing"
                  className="text-primary border-b border-on-surface-variant/30 hover:border-gold transition-colors"
                >
                  pricing page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Related Reading
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              More from our journal.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl">
            {[
              {
                href: "/journal/new-build-condo-cleaning",
                title: "New Build Condo Cleaning",
                desc: "What to expect and what to clean before moving into a brand-new Toronto condo.",
              },
              {
                href: "/journal/condo-cleaning-tips-toronto",
                title: "Condo Cleaning Tips for Toronto",
                desc: "Practical cleaning advice for Toronto condo living, from small spaces to shared laundry.",
              },
              {
                href: "/journal/hiring-cleaner-first-time",
                title: "Hiring a Cleaner for the First Time",
                desc: "What to know before you book your first professional cleaning appointment.",
              },
              {
                href: "/journal/move-in-cleaning-guide-gta",
                title: "Move-In Cleaning Guide",
                desc: "A complete guide to cleaning your new place before the furniture arrives.",
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
              Get a Quote
            </span>
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Moving soon? Let us handle the clean.
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Call Denise with your move-out date and she will give you an
              honest quote. Same-day estimates for most Toronto and Mississauga
              addresses.
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
