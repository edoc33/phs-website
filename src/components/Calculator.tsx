"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const HOURLY_RATE = 45;
const MIN_HOURS = 3;

const ROOM_MINUTES: Record<string, { label: string; minutes: number }> = {
  bathrooms: { label: "Bathrooms", minutes: 35 },
  kitchens: { label: "Kitchens", minutes: 45 },
  bedrooms: { label: "Bedrooms", minutes: 22 },
  livingRooms: { label: "Living / Family Rooms", minutes: 28 },
  diningRooms: { label: "Dining Rooms", minutes: 18 },
  hallways: { label: "Hallways / Entryways", minutes: 12 },
  laundryRooms: { label: "Laundry Rooms", minutes: 12 },
};

type RoomCounts = Record<string, number>;

export function Calculator({ source = "standalone" }: { source?: string }) {
  const [rooms, setRooms] = useState<RoomCounts>({
    bathrooms: 1,
    kitchens: 1,
    bedrooms: 2,
    livingRooms: 1,
    diningRooms: 0,
    hallways: 1,
    laundryRooms: 0,
  });
  const [cleanType, setCleanType] = useState<"standard" | "deep">("standard");
  const [firstVisit, setFirstVisit] = useState(true);
  const [hasPets, setHasPets] = useState(false);
  const [condition, setCondition] = useState<"regular" | "while" | "long">("regular");
  const [showResult, setShowResult] = useState(false);

  function updateRoom(key: string, delta: number) {
    setRooms((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(10, (prev[key] || 0) + delta)),
    }));
    setShowResult(false);
  }

  function calculate() {
    let totalMinutes = 0;
    for (const [key, count] of Object.entries(rooms)) {
      totalMinutes += count * (ROOM_MINUTES[key]?.minutes || 0);
    }
    if (cleanType === "deep") totalMinutes *= 1.4;
    if (condition === "while") totalMinutes *= 1.2;
    else if (condition === "long") totalMinutes *= 1.35;
    if (hasPets) totalMinutes *= 1.15;
    if (firstVisit) totalMinutes *= 1.25;
    totalMinutes *= 1.15; // conservative buffer

    const hours = totalMinutes / 60;
    const minHours = Math.max(MIN_HOURS, Math.ceil(hours * 2) / 2);
    const maxHours = Math.max(MIN_HOURS, Math.ceil((hours * 1.15) * 2) / 2);
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
      totalRooms: String(Object.values(rooms).reduce((a, b) => a + b, 0)),
    });
  }

  const result = showResult ? calculate() : null;

  return (
    <div>
      {/* Room counts */}
      <div className="mb-12">
        <span className="label-upper text-gold block mb-6">Your Home</span>
        <div className="space-y-4">
          {Object.entries(ROOM_MINUTES).map(([key, { label }]) => (
            <div key={key} className="flex items-center justify-between py-3 border-b border-surface-high">
              <span className="text-on-surface text-[0.95rem]">{label}</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateRoom(key, -1)}
                  className="w-9 h-9 rounded-full bg-surface-mid text-on-surface-variant flex items-center justify-center hover:bg-surface-high transition-colors text-lg"
                  aria-label={`Decrease ${label}`}
                >
                  -
                </button>
                <span className="font-serif text-primary text-lg w-6 text-center">{rooms[key]}</span>
                <button
                  onClick={() => updateRoom(key, 1)}
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
