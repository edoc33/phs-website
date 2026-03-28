import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { services, getServiceBySlug } from "@/lib/services";

interface Props {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const data = getServiceBySlug(service);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/services/${data.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = getServiceBySlug(service);
  if (!data) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.metaDescription,
    provider: { "@id": "https://portuguesemaids.ca/#business" },
    areaServed: [
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Mississauga" },
    ],
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "45.00",
        priceCurrency: "CAD",
        unitCode: "HUR",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://portuguesemaids.ca",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://portuguesemaids.ca/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.name,
        item: `https://portuguesemaids.ca/services/${data.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Breadcrumb */}
      <div className="bg-surface pt-28 pb-0">
        <nav
          className="max-w-screen-2xl mx-auto px-8"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 label-upper text-on-surface-variant/50">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/services/standard-cleaning"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-primary font-semibold">{data.name}</li>
          </ol>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-surface pt-10 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-on-surface-variant/60 block mb-6 animate-fade-up tracking-widest">
              Our Services
            </span>
            <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal">
              {data.headline}
            </h1>
            <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <span className="label-upper text-gold block mb-5">
                What&apos;s Included
              </span>
              <h2 className="font-serif fluid-heading text-primary font-normal">
                Here is what your cleaner will do.
              </h2>
              {data.duration && (
                <p className="text-on-surface-variant text-[0.95rem] leading-relaxed mt-8 max-w-sm">
                  {data.duration}
                </p>
              )}
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-5">
                {data.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-on-surface-variant text-[1.05rem] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-gold block mb-5">
              Best For
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal mb-12">
              Who books this service.
            </h2>
            <div className="space-y-6">
              {data.bestFor.map((item) => (
                <div
                  key={item}
                  className="pl-8 border-l-2 border-gold/40"
                >
                  <p className="text-on-surface-variant text-[1.05rem] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            {data.blogLink && (
              <div className="mt-12">
                <Link
                  href={data.blogLink.href}
                  className="font-serif text-primary text-base flex items-center gap-2 group"
                >
                  <span className="border-b border-on-surface-variant/30 group-hover:border-gold transition-colors pb-0.5">
                    {data.blogLink.label}
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing reference */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="label-upper text-gold block mb-5">
                Pricing
              </span>
              <p
                className="font-serif text-primary font-normal"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  lineHeight: 1,
                }}
              >
                $45
              </p>
              <p className="font-serif text-on-surface-variant text-xl mt-2 font-normal">
                per hour, 3-hour minimum
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-on-surface-variant text-[1.05rem] leading-relaxed max-w-md">
                The total depends on the size of your home, its condition, and
                any specific requests. The best thing to do is call Denise and
                she will give you an honest estimate.
              </p>
              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="font-serif text-primary text-base flex items-center gap-2 group"
                >
                  <span className="border-b border-on-surface-variant/30 group-hover:border-gold transition-colors pb-0.5">
                    See full pricing details
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl">
            <span className="label-upper text-gold block mb-5">
              Get Started
            </span>
            <h2 className="font-serif fluid-heading font-normal mb-6">
              Ready to talk about your home?
            </h2>
            <p className="text-primary-fixed-dim/50 text-lg max-w-md mb-12 leading-relaxed">
              Call Denise or request a call back. She will match you with the
              right cleaner and schedule.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/request-a-call-back"
                className="cta-square bg-gold text-gold-dark"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+19055011509"
                className="font-serif text-on-primary text-base flex items-center gap-2 group"
              >
                <span className="border-b border-on-primary/30 group-hover:border-gold transition-colors pb-0.5">
                  Call (905) 501-1509
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other services nav */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <span className="label-upper text-on-surface-variant/50 block mb-8">
            Other Services
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.slug !== data.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group p-8 bg-surface-low hover:bg-surface-lowest transition-colors duration-300"
                >
                  <h3 className="font-serif text-xl text-primary mb-3 font-normal group-hover:text-gold transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {s.metaDescription}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
