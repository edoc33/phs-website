"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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

  if (status === "success") {
    return (
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="firstName" className="label-upper text-on-surface block mb-4">
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
          <label htmlFor="lastName" className="label-upper text-on-surface block mb-4">
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
        <label htmlFor="email" className="label-upper text-on-surface block mb-4">
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
        <label htmlFor="phone" className="label-upper text-on-surface block mb-4">
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
        <label htmlFor="details" className="label-upper text-on-surface block mb-4">
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

      {/* Submit */}
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
  );
}
