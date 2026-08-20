import Page from "views/BlogDetailPage";
import JsonLd from "components/JsonLd";
import { blogPosts, getBlogBySlug } from "data/blogData";
import { buildMetadata } from "lib/seoConfig";
import { articleSchema, breadcrumbSchema } from "lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found | TheTriFusion Blog",
      description: "The requested blog article could not be found.",
      keywords: "blog, TheTriFusion",
      path: `/blog/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${post.title} | TheTriFusion Blog`,
    description: post.excerpt,
    keywords: `${post.title}, ${post.category}, blog, technology, TheTriFusion`,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.imageUrl,
    publishedTime: post.date,
    authors: post.author ? [post.author] : undefined,
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
        </>
      ) : null}
      <Page />
    </>
  );
}
