import React from "react";

import BrandIcon from "./BrandIcon";
import Newsletter from "../components/Newsletter";
import { services } from "data/servicesData";
import { getFeaturedSolutions } from "data/seoLandingPages";
import { LINKEDIN_URL, INSTAGRAM_URL, COMPANY_EMAIL, COMPANY_PHONE_DISPLAY } from "data/companyInfo";
import { trackEvent, AnalyticsEvents } from "utils/analytics";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const featuredSolutions = getFeaturedSolutions();

  return (
    <>
      <Newsletter />
      <footer className="bg-theme-blue text-white pt-24 pb-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-theme-purple/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-8 mb-16 items-start">
            <div className="space-y-5 min-w-0 sm:col-span-2 xl:col-span-1">
              <BrandIcon compact light />
              <p className="text-white text-sm font-semibold tracking-wide">
                Trifusion Infotech Private Limited
              </p>
              <p className="text-white/60 text-base font-light leading-relaxed">
                Software company in Jaipur, Rajasthan — websites, apps, and
                digital marketing. We build the product and stay on after launch.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-theme-purple hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-theme-purple hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="text-xl font-black mb-6 text-theme-cyan">Services</h4>
              <ul className="space-y-3">
                  <li>
                    <Link
                      href="/web-development"
                      className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block font-light"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/android-app-development"
                      className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block font-light"
                    >
                      Android Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ios-app-development"
                      className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block font-light"
                    >
                      iOS Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/white-label-development"
                      className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block font-light"
                    >
                      White-label
                    </Link>
                  </li>
                {services.slice(0, 3).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block font-light"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="text-xl font-black mb-6 text-theme-cyan">
                Solutions
              </h4>
              <ul className="space-y-3">
                {featuredSolutions.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/solutions/${page.slug}`}
                      className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block font-light leading-snug"
                    >
                      {page.navLabel || page.h1}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/solutions"
                    className="text-theme-purple hover:text-white transition-all inline-block font-bold"
                  >
                    All solutions →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="text-xl font-black mb-6 text-theme-pink">Company</h4>
              <ul className="space-y-3 font-light">
                <li>
                  <Link
                    href="/about"
                    className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6 min-w-0">
              <h4 className="text-xl font-black mb-6 text-theme-purple">Office</h4>
              <div className="space-y-4 text-white/60 font-light">
                <p className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-theme-purple mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Jaipur, Rajasthan, India
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-theme-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`}
                    onClick={() => trackEvent(AnalyticsEvents.CLICK_PHONE, { source: "footer" })}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-theme-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    onClick={() => trackEvent(AnalyticsEvents.CLICK_EMAIL)}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </p>
              </div>
              <Link
                href="/appointment"
                onClick={() =>
                  trackEvent(AnalyticsEvents.BOOK_CONSULTATION, {
                    source: "footer",
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-theme-purple/20 text-theme-purple border border-theme-purple/30 font-bold hover:bg-theme-purple hover:text-white transition-all shadow-lg shadow-black/20"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm font-light text-center md:text-left">
              © {currentYear} Trifusion Infotech Private Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-8 text-white/40 text-sm font-light">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("tf-open-cookie-settings"))
                }
                className="hover:text-white transition-colors"
              >
                Cookie settings
              </button>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
