import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Free Cleaning Quote",
  description:
    "Contact Portuguese Housekeeping Services in Mississauga. Call (905) 501-1509 or fill out our form for a free house cleaning quote.",
  alternates: { canonical: "/contact-us" },
};

const faqs = [
  {
    q: "How much does cleaning cost?",
    a: "Most projects are $50 per hour. One-time cleanings, heavy commercial work, or other bigger jobs may cost more. The best thing to do is call Denise and describe what you need. She will give you an honest estimate based on the size of your home, its condition, and what you are looking for.",
  },
  {
    q: "How does billing work?",
    a: "Cleaning is billed by the hour. The time needed depends on the size of your home, its condition, any specific requests, and how many cleaners are assigned. This is why a conversation with Denise is almost always the first step.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "Yes. Our cleaners use your supplies and equipment. This keeps our costs lower, which keeps your costs lower. It also means your home is cleaned with the products you already know and prefer.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Many of our clients give us a key or access code. Your cleaner is someone Denise knows personally and trusts in your home.",
  },
  {
    q: "Will I get the same cleaner every time?",
    a: "Yes. When you start with us, Denise assigns a cleaner to your home and that person stays with you. If they are ever unavailable due to illness or time off, Denise will let you know and arrange a replacement you can trust. If you ever want a different cleaner, just ask.",
  },
  {
    q: "Are your cleaners insured?",
    a: "Our cleaners are independent contractors. If something goes wrong, Denise handles it directly. She has personally covered damages in the past and stands behind the work her team does.",
  },
  {
    q: "What areas do you serve?",
    a: "All of Toronto and central Mississauga. That includes downtown, midtown, North York, Scarborough, Etobicoke, the Beaches, High Park, Leslieville, and most neighbourhoods in between.",
  },
  {
    q: "Do you clean condos, apartments, and commercial spaces?",
    a: "Yes. We clean houses, condos, apartments, and commercial buildings. If you have a space that needs cleaning, call Denise and she will figure out the best approach.",
  },
  {
    q: "Is there a minimum per visit?",
    a: "Yes, three hours per visit. Most homes take at least that for a thorough clean.",
  },
  {
    q: "Can cleaners do laundry or other tasks?",
    a: "Yes. Cleaners can handle laundry, organizing, and other household tasks if you discuss it with Denise ahead of time. Just let her know what you need.",
  },
  {
    q: "How do I pay?",
    a: "Cash or e-transfer. We keep it simple.",
  },
  {
    q: "How far in advance should I book?",
    a: "One week is the minimum. During busy seasons like holidays, spring cleaning, and March break, availability gets tight. The sooner you call, the better.",
  },
  {
    q: "What if I am not happy with the cleaning?",
    a: "Call Denise. She will talk to the cleaner, send someone else, or work with you to find a better arrangement. After 30 years, keeping clients happy is what keeps the business going.",
  },
  {
    q: "What about one-time or first-time cleanings?",
    a: "One-time cleanings are welcome. They often take longer than a regular visit because the cleaner is establishing a baseline for your home. Denise will walk you through what to expect.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
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

      {/* FAQ */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="label-upper text-gold block mb-5">
              Common Questions
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal mb-16">
              Things people ask before their first visit.
            </h2>
            <div className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-serif text-xl text-primary font-normal mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
