"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const HOURLY_RATE = 45;
const MIN_HOURS = 3;
const MINUTES_PER_SQFT = 0.08;
const BATHROOM_MINUTES = 30;
const BEDROOM_MINUTES = 5;
const SQFT_MIN = 400;
const SQFT_MAX = 5000;
const SQFT_STEP = 100;
const SQFT_DEFAULT = 1200;

export function Calculator({ source = "standalone" }: { source?: string }) {
  const [sqft, setSqft] = useState(SQFT_DEFAULT);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [cleanType, setCleanType] = useState<"standard" | "deep">("standard");
  const [firstVisit, setFirstVisit] = useState(true);
  const [hasPets, setHasPets] = useState(false);
  const [condition, setCondition] = useState<"regular" | "while" | "long">("regular");
  const [showResult, setShowResult] = useState(false);

  function adjustCounter(setter: (fn: (v: number) => number) => void, delta: number, min = 0, max = 10) {
    setter((prev) => Math.max(min, Math.min(max, prev + delta)));
    setShowResult(false);
  }

  function calculate() {
    let totalMinutes =
      sqft * MINUTES_PER_SQFT +
      bathrooms * BATHROOM_MINUTES +
      bedrooms * BEDROOM_MINUTES;

    if (cleanType === "deep") totalMinutes *= 1.35;
    if (condition === "while") totalMinutes *= 1.2;
    else if (condition === "long") totalMinutes *= 1.35;
    if (hasPets) totalMinutes *= 1.15;
    if (firstVisit) totalMinutes *= 1.2;
    totalMinutes *= 1.10; // conservative buffer

    const hours = totalMinutes / 60;
    const minHours = Math.max(MIN_HOURS, Math.ceil(hours * 2) / 2);
    const maxHours = Math.max(MIN_HOURS, Math.ceil((hours * 1.10) * 2) / 2);
    return { minHours, maxHours, minCost: minHours * HOURLY_RATE, maxCost: maxHours * HOURLY_RATE };
  }

  function handleCalculate() {
    setShowResult(true);
    trackEvent("calculator_used", {
      source,
      cleanType,
      firstVisit: firstVisit ? "yes" : "no",
      hasPets: hasPets ? "yes" : "no",
      condition,
      sqft: String(sqft),
      bedrooms: String(bedrooms),
      bathrooms: String(bathrooms),
    });
  }

  const result = showResult ? calculate() : null;

  return (
    <div>
      {/* Square footage */}
      <div className="mb-12">
        <span className="label-upper text-gold block mb-6">Your Home</span>

        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-on-surface text-[0.95rem]">Approximate Square Footage</span>
            <span className="font-serif text-primary text-lg">{sqft.toLocaleString()} sq ft</span>
          </div>
          <input
            type="range"
            min={SQFT_MIN}
            max={SQFT_MAX}
            step={SQFT_STEP}
            value={sqft}
            onChange={(e) => { setSqft(Number(e.target.value)); setShowResult(false); }}
            className="w-full accent-gold h-2 cursor-pointer"
            aria-label="Square footage"
          />
          <div className="flex justify-between text-on-surface-variant/50 text-xs mt-2">
            <span>{SQFT_MIN.toLocaleString()}</span>
            <span>{SQFT_MAX.toLocaleString()}</span>
          </div>
        </div>

        {/* Bedrooms & Bathrooms */}
        <div className="space-y-4">
          {([
            { label: "Bedrooms", value: bedrooms, setter: setBedrooms },
            { label: "Bathrooms", value: bathrooms, setter: setBathrooms },
          ] as const).map(({ label, value, setter }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-surface-high">
              <span className="text-on-surface text-[0.95rem]">{label}</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => adjustCounter(setter, -1)}
                  className="w-9 h-9 rounded-full bg-surface-mid text-on-surface-variant flex items-center justify-center hover:bg-surface-high transition-colors text-lg"
                  aria-label={`Decrease ${label}`}
                >
                  -
                </button>
                <span className="font-serif text-primary text-lg w-6 text-center">{value}</span>
                <button
                  onClick={() => adjustCounter(setter, 1)}
                  className="w-9 h-9 rounded-full bg-surface-mid text-on-surface-variant flex items-center justify-center hover:bg-surface-high transition-colors text-lg"
                  aria-label={`Increase ${label}`}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean type */}
      <div className="mb-10">
        <span className="label-upper text-gold block mb-4">Type of Clean</span>
        <div className="flex gap-4">
          {(["standard", "deep"] as const).map((type) => (
            <button
              key={type}
              onClick={() => { setCleanType(type); setShowResult(false); }}
              className={`px-6 py-3 text-sm tracking-wide transition-colors duration-200 ${
                cleanType === type
                  ? "bg-primary text-on-primary"
                  : "bg-surface-mid text-on-surface-variant hover:bg-surface-high"
              }`}
            >
              {type === "standard" ? "Standard Clean" : "Deep Clean"}
            </button>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="mb-10">
        <span className="label-upper text-gold block mb-4">Current Condition</span>
        <div className="flex flex-wrap gap-3">
          {([
            { key: "regular" as const, label: "Cleaned recently" },
            { key: "while" as const, label: "It has been a while" },
            { key: "long" as const, label: "Has not been cleaned in months" },
          ]).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setCondition(key); setShowResult(false); }}
              className={`px-5 py-3 text-sm tracking-wide transition-colors duration-200 ${
                condition === key
                  ? "bg-primary text-on-primary"
                  : "bg-surface-mid text-on-surface-variant hover:bg-surface-high"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="mb-12 space-y-4">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            checked={firstVisit}
            onChange={(e) => { setFirstVisit(e.target.checked); setShowResult(false); }}
            className="w-5 h-5 accent-gold"
          />
          <span className="text-on-surface text-[0.95rem]">This would be our first visit</span>
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            checked={hasPets}
            onChange={(e) => { setHasPets(e.target.checked); setShowResult(false); }}
            className="w-5 h-5 accent-gold"
          />
          <span className="text-on-surface text-[0.95rem]">We have pets (dogs, cats)</span>
        </label>
      </div>

      {/* Calculate */}
      <button onClick={handleCalculate} className="cta-square bg-primary text-on-primary w-full sm:w-auto">
        Estimate My Cost
      </button>

      {/* Result */}
      {result && (
        <div className="mt-12 p-10 bg-surface-lowest whisper-shadow animate-fade-up">
          <span className="label-upper text-gold block mb-4">Estimated Cost</span>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-serif text-4xl text-primary">${result.minCost}</span>
            {result.minCost !== result.maxCost && (
              <>
                <span className="text-on-surface-variant text-lg">to</span>
                <span className="font-serif text-4xl text-primary">${result.maxCost}</span>
              </>
            )}
          </div>
          <p className="text-on-surface-variant text-sm mb-1">
            {result.minHours} to {result.maxHours} hours at ${HOURLY_RATE}/hr
            {result.minHours === MIN_HOURS && (
              <span className="text-on-surface-variant/60"> (3-hour minimum applies)</span>
            )}
          </p>
          <div className="mt-8 pt-6 border-t border-surface-high">
            <p className="text-on-surface-variant text-[0.95rem] leading-relaxed mb-6">
              This is a conservative estimate, not a quote. Every home is different. The actual time depends on the layout, specific requests, and how your space is set up. The best next step is a quick call with Denise.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/request-a-call-back" className="cta-square bg-gold text-gold-dark">
                Get an Exact Quote
              </Link>
              <a href="tel:+19055011509" className="font-serif text-primary text-base flex items-center gap-2 group">
                <span className="border-b border-on-surface-variant/30 group-hover:border-gold transition-colors pb-0.5">
                  Call (905) 501-1509
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
