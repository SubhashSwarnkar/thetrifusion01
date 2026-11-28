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
import { FOUNDER } from "data/founder";
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

function AnswerFirst({ block }) {
  if (!block?.text) return null;
  return (
    <section
      id={block.id || "quick-answer"}
      aria-label={block.heading}
      className="container mx-auto px-5 py-10 scroll-mt-28 max-w-3xl"
    >
      <div className="rounded-2xl border border-theme-purple/20 bg-light-theme-purple/20 p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-black text-theme-blue tracking-tight mb-3">
          {block.heading}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          <InlineText text={block.text} />
        </p>
        {block.facts?.length ? (
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {block.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl bg-white border border-gray-100 px-4 py-3"
              >
                <dt className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-theme-blue">
                  <InlineText text={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

function formatReviewedDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function FintechProductPage({ slug, relatedGuides = [] }) {
  const page = getFintechProductBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return <NotFoundPage />;

  const reviewedLabel = formatReviewedDate(page.contentUpdatedAt);
  const answerBlock = page.answerFirst || {
    heading: page.h1,
    text: page.answer,
    facts: page.facts,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />
      <main>
        <section className="relative pt-10 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-light-theme-purple via-white to-cyan-50 -z-10" />
          <div className="container mx-auto px-5 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-3">
              Fintech · Jaipur
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-theme-blue tracking-tight leading-[1.15] mb-4">
              {page.h1}
            </h1>
            {page.lead ? (
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                <InlineText text={page.lead} />
              </p>
            ) : null}
            <div className="flex flex-wrap gap-3">
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

        <AnswerFirst block={answerBlock} />

        {reviewedLabel ? (
          <section
            aria-label={`${FOUNDER.name}, ${FOUNDER.jobTitle || "CEO"}`}
            className="container mx-auto px-5 pb-6 max-w-3xl"
          >
            <p className="text-sm text-gray-500">
              Last reviewed {reviewedLabel} · reviewed by {FOUNDER.name}, CEO
            </p>
          </section>
        ) : null}

        <BrandTrustStrip />

        {page.comparison ? (
          <section className="container mx-auto px-5 max-w-3xl py-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-black text-theme-blue mb-3">
              {page.comparison.heading}
            </h2>
            {page.comparison.intro ? (
              <p className="text-gray-600 font-light leading-relaxed mb-5">
                <InlineText text={page.comparison.intro} />
              </p>
            ) : null}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-bold text-theme-blue">
                      {page.comparison.rowHeader || " "}
                    </th>
                    {page.comparison.columns.map((column) => (
                      <th
                        key={column}
                        className="py-3 pr-4 font-bold text-theme-blue"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row) => (
                    <tr key={row.label} className="border-b border-gray-100">
                      <th className="py-3 pr-4 align-top font-semibold text-theme-blue">
                        {row.label}
                      </th>
                      {row.cells.map((cell, idx) => (
                        <td
                          key={`${row.label}-${idx}`}
                          className="py-3 pr-4 align-top text-gray-600 font-light"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

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
                  <InlineText text={faq.answer} />
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
          <RelatedGuides
            guides={relatedGuides}
            heading="Guides for this service"
            kicker="Blog"
          />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
