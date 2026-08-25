"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import ServiceIcon from "components/ServiceIcon";
import { getServiceBySlug } from "data/servicesData";
import { getSolutionsForService } from "data/seoLandingPages";
import NotFoundPage from "./NotFoundPage";
import SEO from "components/common/SEO";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const relatedSolutions = getSolutionsForService(slug || "");

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

      <section className="relative pt-10 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-light-theme-purple/30 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-light-theme-purple/40 text-theme-purple text-xs font-bold uppercase tracking-[0.16em] mb-5">
                <ServiceIcon slug={service.slug} className="w-3.5 h-3.5" />
                {service.title}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-theme-blue tracking-tight leading-[1.12] mb-5">
                {service.bannerTitle || service.title}
              </h1>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-4 max-w-xl">
                {service.shortDescription}
              </p>
              <p className="text-sm text-theme-blue/80 font-medium mb-8">
                Built from Jaipur, Rajasthan — delivered remotely across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Start a project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-theme-purple border border-theme-purple/30 rounded-full font-bold hover:bg-light-theme-purple/20 transition-colors"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-gray-50">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.features?.length > 0 && (
        <section className="container mx-auto px-5 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.slice(0, 8).map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <span className="mt-0.5 text-theme-purple shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="font-semibold text-theme-blue text-sm leading-snug">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-gray-50/70 py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-black text-theme-blue mb-3">What we deliver</h2>
            <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
          </div>

          {service.services?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {service.services.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-theme-purple/25 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-theme-blue mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {service.technologiesList?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {service.technologiesList.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white border border-gray-100 text-theme-blue text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {service.process?.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <h2 className="text-3xl font-black text-theme-blue mb-10">How we work</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <li
                key={step.title}
                className="relative p-6 rounded-2xl border border-gray-100 bg-white"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-3 block">
                  Step {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-theme-blue mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {service.industries?.length > 0 && (
        <section className="bg-gray-50/70 py-16">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-black text-theme-blue mb-8">Industries we serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.industries.map((industry) => (
                <div
                  key={industry.title}
                  className="p-6 bg-white rounded-2xl border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-theme-blue mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-5">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedSolutions.length > 0 && (
        <section className="container mx-auto px-5 py-16">
          <h2 className="text-3xl font-black text-theme-blue mb-8">Related solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedSolutions.slice(0, 4).map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-theme-purple/40 hover:shadow-lg transition-all group"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-theme-purple mb-2">
                  {solution.primaryKeyword}
                </p>
                <h3 className="text-xl font-bold text-theme-blue mb-2 group-hover:text-theme-purple transition-colors">
                  {solution.h1}
                </h3>
                <p className="text-gray-500 text-sm font-light line-clamp-2">{solution.intro}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-5 pb-20">
        <div className="bg-theme-blue rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to start {service.title.toLowerCase()}?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto font-light">
            Share the problem, the users, and the deadline. We will come back with a scoped next step from Jaipur.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-theme-blue rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
