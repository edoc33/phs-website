import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/journal";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: `${post.title} | Portuguese Maids`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

/** Very simple markdown-to-HTML (handles headings, paragraphs, lists, bold, italic, links) */
function renderMarkdown(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";

      // Headings
      if (trimmed.startsWith("### "))
        return `<h3 class="font-serif text-xl text-primary font-normal mt-12 mb-4">${inline(trimmed.slice(4))}</h3>`;
      if (trimmed.startsWith("## "))
        return `<h2 class="font-serif text-2xl text-primary font-normal mt-16 mb-5">${inline(trimmed.slice(3))}</h2>`;

      // Unordered list
      if (trimmed.startsWith("- ")) {
        const items = trimmed
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map((l) => `<li class="flex items-start gap-3"><span class="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5"></span><span>${inline(l.slice(2))}</span></li>`)
          .join("");
        return `<ul class="space-y-3 my-6">${items}</ul>`;
      }

      // Paragraph
      return `<p class="text-on-surface-variant text-[1.05rem] leading-relaxed mb-6">${inline(trimmed.replace(/\n/g, " "))}</p>`;
    })
    .join("");
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:text-gold underline transition-colors">$1</a>');
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Portuguese Housekeeping Services",
      url: "https://portuguesemaids.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "Portuguese Housekeeping Services",
      logo: {
        "@type": "ImageObject",
        url: "https://portuguesemaids.ca/logo.png",
      },
    },
    mainEntityOfPage: `https://portuguesemaids.ca/journal/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://portuguesemaids.ca" },
      { "@type": "ListItem", position: 2, name: "Journal", item: "https://portuguesemaids.ca/journal" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://portuguesemaids.ca/journal/${post.slug}` },
    ],
  };

  const faqJsonLd =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={blogPostingJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      {/* Hero */}
      <section className="bg-surface pt-40 pb-16">
        <div className="max-w-screen-2xl mx-auto px-8">
          <nav className="animate-fade-up mb-8">
            <ol className="flex items-center gap-2 text-sm text-on-surface-variant/50">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/journal" className="hover:text-primary transition-colors">Journal</Link>
              </li>
              <li>/</li>
              <li className="text-primary truncate max-w-xs">{post.title}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-4 mb-8">
              <time className="label-upper text-on-surface-variant/60 tracking-widest" dateTime={post.date}>
                {new Date(post.date + "T00:00:00").toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-on-surface-variant/30">&middot;</span>
              <span className="label-upper text-on-surface-variant/60 tracking-widest">
                {post.readingTime}
              </span>
            </div>
            <h1 className="animate-fade-up-1 font-serif fluid-heading text-primary font-normal">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-surface-low">
        <div className="max-w-3xl mx-auto px-8">
          <div
            className="animate-fade-up-2"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-surface-high">
            <p className="font-serif text-xl text-primary mb-6">
              Need help keeping your home clean?
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/request-a-call-back"
                className="cta-square bg-primary text-on-primary"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+19055011509"
                className="font-serif text-primary text-base flex items-center gap-2 group"
              >
                <span className="border-b border-on-surface-variant/30 group-hover:border-gold transition-colors pb-0.5">
                  Call (905) 501-1509
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
