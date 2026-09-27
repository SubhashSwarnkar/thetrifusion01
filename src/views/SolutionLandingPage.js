"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import BrandTrustStrip from "components/BrandTrustStrip";
import WhatsAppButton from "components/WhatsAppButton";
import { getSeoLandingBySlug } from "data/seoLandingPages";
import { getServiceBySlug } from "data/servicesData";
import { canonicalSolutionHref, dedupeCanonicalSolutions } from "lib/internalLinks";
import { Portfolios } from "json/landingPageData";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import { siteConfig } from "config/site";
import NotFoundPage from "./NotFoundPage";

export default function SolutionLandingPage({ relatedBlog = null }) {
  const { slug } = useParams();
  const page = getSeoLandingBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return <NotFoundPage />;
  }

  const relatedServices = page.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  const relatedSolutions = dedupeCanonicalSolutions(
    (page.relatedSolutionSlugs || [])
      .map((s) => getSeoLandingBySlug(s))
      .filter(Boolean),
    getSeoLandingBySlug
  ).filter((solution) => solution.slug !== page.slug);

  const caseStudies = (page.relatedPortfolioIds || [])
    .map((id) => Portfolios.find((item) => item.id === id))
    .filter(Boolean);

  const headings = page.headings || {};
  const telHref = `tel:${siteConfig.phoneE164}`;

  const primaryHref = page.primaryCtaHref || "/estimate";
  const trackPrimary = () => {
    if (primaryHref.includes("appointment")) {
      trackEvent(AnalyticsEvents.BOOK_CONSULTATION, { source: page.slug });
    }
  };

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="!mb-0 relative pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/35 via-white to-white -z-10" />
          <div className="container mx-auto px-5 max-w-3xl">
            <p className="text-theme-purple font-bold text-xs sm:text-sm uppercase tracking-[0.18em] mb-4">
              {page.primaryKeyword}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-theme-blue mb-4 tracking-tight leading-[1.15]">
              {page.h1}
            </h1>
            <p className="text-lg sm:text-xl text-theme-blue/80 font-medium mb-4 leading-snug">
              {page.outcomeLine}
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-8">
              {page.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <Link
                href={primaryHref}
                onClick={trackPrimary}
                className="inline-flex justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25 hover:scale-[1.02] transition-transform"
              >
                {page.primaryCtaLabel}
              </Link>
              <WhatsAppButton
                message={page.whatsappMessage}
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors"
                label="WhatsApp us"
              >
                WhatsApp us
              </WhatsAppButton>
            </div>
            <p className="text-sm text-gray-500">
              Prefer email?{" "}
              <Link
                href="/contact"
                className="text-theme-purple font-semibold underline-offset-2 hover:underline"
              >
                Send a brief
              </Link>
            </p>
            {page.keyFacts?.length > 0 && (
              <div className="mt-8 rounded-2xl border border-theme-purple/15 bg-white/80 p-5 sm:p-6">
                <h2 className="text-base font-bold text-theme-blue mb-3">
                  At a glance
                </h2>
                <dl className="grid grid-cols-1 gap-y-2 text-sm sm:text-base">
                  {page.keyFacts.map((fact) => (
                    <div key={fact.label} className="sm:flex sm:gap-3">
                      <dt className="font-semibold text-theme-blue sm:w-32 sm:flex-shrink-0">
                        {fact.label}
                      </dt>
                      <dd className="text-gray-600">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                {page.showCompanyBlock && page.updatedAt && (
                  <p className="mt-3 text-xs text-gray-400">
                    Last updated: <time dateTime={page.updatedAt}>{page.updatedAt}</time>
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        <BrandTrustStrip />

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-gray-100 p-3 flex gap-2 safe-area-pb">
          {page.showCompanyBlock && (
            <a
              href={telHref}
              onClick={() =>
                trackEvent(AnalyticsEvents.CLICK_PHONE, {
                  source: page.slug,
                })
              }
              className="flex-none px-4 text-center py-3 rounded-full border border-theme-purple text-theme-purple font-bold text-sm"
            >
              Call
            </a>
          )}
          <Link
            href={primaryHref}
            onClick={trackPrimary}
            className="flex-1 text-center py-3 rounded-full bg-theme-purple text-white font-bold text-sm"
          >
            {page.primaryCtaLabel}
          </Link>
          <WhatsAppButton
            message={page.whatsappMessage}
            className="flex-1 text-center py-3 rounded-full bg-emerald-500 text-white font-bold text-sm"
            label="WhatsApp"
          >
            WhatsApp
          </WhatsAppButton>
        </div>

        {page.buyerGuide && page.criteria?.length > 0 && (
          <section className="!mb-0 py-14 md:py-16 border-t border-gray-100">
            <div className="container mx-auto px-5 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-2">
                How to evaluate partners
              </h2>
              <p className="text-gray-500 font-light mb-8">
                Use these criteria before you commit budget.
              </p>
              <ol className="space-y-6">
                {page.criteria.map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-theme-purple/10 text-theme-purple text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-theme-blue mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="!mb-0 py-14 md:py-16 bg-gray-50/60">
          <div className="container mx-auto px-5 max-w-3xl space-y-10">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {section.body}
                </p>
                {section.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-2 text-gray-700">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-theme-purple flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                    <table className="w-full min-w-[560px] text-left text-sm">
                      {section.table.caption && (
                        <caption className="sr-only">{section.table.caption}</caption>
                      )}
                      <thead className="bg-light-theme-purple/30 text-theme-blue">
                        <tr>
                          {section.table.columns.map((col, i) => (
                            <th key={`${col}-${i}`} scope="col" className="px-4 py-3 font-bold">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) =>
                              i === 0 ? (
                                <th key={i} scope="row" className="px-4 py-3 font-semibold text-theme-blue align-top">
                                  {cell}
                                </th>
                              ) : (
                                <td key={i} className="px-4 py-3 text-gray-600 align-top">
                                  {cell}
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.links?.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-theme-purple font-semibold hover:underline underline-offset-2"
                        >
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="!mb-0 py-14 md:py-16">
          <div className="container mx-auto px-5 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-6">
              {headings.deliverables || "What you get"}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {page.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-theme-blue font-medium"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-theme-purple flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {page.audiences?.length > 0 && (
          <section className="!mb-0 py-14 md:py-16 border-t border-gray-100">
            <div className="container mx-auto px-5 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-2">
                {headings.audiences || "Who this is for"}
              </h2>
              <p className="text-gray-500 font-light mb-6">
                Built for the clients we actually work with.
              </p>
              <ul className="flex flex-wrap gap-2">
                {page.audiences.map((audience) => (
                  <li
                    key={audience}
                    className="px-4 py-2 rounded-full bg-light-theme-purple/40 text-theme-purple text-sm font-semibold"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="!mb-0 py-14 md:py-16 bg-gray-50/60">
          <div className="container mx-auto px-5 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-8">
              {headings.process || "How we work"}
            </h2>
            <ol className="relative space-y-0 border-l-2 border-theme-purple/20 ml-3 pl-8">
              {page.processSteps.map((step, index) => (
                <li key={step.title} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[2.4rem] top-0 w-7 h-7 rounded-full bg-theme-purple text-white text-xs font-bold flex items-center justify-center ring-4 ring-gray-50">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-theme-blue mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="!mb-0 py-14 md:py-16">
          <div className="container mx-auto px-5 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="text-xl font-bold text-theme-blue mb-3">
                {headings.timeline || "Timeline"}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                {page.timelineRange ||
                  "Timeline depends on scope. We share a range after discovery."}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-theme-blue mb-3">
                {headings.cost || "What affects cost"}
              </h2>
              <ul className="space-y-2 text-gray-600 font-light">
                {page.costFactors.map((factor) => (
                  <li key={factor} className="flex gap-2">
                    <span className="text-theme-purple">·</span>
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                {page.costNote ||
                  "No fake fixed prices — get a scoped quote after discovery."}
              </p>
            </div>
          </div>
        </section>

        {caseStudies.length > 0 && (
          <section className="!mb-0 py-14 md:py-16 border-t border-gray-100">
            <div className="container mx-auto px-5 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-6">
                Related work
              </h2>
              <ul className="divide-y divide-gray-100">
                {caseStudies.map((project) => (
                  <li key={project.id}>
                    <Link
                      href={`/portfolio/${project.id}`}
                      onClick={() =>
                        trackEvent(AnalyticsEvents.VIEW_CASE_STUDY, {
                          project_id: project.id,
                          source: page.slug,
                        })
                      }
                      className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-5"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-theme-purple flex-shrink-0">
                        {project.type}
                      </span>
                      <span className="text-lg font-bold text-theme-blue group-hover:text-theme-purple transition-colors">
                        {project.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {(relatedSolutions.length > 0 ||
          relatedServices.length > 0 ||
          relatedBlog ||
          (page.relatedLinks && page.relatedLinks.length > 0)) && (
          <section className="!mb-0 py-14 md:py-16 bg-gray-50/60">
            <div className="container mx-auto px-5 max-w-3xl space-y-10">
              {page.relatedLinks?.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-theme-blue mb-4">
                    {headings.relatedLinks || "Ecommerce packages"}
                  </h2>
                  <ul className="space-y-3">
                    {page.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-theme-purple font-semibold hover:underline underline-offset-2"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedSolutions.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-theme-blue mb-4">
                    Related solutions
                  </h2>
                  <ul className="space-y-3">
                    {relatedSolutions.map((solution) => (
                      <li key={solution.slug}>
                        <Link
                          href={canonicalSolutionHref(solution.slug)}
                          className="text-theme-purple font-semibold hover:underline underline-offset-2"
                        >
                          {solution.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedServices.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-theme-blue mb-4">
                    Related services
                  </h2>
                  <ul className="space-y-3">
                    {relatedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-theme-purple font-semibold hover:underline underline-offset-2"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedBlog && (
                <div>
                  <h2 className="text-xl font-bold text-theme-blue mb-4">
                    Related insight
                  </h2>
                  <Link
                    href={`/blog/${relatedBlog.slug}`}
                    className="block group"
                  >
                    <p className="text-lg font-bold text-theme-blue group-hover:text-theme-purple transition-colors mb-1">
                      {relatedBlog.title}
                    </p>
                    <p className="text-gray-500 text-sm font-light line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="!mb-0 py-14 md:py-16">
          <div className="container mx-auto px-5 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-6">
              {headings.faqs || "FAQs"}
            </h2>
            <div className="divide-y divide-gray-100 border-y border-gray-100">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="w-full cursor-pointer list-none py-5 flex justify-between items-start gap-4 font-semibold text-theme-blue [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-semibold">{faq.question}</h3>
                    <span
                      aria-hidden="true"
                      className="text-theme-purple text-xl leading-none flex-shrink-0 group-open:rotate-45 transition-transform"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 -mt-1 text-gray-600 font-light leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {page.showCompanyBlock && (
          <section className="!mb-0 pb-10">
            <div className="container mx-auto px-5 max-w-3xl">
              <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                <h2 className="text-xl font-bold text-theme-blue mb-2">
                  About {siteConfig.name}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  {siteConfig.name} is the brand of {siteConfig.legalNameShort}, a
                  software development company in {siteConfig.city},{" "}
                  {siteConfig.region}, India. We build websites, ecommerce
                  stores, mobile apps and custom software for businesses in India
                  and worldwide.
                </p>
                <address className="not-italic mt-3 text-gray-700">
                  <span className="block">{siteConfig.addressLine}</span>
                  <span className="block">{siteConfig.hoursLabel}</span>
                  Phone / WhatsApp:{" "}
                  <a href={telHref} className="font-semibold text-theme-purple hover:underline">
                    {siteConfig.phone}
                  </a>
                  {" · "}Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-theme-purple hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </address>
              </div>
            </div>
          </section>
        )}

        <section className="!mb-0 pb-28 md:pb-24">
          <div className="container mx-auto px-5 max-w-3xl">
            <div className="rounded-[2rem] bg-theme-blue text-white px-8 py-12 md:px-10 md:py-14 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{page.cta}</h2>
              <p className="text-white/70 mb-8 font-light max-w-lg mx-auto">
                One clear next step: scoped estimate or a short discovery call.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={primaryHref}
                  onClick={trackPrimary}
                  className="px-7 py-3.5 bg-theme-purple rounded-full font-bold hover:scale-[1.02] transition-transform"
                >
                  {page.primaryCtaLabel}
                </Link>
                <WhatsAppButton
                  message={page.whatsappMessage}
                  className="px-7 py-3.5 bg-emerald-500 rounded-full font-bold hover:bg-emerald-600 transition-colors"
                  label="WhatsApp"
                >
                  WhatsApp TriFusion
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        <section className="!mb-0 pb-16">
          <div className="container mx-auto px-5 max-w-3xl">
            <h2 className="text-xl font-bold text-theme-blue mb-3">Office</h2>
            <address className="not-italic text-gray-600 leading-relaxed">
              <span className="block font-semibold text-theme-blue">{siteConfig.name}</span>
              <span className="block">{siteConfig.legalName}</span>
              <span className="block">{siteConfig.addressLine}</span>
              <a className="block font-semibold text-theme-purple hover:underline" href={telHref}>
                {siteConfig.phone}
              </a>
              <span className="block">{siteConfig.hoursLabel}</span>
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
