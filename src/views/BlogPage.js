"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import SEO from "components/common/SEO";

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage({ posts = [] }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Tech, Software & AI Insights | TheTriFusion"
        description="Practical tech, software, and AI insights from TheTriFusion in Jaipur."
      />
      <Header />
      <Breadcrumbs />
      <main className="container mx-auto px-5 py-20">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-theme-blue sm:text-5xl">
            Tech, Software &amp; AI Insights
          </h1>
          <p className="text-lg font-light text-gray-500">
            Fresh guides from TheTriFusion in Jaipur — software delivery,
            product choices, and AI that Indian buyers can act on. One new post
            each day.
          </p>
        </header>

        {posts.length > 0 ? (
          <section aria-label="Blog posts">
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-theme-purple/40">
                    <div className="mb-3 text-sm text-gray-500">
                      {formatDate(post.date)}
                      {post.readTime ? ` · ${post.readTime}` : ""}
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-theme-blue sm:text-2xl">
                      <Link
                        prefetch={false}
                        href={`/blog/${post.slug}`}
                        className="hover:text-theme-purple"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mb-5 flex-grow text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                      {post.serviceHref ? (
                        <Link
                          prefetch={false}
                          href={post.serviceHref}
                          className="text-sm font-semibold text-theme-purple hover:underline"
                        >
                          {post.serviceTitle || "Related service"} →
                        </Link>
                      ) : (
                        <span />
                      )}
                      <Link
                        prefetch={false}
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-theme-blue hover:text-theme-purple"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-theme-purple/30 bg-light-theme-purple/20 px-8 py-16 text-center">
            <p className="mb-3 text-2xl font-bold text-theme-blue">
              New posts start here
            </p>
            <p className="mb-6 text-gray-600">
              We are publishing a clean slate of tech, software, and AI insights
              — one high-quality post per day. Check back soon, or talk to us
              about your project now.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                prefetch={false}
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-theme-purple px-6 py-3 font-bold text-white"
              >
                Browse services
              </Link>
              <Link
                prefetch={false}
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-theme-purple px-6 py-3 font-bold text-theme-purple"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
