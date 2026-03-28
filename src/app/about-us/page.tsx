import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Portuguese Housekeeping Services — a family-owned cleaning company serving Toronto and Mississauga for over 30 years.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — asymmetric, left-aligned */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
              Our Story
            </span>
            <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
              Meet <em className="text-gold font-normal">Denise</em>
            </h1>
            <p className="animate-fade-up-2 text-on-surface-variant text-lg leading-relaxed mt-10 max-w-xl">
              She joined PHS over 30 years ago. Learned every corner of the
              business. Then took it over. Today, she still personally oversees
              every client relationship.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 animate-fade-up-3">
            <div className="relative w-full aspect-[3/4]">
              <Image src="/images/denise-hero.png" alt="Denise, owner of Portuguese Housekeeping Services" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Story — two-column with generous whitespace */}
      <section className="py-40 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Prose */}
            <div className="lg:col-span-7">
              <span className="label-upper text-gold block mb-6">The Beginning</span>
              <h2 className="font-serif fluid-subheading text-primary font-normal mb-10">
                Built on referrals. Run by Denise.
              </h2>
              <div className="space-y-7 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-xl">
                <p>
                  Denise joined Portuguese Housekeeping Services over 30 years
                  ago and learned the business from the ground up. She got to
                  know every client, every home, and every detail that mattered
                  to each family. Then she took over the company.
                </p>
                <p>
                  That track record is our proudest achievement. When people trust
                  you enough to recommend you to their family and friends, it
                  means you&apos;ve earned something no marketing budget can buy.
                </p>
                <p>
                  We&apos;re a small, locally-owned company in Mississauga. We keep
                  things simple: show up on time, do thorough work, treat every
                  home like it&apos;s our own.
                </p>
              </div>
            </div>

            {/* Services list — no card-in-card, just clean surface shift */}
            <div className="lg:col-span-4 lg:col-start-9 bg-surface-lowest p-10 whisper-shadow self-start">
              <span className="label-upper text-gold block mb-8">What We Offer</span>
              <ul className="space-y-6">
                {[
                  "Residential housekeeping and housecleaning",
                  "Commercial cleaning services",
                  "Weekly, bi-weekly, and monthly visits",
                  "Flexible hourly rates",
                  "Free, no-obligation quotes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-on-surface-variant text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Owners */}
      <section className="py-40 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-4">
              <div className="relative w-full aspect-[3/4]">
                <Image src="/images/personal-touch.png" alt="Hands carefully arranging fresh flowers in a clean home" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <span className="label-upper text-gold block mb-6">The Person Behind PHS</span>
              <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
                Owner &amp; Operator
              </h2>
              <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed">
                <p>
                  Denise joined Portuguese Housekeeping Services over 30 years ago
                  and learned every aspect of the business from the ground up. She
                  got to know every client, every home, and every detail that
                  mattered to each family.
                </p>
                <p>
                  Over the years, she took over the company and continues to run it
                  with the same care and personal attention that built its reputation.
                  When you work with PHS, you work with someone who genuinely knows
                  the business inside and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — asymmetric grid */}
      <section className="py-40 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-xl mb-20">
            <span className="label-upper text-gold block mb-5">Our Values</span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              What guides us, every single day.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { title: "Trust", text: "You invite us into your home. We take that seriously, every single time." },
              { title: "Quality", text: "We don\u2019t cut corners. Thorough, careful work is the only kind we know." },
              { title: "Consistency", text: "Same high standard, every visit. You should never have to wonder." },
              { title: "Affordability", text: "Fair rates, no hidden fees. We keep costs honest by keeping things simple." },
            ].map((v, i) => (
              <div key={v.title} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <span className="label-upper text-on-surface-variant/40 block mb-4">0{i + 1}</span>
                <h3 className="font-serif text-xl text-primary mb-4 font-normal">{v.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-[0.95rem]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark section */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-xl">
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Ready to see the difference?
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Request a call-back and we&apos;ll provide a free, no-obligation quote
              tailored to your home.
            </p>
            <Link
              href="/request-a-call-back"
              className="cta-square bg-gold text-gold-dark"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
