"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import WhatsAppButton from "components/WhatsAppButton";
import { getSeoLandingBySlug } from "data/seoLandingPages";
import { getServiceBySlug } from "data/servicesData";
import { getBlogBySlug } from "data/blogData";
import { Portfolios } from "json/landingPageData";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import NotFoundPage from "./NotFoundPage";

export default function SolutionLandingPage() {
  const { slug } = useParams();
  const page = getSeoLandingBySlug(slug);
  const [openFaqs, setOpenFaqs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return <NotFoundPage />;
  }

  const relatedServices = page.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  const relatedSolutions = (page.relatedSolutionSlugs || [])
    .map((s) => getSeoLandingBySlug(s))
    .filter(Boolean);

  const relatedBlog = page.relatedBlogSlug
    ? getBlogBySlug(page.relatedBlogSlug)
    : null;

  const caseStudies = (page.relatedPortfolioIds || [])
    .map((id) => Portfolios.find((item) => item.id === id))
    .filter(Boolean);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
        {/* Hero — one outcome + primary CTA */}
        <section className="relative pt-10 pb-14">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-light-theme-purple/30 rounded-full blur-[120px] -z-10" />
          <div className="container mx-auto px-5 max-w-5xl">
            <p className="text-theme-purple font-bold text-sm uppercase tracking-widest mb-4">
              {page.primaryKeyword}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-theme-blue mb-5 tracking-tight leading-tight">
              {page.h1}
            </h1>
            <p className="text-xl md:text-2xl text-theme-blue/80 font-medium mb-4">
              {page.outcomeLine}
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-3xl">
              {page.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link
                href={primaryHref}
                onClick={trackPrimary}
                className="inline-flex justify-center px-8 py-4 bg-theme-purple text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
              >
                {page.primaryCtaLabel}
              </Link>
              <WhatsAppButton
                message={page.whatsappMessage}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors"
                label="WhatsApp us"
              >
                WhatsApp us
              </WhatsAppButton>
            </div>
            <p className="text-sm text-gray-500">
              Prefer email?{" "}
              <Link href="/contact" className="text-theme-purple font-semibold">
                Send a brief on the contact form
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-gray-100 p-3 flex gap-2">
          <Link
            href={primaryHref}
            onClick={trackPrimary}
            className="flex-1 text-center py-3 rounded-full bg-theme-purple text-white font-bold text-sm"
          >
            {page.primaryCtaLabel}
          </Link>
          <WhatsAppButton
            message={page.whatsappMessage}
            className="flex-1 text-center py-3 rounded-full bg-green-500 text-white font-bold text-sm"
            label="WhatsApp"
          >
            WhatsApp
          </WhatsAppButton>
        </div>

        {page.buyerGuide && page.criteria?.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-5 max-w-5xl">
              <h2 className="text-3xl font-bold text-theme-blue mb-8">
                Criteria to evaluate a software company in India
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.criteria.map((item) => (
                  <article
                    key={item.title}
                    className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50"
                  >
                    <h3 className="text-xl font-bold text-theme-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-16">
          <div className="container mx-auto px-5 max-w-5xl space-y-8">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="p-8 rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-theme-blue mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 bg-gray-50/80">
          <div className="container mx-auto px-5 max-w-5xl py-14">
            <h2 className="text-3xl font-bold text-theme-blue mb-8 text-center">
              What you get
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
                >
                  <span className="text-theme-purple font-bold">✓</span>
                  <span className="text-theme-blue font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {page.audiences?.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-5 max-w-5xl">
              <h2 className="text-3xl font-bold text-theme-blue mb-4 text-center">
                Who is this for?
              </h2>
              <p className="text-center text-gray-500 mb-8 font-light">
                Built for the kinds of clients we actually work with.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {page.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="px-4 py-2 rounded-full bg-light-theme-purple/20 text-theme-purple font-semibold text-sm"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-16 bg-white">
          <div className="container mx-auto px-5 max-w-5xl">
            <h2 className="text-3xl font-bold text-theme-blue mb-8 text-center">
              Transparent process
            </h2>
            <ol className="space-y-6">
              {page.processSteps.map((step, index) => (
                <li key={step.title} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-theme-purple text-white font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-theme-blue">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-light">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pb-16 bg-gray-50/80">
          <div className="container mx-auto px-5 max-w-5xl py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-100">
              <h2 className="text-2xl font-bold text-theme-blue mb-4">
                Timeline range
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                {page.timelineRange ||
                  "Timeline depends on scope. We share a range after discovery."}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-100">
              <h2 className="text-2xl font-bold text-theme-blue mb-4">
                What affects cost
              </h2>
              <ul className="space-y-2 text-gray-600 font-light">
                {page.costFactors.map((factor) => (
                  <li key={factor} className="flex gap-2">
                    <span className="text-theme-purple">•</span>
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                We do not publish fake fixed prices. Cost depends on the factors
                above — use our estimate tools or book a call for a scoped quote.
              </p>
            </div>
          </div>
        </section>

        {relatedSolutions.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-5 max-w-5xl">
              <h2 className="text-3xl font-bold text-theme-blue mb-8 text-center">
                Related solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedSolutions.map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/solutions/${solution.slug}`}
                    className="p-6 rounded-2xl border border-gray-100 hover:border-theme-purple/40 hover:shadow-lg transition-all bg-white"
                  >
                    <h3 className="text-lg font-bold text-theme-blue mb-2">
                      {solution.h1}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {solution.outcomeLine}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedBlog && (
          <section className="pb-16 bg-gray-50/70">
            <div className="container mx-auto px-5 max-w-5xl py-10">
              <h2 className="text-2xl font-bold text-theme-blue mb-4">
                Related insight
              </h2>
              <Link
                href={`/blog/${relatedBlog.slug}`}
                className="block p-6 rounded-2xl bg-white border border-gray-100 hover:border-theme-purple/40 transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-2">
                  Blog
                </p>
                <h3 className="text-xl font-bold text-theme-blue mb-2">
                  {relatedBlog.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {relatedBlog.excerpt}
                </p>
              </Link>
            </div>
          </section>
        )}

        {caseStudies.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-5 max-w-5xl">
              <h2 className="text-3xl font-bold text-theme-blue mb-8 text-center">
                Related project work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((project) => (
                  <Link
                    key={project.id}
                    href={`/portfolio/${project.id}`}
                    onClick={() =>
                      trackEvent(AnalyticsEvents.VIEW_CASE_STUDY, {
                        project_id: project.id,
                        source: page.slug,
                      })
                    }
                    className="p-6 rounded-2xl border border-gray-100 hover:border-theme-purple/40 hover:shadow-lg transition-all bg-white"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-2">
                      {project.type}
                    </p>
                    <h3 className="text-xl font-bold text-theme-blue mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {project.description ||
                        `${project.title} — ${project.type} project by TheTriFusion.`}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="pb-16 bg-gray-50/70">
            <div className="container mx-auto px-5 max-w-5xl py-14">
              <h2 className="text-3xl font-bold text-theme-blue mb-8 text-center">
                Related services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-theme-purple/40 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-theme-blue mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-16">
          <div className="container mx-auto px-5 max-w-5xl">
            <h2 className="text-3xl font-bold text-theme-blue mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq, index) => {
                const open = openFaqs.includes(index);
                return (
                  <div
                    key={faq.question}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-semibold text-theme-blue"
                    >
                      {faq.question}
                      <span className="text-theme-purple text-xl">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div className="px-6 pb-5 text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-28 md:pb-24">
          <div className="container mx-auto px-5 max-w-4xl text-center">
            <div className="p-10 rounded-3xl bg-theme-blue text-white">
              <h2 className="text-3xl font-bold mb-4">{page.cta}</h2>
              <p className="text-white/70 mb-8 font-light">
                One clear next step: get a scoped estimate or book a short
                discovery call with TheTriFusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={primaryHref}
                  onClick={trackPrimary}
                  className="px-8 py-4 bg-theme-purple rounded-full font-bold hover:scale-105 transition-transform"
                >
                  {page.primaryCtaLabel}
                </Link>
                <WhatsAppButton
                  message={page.whatsappMessage}
                  className="px-8 py-4 bg-green-500 rounded-full font-bold hover:bg-green-600 transition-colors"
                  label="WhatsApp"
                >
                  WhatsApp TriFusion
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
