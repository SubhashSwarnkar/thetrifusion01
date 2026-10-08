import { notFound } from "next/navigation";
import Page from "views/BlogDetailPage";
import JsonLd from "components/JsonLd";
import LanguageSwitcher from "components/LanguageSwitcher";
import {
  blogPosts,
  getBlogBySlug,
  ARCHIVE_NOINDEX_SLUGS,
  isSoftNoindexBlogPost,
} from "data/blogData";
import { cleanBlogHtml } from "lib/cleanBlogHtml";
import { hreflangLanguagesForPath } from "data/i18n/routes";
import { buildMetadata } from "lib/seoConfig";
import { articleSchema, breadcrumbSchema, faqSchema, eventSchema } from "lib/schema";
import { extractBlogFaqs } from "lib/blogFaqs";
import { getBlogArticleView } from "lib/blogArticleProps";
import EventWorldTimes, {
  eventHasWorldTimes,
  withEventWorldTimeFaq,
} from "components/blog/EventWorldTimes";

export function generateStaticParams() {
  // Archived slugs 301 to /blog. Off-topic noindex slugs stay and are still built.
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

  // Unique 1200×630 PNG from src/app/blog/[slug]/opengraph-image.jsx.
  // Hero still uses /images/blog-og/<slug>.svg.
  const selfHostedOg = `/blog/${post.slug}/opengraph-image`;
  const path = `/blog/${post.slug}`;
  const languages = hreflangLanguagesForPath(path);
  return buildMetadata({
    title: post.metaTitle || `${post.title} | TheTriFusion`,
    description: post.excerpt,
    path,
    type: "article",
    image: selfHostedOg,
    publishedTime: post.date,
    authors: post.author ? [post.author] : undefined,
    noIndex: isSoftNoindexBlogPost(post),
    ...(languages ? { languages } : {}),
  });
}

export default function RoutePage({ params }) {
  const storedPost = getBlogBySlug(params.slug);

  if (!storedPost || ARCHIVE_NOINDEX_SLUGS.has(params.slug)) {
    notFound();
  }

  const post = { ...storedPost, content: cleanBlogHtml(storedPost.content) };

  const faqs = withEventWorldTimeFaq(post.event, extractBlogFaqs(post.content));

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
      {eventSchema(post) ? <JsonLd data={eventSchema(post)} /> : null}
      <Page
        {...getBlogArticleView(post)}
        languageSwitcher={
          hreflangLanguagesForPath(`/blog/${post.slug}`) ? (
            <LanguageSwitcher path={`/blog/${post.slug}`} current="en" />
          ) : null
        }
        worldTimes={
          eventHasWorldTimes(post.event) ? (
            <EventWorldTimes event={post.event} />
          ) : null
        }
      />
    </>
  );
}
