"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import {
  getBlogBySlug,
  getPublishedBlogPosts,
  blogCategories,
  isArchivedPost,
} from "data/blogData";
import { getSeoLandingBySlug } from "data/seoLandingPages";
import { getServiceBySlug } from "data/servicesData";
import SEO from "components/common/SEO";
import {
  BlogAdBottom,
  BlogAdSenseAuto,
  BlogAdSidebar,
  BlogAdTop,
} from "components/BlogAdSense";
import { SITE_URL } from "lib/seoConfig";
import NotFoundPage from "./NotFoundPage";
import { WHATSAPP_NUMBER } from "data/companyInfo";
import { trackEvent, AnalyticsEvents } from "utils/analytics";

const BLOG_SOLUTION_MAP = {
  webdev: [
    "web-development-company-india",
    "ecommerce-website-development",
  ],
  mobile: ["mobile-app-development-company", "ui-ux-design-agency"],
  casestudy: [
    "ecommerce-website-development",
    "mobile-app-development-company",
  ],
  mlm: [
    "crm-erp-software-development",
    "custom-software-development-company",
  ],
  fintech: [
    "custom-software-development-company",
    "mobile-app-development-company",
  ],
  default: [
    "best-software-company-india",
    "custom-software-development-company",
  ],
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const shareUrl = `${SITE_URL}/blog/${slug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFoundPage />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const category = blogCategories.find((cat) => cat.id === post.category);
  const relatedSolutions = (
    BLOG_SOLUTION_MAP[post.category] || BLOG_SOLUTION_MAP.default
  )
    .map((s) => getSeoLandingBySlug(s))
    .filter(Boolean)
    .slice(0, 2);

  const relatedServices = (post.relatedServiceSlugs || [])
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean)
    .slice(0, 2);

  const relatedPosts = getPublishedBlogPosts()
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.category === post.category &&
        !isArchivedPost(p.slug)
    )
    .slice(0, 2);

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
      <BlogAdSenseAuto />
      <div className="container mx-auto max-w-6xl px-5 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            {/* Header */}
            <Fade direction="up" triggerOnce>
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="mb-4 inline-block text-theme-purple hover:underline"
                >
                  ← Back to Blog
                </Link>
                <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="rounded-full bg-light-theme-purple px-3 py-1 text-sm font-medium text-theme-purple">
                    {category?.name || post.category}
                  </span>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-theme-blue sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>
                <p className="mb-6 text-lg text-gray-600">{post.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-theme-purple text-lg font-bold text-white">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-theme-blue">{post.author}</p>
                    <p className="text-sm text-gray-500">
                      Published on {formatDate(post.date)}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <BlogAdTop />

            {/* Content */}
            <Fade direction="up" delay={200} triggerOnce>
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
            </Fade>

            <BlogAdBottom />

            {/* Lead CTA — convert organic readers */}
            <Fade direction="up" delay={350} triggerOnce>
              <div
                id="blog-lead-cta"
                className="mt-12 rounded-2xl border border-theme-purple/20 bg-gradient-to-br from-light-theme-purple/40 to-white p-6 shadow-sm sm:p-8"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-theme-purple">
                  Next step
                </p>
                <h2 className="mb-2 text-2xl font-bold text-theme-blue">
                  Want this built for your business?
                </h2>
                <p className="mb-5 max-w-2xl text-gray-600">
                  Jaipur team · Hindi + English · GST invoicing. Ecommerce live
                  in 48h packages from ₹25,000, or a scoped custom website /
                  app / AI build.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
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
                    WhatsApp for quote
                  </a>
                  <Link
                    href="/discuss-project"
                    className="inline-flex items-center justify-center rounded-full bg-theme-purple px-6 py-3.5 font-bold text-white"
                  >
                    Discuss project
                  </Link>
                  <Link
                    href="/ecommerce-development"
                    className="inline-flex items-center justify-center rounded-full border border-theme-purple px-6 py-3.5 font-bold text-theme-purple"
                  >
                    Ecommerce ₹25k offer
                  </Link>
                </div>
              </div>
            </Fade>

            {/* Social Share */}
            <Fade direction="up" delay={400} triggerOnce>
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 text-xl font-bold text-theme-blue">
                  Share this article
                </h3>
                <div className="flex gap-4">
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
            </Fade>

            {relatedServices.length > 0 && (
              <Fade direction="up" delay={430} triggerOnce>
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
              </Fade>
            )}

            {relatedSolutions.length > 0 && (
              <Fade direction="up" delay={450} triggerOnce>
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h3 className="mb-6 text-2xl font-bold text-theme-blue">
                    Related solutions
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {relatedSolutions.map((solution) => (
                      <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        className="rounded-2xl border border-gray-100 p-5 transition-all hover:border-theme-purple/40"
                      >
                        <h4 className="mb-2 text-lg font-bold text-theme-blue">
                          {solution.h1}
                        </h4>
                        <p className="line-clamp-2 text-sm text-gray-500">
                          {solution.outcomeLine}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </Fade>
            )}

            {relatedPosts.length > 0 && (
              <Fade direction="up" delay={500} triggerOnce>
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
              </Fade>
            )}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <BlogAdSidebar />
            </div>
          </aside>
        </div>

        {/* Mobile: sidebar ad under content */}
        <div className="mt-8 lg:hidden">
          <BlogAdSidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}

