"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import SEO from "components/common/SEO";
import {
  BlogAdBottom,
  BlogAdSenseAuto,
  BlogAdSidebar,
  BlogAdTop,
} from "components/BlogAdSense";
import { SITE_URL } from "lib/seoConfig";
import { WHATSAPP_NUMBER, COMPANY_PHONE_DISPLAY } from "data/companyInfo";
import { siteConfig } from "config/site";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import BlogAuthorBox from "components/BlogAuthorBox";
import BlogToc from "components/BlogToc";
import FounderByline from "components/FounderByline";

export default function BlogDetailPage({
  post,
  faqs = [],
  relatedServices = [],
  relatedPosts = [],
  languageSwitcher = null,
}) {
  const shareUrl = `${SITE_URL}/blog/${post?.slug || ""}`;
  const whatsappDigits = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post?.slug]);

  if (!post) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.imageUrl}
        type="article"
      />
      <Header />
      <Breadcrumbs />
      {languageSwitcher}
      <BlogAdSenseAuto />
      <main className="container mx-auto max-w-6xl px-5 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0">
            <div className="mb-8">
              <Link
                href="/blog"
                className="mb-4 inline-block text-theme-purple hover:underline"
              >
                ← Back to Blog
              </Link>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readTime ? (
                  <>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </>
                ) : null}
                {post.author ? (
                  <>
                    <span>•</span>
                    <span>{post.author}</span>
                  </>
                ) : null}
              </div>
              <h1 className="mb-4 text-3xl font-bold text-theme-blue sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mb-6 text-lg text-gray-600">{post.excerpt}</p>
              <FounderByline
                compact
                publishedLabel={`Published on ${formatDate(post.date)}`}
              />
            </div>

            <BlogAdTop />

            <BlogToc items={post.toc} variant="mobile" />

            <div className="prose prose-lg max-w-none">
              {post.content ? (
                <div
                  className="blog-html text-lg leading-relaxed text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <p className="text-gray-600">
                  This article has no body content yet.
                </p>
              )}
            </div>

            <BlogAdBottom />

            {faqs.length > 0 ? (
              <section className="mt-12 border-t border-gray-200 pt-8" id="faq">
                <h2 className="mb-6 text-2xl font-bold text-theme-blue">
                  Frequently asked questions
                </h2>
                <dl className="space-y-5">
                  {faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-gray-100 bg-white p-5"
                    >
                      <dt className="mb-2 text-lg font-bold text-theme-blue">
                        {faq.question}
                      </dt>
                      <dd className="text-gray-600">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            {post.sources?.length > 0 ? (
              <section className="mt-10 border-t border-gray-200 pt-8">
                <h2 className="mb-4 text-xl font-bold text-theme-blue">
                  Sources
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
                  {post.sources.map((source) => (
                    <li key={`${source.title}-${source.url}`}>
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-theme-purple hover:underline"
                        >
                          {source.title}
                        </a>
                      ) : (
                        source.title
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <BlogAuthorBox reviewDate={post.updatedAt || post.date} />

            <div
              id="blog-lead-cta"
              className="mt-12 rounded-2xl border border-theme-purple/20 bg-gradient-to-br from-light-theme-purple/40 to-white p-6 shadow-sm sm:p-8"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-theme-purple">
                Related service
              </p>
              <h2 className="mb-2 text-2xl font-bold text-theme-blue">
                {post.serviceTitle
                  ? `Need ${post.serviceTitle}?`
                  : "Want this built for your business?"}
              </h2>
              <p className="mb-5 max-w-2xl text-gray-600">
                Talk to TheTriFusion in Jaipur — WhatsApp, call, or a scoped
                quote. Hindi + English · GST invoicing.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
                    `Hi TriFusion, I read /blog/${post.slug} and want a quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
                      source: `blog-${post.slug}`,
                    })
                  }
                  className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3.5 font-bold text-white hover:bg-green-600"
                >
                  WhatsApp
                </a>
                <a
                  href={siteConfig.telHref}
                  className="inline-flex items-center justify-center rounded-full border border-theme-purple px-6 py-3.5 font-bold text-theme-purple"
                >
                  Call {COMPANY_PHONE_DISPLAY}
                </a>
                <Link
                  href="/discuss-project"
                  className="inline-flex items-center justify-center rounded-full bg-theme-purple px-6 py-3.5 font-bold text-white"
                >
                  Get a quote
                </Link>
                {post.serviceHref ? (
                  <Link
                    href={post.serviceHref}
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3.5 font-bold text-theme-blue"
                  >
                    View service
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-xl font-bold text-theme-blue">
                Share this article
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-white transition duration-200 hover:bg-blue-800"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
                >
                  Facebook
                </a>
              </div>
            </div>

            {relatedServices.length > 0 ? (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="mb-6 text-2xl font-bold text-theme-blue">
                  Related services
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="rounded-2xl border border-gray-100 p-5 transition-all hover:border-theme-purple/40"
                    >
                      <h4 className="mb-2 text-lg font-bold text-theme-blue">
                        {service.title}
                      </h4>
                      <p className="line-clamp-2 text-sm text-gray-500">
                        {service.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {relatedPosts.length > 0 ? (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="mb-6 text-2xl font-bold text-theme-blue">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="rounded-2xl border border-gray-100 p-5 transition-all hover:border-theme-purple/40"
                    >
                      <h4 className="mb-2 text-lg font-bold text-theme-blue">
                        {related.title}
                      </h4>
                      <p className="line-clamp-2 text-sm text-gray-500">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <BlogToc items={post.toc} variant="sidebar" />
              <BlogAdSidebar />
            </div>
          </aside>
        </div>

        <div className="mt-8 lg:hidden">
          <BlogAdSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
