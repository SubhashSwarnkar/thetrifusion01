import { notFound } from "next/navigation";
import Page from "views/BlogDetailPage";
import JsonLd from "components/JsonLd";
import { blogPosts, getBlogBySlug, ARCHIVE_NOINDEX_SLUGS } from "data/blogData";
import { buildMetadata } from "lib/seoConfig";
import { articleSchema, breadcrumbSchema, faqSchema, eventSchema } from "lib/schema";
import { extractBlogFaqs } from "lib/blogFaqs";
import { getBlogArticleView } from "lib/blogArticleProps";

export function generateStaticParams() {
  // Exclude archived slugs (they 301 to /blog via next.config)
  return blogPosts
    .filter((post) => !ARCHIVE_NOINDEX_SLUGS.has(post.slug))
    .map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);

  if (!post || ARCHIVE_NOINDEX_SLUGS.has(params.slug)) {
    return {
      title: "Article Not Found | TheTriFusion Blog",
      robots: { index: false, follow: true },
    };
  }

  // Prefer self-hosted unique PNG OG cards (edge opengraph-image). Hero still
  // uses /images/blog-og/<slug>.svg. Avoids Unsplash stock URL clustering.
  const selfHostedOg = `/blog/${post.slug}/opengraph-image`;
  return buildMetadata({
    title: post.metaTitle || `${post.title} | TheTriFusion`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: selfHostedOg,
    publishedTime: post.date,
    authors: post.author ? [post.author] : undefined,
    noIndex: false,
  });
}

export default function RoutePage({ params }) {
  const post = getBlogBySlug(params.slug);

  if (!post || ARCHIVE_NOINDEX_SLUGS.has(params.slug)) {
    notFound();
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
      {extractBlogFaqs(post.content).length > 0 ? (
        <JsonLd data={faqSchema(extractBlogFaqs(post.content))} />
      ) : null}
      {eventSchema(post) ? <JsonLd data={eventSchema(post)} /> : null}
      <Page {...getBlogArticleView(post)} />
    </>
  );
}
