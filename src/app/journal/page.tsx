import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Cleaning Tips & Home Care Blog",
  description:
    "Expert cleaning tips, seasonal home care guides, and updates from Portuguese Housekeeping Services in Toronto & Mississauga.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            Journal
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-3xl">
            Cleaning Tips &amp; <em className="text-gold font-normal">Updates</em>
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg">
            Practical advice for keeping your home clean, plus news from our team.
          </p>
        </div>
      </section>

      {posts.length > 0 ? (
        <section className="py-24 bg-surface-low">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/journal/${post.slug}`}
                  className={`group p-10 lg:p-12 transition-colors duration-500 ${
                    i === 0
                      ? "bg-surface-lowest whisper-shadow"
                      : "bg-transparent hover:bg-surface-lowest"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <time
                      className="label-upper text-on-surface-variant/40 tracking-widest"
                      dateTime={post.date}
                    >
                      {new Date(post.date + "T00:00:00").toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-on-surface-variant/20">&middot;</span>
                    <span className="label-upper text-on-surface-variant/40 tracking-widest">
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-primary mb-4 font-normal group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed text-[0.95rem] mb-6">
                    {post.description}
                  </p>
                  <span className="label-upper text-gold/60 group-hover:text-gold transition-colors duration-300">
                    Read article &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Empty state */
        <section className="py-36 bg-surface-low">
          <div className="max-w-2xl mx-auto px-8">
            <div className="py-24 text-center">
              <div className="w-16 h-16 mx-auto mb-10 rounded-full bg-surface-mid flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-on-surface-variant/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-2xl text-primary font-normal mb-4">
                Stories are being written.
              </h2>
              <p className="text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-3">
                We&apos;re working on articles about home care, cleaning tips,
                and what we&apos;ve learned over 30 years.
              </p>
              <div className="mt-12">
                <Link
                  href="/"
                  className="font-serif text-primary text-base inline-flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <span className="border-b border-on-surface-variant/30 group-hover:border-primary transition-colors pb-0.5">
                    Back to home
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
