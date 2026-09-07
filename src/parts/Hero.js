"use client";

import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import HeroVideo from "components/HeroVideo";

/** Homepage hero: only the four core services visitors should remember. */
const HERO_CORE = [
  {
    label: "Website Development",
    href: "/services/website-development",
    highlight: true,
  },
  {
    label: "Mobile Apps",
    href: "/services/mobile-app-development",
    highlight: true,
  },
  {
    label: "UI/UX",
    href: "/services/ui-ux-design",
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
  },
];

const chipClassName =
  "whitespace-nowrap shrink-0 px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:border-theme-purple/40 hover:text-theme-purple hover:bg-white transition-colors";

const highlightChipClassName =
  "whitespace-nowrap shrink-0 px-3 py-1.5 rounded-full bg-theme-purple text-white border border-theme-purple shadow-sm hover:bg-dark-theme-purple transition-colors font-semibold";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32 pb-16 z-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Fade direction="up" triggerOnce>
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-light-theme-purple/40 text-theme-purple text-xs font-bold uppercase tracking-[0.18em]">
                Jaipur, Rajasthan
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-theme-blue mb-6">
                Growing your
                <br />
                business is our
                <br />
                <span className="text-gradient">calling.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Websites, mobile apps, UI/UX and digital marketing from a
                software company in Jaipur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  href="/contact"
                  type="link"
                  className="btn-wave flex items-center justify-center px-8 py-4 text-white text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Get a free scoped estimate
                  <svg
                    className="ml-2 w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
                <Link
                  href="/portfolio"
                  className="flex items-center justify-center px-8 py-4 text-theme-purple text-lg bg-white border-2 border-theme-purple rounded-full shadow-lg hover:bg-light-theme-purple transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  See live work
                </Link>
              </div>
              <p className="mt-3 text-sm text-gray-400 font-medium">
                Written quote reply within 24 hours
              </p>
            </Fade>
          </div>

          <div className="w-full">
            <Fade direction="up" triggerOnce className="w-full block">
              <HeroVideo />
            </Fade>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3 text-center lg:text-left">
            Core services
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            {HERO_CORE.map((chip) => (
              <Link
                key={chip.label}
                href={chip.href}
                className={chip.highlight ? highlightChipClassName : chipClassName}
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Live projects you can open</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Written scope before build</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Support after launch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
