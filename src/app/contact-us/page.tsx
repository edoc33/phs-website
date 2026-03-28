import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Free Cleaning Quote",
  description:
    "Contact Portuguese Housekeeping Services in Mississauga. Call (905) 501-1509 or fill out our form for a free house cleaning quote.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero + Form — form visible above the fold */}
      <section className="bg-surface pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — headline + phone */}
            <div className="lg:col-span-5 lg:pt-8">
              <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
                Contact
              </span>
              <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
                Let&apos;s Talk About
                <br />
                Your <em className="text-gold font-normal">Home</em>
              </h1>
              <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-md">
                Fill out the form and we&apos;ll call you within one business day.
              </p>
              <div className="mt-10 animate-fade-up-3">
                <span className="label-upper text-gold block mb-3">Or Call Us</span>
                <a
                  href="tel:+19055011509"
                  className="inline-block font-serif text-primary hover:text-gold transition-colors duration-300 text-3xl"
                >
                  (905) 501-1509
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-6 lg:col-start-7 animate-fade-up-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Address + services */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Address */}
            <div className="lg:col-span-4">
              <span className="label-upper text-gold block mb-5">Our Office</span>
              <address className="not-italic text-on-surface text-lg leading-loose">
                Portuguese Housekeeping Services
                <br />45 Kingsbridge Garden Circle
                <br />Suite #2007
                <br />Mississauga, ON L5R 3K4
              </address>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 lg:col-start-6">
              <span className="label-upper text-gold block mb-5">Visit Frequency</span>
              <div className="space-y-6">
                {[
                  { name: "Weekly Visits", desc: "Consistent, regular cleaning." },
                  { name: "Bi-Weekly Visits", desc: "Thorough cleaning every two weeks." },
                  { name: "Monthly Visits", desc: "Comprehensive monthly deep-clean." },
                ].map((s) => (
                  <div key={s.name}>
                    <h3 className="font-serif text-primary text-lg font-normal">{s.name}</h3>
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="lg:col-span-3 lg:col-start-10">
              <span className="label-upper text-gold block mb-5">Pricing</span>
              <p className="text-primary font-serif text-xl font-normal">
                Hourly rates, tailored to you.
              </p>
              <p className="text-on-surface-variant mt-4 leading-relaxed text-[0.95rem]">
                Rates depend on the services you need and the size of your home.
                No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
