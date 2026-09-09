import React from "react";
import Image from "next/image";

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

const clients = [
  {
    name: "Shanav Technologies",
    href: "https://shanav.com/",
    logo: "/client-logos/shanav.png",
    width: 557,
    height: 121,
  },
  {
    name: "Anax Mobility Solutions",
    href: "https://anaxmobility.com/",
    logo: "/client-logos/anax-mobility.png",
    width: 1714,
    height: 918,
  },
  {
    name: "PlugOne",
    href: "https://plugone.in/",
    logo: "/client-logos/plugone.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Atharv Narayan",
    href: "https://www.atharvnarayan.in/",
    mark: "AN",
    wordmark: "ATHARV NARAYAN",
    subtitle: "DAIRY SOLUTIONS",
  },
  {
    name: "Connect Dairy",
    href: "https://www.connectdairy.in/",
    mark: "CD",
    wordmark: "Connect Dairy",
    subtitle: "SMART AGRI LOGISTICS",
  },
  {
    name: "DailyConcepts",
    href: "https://dailyconceptsindia.com/",
    mark: "DC",
    wordmark: "DailyConcepts",
    subtitle: "ECOMMERCE & POS",
  },
  {
    name: "Meditative",
    href: "https://yoga-80f.pages.dev/",
    mark: "ME",
    wordmark: "Meditative",
    subtitle: "YOGA & WELLNESS",
  },
  {
    name: "Pet Sitting",
    href: "https://petcare-c3n.pages.dev/services",
    mark: "PS",
    wordmark: "Pet Sitting",
    subtitle: "PET CARE SERVICES",
  },
  {
    name: "Podcast",
    href: "https://podcast-ctw.pages.dev/",
    mark: "PO",
    wordmark: "Podcast.",
    subtitle: "STORIES & EPISODES",
  },
  {
    name: "Resto",
    href: "https://resto-4tn.pages.dev/",
    mark: "RE",
    wordmark: "RESTO",
    subtitle: "FOOD & HOSPITALITY",
  },
  {
    name: "Alime",
    href: "https://alimephotographer.pages.dev/",
    mark: "AL",
    wordmark: "Alime",
    subtitle: "CREATIVE PHOTOGRAPHY",
  },
  {
    name: "AppLab",
    href: "https://app-lab.pages.dev/",
    mark: "AP",
    wordmark: "AppLab",
    subtitle: "MOBILE PRODUCT",
  },
  {
    name: "Dentista",
    href: "https://dentista-dental-clinic.vercel.app/",
    mark: "DE",
    wordmark: "dentista",
    subtitle: "DENTAL CARE",
  },
  {
    name: "Travelix",
    href: "https://travelix-neon.vercel.app/",
    mark: "TR",
    wordmark: "TRAVELIX",
    subtitle: "TRAVEL & EXPERIENCES",
  },
  {
    name: "DentaCare",
    href: "https://dente-ua67.vercel.app/",
    mark: "DC",
    wordmark: "DentaCare",
    subtitle: "MODERN DENTISTRY",
  },
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

function ClientMarks({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6"
      aria-hidden={hidden ? "true" : undefined}
    >
      {clients.map((client) => (
        <li key={client.name}>
          <a
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${client.name} website`}
            className="group flex h-24 min-w-[220px] items-center justify-center rounded-2xl border border-theme-blue/10 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-theme-purple/25 hover:shadow-md sm:min-w-[260px]"
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={client.width}
                height={client.height}
                className="max-h-14 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-w-[205px]"
              />
            ) : (
              <span className="flex items-center gap-3 text-left text-theme-blue">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-theme-blue to-theme-purple text-xs font-black tracking-wider text-white shadow-sm">
                  {client.mark}
                </span>
                <span>
                  <span className="block text-lg font-black tracking-tight">
                    {client.wordmark}
                  </span>
                  <span className="mt-0.5 block text-[9px] font-bold tracking-[0.16em] text-theme-purple">
                    {client.subtitle}
                  </span>
                </span>
              </span>
            )}
          </a>
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

      <div className="container relative z-10 mx-auto mt-12 px-5 text-center">
        <div className="mx-auto mb-7 h-px max-w-3xl bg-gradient-to-r from-transparent via-theme-blue/15 to-transparent" />
        <p className="text-xs font-black uppercase tracking-[0.22em] text-theme-blue/60">
          Selected client &amp; product work
        </p>
      </div>

      <div className="relative mt-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-40" />

        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] motion-reduce:animate-none">
          <ClientMarks />
          <ClientMarks hidden />
        </div>
      </div>
    </section>
  );
}
