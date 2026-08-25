"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";

export default function SolutionsHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pages = seoLandingPages
    .filter((raw) => raw.slug !== "online-store-development")
    .map((raw) => getSeoLandingBySlug(raw.slug))
    .filter(Boolean);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="bg-white overflow-hidden">
        <section className="!mb-0 relative pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 via-white to-white -z-10" />
          <div className="container mx-auto px-5 max-w-4xl">
            <p className="text-theme-purple font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-theme-blue tracking-tight leading-[1.1] mb-5">
              Clear solutions for software, web &amp; growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
              Pick the path that matches your goal — ecommerce, apps, custom
              software, marketing, or regional delivery from Jaipur.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/20 hover:scale-[1.02] transition-transform"
              >
                Talk to TriFusion
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center px-7 py-3.5 border-2 border-theme-blue/15 text-theme-blue rounded-full font-bold hover:border-theme-purple hover:text-theme-purple transition-colors"
              >
                Get an estimate
              </Link>
            </div>
          </div>
        </section>

        <section className="!mb-0 pb-20 md:pb-28">
          <div className="container mx-auto px-5 max-w-4xl">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-blue">
                Browse all solutions
              </h2>
              <p className="text-sm text-gray-400 font-medium hidden sm:block">
                {pages.length} guides
              </p>
            </div>

            <ul className="divide-y divide-gray-100 border-y border-gray-100">
              {pages.map((page, index) => (
                <li key={page.slug}>
                  <Link
                    href={`/solutions/${page.slug}`}
                    className="group flex gap-5 sm:gap-8 py-6 sm:py-7 items-start hover:bg-gray-50/80 -mx-3 px-3 rounded-xl transition-colors"
                  >
                    <span className="text-sm font-bold text-theme-purple/70 tabular-nums pt-1 w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-theme-blue group-hover:text-theme-purple transition-colors mb-1.5">
                        {page.h1}
                      </h3>
                      <p className="text-gray-500 font-light leading-relaxed line-clamp-2">
                        {page.outcomeLine || page.intro}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {page.primaryKeyword}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-theme-purple font-bold text-sm pt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      View
                      <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="!mb-0 pb-24">
          <div className="container mx-auto px-5 max-w-4xl">
            <div className="rounded-[2rem] bg-theme-blue text-white px-8 py-12 md:px-12 md:py-14 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Not sure which solution fits?
              </h2>
              <p className="text-white/70 font-light mb-8 max-w-xl mx-auto">
                Share your goal and constraints — we&apos;ll recommend the right
                path and a realistic next step.
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center px-8 py-4 bg-theme-purple rounded-full font-bold hover:scale-[1.02] transition-transform"
              >
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
