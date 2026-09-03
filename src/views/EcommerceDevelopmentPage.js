"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import ShortLeadForm from "components/ShortLeadForm";
import WhatsAppButton from "components/WhatsAppButton";
import { ADS_PROCESS } from "data/adsLandingPages";
import {
  ecommercePage as page,
  ecommercePackages,
  ecommerceStoreTypes,
  vendorComparison,
  includedItems,
  notIncludedItems,
  ecommerceFaqs,
} from "data/ecommerceDevelopmentData";
import { Portfolios } from "json/landingPageData";
import { COMPANY_PHONE_DISPLAY, WHATSAPP_NUMBER } from "data/companyInfo";
import { siteConfig } from "config/site";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import { accentAt } from "lib/themeAccents";

function SectionHeading({ children, kicker }) {
  return (
    <div className="mb-8">
      {kicker ? (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-black text-theme-blue tracking-tight">
        {children}
      </h2>
      <div className="mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
    </div>
  );
}

function waUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
}

export default function EcommerceDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const proofs = page.proofIds
    .map((id) => Portfolios.find((item) => item.id === id))
    .filter(Boolean);
  const phoneHref = `tel:${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`;
  const calendlyHref = siteConfig.calendlyUrl;
  const defaultWa = waUrl(page.whatsappMessage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-24 lg:pb-0">
      <Header />
      <Breadcrumbs />

      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-light-theme-purple text-theme-purple text-xs font-bold uppercase tracking-[0.16em] mb-5">
                {page.kicker}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-4">
                {page.h1}
              </h1>
              <p className="text-lg text-theme-blue/80 font-medium mb-4">
                {page.outcome}
              </p>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6 max-w-xl">
                {page.intro}
              </p>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-100 shadow-lg mb-8">
                <Image
                  src={page.heroImage}
                  alt={page.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden lg:flex flex-row gap-3 mb-8">
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25"
                >
                  See packages
                </a>
                <WhatsAppButton
                  message={page.whatsappMessage}
                  directLink
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-green-500 text-white rounded-full font-bold hover:bg-green-600"
                  label="WhatsApp us"
                >
                  WhatsApp us
                </WhatsAppButton>
              </div>
              <div className="hidden lg:flex flex-wrap gap-3 mb-6">
                <a
                  href={phoneHref}
                  onClick={() =>
                    trackEvent(AnalyticsEvents.CLICK_PHONE, { source: page.slug })
                  }
                  className="text-sm font-semibold text-theme-blue hover:text-theme-purple"
                >
                  Call {COMPANY_PHONE_DISPLAY}
                </a>
                {calendlyHref ? (
                  <>
                    <span className="text-gray-300">·</span>
                    <a
                      href={calendlyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent(AnalyticsEvents.BOOK_CONSULTATION, {
                          source: page.slug,
                        })
                      }
                      className="text-sm font-semibold text-theme-purple"
                    >
                      Free 15-min consultation
                    </a>
                  </>
                ) : null}
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.trust.map((item, idx) => {
                  const accent = accentAt(idx);
                  return (
                    <li
                      key={item}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-semibold text-theme-blue ${accent.card}`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 ${accent.bar}`} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <ShortLeadForm
                defaultProjectType="Ecommerce"
                leadSource={page.leadSource}
                heading="Get the ecommerce package"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="container mx-auto px-5 py-16 scroll-mt-28">
        <SectionHeading kicker="Packages">
          Two complete packages — Web + Android + iOS included
        </SectionHeading>
        <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-10 -mt-2">
          Everything in the package is included. There is no upsell from
          TheTriFusion for Android, iOS, or web. Pick single vendor for your
          own store, or multi-vendor for a marketplace.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {ecommercePackages.map((pkg, idx) => {
            const accent = accentAt(idx);
            return (
              <article
                key={pkg.id}
                id={pkg.id}
                className={`scroll-mt-28 rounded-3xl border overflow-hidden flex flex-col ${
                  pkg.popular
                    ? "border-theme-purple shadow-xl shadow-theme-purple/10 ring-2 ring-theme-purple/20"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {pkg.popular ? (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-theme-purple text-white text-xs font-bold uppercase tracking-widest">
                      Most requested
                    </span>
                  ) : null}
                </div>
                <div className={`p-7 flex flex-col flex-1 ${accent.card}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${accent.text}`}>
                    {pkg.badge}
                  </p>
                  <h3 className="text-2xl font-black text-theme-blue mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-4xl font-black text-theme-blue mb-3">
                    {pkg.priceLabel}
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      development package
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                    {pkg.summary}
                  </p>
                  <ul className="space-y-2 mb-7 flex-1">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-theme-blue font-medium"
                      >
                        <span
                          className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] ${accent.check}`}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="#lead-form"
                      onClick={() =>
                        trackEvent(AnalyticsEvents.GENERATE_LEAD, {
                          method: "package_cta",
                          package: pkg.id,
                        })
                      }
                      className="flex-1 text-center py-3.5 rounded-full bg-theme-purple text-white font-bold text-sm hover:bg-dark-theme-purple"
                    >
                      Get this package
                    </a>
                    <a
                      href={waUrl(pkg.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
                          source: `${page.slug}-${pkg.id}`,
                        })
                      }
                      className="flex-1 text-center py-3.5 rounded-full bg-green-500 text-white font-bold text-sm hover:bg-green-600"
                    >
                      WhatsApp {pkg.name}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="store-types" className="relative py-16 overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/30 to-white -z-10" />
        <div className="container mx-auto px-5">
          <SectionHeading kicker="Store types">
            Grocery, clothing, and every store we build
          </SectionHeading>
          <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-10 -mt-2">
            Same packages, catalog tuned to your category. Available as single
            vendor or multi-vendor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecommerceStoreTypes.map((store, idx) => {
              const accent = accentAt(idx);
              return (
                <article
                  key={store.id}
                  id={store.id}
                  className={`scroll-mt-28 rounded-2xl border overflow-hidden ${accent.card}`}
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={store.image}
                      alt={store.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-theme-blue mb-2">
                      {store.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                      {store.description}
                    </p>
                    <p className={`text-xs font-bold uppercase tracking-widest ${accent.text}`}>
                      Single or multi-vendor
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="compare" className="container mx-auto px-5 py-16">
        <SectionHeading kicker="Compare">
          Single vendor vs multi-vendor
        </SectionHeading>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="bg-theme-blue text-white">
                <th className="px-5 py-4 text-sm font-bold">Feature</th>
                <th className="px-5 py-4 text-sm font-bold">
                  Single vendor · ₹25,000
                </th>
                <th className="px-5 py-4 text-sm font-bold">
                  Multi-vendor · ₹35,000
                </th>
              </tr>
            </thead>
            <tbody>
              {vendorComparison.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <th className="px-5 py-4 text-sm font-semibold text-theme-blue">
                    {row.feature}
                  </th>
                  <td className="px-5 py-4 text-sm text-gray-600 font-light">
                    {row.single}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600 font-light">
                    {row.multi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="included" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-light-theme-purple -z-10" />
        <div className="container mx-auto px-5">
          <SectionHeading kicker="Scope">
            What is included — and what is not
          </SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl border border-theme-purple/25 bg-white">
              <h3 className="text-xl font-bold text-theme-blue mb-4">
                Included in both packages
              </h3>
              <ul className="space-y-2">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-theme-blue font-medium"
                  >
                    <span className="mt-1 w-4 h-4 rounded-full bg-theme-purple text-white flex items-center justify-center shrink-0 text-[10px]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 rounded-2xl border border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-theme-blue mb-4">
                Client still handles (not our fee)
              </h3>
              <ul className="space-y-2">
                {notIncludedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600 font-light"
                  >
                    <span className="mt-1 w-4 h-4 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 text-[10px]">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {proofs.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="Proof">Live work you can open</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proofs.map((project, idx) => {
              const accent = accentAt(idx);
              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  onClick={() =>
                    trackEvent(AnalyticsEvents.VIEW_CASE_STUDY, {
                      project: project.id,
                      source: page.slug,
                    })
                  }
                  className={`block rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow ${accent.card}`}
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-5">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${accent.text}`}>
                      {project.type}
                    </p>
                    <h3 className="text-lg font-bold text-theme-blue mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light line-clamp-3">
                      {project.description ||
                        "Live production work from TheTriFusion."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 to-white" />
        <div className="container mx-auto px-5 relative">
          <SectionHeading kicker="Stack">What we build with</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {page.stack.map((tech, idx) => {
              const accent = accentAt(idx);
              return (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-full border text-sm font-semibold ${accent.chip}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-16">
        <SectionHeading kicker="Process">Discovery to support</SectionHeading>
        <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {ADS_PROCESS.map((step, idx) => {
            const accent = accentAt(idx);
            return (
              <li key={step.title} className={`p-5 rounded-2xl border ${accent.card}`}>
                <span
                  className={`inline-flex w-9 h-9 rounded-xl text-white text-sm font-black items-center justify-center mb-3 ${accent.bar}`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-theme-blue mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="faq" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-light-theme-purple" />
        <div className="container mx-auto px-5 relative max-w-3xl">
          <SectionHeading kicker="FAQ">
            Packages, store types, and launch
          </SectionHeading>
          <div className="space-y-3">
            {ecommerceFaqs.map((faq, idx) => {
              const open = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full text-left px-5 py-4 font-bold text-theme-blue flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(open ? -1 : idx)}
                    aria-expanded={open}
                  >
                    {faq.question}
                    <span className="text-theme-purple text-xl leading-none">
                      {open ? "–" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <p className="px-5 pb-5 text-sm text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Website-only ecommerce research:{" "}
            <Link
              href={page.relatedSolutionHref}
              className="font-semibold text-theme-purple"
            >
              {page.relatedSolutionLabel}
            </Link>
            . Cost factors:{" "}
            <Link
              href={`/blog/${page.relatedBlogSlug}`}
              className="font-semibold text-theme-purple"
            >
              ecommerce website development cost in India
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to launch grocery, fashion, or a marketplace?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-light">
            ₹25,000 single vendor or ₹35,000 multi-vendor. Web, Android, and iOS
            in both. Share the store type — the Jaipur team replies on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold"
            >
              Get a callback
            </a>
            <a
              href={defaultWa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
                  source: `${page.slug}-footer-cta`,
                })
              }
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white rounded-full font-bold"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-gray-100 p-3 flex gap-2">
        <a
          href={phoneHref}
          onClick={() =>
            trackEvent(AnalyticsEvents.CLICK_PHONE, { source: `${page.slug}-sticky` })
          }
          className="flex-1 text-center py-3 rounded-full border border-theme-purple text-theme-purple font-bold text-sm"
        >
          Call
        </a>
        <a
          href={defaultWa}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
              source: `${page.slug}-sticky`,
            })
          }
          className="flex-1 text-center py-3 rounded-full bg-green-500 text-white font-bold text-sm"
        >
          WhatsApp
        </a>
        <a
          href="#packages"
          className="flex-1 text-center py-3 rounded-full bg-theme-purple text-white font-bold text-sm"
        >
          Packages
        </a>
      </div>

      <Footer />
    </div>
  );
}
