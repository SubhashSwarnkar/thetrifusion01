"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import BrandTrustStrip from "components/BrandTrustStrip";
import SEO from "components/common/SEO";
import ServiceIcon from "components/ServiceIcon";
import { accentAt } from "lib/themeAccents";
import { siteConfig } from "config/site";
import DiwaliOfferCountdown, {
  DiwaliRefundLabel,
} from "components/DiwaliOfferCountdown";
import {
  ECOMMERCE_PRICE_FROM,
  formatInrFrom,
  htmlSitemapServiceGroups,
  hubServiceBySlug,
} from "data/serviceHub";

const SERVICE_CHOOSER = [
  {
    href: "/services/software-development",
    label: "Custom software development company in India",
    text: "for portals, CRM modules and APIs from Jaipur, from ₹1,00,000.",
  },
  {
    href: "/services/website-development",
    label: "Website development company in Jaipur",
    text: "for business websites, lead-generation sites, and portals on React, Next.js, or WordPress, from ₹15,000.",
  },
  {
    href: "/services/mobile-app-development",
    label: "Mobile app development company in Jaipur",
    text: "for one React Native or Flutter app on both iOS and Android, from ₹50,000.",
  },
  {
    href: "/services/ios-app-development",
    label: "iOS app development company in India",
    text: "for App Store-only or iPhone-first apps in Swift or React Native, from ₹2,50,000.",
  },
  {
    href: "/services/android-app-development",
    label: "Android app development company in Jaipur",
    text: "for Play Store-first apps in Kotlin or React Native, from ₹2,50,000.",
  },
  {
    href: "/services/devops",
    label: "DevOps services in Jaipur and India",
    text: "for CI/CD, Kubernetes, infrastructure as code, and cloud migration on AWS, Azure, or GCP, starting with a free infrastructure audit.",
  },
  {
    href: "/services/fintech-app-development",
    label: "Fintech app development company in India",
    text: "for BBPS, AEPS, DMT, and recharge software, from ₹99,999.",
  },
  {
    href: "/services/ai-development",
    label: "AI development company in Jaipur, India",
    text: "for WhatsApp bots, RAG and agents with a human review step, from ₹2,00,000.",
  },
  {
    href: "/services/digital-marketing",
    label: "Digital marketing agency in Jaipur, India",
    text: "for SEO, Google Ads and Meta Ads, from ₹15,000 (ad spend separate).",
  },
  {
    href: "/services/crm-erp-development",
    label: "Custom CRM and ERP development in Jaipur",
    text: "for pipelines, inventory and GST billing, from ₹3,00,000.",
  },
  {
    href: "/services/ui-ux-design",
    label: "UI/UX design company in Jaipur, India",
    text: "for Figma product UI and Hindi/Indic flows, from ₹20,000.",
  },
  {
    href: "/services/branding",
    label: "Branding agency in Jaipur, India",
    text: "for logo, identity and guidelines a website can use, from ₹30,000.",
  },
  {
    href: "/services/rpa",
    label: "RPA services company in India",
    text: "for invoice, Tally and CRM bots from Jaipur, from ₹50,000.",
  },
  {
    href: "/services/salesforce",
    label: "Salesforce implementation company in India",
    text: "for Flows, Apex and integrations on an org you already pay for, from ₹80,000.",
  },
  {
    href: "/services/mlm-crm-development",
    label: "MLM software development company in India",
    text: "for binary, unilevel and matrix plans from Jaipur, from ₹3,50,000.",
  },
  {
    href: "/services/ev-charging-app-development",
    label: "EV charging app development in India",
    text: "for OCPP/OCPI CSMS from Jaipur, from ₹4,50,000.",
  },
  {
    href: "/services/business-modernization",
    label: "Business modernization in Jaipur, India",
    text: "for spreadsheet-to-software cutovers, from ₹1,50,000.",
  },
  {
    href: "/services/graphic-design",
    label: "Graphic design company in Jaipur, India",
    text: "for social, ads and catalogues that match the live site, from ₹10,000.",
  },
  {
    href: "/services/on-demand",
    label: "Hire dedicated developers in India",
    text: "for named React, Node and mobile seats from Jaipur. Project work from ₹50,000.",
  },
  {
    href: "/services/fintech-app-development/bbps-software",
    label: "BBPS software development",
    text: "for white-label Bharat BillPay retailer and distributor panels. You bring BBPOU access. From ₹99,999.",
  },
  {
    href: "/services/fintech-app-development/aeps-software",
    label: "AEPS software development",
    text: "for Aadhaar-enabled payment panels. You bring sponsor-bank access. From ₹99,999.",
  },
  {
    href: "/services/fintech-app-development/dmt-software",
    label: "DMT software development",
    text: "for domestic money transfer retailer software. You bring the bank or aggregator contract. From ₹99,999.",
  },
  {
    href: "/services/fintech-app-development/recharge-software",
    label: "Recharge software development",
    text: "for mobile and DTH top-up panels. You bring the recharge API partner. From ₹99,999.",
  },
];

