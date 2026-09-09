import React from "react";

const industries = [
  { short: "RC", name: "Retail & Commerce" },
  { short: "HC", name: "Healthcare" },
  { short: "ED", name: "Education" },
  { short: "FS", name: "Financial Services" },
  { short: "LG", name: "Logistics" },
  { short: "HS", name: "Hospitality" },
  { short: "RE", name: "Real Estate" },
  { short: "MF", name: "Manufacturing" },
];

function IndustryMarks({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6"
      aria-hidden={hidden ? "true" : undefined}
    >
      {industries.map((industry) => (
        <li
          key={industry.name}
          className="group flex h-16 min-w-[190px] items-center gap-3 rounded-2xl border border-theme-blue/10 bg-white/75 px-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-theme-purple/25 hover:bg-white hover:shadow-md sm:h-[4.5rem] sm:min-w-[220px]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-theme-blue text-xs font-black tracking-wide text-white transition-colors group-hover:bg-theme-purple">
            {industry.short}
          </span>
          <span className="whitespace-nowrap text-sm font-bold text-theme-blue/75 transition-colors group-hover:text-theme-blue sm:text-base">
            {industry.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function BrandTrustStrip() {
  return (
    <section
      className="relative !mb-0 overflow-hidden border-y border-theme-purple/10 bg-gradient-to-b from-white via-light-theme-purple/20 to-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="brand-trust-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[38rem] -translate-x-1/2 rounded-full bg-theme-cyan/10 blur-[90px]" />

      <div className="container relative z-10 mx-auto px-5 text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-theme-purple">
          Industries we support
        </p>
        <h2
          id="brand-trust-heading"
          className="mx-auto mb-4 max-w-4xl text-3xl font-black tracking-tight text-theme-blue sm:text-4xl lg:text-5xl"
        >
          Trusted by growing brands
        </h2>
        <p className="mx-auto max-w-3xl text-sm font-light leading-relaxed text-gray-600 sm:text-base lg:text-lg">
          We help ambitious teams streamline workflows, improve productivity,
          and launch dependable digital products. Whatever your industry,
          TheTriFusion builds solutions around the way your business works.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-40" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] motion-reduce:animate-none">
          <IndustryMarks />
          <IndustryMarks hidden />
        </div>
      </div>
    </section>
  );
}
