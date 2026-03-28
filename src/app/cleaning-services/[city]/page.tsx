import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceAreas } from "@/lib/service-areas";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/cleaning-services/${area.slug}` },
    openGraph: {
      title: `${area.metaTitle} | Portuguese Maids`,
      description: area.metaDescription,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/HousekeepingService",
    name: "Portuguese Housekeeping Services",
    url: `https://portuguesemaids.ca/cleaning-services/${area.slug}`,
    telephone: "+1-905-501-1509",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45 Kingsbridge Garden Circle, Suite #2007",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5R 3K4",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
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
        name: "Cleaning Services",
        item: "https://portuguesemaids.ca/cleaning-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `https://portuguesemaids.ca/cleaning-services/${area.slug}`,
      },
    ],
  };

  const services = [
    {
      label: "01",
      title: "Standard Cleaning",
      desc: "Regular cleaning on your schedule. We keep your home consistently spotless so you never have to think about it.",
      features: [
        "Surface sanitization",
        "Vacuum & mopping",
        "Kitchen detailing",
        "Bathroom deep-clean",
      ],
    },
    {
      label: "02",
      title: "Deep Cleaning",
      desc: "A thorough reset that goes beyond the surface. We reach every hidden corner, baseboard, and light fixture.",
      features: [
        "Appliance restoration",
        "Baseboard cleaning",
        "Hardwood polishing",
        "Light fixture care",
      ],
    },
    {
      label: "03",
      title: "Move-In / Move-Out",
      desc: "Preparing a home for new occupants or leaving one spotless behind you. Comprehensive, wall-to-wall cleaning.",
      features: [
        "Wall-to-wall detail",
        "Deep oven cleaning",
        "Furniture polishing",
        "Custom requests",
      ],
    },
  ];

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Hero */}
      <section className="bg-surface pt-40 pb-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <nav className="animate-fade-up mb-8">
            <ol className="flex items-center gap-2 text-sm text-on-surface-variant/50">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/cleaning-services"
                  className="hover:text-primary transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">{area.name}</li>
            </ol>
          </nav>
          <span className="label-upper text-on-surface-variant/60 block mb-8 animate-fade-up tracking-widest">
            {area.region}
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal max-w-4xl">
            {area.headline.replace(area.name, "").trim()}{" "}
            <em className="text-gold font-normal">{area.name}</em>
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg mt-8 max-w-xl">
            {area.description}
          </p>
          <div className="animate-fade-up-3 mt-12 flex flex-wrap items-center gap-6">
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
      </section>

      {/* Intro */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <span className="label-upper text-gold block mb-5">
                Why Families in {area.name} Trust Us
              </span>
              <p className="text-on-surface-variant text-[1.05rem] leading-relaxed">
                {area.intro}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={`/images/areas/${area.slug}.png`}
                  alt={`${area.name} neighbourhood, served by Portuguese Housekeeping Services`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-36 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-20">
            <span className="label-upper text-gold block mb-5">
              Our Services
            </span>
            <h2 className="font-serif fluid-heading text-primary font-normal">
              What we offer in {area.name}.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group p-10 lg:p-12 transition-colors duration-500 ${
                  i === 0
                    ? "bg-surface-lowest whisper-shadow"
                    : "bg-transparent hover:bg-surface-lowest"
                }`}
              >
                <span className="label-upper text-on-surface-variant/40 block mb-6">
                  {s.label}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-5 font-normal">
                  {s.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-10 text-[0.95rem]">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-on-surface-variant/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="py-36 bg-surface-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <span className="label-upper text-gold block mb-5">
              Neighbourhoods We Serve
            </span>
            <h2 className="font-serif fluid-subheading text-primary font-normal">
              Trusted across {area.name}.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-5">
            {area.neighborhoods.map((n) => (
              <span
                key={n}
                className="text-on-surface-variant text-[0.95rem] flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-primary-deep text-on-primary">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-xl">
            <h2 className="font-serif fluid-subheading font-normal mb-5">
              Ready for a cleaner home in {area.name}?
            </h2>
            <p className="text-primary-fixed-dim/50 max-w-md mb-12 text-[1.05rem] leading-relaxed">
              Request a call-back and we&apos;ll provide a free, no-obligation
              quote tailored to your home.
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
                className="font-serif text-base flex items-center gap-2 group"
              >
                <span className="border-b border-white/30 group-hover:border-gold transition-colors pb-0.5">
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
