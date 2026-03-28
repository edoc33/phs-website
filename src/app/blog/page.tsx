import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Tips and insights from Portuguese Housekeeping Services — coming soon.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            Journal
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-3xl">
            The Art of <em className="text-gold font-normal">Home</em> Care
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg">
            Notes on cleaning, craft, and the quiet discipline of maintaining
            a beautiful home.
          </p>
        </div>
      </section>

      {/* Empty state — teaches the interface */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-2xl mx-auto px-8">
          <div className="py-24 text-center">
            {/* Minimal icon */}
            <div className="w-16 h-16 mx-auto mb-10 rounded-full bg-surface-mid flex items-center justify-center">
              <svg className="w-7 h-7 text-on-surface-variant/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>

            <h2 className="font-serif text-2xl text-primary font-normal mb-4">
              Stories are being written.
            </h2>
            <p className="text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-3">
              We&apos;re preparing articles on cleaning techniques, linen care,
              and the philosophy behind thirty years of meticulous service.
            </p>
            <p className="text-on-surface-variant/50 text-sm max-w-sm mx-auto">
              When the first article is published, it will appear here automatically.
            </p>

            <div className="mt-12">
              <Link
                href="/"
                className="font-serif text-primary text-base inline-flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="border-b border-on-surface-variant/30 group-hover:border-primary transition-colors pb-0.5">
                  Back to home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
