"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import BrandTrustStrip from "components/BrandTrustStrip";
import RelatedGuides from "components/RelatedGuides";
import { getFintechProductBySlug } from "data/fintechProductPages";
import { canonicalInternalHref } from "lib/internalLinks";
import NotFoundPage from "./NotFoundPage";

function InlineText({ text }) {
  if (!text) return null;
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes = [];
  let last = 0;
  let match;
  let key = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <Link
        key={key++}
        href={canonicalInternalHref(match[2])}
        className="font-semibold text-theme-purple hover:underline"
      >
        {match[1]}
      </Link>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function FintechProductPage({ slug, relatedGuides = [] }) {
  const page = getFintechProductBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return <NotFoundPage />;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />
      <main>
        <section className="relative pt-10 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
          <div className="container mx-auto px-5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-3">
              Fintech · Jaipur
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-theme-blue tracking-tight leading-[1.15] mb-4">
              {page.h1}
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              {page.answer}
            </p>
            <dl className="rounded-2xl border border-theme-purple/15 bg-white p-5 grid gap-2 text-sm">
              {page.facts.map((fact) => (
                <div key={fact.label} className="sm:flex sm:gap-3">
                  <dt className="font-semibold text-theme-blue sm:w-36">
                    {fact.label}
                  </dt>
                  <dd className="text-gray-600">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex px-7 py-3.5 bg-theme-purple text-white rounded-full font-bold"
              >
                Get a scoped estimate
              </Link>
              <Link
                href="/services/fintech-app-development"
                className="inline-flex px-7 py-3.5 border-2 border-theme-purple/40 text-theme-purple rounded-full font-bold"
              >
                All fintech modules
              </Link>
            </div>
          </div>
        </section>

        <BrandTrustStrip />

        {page.sections.map((section) => (
          <section
            key={section.heading}
            className="container mx-auto px-5 max-w-3xl py-10 border-t border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-black text-theme-blue mb-4">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-gray-600 font-light leading-relaxed mb-3"
              >
                <InlineText text={paragraph} />
              </p>
            ))}
          </section>
        ))}

        <section className="container mx-auto px-5 max-w-3xl py-10 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-black text-theme-blue mb-6">
            FAQ
          </h2>
          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="cursor-pointer list-none py-5 flex justify-between gap-4 font-semibold text-theme-blue [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-bold">{faq.question}</h3>
                  <span aria-hidden="true" className="text-theme-purple text-xl">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm text-gray-600 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-5 max-w-3xl py-12 border-t border-gray-100">
          <h2 className="text-2xl font-black text-theme-blue mb-4">
            Related services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={canonicalInternalHref(item.href)}
                  className="block h-full rounded-2xl border border-gray-100 p-5 hover:border-theme-purple/40"
                >
                  <h3 className="font-bold text-theme-blue mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {relatedGuides.length > 0 ? (
          <RelatedGuides guides={relatedGuides} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
