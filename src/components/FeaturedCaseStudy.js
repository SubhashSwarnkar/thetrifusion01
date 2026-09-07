"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import PlugOneImg from "assets/images/Portfolio/PlugOne.jpg";

const HIGHLIGHTS = [
  {
    label: "What shipped",
    text: "Driver apps (iOS + Android), web console, live charger map, and session tracking.",
  },
  {
    label: "Stack focus",
    text: "OCPI / OCPP-ready roaming flows and real-time station status — not a brochure site.",
  },
  {
    label: "Proof",
    text: "Open plugone.in yourself. No invented star ratings or private screenshots only.",
  },
];

export default function FeaturedCaseStudy() {
  return (
    <section className="container mx-auto px-5 py-16 sm:py-20">
      <Fade direction="up" triggerOnce>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/40 text-theme-purple text-xs font-bold uppercase tracking-[0.18em] mb-5">
            Featured case
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-theme-blue font-black tracking-tight mb-4">
            PlugOne — EV charging, live in production
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-light max-w-2xl mx-auto">
            One deep look at how TheTriFusion ships niche products from Jaipur —
            with a URL you can verify today.
          </p>
        </div>
      </Fade>

      <Fade direction="up" delay={100} triggerOnce>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <a
            href="https://plugone.in/"
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-gray-100 shadow-lg"
          >
            <Image
              src={PlugOneImg}
              alt="PlugOne EV charging platform live product"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <span className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto inline-flex justify-center px-4 py-2 rounded-full bg-white/95 text-theme-purple text-sm font-bold shadow-md">
              Verify live → plugone.in
            </span>
          </a>

          <div>
            <ul className="space-y-6 mb-8">
              {HIGHLIGHTS.map((item) => (
                <li key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-wider text-theme-purple mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/ev-charging-app-development"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-theme-purple text-white font-bold hover:bg-dark-theme-purple transition-colors"
              >
                EV charging service page
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-theme-blue font-bold hover:border-theme-purple hover:text-theme-purple transition-colors"
              >
                Get a free scoped estimate
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
