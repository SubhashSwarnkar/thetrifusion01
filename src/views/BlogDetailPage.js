"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import { getBlogBySlug, blogPosts, blogCategories } from "data/blogData";
import { getSeoLandingBySlug } from "data/seoLandingPages";
import SEO from "components/common/SEO";
import { SITE_URL } from "lib/seoConfig";
import NotFoundPage from "./NotFoundPage";
import Image from "next/image";

const BLOG_SOLUTION_MAP = {
  webdev: [
    "web-development-company-india",
    "ecommerce-website-development",
  ],
  mobile: ["mobile-app-development-company", "ui-ux-design-agency"],
  ai: ["custom-software-development-company", "digital-marketing-agency"],
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

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
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
      <article className="container mx-auto px-5 py-20 max-w-4xl">
        {/* Header */}
        <Fade direction="up" triggerOnce>
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-theme-purple hover:underline mb-4 inline-block"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-light-theme-purple text-theme-purple rounded-full text-sm font-medium">
                {category?.name || post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-theme-blue font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-theme-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-theme-blue">{post.author}</p>
                <p className="text-sm text-gray-500">Published on {formatDate(post.date)}</p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Featured Image */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="relative mb-8 h-64 sm:h-96 w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </Fade>

        {/* Content */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
              {post.content || (
                <div>
                  <p className="mb-4">
                    This is a placeholder for the full blog post content. In a real implementation,
                    you would have the complete article content here with proper formatting,
                    images, code blocks, and other rich content.
                  </p>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h2 className="text-2xl font-bold text-theme-blue mt-8 mb-4">
                    Key Takeaways
                  </h2>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Important point number one</li>
                    <li>Important point number two</li>
                    <li>Important point number three</li>
                  </ul>
                  <p className="mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Fade>

        {/* Social Share */}
        <Fade direction="up" delay={400} triggerOnce>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-theme-blue mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Facebook
              </a>
            </div>
          </div>
        </Fade>

        {relatedSolutions.length > 0 && (
          <Fade direction="up" delay={450} triggerOnce>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-theme-blue mb-6">
                Related solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedSolutions.map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/solutions/${solution.slug}`}
                    className="p-5 rounded-2xl border border-gray-100 hover:border-theme-purple/40 transition-all"
                  >
                    <h4 className="text-lg font-bold text-theme-blue mb-2">
                      {solution.h1}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
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
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-theme-blue mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-5 rounded-2xl border border-gray-100 hover:border-theme-purple/40 transition-all"
                  >
                    <h4 className="text-lg font-bold text-theme-blue mb-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Fade>
        )}
      </article>
      <Footer />
    </>
  );
}

