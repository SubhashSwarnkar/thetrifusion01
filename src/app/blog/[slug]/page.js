import Page from "views/BlogDetailPage";
import JsonLd from "components/JsonLd";
import { blogPosts, getBlogBySlug, ARCHIVE_NOINDEX_SLUGS } from "data/blogData";
import { buildMetadata } from "lib/seoConfig";
import { articleSchema, breadcrumbSchema, faqSchema } from "lib/schema";
import { extractBlogFaqs } from "lib/blogFaqs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found | TheTriFusion Blog",
      description: "The requested blog article could not be found.",
      path: `/blog/${params.slug}`,
      noIndex: true,
    });
  }

  // Prefer self-hosted unique cards (SVG under /images/blog-og) so Google
  // does not cluster us with unrelated sites sharing Unsplash stock URLs.
  // opengraph-image PNG route remains as a social-card enhancer.
  const selfHostedOg = post.imageUrl?.startsWith("/images/blog-og/")
    ? post.imageUrl
    : `/images/blog-og/${post.slug}.svg`;
  return buildMetadata({
    title: post.metaTitle || `${post.title} | TheTriFusion`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: selfHostedOg,
    publishedTime: post.date,
    authors: post.author ? [post.author] : undefined,
    noIndex: ARCHIVE_NOINDEX_SLUGS.has(post.slug),
  });
}

export default function RoutePage({ params }) {
  const post = getBlogBySlug(params.slug);

  return (
    <>
      {post ? (
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
        </>
      ) : null}
      <Page />
    </>
  );
}