function ServiceCard({ service, accent }) {
  if (!service) return null;
  return (
    <Link href={service.href} prefetch={false} className="group block h-full">
      <div
        className={`relative h-full rounded-2xl border p-6 overflow-hidden hover:shadow-lg transition-all duration-300 ${accent.card}`}
      >
        <span className={`absolute left-0 top-0 h-full w-1.5 ${accent.bar}`} />
        <div
          className={`w-11 h-11 mb-5 rounded-xl flex items-center justify-center ${accent.iconWrap} group-hover:bg-theme-purple group-hover:text-white transition-colors`}
        >
          <ServiceIcon slug={service.slug} className="w-5 h-5" />
        </div>
        {service.priceFromLabel ? (
          <p className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-2">
            {service.priceFromLabel}
          </p>
        ) : null}
        <h3 className="text-xl text-theme-blue font-bold mb-2 group-hover:text-theme-purple transition-colors">
          {service.title}
        </h3>
        <p className="font-light text-gray-500 mb-6 line-clamp-3 leading-relaxed text-sm">
          {service.shortDescription}
        </p>
        <span className={`inline-flex items-center font-semibold text-sm ${accent.text}`}>
          Explore
          <svg
            className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform"
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
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = htmlSitemapServiceGroups();
  const fintech = hubServiceBySlug("fintech-app-development");

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SEO
        title="IT Services in Jaipur | TheTriFusion"
        description="IT services in Jaipur for software, websites, apps, UI/UX, and digital marketing. Grouped by Build, Industry, Grow, and Automate — with published starting prices."
      />
      <Header />

      <Breadcrumbs />
      <main>
        <section className="relative pt-10 pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-light-theme-purple/40 rounded-full blur-[120px] -z-10" />
          <div className="container mx-auto px-5 relative z-10">
            <div className="max-w-3xl mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-xs uppercase tracking-[0.2em] mb-5">
                Services
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-theme-blue font-black mb-3 tracking-tight leading-[1.1]">
                IT services from{" "}
                <span className="text-gradient">Jaipur</span>
              </h1>
              <div className="mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
              <p className="font-light text-lg text-gray-500 leading-relaxed max-w-2xl">
                Software, websites, mobile apps, UI/UX, and digital marketing —
                grouped so you can pick a page, see the published starting
                price, and open a related service.
              </p>
            </div>
            <nav aria-label="Service groups" className="flex flex-wrap gap-2">
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-theme-blue hover:border-theme-purple hover:text-theme-purple"
                >
                  {group.heading}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <BrandTrustStrip />

        <section className="relative py-12 overflow-hidden bg-white">
          <div className="container mx-auto px-5 relative z-10 space-y-16">
            <div>
              <Link
                href="/solutions/ecommerce-website-development"
                prefetch={false}
                className="group block"
              >
                <div
                  className={`relative rounded-2xl border p-6 overflow-hidden hover:shadow-lg transition-all duration-300 ${accentAt(0).card}`}
                >
                  <span className={`absolute left-0 top-0 h-full w-1.5 ${accentAt(0).bar}`} />
                  <div
                    className={`w-11 h-11 mb-5 rounded-xl flex items-center justify-center ${accentAt(0).iconWrap} group-hover:bg-theme-purple group-hover:text-white transition-colors`}
                  >
                    <ServiceIcon slug="ecommerce-development" className="w-5 h-5" />
                  </div>
                  <DiwaliOfferCountdown compact showLabel={false} className="mb-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-theme-purple">
                      {formatInrFrom(ECOMMERCE_PRICE_FROM)} · Live in 48 hrs · or 50% refund
                    </p>
                  </DiwaliOfferCountdown>
                  <h2 className="text-xl text-theme-blue font-bold mb-2 group-hover:text-theme-purple transition-colors">
                    Ecommerce website development
                  </h2>
                  <p className="font-light text-gray-500 mb-6 leading-relaxed text-sm max-w-3xl">
                    Shopify, WooCommerce, or custom stores with Razorpay/UPI.
                    Four packages from ₹25,000 to ₹99,000. Website live in 48
                    hours after locked brief
                    <DiwaliRefundLabel before=" — or 50% refund." after="." />
                  </p>
                  <span className={`inline-flex items-center font-semibold text-sm ${accentAt(0).text}`}>
                    See packages
                    <svg
                      className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform"
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
                </div>
              </Link>
            </div>

            {groups.map((group, groupIdx) => (
              <div key={group.id} id={group.id}>
                <h2 className="text-2xl md:text-3xl font-black text-theme-blue mb-2">
                  {group.heading}
                </h2>
                <p className="text-gray-500 font-light mb-6 max-w-2xl">
                  {group.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((service, idx) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                      accent={accentAt(groupIdx + idx + 1)}
                    />
                  ))}
                </div>
                {group.id === "industry" && fintech ? (
                  <p className="mt-4 text-sm text-gray-600">
                    Fintech modules:{" "}
                    <Link
                      href="/services/fintech-app-development/bbps-software"
                      className="font-semibold text-theme-purple hover:underline"
                    >
                      BBPS software development
                    </Link>
                    {", "}
                    <Link
                      href="/services/fintech-app-development/aeps-software"
                      className="font-semibold text-theme-purple hover:underline"
                    >
                      AEPS software development
                    </Link>
                    {", "}
                    <Link
                      href="/services/fintech-app-development/dmt-software"
                      className="font-semibold text-theme-purple hover:underline"
                    >
                      DMT software development
                    </Link>
                    {", and "}
                    <Link
                      href="/services/fintech-app-development/recharge-software"
                      className="font-semibold text-theme-purple hover:underline"
                    >
                      recharge software development
                    </Link>
                    .
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section id="choose-a-service" className="container mx-auto px-5 pb-4">
          <div className="max-w-4xl rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black text-theme-blue mb-4">
              Which service page fits your project?
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-gray-600 font-light leading-relaxed">
              {SERVICE_CHOOSER.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="font-semibold text-theme-purple hover:underline"
                  >
                    {item.label}
                  </Link>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-5 py-16">
          <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
              Need a scoped estimate?
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-4 max-w-xl mx-auto relative z-10 font-light">
              Share the problem and the deadline. The Jaipur team replies with a
              written next step — usually within 24 hours.
            </p>
            <address className="not-italic text-white/80 text-sm mb-8 relative z-10">
              <span className="block">{siteConfig.addressLine}</span>
              <a className="underline" href={siteConfig.telHref}>
                {siteConfig.phone}
              </a>
              <span className="block">{siteConfig.hoursLabel}</span>
            </address>
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold hover:bg-light-theme-purple transition-colors relative z-10"
            >
              Get a free scoped estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
