"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function RequestCallBackPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again or call us."
      );
    }
  }

  /* ── Success state — teaches what happens next ── */
  if (status === "success") {
    return (
      <>
        <section className="bg-surface pt-40 pb-24">
          <div className="max-w-screen-2xl mx-auto px-8">
            <span className="label-upper text-gold block mb-8 animate-fade-up">Confirmed</span>
            <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
              We&apos;ll Be in Touch
            </h1>
          </div>
        </section>
        <section className="py-36 bg-surface-low">
          <div className="max-w-xl mx-auto px-8">
            {/* Teach the interface — explain what happens next */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-surface-mid flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-primary text-lg font-normal mb-1">Request received</h3>
                  <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                    Your details are with us. No further action needed on your end.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-surface-mid flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-serif text-on-surface-variant text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-primary text-lg font-normal mb-1">We&apos;ll be in touch</h3>
                  <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                    Expect to hear from us by phone or email within one business day to discuss your home and provide a free quote.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-surface-mid flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-serif text-on-surface-variant text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-primary text-lg font-normal mb-1">Need us sooner?</h3>
                  <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                    Call{" "}
                    <a href="tel:+19055011509" className="text-primary font-semibold hover:text-gold transition-colors">
                      (905) 501-1509
                    </a>{" "}
                    and we&apos;ll speak right away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            Reservation
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-3xl">
            Tailoring Your <em className="text-gold font-normal">Sanctuary.</em>
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg">
            Leave your details below and we&apos;ll call you to discuss your home,
            schedule, and a free quote.
          </p>
        </div>
      </section>

      {/* Form — underline-style inputs */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-xl mx-auto px-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="firstName" className="label-upper text-on-surface-variant/60 block mb-4">
                  First name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  className="w-full bg-transparent border-b-2 border-surface-high pb-3 text-on-surface text-lg placeholder:text-on-surface-variant/30 transition-colors duration-300 focus:border-gold"
                  placeholder="Alexander"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="label-upper text-on-surface-variant/60 block mb-4">
                  Last name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  className="w-full bg-transparent border-b-2 border-surface-high pb-3 text-on-surface text-lg placeholder:text-on-surface-variant/30 transition-colors duration-300 focus:border-gold"
                  placeholder="Soares"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="label-upper text-on-surface-variant/60 block mb-4">
                Email address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="w-full bg-transparent border-b-2 border-surface-high pb-3 text-on-surface text-lg placeholder:text-on-surface-variant/30 transition-colors duration-300 focus:border-gold"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="label-upper text-on-surface-variant/60 block mb-4">
                Phone <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                className="w-full bg-transparent border-b-2 border-surface-high pb-3 text-on-surface text-lg placeholder:text-on-surface-variant/30 transition-colors duration-300 focus:border-gold"
                placeholder="(416) 555-0123"
              />
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className="label-upper text-on-surface-variant/60 block mb-4">
                Tell us about your home
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="w-full bg-transparent border-b-2 border-surface-high pb-3 text-on-surface text-lg placeholder:text-on-surface-variant/30 transition-colors duration-300 focus:border-gold resize-none"
                placeholder="Size, frequency, any special requests..."
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="bg-surface-mid p-5">
                <p className="text-on-surface text-sm">{errorMsg}</p>
              </div>
            )}

            {/* Submit — square CTA */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="cta-square bg-primary text-on-primary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit Request"
                )}
              </button>
              <span className="text-on-surface-variant text-sm">
                or call{" "}
                <a href="tel:+19055011509" className="text-primary font-semibold hover:text-gold transition-colors">
                  (905) 501-1509
                </a>
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* Heritage section — dark */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="image-placeholder aspect-[4/3] w-full" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <span className="label-upper text-gold block mb-5">The Portuguese Standard</span>
            <h2 className="font-serif fluid-subheading font-normal mb-8">
              More than a service. A heritage of care.
            </h2>
            <p className="text-primary-fixed-dim/50 text-[1.05rem] leading-relaxed mb-12">
              &ldquo;We treat every room like an individual masterpiece, ensuring the light
              hits every surface perfectly.&rdquo;
            </p>
            <div className="flex gap-16">
              <div>
                <span className="font-serif text-3xl text-gold">30+</span>
                <p className="label-upper text-primary-fixed-dim/40 mt-2">Years</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-gold">Bespoke</span>
                <p className="label-upper text-primary-fixed-dim/40 mt-2">Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
