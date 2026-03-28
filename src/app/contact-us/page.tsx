import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Portuguese Housekeeping Services in Mississauga. Call (905) 501-1509 for a free cleaning quote.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            Contact
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-3xl">
            Let&apos;s Talk About
            <br />
            Your <em className="text-gold font-normal">Home</em>
          </h1>
        </div>
      </section>

      {/* Content — asymmetric two-column */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left — contact info, large phone, generous spacing */}
            <div className="lg:col-span-7 space-y-16">
              {/* Phone — hero-scale */}
              <div>
                <span className="label-upper text-gold block mb-5">Call Us</span>
                <a
                  href="tel:+19055011509"
                  className="inline-block font-serif text-primary hover:text-gold transition-colors duration-300"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  (905) 501-1509
                </a>
                <p className="text-on-surface-variant mt-4 text-[1.05rem]">
                  Call for a free quote.
                </p>
              </div>

              {/* Address */}
              <div>
                <span className="label-upper text-gold block mb-5">Our Office</span>
                <address className="not-italic text-on-surface text-lg leading-loose">
                  Portuguese Housekeeping Services
                  <br />45 Kingsbridge Garden Circle
                  <br />Suite #2007
                  <br />Mississauga, ON L5R 3K4
                </address>
              </div>

              {/* CTA link */}
              <div>
                <p className="text-on-surface-variant mb-6 text-[1.05rem]">
                  Prefer us to call you? Leave your details and we&apos;ll reach
                  out at a time that works.
                </p>
                <Link
                  href="/request-a-call-back"
                  className="cta-square bg-primary text-on-primary"
                >
                  Get a Free Quote
                  <svg className="ml-3 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — services + pricing */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-8">
              {/* Services */}
              <div className="bg-surface-lowest p-10 whisper-shadow">
                <span className="label-upper text-gold block mb-8">Visit Frequency</span>
                <div className="space-y-8">
                  {[
                    { name: "Weekly Visits", desc: "Consistent, regular cleaning for a spotless home." },
                    { name: "Bi-Weekly Visits", desc: "Thorough cleaning every two weeks." },
                    { name: "Monthly Visits", desc: "Comprehensive monthly deep-clean." },
                  ].map((s) => (
                    <div key={s.name}>
                      <h3 className="font-serif text-primary text-lg font-normal">{s.name}</h3>
                      <p className="text-on-surface-variant text-sm mt-1.5 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-surface-lowest p-10 whisper-shadow">
                <span className="label-upper text-gold block mb-5">Pricing</span>
                <p className="text-primary font-serif text-xl font-normal">
                  Hourly rates, tailored to you.
                </p>
                <p className="text-on-surface-variant mt-4 leading-relaxed text-[0.95rem]">
                  Rates depend on the services you need and the size of your home.
                  Every quote is tailored. No hidden fees, no surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
