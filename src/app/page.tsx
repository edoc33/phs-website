import Link from "next/link";
import Image from "next/image";

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
            Tired of cleaning services
            <br />
            <em className="text-gold font-normal">you can&apos;t rely on?</em>
          </h1>
          <p className="animate-fade-up-2 text-on-surface-variant text-lg leading-relaxed mt-10 max-w-md">
            Denise has run PHS for 30 years. She knows every client by name.
            You get the same cleaner each visit, someone who already knows
            your home. That&apos;s why every client
            we&apos;ve ever had came from a referral.
          </p>
          <div className="animate-fade-up-3 mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/request-a-call-back"
              className="cta-square bg-primary text-on-primary"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/about-us"
              className="font-serif text-primary text-base flex items-center gap-2 group"
            >
              <span className="border-b border-on-surface-variant/30 group-hover:border-primary transition-colors pb-0.5">
                Meet Denise
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
            <Image src="/images/hero.png" alt="Bright, sunlit living room freshly cleaned by Portuguese Housekeeping Services" fill className="object-cover" priority />
            {/* Editorial float card — overlaps image */}
            <div className="editorial-float absolute -bottom-10 -left-16 p-8 max-w-xs whisper-shadow animate-fade-up-4">
              <span className="label-upper text-gold block mb-3">Our Promise</span>
              <p className="font-serif text-primary text-lg italic leading-snug">
                &ldquo;If I wouldn&apos;t be happy with it in my own home, it&apos;s not done.&rdquo;
              </p>
              <span className="label-upper text-on-surface-variant/60 block mt-3">&mdash; Denise, Owner</span>
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
                <div className="relative w-full aspect-[3/4]">
                  <Image src="/images/grid-portrait.png" alt="Professional cleaner polishing a countertop" fill className="object-cover" />
                </div>
              </div>
              <div className="col-span-2 space-y-4 pt-16">
                <div className="relative w-full aspect-square">
                  <Image src="/images/grid-square.png" alt="Spotless modern kitchen" fill className="object-cover" />
                </div>
                <div className="relative w-full aspect-[4/5]">
                  <Image src="/images/grid-tall.png" alt="Freshly made bed with crisp white linens" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <span className="label-upper text-gold block mb-5">What Makes Us Different</span>
            <h2 className="font-serif fluid-heading text-primary font-normal mb-10">
              Denise runs this company.
              <br />
              <em className="text-on-surface-variant font-normal">She knows your name.</em>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-[1.05rem] leading-relaxed max-w-lg">
              <p>
                You don&apos;t have to manage your cleaner. You don&apos;t have
                to re-explain what you need. You don&apos;t have to worry about
                who&apos;s coming into your home.
              </p>
              <p>
                Denise personally knows every client and every home we clean.
                The team is small, trained, and consistent. Same people
                in your home, every visit.
              </p>
            </div>
            <div className="mt-14 pl-8 border-l-2 border-gold/40">
              <p className="font-serif italic text-xl text-primary leading-snug">
                &ldquo;We&apos;ve never had to advertise. Every client came
                through someone who already trusted us.&rdquo;
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
            Three reasons families stick with us.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {[
            {
              num: "01",
              title: "We Check What Others Skip",
              desc: "We clean behind the fridge. Under the couch cushions. Inside the oven. The places you\u2019d rather not look.",
            },
            {
              num: "02",
              title: "Background-Checked and Insured",
              desc: "Every cleaner is vetted, insured, and trained by Denise. You\u2019ll get the same person each visit, someone who already knows your home.",
            },
            {
              num: "03",
              title: "Your Home, Your Schedule",
              desc: "Weekly, bi-weekly, or monthly. Morning or afternoon. We fit your life, not the other way around.",
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
              We let the numbers do the talking.
            </h2>
            <p className="text-on-surface-variant text-[1.05rem] leading-relaxed max-w-md">
              We never advertised. For thirty years, every new client came
              through a recommendation from someone who already trusted us
              with their home.
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
          <span className="label-upper text-on-surface-variant/50 block mb-5">Get Started</span>
          <h2 className="font-serif fluid-heading text-primary font-normal mb-6">
            See what a real clean feels like.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md mb-12">
            Weekly, bi-weekly, or monthly visits. Hourly rates tailored to your home.
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
