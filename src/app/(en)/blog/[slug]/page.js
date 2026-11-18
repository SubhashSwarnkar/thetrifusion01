import { notFound } from "next/navigation";
import Page from "views/BlogDetailPage";
import JsonLd from "components/JsonLd";
import {
  getMarkdownPostBySlug,
  getPublishedMarkdownPosts,
  getRelatedMarkdownPosts,
} from "lib/blogMarkdown";
import { isRetiredBlogSlug } from "data/retiredBlogSlugs";
import { getServiceBySlug } from "data/servicesData";
import { buildMetadata } from "lib/seoConfig";
import { articleSchema, breadcrumbSchema, faqSchema } from "lib/schema";
import { extractBlogFaqs } from "lib/blogFaqs";

export function generateStaticParams() {
  return getPublishedMarkdownPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = true;

export function generateMetadata({ params }) {
  if (isRetiredBlogSlug(params.slug)) {
    return {
      title: "Gone | TheTriFusion",
      robots: { index: false, follow: false },
    };
  }

  const post = getMarkdownPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found | TheTriFusion Blog",
      robots: { index: false, follow: true },
    };
  }

  const path = `/blog/${post.slug}`;
  return buildMetadata({
    title: `${post.title} | TheTriFusion`,
    description: post.excerpt,
    path,
    type: "article",
    image: post.imageUrl,
    publishedTime: post.date,
    authors: post.author ? [post.author] : undefined,
    noIndex: false,
  });
}

export default function RoutePage({ params }) {
  if (isRetiredBlogSlug(params.slug)) {
    notFound();
  }

  const post = getMarkdownPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const faqs =
    post.faqs?.length > 0 ? post.faqs : extractBlogFaqs(post.content);
  const relatedPosts = getRelatedMarkdownPosts(post.slug, 4);
  const relatedServices = [];
  if (post.targetService) {
    const service = getServiceBySlug(post.targetService);
    if (service) relatedServices.push(service);
  }

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      {faqs.length > 0 ? <JsonLd data={faqSchema(faqs)} /> : null}
      <Page
        post={post}
        faqs={faqs}
        relatedServices={relatedServices}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
