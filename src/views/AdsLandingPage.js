"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "parts/Footer";
import BrandIcon from "parts/BrandIcon";
import ShortLeadForm from "components/ShortLeadForm";
import WhatsAppButton from "components/WhatsAppButton";
import { ADS_PROCESS } from "data/adsLandingPages";
import { Portfolios } from "json/landingPageData";
import { COMPANY_PHONE_DISPLAY, WHATSAPP_NUMBER } from "data/companyInfo";
import { siteConfig } from "config/site";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import { accentAt } from "lib/themeAccents";

function AdsHeader({ phoneHref, whatsappMessage }) {
  const wa = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-100 py-3">
      <div className="container mx-auto px-5 flex items-center justify-between gap-4">
        <Link href="/" aria-label="TheTriFusion home">
          <BrandIcon compact />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={phoneHref}
            onClick={() => trackEvent(AnalyticsEvents.CLICK_PHONE, { source: "ads-header" })}
            className="hidden sm:inline text-sm font-semibold text-theme-blue"
          >
            {COMPANY_PHONE_DISPLAY}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent(AnalyticsEvents.CLICK_WHATSAPP, { source: "ads-header" })}
            className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-bold"
          >
            WhatsApp
          </a>
          <a
            href="#lead-form"
            className="px-4 py-2 rounded-full bg-theme-purple text-white text-sm font-bold"
          >
            Callback
          </a>
        </div>
      </div>
    </header>
  );
}

export default function AdsLandingPage({ landing }) {
  const [openFaq, setOpenFaq] = useState(0);
  const proofs = landing.proofIds
    .map((id) => Portfolios.find((item) => item.id === id))
    .filter(Boolean);
  const phoneHref = `tel:${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`;
  const calendlyHref = siteConfig.calendlyUrl;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    landing.whatsappMessage
  )}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [landing.slug]);

  return (
    <div className="min-h-screen bg-white pb-24 lg:pb-0">
      <AdsHeader phoneHref={phoneHref} whatsappMessage={landing.whatsappMessage} />

      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1.5 rounded-full bg-light-theme-purple text-theme-purple text-xs font-bold uppercase tracking-[0.16em] mb-5">
                {landing.kicker}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-4">
                {landing.h1}
              </h1>
              <p className="text-lg text-theme-blue/80 font-medium mb-4">
                {landing.outcome}
              </p>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-8 max-w-xl">
                {landing.intro}
              </p>
              <div className="hidden lg:flex flex-row gap-3 mb-8">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25"
                >
                  Get a callback
                </a>
                <WhatsAppButton
                  message={landing.whatsappMessage}
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
                    trackEvent(AnalyticsEvents.CLICK_PHONE, { source: landing.slug })
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
                          source: landing.slug,
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
                {landing.trust.map((item, idx) => {
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

            <div className="order-1 lg:order-2">
              <ShortLeadForm
                defaultProjectType={landing.projectType}
                leadSource={`ads_${landing.slug}`}
                heading={`Talk about ${landing.serviceName.toLowerCase()}`}
              />
            </div>
          </div>
        </div>
      </section>

      {proofs.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
            Proof
          </p>
          <h2 className="text-3xl font-black text-theme-blue mb-3">
            Live work you can open
          </h2>
          <p className="text-gray-500 font-light mb-8 max-w-2xl">
            Public URLs, not mockups. We ship products and stay on after launch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {proofs.map((project, idx) => {
              const accent = accentAt(idx);
              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  onClick={() =>
                    trackEvent(AnalyticsEvents.VIEW_CASE_STUDY, {
                      project: project.id,
                      source: landing.slug,
                    })
                  }
                  className={`block rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow ${accent.card}`}
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                      {project.description || "Live production work from TheTriFusion."}
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
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
            Stack
          </p>
          <h2 className="text-3xl font-black text-theme-blue mb-6">
            What we build with
          </h2>
          <div className="flex flex-wrap gap-2">
            {landing.stack.map((tech, idx) => {
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
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
          Process
        </p>
        <h2 className="text-3xl font-black text-theme-blue mb-8">
          Discovery to support
        </h2>
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

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-light-theme-purple" />
        <div className="container mx-auto px-5 relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-black text-theme-blue mb-8">
            Budget, timeline, stack
          </h2>
          <div className="space-y-3">
            {landing.faqs.map((faq, idx) => {
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
          {landing.relatedService ? (
            <p className="mt-8 text-sm text-gray-500">
              More detail:{" "}
              <Link
                href={landing.relatedService.href}
                className="font-semibold text-theme-purple"
              >
                {landing.relatedService.label}
              </Link>
            </p>
          ) : null}
        </div>
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to scope {landing.serviceName.toLowerCase()}?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-light">
            Share the problem and the deadline. The Jaipur team replies with a
            next step on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold"
            >
              Get a callback
            </a>
            <a
              href={calendlyHref || waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white rounded-full font-bold"
            >
              {calendlyHref ? "Book 15 minutes" : "WhatsApp us"}
            </a>
          </div>
        </div>
      </section>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-gray-100 p-3 flex gap-2">
        <a
          href={phoneHref}
          onClick={() => trackEvent(AnalyticsEvents.CLICK_PHONE, { source: `${landing.slug}-sticky` })}
          className="flex-1 text-center py-3 rounded-full border border-theme-purple text-theme-purple font-bold text-sm"
        >
          Call
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(AnalyticsEvents.CLICK_WHATSAPP, { source: `${landing.slug}-sticky` })}
          className="flex-1 text-center py-3 rounded-full bg-green-500 text-white font-bold text-sm"
        >
          WhatsApp
        </a>
        <a
          href="#lead-form"
          className="flex-1 text-center py-3 rounded-full bg-theme-purple text-white font-bold text-sm"
        >
          Form
        </a>
      </div>

      <Footer hideNewsletter />
    </div>
  );
}
