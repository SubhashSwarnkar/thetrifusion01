"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import ServiceIcon from "components/ServiceIcon";
import { getServiceBySlug, services } from "data/servicesData";
import { getSolutionsForService } from "data/seoLandingPages";
import { getBlogBySlug } from "data/blogData";
import { accentAt, accentForSlug } from "lib/themeAccents";
import NotFoundPage from "./NotFoundPage";
import SEO from "components/common/SEO";

function SectionHeading({ children, kicker }) {
  return (
    <div className="mb-8">
      {kicker ? (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-3xl font-black text-theme-blue">{children}</h2>
      <div className="mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
    </div>
  );
}

function AccentCards({ items }) {
  if (!items?.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((item, idx) => {
        const accent = accentAt(idx);
        return (
          <div
            key={item.title}
            className={`relative p-6 pl-7 rounded-2xl border overflow-hidden ${accent.card}`}
          >
            <span className={`absolute left-0 top-0 h-full w-1.5 ${accent.bar}`} />
            <h3 className="text-lg font-bold text-theme-blue mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const relatedSolutions = getSolutionsForService(slug || "");
  const otherServices = services.filter((item) => item.slug !== slug).slice(0, 6);
  const primary = accentForSlug(service?.slug);
  const relatedBlog = service?.relatedBlogSlug
    ? getBlogBySlug(service.relatedBlogSlug)
    : null;
  const [openFaqs, setOpenFaqs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${service.title} - TheTriFusion`}
        description={service.description}
        image={service.imageUrl}
      />
      <Header />
      <Breadcrumbs />

      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-theme-pink/15 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] mb-5 ${primary.chip} border`}>
                <ServiceIcon slug={service.slug} className="w-3.5 h-3.5" />
                {service.title}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-3">
                {service.bannerTitle || service.title}
              </h1>
              <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-4 max-w-xl">
                {service.bannerDescription || service.shortDescription}
              </p>
              <p className="text-sm text-theme-blue font-medium mb-4">
                Built from Jaipur, Rajasthan — delivered remotely across India.
              </p>
              {service.platforms?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1.5 rounded-full bg-theme-blue text-white text-xs font-bold uppercase tracking-wide"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg shadow-theme-purple/25 hover:bg-dark-theme-purple hover:scale-[1.02] transition-all"
                >
                  Start a project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-theme-purple border-2 border-theme-purple/40 rounded-full font-bold hover:bg-light-theme-purple transition-colors"
                >
                  View pricing
                </Link>
              </div>
              {service.features?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 4).map((feature, idx) => {
                    const accent = accentAt(idx);
                    return (
                      <span
                        key={feature}
                        className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${accent.chip}`}
                      >
                        {feature}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-theme-purple via-theme-cyan to-theme-pink opacity-50 blur-sm" />
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-50">
                <Image
                  src={service.imageUrl}
                  alt={
                    service.imageAlt ||
                    `${service.title} services in Jaipur by TheTriFusion`
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center ${primary.check}`}>
                <ServiceIcon slug={service.slug} className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.features?.length > 0 && (
        <section className="container mx-auto px-5 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.slice(0, 8).map((feature, idx) => {
              const accent = accentAt(idx);
              return (
                <div
                  key={feature}
                  className={`flex items-start gap-3 p-5 rounded-2xl border ${accent.card}`}
                >
                  <span className={`mt-0.5 w-7 h-7 rounded-full ${accent.check} flex items-center justify-center shrink-0`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="font-semibold text-theme-blue text-sm leading-snug">{feature}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/50 via-white to-cyan-50/80" />
        <div className="container mx-auto px-5 relative">
          <SectionHeading kicker="Scope">What we deliver</SectionHeading>
          <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-10 -mt-4">
            {service.description}
          </p>
          <AccentCards items={service.services} />
          {service.technologiesList?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10">
              {service.technologiesList.map((tech, idx) => {
                const accent = accentAt(idx);
                return (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${accent.chip}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {service.technologies?.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="Stack">Technologies we use</SectionHeading>
          <AccentCards items={service.technologies} />
        </section>
      )}

      {service.process?.length > 0 && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/10 via-white to-theme-pink/10" />
          <div className="container mx-auto px-5 relative">
            <SectionHeading kicker="Process">How we work</SectionHeading>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, idx) => {
                const accent = accentAt(idx);
                return (
                  <li
                    key={step.title}
                    className={`relative p-6 rounded-2xl border overflow-hidden ${accent.card}`}
                  >
                    <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl text-white text-sm font-black mb-4 ${accent.bar}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold text-theme-blue mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      {service.methodologies?.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="Approach">How we build</SectionHeading>
          <AccentCards items={service.methodologies} />
        </section>
      )}

      {service.industries?.length > 0 && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-light-theme-purple" />
          <div className="container mx-auto px-5 relative">
            <SectionHeading kicker="Industries">Industries we serve</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.industries.map((industry, idx) => {
                const accent = accentAt(idx);
                return (
                  <div
                    key={industry.title}
                    className={`rounded-2xl border overflow-hidden ${accent.card}`}
                  >
                    <div className={`px-5 py-3.5 flex items-center gap-3 ${accent.bar}`}>
                      <span className="w-8 h-8 rounded-lg bg-white/20 text-white text-xs font-black flex items-center justify-center shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="p-5 text-sm text-gray-600 font-light leading-relaxed line-clamp-5">
                      {industry.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {service.costFactors?.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="Scoping">What shapes the estimate</SectionHeading>
          <AccentCards items={service.costFactors} />
        </section>
      )}

      {service.caseStudy && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="Proof">Case study</SectionHeading>
          <div className="rounded-2xl border border-theme-purple/20 bg-light-theme-purple/20 p-6 md:p-8 max-w-3xl">
            <h3 className="text-xl font-bold text-theme-blue mb-3">
              {service.caseStudy.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-5">
              {service.caseStudy.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {service.caseStudy.href && (
                <Link
                  href={service.caseStudy.href}
                  className="inline-flex items-center text-theme-purple font-bold hover:underline"
                >
                  {service.caseStudy.hrefLabel || "Read more"} →
                </Link>
              )}
              {service.caseStudy.liveUrl && (
                <a
                  href={service.caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-theme-blue font-bold hover:underline"
                >
                  {service.caseStudy.liveLabel || service.caseStudy.liveUrl} →
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {relatedBlog && (
        <section className="container mx-auto px-5 pb-8">
          <SectionHeading kicker="Insights">From the blog</SectionHeading>
          <Link
            href={`/blog/${relatedBlog.slug}`}
            className="block max-w-3xl p-6 rounded-2xl border border-gray-100 hover:border-theme-purple/40 transition-all"
          >
            <h3 className="text-xl font-bold text-theme-blue mb-2">
              {relatedBlog.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">{relatedBlog.excerpt}</p>
          </Link>
        </section>
      )}

      {service.faqs?.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="FAQ">Common questions</SectionHeading>
          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq, index) => {
              const open = openFaqs.includes(index);
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full text-left px-5 py-4 font-bold text-theme-blue flex items-center justify-between gap-4"
                    onClick={() =>
                      setOpenFaqs((prev) =>
                        prev.includes(index)
                          ? prev.filter((i) => i !== index)
                          : [...prev, index]
                      )
                    }
                    aria-expanded={open}
                  >
                    {faq.question}
                    <span className="text-theme-purple text-xl leading-none">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <p className="px-5 pb-4 text-sm text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {relatedSolutions.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <SectionHeading kicker="Next">Related solutions</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedSolutions.slice(0, 4).map((solution, idx) => {
              const accent = accentAt(idx);
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className={`p-6 rounded-2xl border hover:shadow-lg transition-all group ${accent.card}`}
                >
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${accent.text}`}>
                    {solution.primaryKeyword}
                  </p>
                  <h3 className="text-xl font-bold text-theme-blue mb-2 group-hover:text-theme-purple transition-colors">
                    {solution.h1}
                  </h3>
                  <p className="text-gray-500 text-sm font-light line-clamp-2">{solution.intro}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {otherServices.length > 0 && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 to-white" />
          <div className="container mx-auto px-5 relative">
            <SectionHeading kicker="More">Other services</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((item, idx) => {
                const accent = accentAt(idx);
                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className={`group flex items-center gap-3 p-4 rounded-2xl border ${accent.card}`}
                  >
                    <span className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${accent.iconWrap}`}>
                      <ServiceIcon slug={item.slug} className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-bold text-theme-blue group-hover:text-theme-purple transition-colors">
                        {item.title}
                      </span>
                      <span className={`text-xs font-semibold ${accent.text}`}>Explore</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-5 pb-20">
        <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to start {service.title.toLowerCase()}?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-light">
            Share the problem, the users, and the deadline. We will come back with a scoped next step from Jaipur.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold hover:bg-light-theme-purple transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
