"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { seoLandingPages, getSeoLandingBySlug } from "data/seoLandingPages";

export default function SolutionsHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="overflow-hidden">
        <section className="relative pt-10 pb-20 bg-white">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-light-theme-purple/30 rounded-full blur-[120px] -z-10" />
          <div className="container mx-auto px-5">
            <Fade direction="up" triggerOnce>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-xs uppercase tracking-[0.2em] mb-6">
                  SEO Solutions Hub
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-theme-blue mb-6 tracking-tight">
                  Solutions from our{" "}
                  <span className="text-gradient">Jaipur</span> software company
                </h1>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Each page has one job: Jaipur web work, Rajasthan software,
                  ecommerce, apps, marketing, or Bhilwara as a service area from
                  Jaipur — not a second office.
                </p>
              </div>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {seoLandingPages
                .filter((raw) => raw.slug !== "online-store-development")
                .map((raw, index) => {
                const page = getSeoLandingBySlug(raw.slug);
                return (
                <Fade
                  key={page.slug}
                  direction="up"
                  delay={Math.min(index * 60, 300)}
                  triggerOnce
                >
                  <Link
                    href={`/solutions/${page.slug}`}
                    className="block h-full p-8 rounded-3xl border border-gray-100 bg-white hover:border-theme-purple/30 hover:shadow-xl transition-all group"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-3">
                      {page.primaryKeyword}
                    </p>
                    <h2 className="text-2xl font-bold text-theme-blue mb-3 group-hover:text-theme-purple transition-colors">
                      {page.h1}
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-6 line-clamp-3">
                      {page.outcomeLine || page.intro}
                    </p>
                    <span className="inline-flex items-center gap-2 text-theme-purple font-bold">
                      View solution
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </Fade>
              );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-theme-purple text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
              >
                Discuss your project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
