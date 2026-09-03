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

function SectionHeading({ children, kicker, id }) {
  return (
    <div className="mb-8" id={id}>
      {kicker ? (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-3">
          {kicker}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-black text-theme-blue tracking-tight">{children}</h2>
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

const WHY_CHOOSE_POINTS = [
  {
    title: "100% In-House Jaipur Engineering",
    description: "No anonymous subcontractors or black-box freelancers. Direct Slack/WhatsApp access to the developers writing your code.",
    icon: "🏢",
  },
  {
    title: "100% IP & Source Code Ownership",
    description: "Full repository handover, clear documentation, and database schemas with zero vendor lock-in from day one.",
    icon: "🔐",
  },
  {
    title: "Weekly Working Demos",
    description: "We ship visible milestone builds every Friday. You test functioning software on staging, not slide decks.",
    icon: "🚀",
  },
  {
    title: "30-Day Free Post-Launch Warranty",
    description: "Every deployment includes a 30-day bug-fix guarantee, monitoring, and go-live assistance for store & server setups.",
    icon: "🛡️",
  },
];

const STANDARD_DELIVERABLES = [
  "Complete clean-architecture source code repo",
  "Production-ready deployment & CI/CD pipeline setup",
  "Full interactive Figma UI design kit & assets",
  "REST / GraphQL API specifications & documentation",
  "Automated testing & security audit report",
  "30-day post-launch support & stability warranty",
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const relatedSolutions = getSolutionsForService(slug || "");
  const otherServices = services.filter((item) => item.slug !== slug).slice(0, 6);
  const primary = accentForSlug(service?.slug);
  const relatedBlog = service?.relatedBlogSlug
    ? getBlogBySlug(service.relatedBlogSlug)
    : null;
  const [openFaqs, setOpenFaqs] = useState([0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <NotFoundPage />;
  }

  const startingPrice = service.startingFrom || service.pricing?.basic;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${service.title} - TheTriFusion`}
        description={service.description}
        image={service.imageUrl}
      />
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section id="overview" className="relative pt-8 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-theme-pink/15 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] mb-5 ${primary.chip} border`}>
                <ServiceIcon slug={service.slug} className="w-3.5 h-3.5" />
                {service.title}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-4">
                {service.bannerTitle || service.title}
              </h1>
              <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-4 max-w-xl">
                {service.bannerDescription || service.shortDescription}
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-gray-200 text-xs text-theme-blue font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {service.locationLine ||
                  "Built from Jaipur, Rajasthan — delivered remotely across India & Globally."}
              </div>

              {service.platforms?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1.5 rounded-full bg-theme-blue text-white text-xs font-bold uppercase tracking-wide shadow-sm"
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
                  Get Scoped Estimate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-theme-purple border-2 border-theme-purple/40 rounded-full font-bold hover:bg-light-theme-purple transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>

              {service.features?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 5).map((feature, idx) => {
                    const accent = accentAt(idx);
                    return (
                      <span
                        key={feature}
                        className={`px-3 py-1 rounded-full border text-xs font-semibold ${accent.chip}`}
                      >
                        ✓ {feature}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-theme-purple via-theme-cyan to-theme-pink opacity-50 blur-sm" />
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-50">
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
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center ${primary.check}`}>
                <ServiceIcon slug={service.slug} className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Page Quick Jump Navigation */}
      <nav aria-label="Page navigation" className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-y border-gray-100 hidden md:block">
        <div className="container mx-auto px-5 py-3 flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-500 overflow-x-auto">
          <a href="#deliverables" className="hover:text-theme-purple whitespace-nowrap transition-colors">Deliverables</a>
          <a href="#stack" className="hover:text-theme-purple whitespace-nowrap transition-colors">Tech Stack</a>
          <a href="#process" className="hover:text-theme-purple whitespace-nowrap transition-colors">Process</a>
          <a href="#why-us" className="hover:text-theme-purple whitespace-nowrap transition-colors">Why TheTriFusion</a>
          {startingPrice ? (
            <a href="#pricing" className="hover:text-theme-purple whitespace-nowrap transition-colors">Pricing & Timeline</a>
          ) : null}
          {service.industries?.length ? (
            <a href="#products" className="hover:text-theme-purple whitespace-nowrap transition-colors">Products</a>
          ) : null}
          <a href="#faq" className="hover:text-theme-purple whitespace-nowrap transition-colors">FAQs</a>
          <a href="#related" className="hover:text-theme-purple whitespace-nowrap transition-colors">Related</a>
          <Link href="/contact" className="ml-auto text-theme-purple font-black hover:underline whitespace-nowrap">
            Start Project →
          </Link>
        </div>
      </nav>

      {/* Scope & Capabilities Section */}
      <section id="deliverables" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/50 via-white to-cyan-50/80" />
        <div className="container mx-auto px-5 relative">
          <SectionHeading kicker={service.scopeKicker || "Scope"}>
            {service.scopeHeading || "What we deliver"}
          </SectionHeading>
          <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-10 -mt-4 text-base sm:text-lg">
            {service.description}
          </p>
          <AccentCards items={service.services} />
          
          {service.technologiesList?.length > 0 && (
            <div className="mt-10 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Core Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
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
            </div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies?.length > 0 && (
        <section id="stack" className="container mx-auto px-5 py-16 border-t border-gray-100">
          <SectionHeading kicker="Tech Stack">Technologies & Frameworks We Use</SectionHeading>
          <AccentCards items={service.technologies} />
        </section>
      )}

      {/* Deliverables Checklist Box */}
      <section className="container mx-auto px-5 py-8">
        <div className="rounded-2xl border border-theme-purple/20 bg-gradient-to-br from-light-theme-purple/30 via-white to-cyan-50/40 p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-2 block">
                Standard Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-theme-blue">
                What You Receive With Every {service.title} Project
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-theme-blue text-white rounded-full font-bold text-sm hover:bg-theme-purple transition-all shadow-md shrink-0"
            >
              Discuss Your Project
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STANDARD_DELIVERABLES.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm font-semibold text-theme-blue">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {service.process?.length > 0 && (
        <section id="process" className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/10 via-white to-theme-pink/10" />
          <div className="container mx-auto px-5 relative">
            <SectionHeading kicker="Process">
              {service.processHeading || "How We Build & Ship"}
            </SectionHeading>
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

      {/* Why Choose TheTriFusion Section */}
      <section id="why-us" className="container mx-auto px-5 py-16 border-t border-gray-100">
        <SectionHeading kicker="Advantage">
          Why Choose TheTriFusion For {service.title}
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_POINTS.map((point, idx) => {
            const accent = accentAt(idx);
            return (
              <div
                key={point.title}
                className={`p-6 rounded-2xl border ${accent.card} flex flex-col justify-between`}
              >
                <div>
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="text-lg font-bold text-theme-blue mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industries Section */}
      {service.industries?.length > 0 && (
        <section id="products" className="relative py-16 overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-light-theme-purple" />
          <div className="container mx-auto px-5 relative">
            <SectionHeading kicker={service.industriesKicker || "Industries"}>
              {service.industriesHeading || "Industries We Specialize In"}
            </SectionHeading>
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

      {/* Pricing & Timeline Estimates Box */}
      <section id="pricing" className="container mx-auto px-5 py-16 border-t border-gray-100">
        <SectionHeading kicker="Investment">
          Transparent Estimates & Scoping
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="p-7 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                Starter MVP Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-theme-blue mb-2">
                {startingPrice ? `₹${Number(startingPrice).toLocaleString("en-IN")}` : "Custom Scope"}
                <span className="text-sm font-normal text-gray-500 ml-1">starting</span>
              </div>
              <p className="text-sm text-gray-600 font-light mb-6">
                {service.startingFromNote || "Includes discovery, UI design, core MVP build, and initial launch deployment."}
              </p>
            </div>
            <Link
              href="/pricing"
              className="w-full text-center py-3 rounded-xl border border-theme-purple text-theme-purple font-bold text-sm hover:bg-light-theme-purple transition-all"
            >
              See All Pricing Tiers →
            </Link>
          </div>

          <div className="p-7 rounded-2xl border border-theme-purple/30 bg-light-theme-purple/20 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-theme-purple block mb-2">
                Typical Delivery Timeline
              </span>
              <div className="text-3xl sm:text-4xl font-black text-theme-blue mb-2">
                6 – 12 Weeks
              </div>
              <p className="text-sm text-gray-600 font-light mb-6">
                Phased weekly sprints with continuous staging access. Focused MVPs launch in 6–8 weeks; complex workflows in 10–12 weeks.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full text-center py-3 rounded-xl bg-theme-purple text-white font-bold text-sm hover:bg-dark-theme-purple transition-all shadow-md"
            >
              Request Scoped Timeline →
            </Link>
          </div>

          <div className="p-7 rounded-2xl border border-theme-cyan/30 bg-cyan-50/50 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-theme-cyan block mb-2">
                No Obligation Review
              </span>
              <div className="text-2xl sm:text-3xl font-black text-theme-blue mb-2">
                Written Estimate
              </div>
              <p className="text-sm text-gray-600 font-light mb-6">
                Share your requirements, mockups, or workflow notes. We return a written scope of work within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full text-center py-3 rounded-xl bg-theme-blue text-white font-bold text-sm hover:bg-theme-purple transition-all shadow-md"
            >
              Get Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study / Proof Section */}
      {service.caseStudy && (
        <section className="container mx-auto px-5 py-12">
          <SectionHeading kicker="Proof">Case Study & Proven Results</SectionHeading>
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

      {/* Related Blog Article */}
      {relatedBlog && (
        <section className="container mx-auto px-5 pb-8">
          <SectionHeading kicker="Insights">Technical Guides & Insights</SectionHeading>
          <Link
            href={`/blog/${relatedBlog.slug}`}
            className="block max-w-3xl p-6 rounded-2xl border border-gray-100 hover:border-theme-purple/40 transition-all shadow-xs"
          >
            <h3 className="text-xl font-bold text-theme-blue mb-2">
              {relatedBlog.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">{relatedBlog.excerpt}</p>
          </Link>
        </section>
      )}

      {/* FAQs Section (Targeting Google PAA) */}
      {service.faqs?.length > 0 && (
        <section id="faq" className="container mx-auto px-5 py-16 border-t border-gray-100">
          <SectionHeading kicker="FAQ">
            {service.serviceType
              ? `Frequently Asked Questions About ${service.serviceType}`
              : `Frequently Asked Questions About ${service.title}`}
          </SectionHeading>
          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq, index) => {
              const open = openFaqs.includes(index);
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-100 overflow-hidden shadow-xs"
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

      {/* Related Solutions Cross-Linking */}
      {relatedSolutions.length > 0 && (
        <section id="related" className="container mx-auto px-5 py-16 border-t border-gray-100">
          <SectionHeading kicker="Next">Related Solutions & Use Cases</SectionHeading>
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

      {/* Other Services Cross-Link Directory */}
      {otherServices.length > 0 && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-light-theme-purple/40 to-white" />
          <div className="container mx-auto px-5 relative">
            <SectionHeading kicker="Directory">Explore Other Capabilities</SectionHeading>
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
                      <span className={`text-xs font-semibold ${accent.text}`}>Explore Service →</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* High Converting Bottom CTA Banner */}
      <section className="container mx-auto px-5 pb-20">
        <div className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {service.ctaHeading || `Ready to start ${service.title.toLowerCase()}?`}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto font-light text-base sm:text-lg">
            {service.ctaText ||
              "Share the problem, the users, and the deadline. We will come back with a scoped next step from Jaipur."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold hover:bg-light-theme-purple transition-colors shadow-lg"
            >
              Talk to Jaipur Engineering Team
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold border border-white/30 transition-colors"
            >
              Check Pricing Calculator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
