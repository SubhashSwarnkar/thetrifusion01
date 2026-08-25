"use client";

import React from "react";
import Link from "next/link";
import { services } from "data/servicesData";
import ServiceIcon from "components/ServiceIcon";
import { accentAt } from "lib/themeAccents";

export default function Service({ data }) {
  const cards = data.map((item) => {
    const serviceData =
      services.find((s) => s.slug === item.slug) ||
      services.find((s) => s.title.toLowerCase() === item.title.toLowerCase());

    return {
      title: item.title,
      slug: item.slug || serviceData?.slug,
      description: serviceData?.shortDescription,
    };
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-light-theme-purple/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-theme-cyan/12 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/40 text-theme-purple text-xs font-bold uppercase tracking-[0.18em] mb-5">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-theme-blue font-black tracking-tight leading-[1.12] mb-4">
              Innovation-driven{" "}
              <span className="text-gradient">digital services</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Software, websites, apps, cloud, and growth work from Jaipur —
              scoped for how your team actually operates.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center self-start lg:self-auto px-5 py-2.5 rounded-full border border-gray-200 text-theme-blue font-semibold text-sm hover:border-theme-purple hover:text-theme-purple transition-colors"
          >
            View all services
            <svg
              className="w-4 h-4 ml-2"
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
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((item, idx) => {
            const accent = accentAt(idx);
            return (
            <Link
              key={item.title}
              href={item.slug ? `/services/${item.slug}` : "/services"}
              className="group block h-full"
            >
              <article className={`relative h-full rounded-2xl border p-6 overflow-hidden hover:shadow-lg transition-all duration-300 ${accent.card}`}>
                <span className={`absolute left-0 top-0 h-full w-1.5 ${accent.bar}`} />
                <div className={`w-11 h-11 mb-5 rounded-xl flex items-center justify-center ${accent.iconWrap} group-hover:bg-theme-purple group-hover:text-white transition-colors`}>
                  <ServiceIcon slug={item.slug} className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-theme-blue mb-2 group-hover:text-theme-purple transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 line-clamp-3">
                  {item.description ||
                    "Practical delivery for websites, apps, and custom software."}
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
              </article>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
