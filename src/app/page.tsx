import Link from "next/link";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-end bg-surface pb-24 pt-40">
      <div className="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Left — text block, asymmetric alignment */}
        <div className="lg:col-span-7 z-10">
          <span className="label-upper text-on-surface-variant block mb-8 animate-fade-up tracking-widest">
            Est. 1994 &middot; Toronto &amp; Mississauga
          </span>
          <h1 className="animate-fade-up-1 font-serif fluid-display text-primary font-normal leading-none">
            The Fine Art of
            <br />
            <em className="text-gold font-normal">Meticulous</em> Care.
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg leading-relaxed mt-10 max-w-md">
            For over thirty years, Portuguese Housekeeping Services has been the
            quiet standard for families who value precision, discretion, and
            an unwavering commitment to their home.
          </p>
          <div className="animate-fade-up-3 mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/request-a-call-back"
              className="cta-square bg-primary text-on-primary"
            >
              Book a Visit
            </Link>
            <Link
              href="/about-us"
              className="font-serif text-primary text-base flex items-center gap-2 group"
            >
              <span className="border-b border-on-surface-variant/30 group-hover:border-primary transition-colors pb-0.5">
                Our Heritage
              </span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right — image area with editorial float */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative h-[540px] w-full">
            <div className="absolute inset-0 image-placeholder" />
            {/* Editorial float card — overlaps image */}
            <div className="editorial-float absolute -bottom-10 -left-16 p-8 max-w-xs whisper-shadow animate-fade-up-4">
              <span className="label-upper text-gold block mb-3">Our Promise</span>
              <p className="font-serif text-primary text-lg italic leading-snug">
                &ldquo;Every corner treated with an editorial eye for detail.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DisciplinesSection() {
  const disciplines = [
    {
      label: "01",
      title: "Standard Cleaning",
      desc: "Regular cleaning on your schedule. We keep your home consistently spotless so you never have to think about it.",
      features: ["Surface sanitization", "Vacuum & mopping", "Kitchen detailing", "Bathroom deep-clean"],
    },
    {
      label: "02",
      title: "Deep Cleaning",
      desc: "A thorough reset that goes beyond the surface. We reach every hidden corner, baseboard, and light fixture.",
      features: ["Appliance restoration", "Baseboard cleaning", "Hardwood polishing", "Light fixture care"],
    },
    {
      label: "03",
      title: "Move-In / Move-Out",
      desc: "Preparing a home for new occupants or leaving one spotless behind you. Comprehensive, wall-to-wall cleaning.",
      features: ["Wall-to-wall detail", "Deep oven cleaning", "Furniture polishing", "Custom requests"],
    },
  ];

  return (
    <section className="py-36 bg-surface-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="max-w-2xl mb-20">
          <span className="label-upper text-gold block mb-5">Our Services</span>
          <h2 className="font-serif fluid-heading text-primary font-normal">
            Three ways we care for your home.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {disciplines.map((d, i) => (
            <div
              key={d.title}
              className={`group p-10 lg:p-12 transition-colors duration-500 ${
                i === 0
                  ? "bg-surface-lowest whisper-shadow"
                  : "bg-transparent hover:bg-surface-lowest"
              }`}
            >
              <span className="label-upper text-on-surface-variant/40 block mb-6">{d.label}</span>
              <h3 className="font-serif text-2xl text-primary mb-5 font-normal">
                {d.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-10 text-[0.95rem]">
                {d.desc}
              </p>
              <ul className="space-y-3">
                {d.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-on-surface-variant/80">
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
  );
}

function ArchitectureSection() {
  return (
    <section className="py-40 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Asymmetric image grid */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 space-y-4">
                <div className="image-placeholder w-full aspect-[3/4]" />
              </div>
              <div className="col-span-2 space-y-4 pt-16">
                <div className="image-placeholder w-full aspect-square" />
                <div className="image-placeholder w-full aspect-[4/5]" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <span className="label-upper text-gold block mb-5">The Architecture of Cleanliness</span>
            <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
              Precision is not a goal.
              <br />
              <em className="text-on-surface-variant font-normal">It is our signature.</em>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-lg">
              <p>
                Portuguese Housekeeping Services began the way the best businesses
                do: one satisfied client telling a friend. For three decades, every
                new client came through a referral.
              </p>
              <p>
                From fine linen care to crystal, our team operates with the
                precision of a five-star housekeeping department. Owned and
                operated by Denise, we keep things personal.
              </p>
            </div>
            <div className="mt-14 pl-8 border-l-2 border-gold/40">
              <p className="font-serif italic text-xl text-primary leading-snug">
                &ldquo;That trust is our proudest achievement. No marketing
                budget can buy what thirty years of referrals have built.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-36 bg-primary-deep text-on-primary">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="max-w-2xl mb-20">
          <span className="label-upper text-gold block mb-5">Why Families Trust Us</span>
          <h2 className="font-serif fluid-heading font-normal">
            Built on three decades of quiet excellence.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {[
            {
              num: "01",
              title: "Meticulous Quality",
              desc: "Our reputation rests on an obsessive commitment to the unseen. We look where others never think to.",
            },
            {
              num: "02",
              title: "Trusted Professionals",
              desc: "Every team member is background-checked, insured, and trained in our proprietary methodology. No exceptions.",
            },
            {
              num: "03",
              title: "Tailored to You",
              desc: "No two homes are alike. We customize every visit to the rhythms, preferences, and needs of your household.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-5">
              <span className="label-upper text-gold/60 block">{item.num}</span>
              <h3 className="font-serif text-2xl font-normal">{item.title}</h3>
              <p className="text-primary-fixed-dim/50 leading-relaxed text-[0.95rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactsSection() {
  return (
    <section className="py-40 bg-surface-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6">
            <span className="label-upper text-gold block mb-5">By the Numbers</span>
            <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
              The record speaks for itself.
            </h2>
            <p className="text-on-surface-variant text-[1.05rem] leading-relaxed max-w-md">
              We never advertised. For thirty years, every new client came
              through a recommendation from someone who already trusted us
              with their home. That says more than any testimonial.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="grid grid-cols-2 gap-12">
              {[
                { num: "30+", label: "Years in business" },
                { num: "100%", label: "Referral-based growth" },
                { num: "2", label: "Generations of family" },
                { num: "0", label: "Years spent advertising" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-serif text-4xl text-primary font-normal">{stat.num}</span>
                  <p className="label-upper text-on-surface-variant/50 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-36 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="max-w-2xl">
          <span className="label-upper text-on-surface-variant/50 block mb-5">Begin</span>
          <h2 className="font-serif fluid-heading text-primary font-normal mb-6">
            Return to a spotless sanctuary.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md mb-12">
            Weekly, bi-weekly, or monthly visits. Hourly rates tailored to your home.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/request-a-call-back"
              className="cta-square bg-gold text-gold-dark"
            >
              Book Your First Visit
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
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <DisciplinesSection />
      <ArchitectureSection />
      <TrustSection />
      <FactsSection />
      <CtaSection />
    </>
  );
}
