"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const clients = [
  {
    name: "Shanav Technologies",
    href: "https://shanav.com/",
    logo: "/client-logos/shanav.png",
    subtitle: "CLOUD & TECHNOLOGY",
  },
  {
    name: "Anax Mobility Solutions",
    href: "https://anaxmobility.com/",
    logo: "/client-logos/anax-mobility.png",
    subtitle: "EV MOBILITY SOLUTIONS",
  },
  {
    name: "PlugOne",
    href: "https://plugone.in/",
    logo: "/client-logos/plugone.png",
    subtitle: "EV CHARGING PLATFORM",
  },
  {
    name: "Atharv Narayan",
    href: "https://www.atharvnarayan.in/",
    logo: "/client-logos/atharv-narayan.jpg",
    subtitle: "DAIRY SOLUTIONS",
  },
  {
    name: "Connect Dairy",
    href: "https://www.connectdairy.in/",
    logo: "/client-logos/connect-dairy.jpg",
    subtitle: "SMART AGRI LOGISTICS",
  },
  {
    name: "DailyConcepts",
    href: "https://dailyconceptsindia.com/",
    logo: "/client-logos/dailyconcepts.jpg",
    subtitle: "ECOMMERCE & POS",
  },
  {
    name: "Meditative",
    href: "https://yoga-80f.pages.dev/",
    logo: "/client-logos/meditative.jpg",
    subtitle: "YOGA & WELLNESS",
  },
  {
    name: "Pet Sitting",
    href: "https://petcare-c3n.pages.dev/services",
    logo: "/client-logos/pet-sitting.jpg",
    subtitle: "PET CARE SERVICES",
  },
  {
    name: "Podcast",
    href: "https://podcast-ctw.pages.dev/",
    logo: "/client-logos/podcast.jpg",
    subtitle: "STORIES & EPISODES",
  },
  {
    name: "Resto",
    href: "https://resto-4tn.pages.dev/",
    logo: "/client-logos/resto.jpg",
    subtitle: "FOOD & HOSPITALITY",
  },
  {
    name: "Alime",
    href: "https://alimephotographer.pages.dev/",
    logo: "/client-logos/alime.jpg",
    subtitle: "CREATIVE PHOTOGRAPHY",
  },
  {
    name: "AppLab",
    href: "https://app-lab.pages.dev/",
    logo: "/client-logos/applab.jpg",
    subtitle: "MOBILE PRODUCT",
  },
  {
    name: "Dentista",
    href: "https://dentista-dental-clinic.vercel.app/",
    logo: "/client-logos/dentista.jpg",
    subtitle: "DENTAL CARE",
  },
  {
    name: "Travelix",
    href: "https://travelix-neon.vercel.app/",
    logo: "/client-logos/travelix.jpg",
    subtitle: "TRAVEL & EXPERIENCES",
  },
  {
    name: "DentaCare",
    href: "https://dente-ua67.vercel.app/",
    logo: "/client-logos/dentacare.jpg",
    subtitle: "MODERN DENTISTRY",
  },
];

function ClientMarks({ hidden = false, showLogos = false }) {
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
            className="group flex h-28 min-w-[250px] items-center justify-center rounded-2xl border border-theme-blue/10 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-theme-purple/25 hover:shadow-md sm:min-w-[290px]"
          >
            <span className="relative block h-full w-full transition-transform duration-300 group-hover:scale-105">
              {showLogos ? (
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="290px"
                  loading="lazy"
                  className="object-contain"
                />
              ) : (
                <span className="sr-only">{client.name}</span>
              )}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function BrandTrustStrip() {
  const [showLogos, setShowLogos] = useState(false);

  useEffect(() => {
    const start = () => setShowLogos(true);
    const id = window.setTimeout(start, 6000);
    const onIntent = () => {
      window.clearTimeout(id);
      start();
    };
    window.addEventListener("pointerdown", onIntent, { once: true, passive: true });
    window.addEventListener("keydown", onIntent, { once: true });
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("pointerdown", onIntent);
      window.removeEventListener("keydown", onIntent);
    };
  }, []);

  return (
    <section
      className="relative !mb-0 overflow-hidden border-y border-theme-purple/10 bg-gradient-to-b from-white via-light-theme-purple/20 to-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="brand-trust-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[38rem] -translate-x-1/2 rounded-full bg-theme-cyan/10 blur-[90px]" />

      <div className="container relative z-10 mx-auto px-5 text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-theme-purple">
          Our clients
        </p>
        <h2
          id="brand-trust-heading"
          className="mx-auto mb-4 max-w-4xl text-3xl font-black tracking-tight text-theme-blue sm:text-4xl lg:text-5xl"
        >
          Trusted by clients across industries
        </h2>
        <p className="mx-auto max-w-3xl text-sm font-light leading-relaxed text-gray-600 sm:text-base lg:text-lg">
          Businesses trust TheTriFusion to streamline operations, improve
          productivity, and launch dependable digital products. We build every
          solution around our clients&apos; real workflows, goals, and growth.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-40" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] motion-reduce:animate-none">
          <ClientMarks showLogos={showLogos} />
          <ClientMarks hidden showLogos={showLogos} />
        </div>
      </div>
    </section>
  );
}
