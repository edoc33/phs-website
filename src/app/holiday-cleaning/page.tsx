import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Holiday Cleaning Services in Toronto and Mississauga",
  description:
    "Get your home guest-ready for the holidays. Deep cleaning before Thanksgiving, Christmas, or New Year's. Same cleaner, $45 per hour.",
  alternates: { canonical: "/holiday-cleaning" },
};

const holidayCleaningJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Holiday Cleaning",
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

export default function HolidayCleaningPage() {
  return (
    <>
      <JsonLd data={holidayCleaningJsonLd} />

      {/* Hero */}
      <section className="bg-surface pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
                Seasonal
              </span>
              <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
                Holiday Cleaning.{" "}
                <em className="text-gold font-normal">Guests Are Coming.</em>
              </h1>
              <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-md leading-relaxed">
                You have enough to manage this season. Let us handle the house.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/seasonal/holiday-cleaning.png"
                  alt="Clean and cozy Toronto home decorated for the holidays"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What a pre-holiday clean covers */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              What We Cover
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              A home your guests will notice.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl">
            {[
              {
                title: "Guest bathroom",
                desc: "Scrubbed tile, clean grout, fresh mirrors, sanitized fixtures. The room guests judge first.",
              },
              {
                title: "Kitchen deep clean",
                desc: "Inside the oven, stovetop degreased, counters cleared and wiped, fridge shelves cleaned. Ready for cooking.",
              },
              {
                title: "Living and dining areas",
                desc: "Dusted shelves, wiped surfaces, vacuumed upholstery, mopped floors. The rooms where everyone gathers.",
              },
              {
                title: "Entryway and coat area",
                desc: "First impressions matter. Clean floors, wiped baseboards, organized shoe and coat space.",
              },
              {
                title: "Windows and glass",
                desc: "Interior windows, mirrors, and glass doors cleaned. Natural light makes everything look better.",
              },
              {
                title: "Bedrooms and guest room",
                desc: "Under the bed, dusted surfaces, fresh linens if you provide them. A room your guests will actually want to sleep in.",
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

      {/* When to book */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Timing
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              November gets full fast.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed">
            <p>
              Thanksgiving, Christmas, New Year's. Three hosting events in six
              weeks. Everyone wants a clean before the first one and a reset
              after the last one.
            </p>
            <p>
              Book at least two weeks ahead. Three weeks is better. By mid-November,
              our December schedule is usually full.
            </p>
            <p className="text-primary font-serif text-xl font-normal">
              The families who book early get the dates they want. The ones
              who wait get what is left.
            </p>
          </div>
        </div>
      </section>

      {/* How it works with your schedule */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <span className="label-upper text-gold block mb-5">
                Your Schedule
              </span>
              <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
                We work around your prep,{" "}
                <em className="text-on-surface-variant font-normal">
                  not the other way around.
                </em>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-lg">
                <p>
                  You are already cooking, wrapping, decorating, and running
                  errands. The last thing you need is to rearrange your day for
                  a cleaning appointment.
                </p>
                <p>
                  Tell Denise when you need the house ready. She will schedule
                  your cleaner around that. If plans change, call and we will
                  adjust.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "You call Denise",
                    desc: "Tell her when guests arrive and what matters most to you. She will figure out the timing.",
                  },
                  {
                    num: "02",
                    title: "Your cleaner arrives",
                    desc: "Same person you already know, if you are an existing client. New clients get matched with someone in their area.",
                  },
                  {
                    num: "03",
                    title: "House is ready",
                    desc: "Guests arrive to a home that looks and smells like you spent all day cleaning. You did not.",
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
                  A pre-holiday deep clean typically takes 4 to 6 hours
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
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Related Reading
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              Prepare for the season.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl">
            {[
              {
                href: "/journal/holiday-cleaning-tips",
                title: "Holiday Cleaning Tips",
                desc: "Practical ways to keep your home guest-ready through the entire holiday season.",
              },
              {
                href: "/journal/fall-cleaning-checklist",
                title: "Fall Cleaning Checklist",
                desc: "Get ahead of the holidays with a fall reset before November hits.",
              },
              {
                href: "/journal/winterize-home-toronto",
                title: "Winterize Your Toronto Home",
                desc: "Cleaning and maintenance tasks to prepare your home for a Toronto winter.",
              },
              {
                href: "/journal/what-professional-cleaning-includes",
                title: "What Professional Cleaning Includes",
                desc: "A clear look at what you actually get when you hire a professional cleaning service.",
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
              Get Started
            </span>
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Let us take the house off your list.
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Call Denise or request a call back. She will work around your
              holiday schedule.
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
