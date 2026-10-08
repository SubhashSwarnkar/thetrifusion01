import { notFound } from "next/navigation";
import JsonLd from "components/JsonLd";
import TranslatedDocument from "components/TranslatedDocument";
import { getBlogBySlug, isSoftNoindexBlogPost } from "data/blogData";
import { getLocale } from "data/i18n";
import {
  hreflangLanguagesForPath,
  localizedPath,
  TRANSLATED_BLOG_SLUGS,
} from "data/i18n/routes";
import { extractBlogFaqs } from "lib/blogFaqs";
import { articleSchema, breadcrumbSchema, faqSchema } from "lib/schema";
import { buildMetadata } from "lib/seoConfig";
import { cleanBlogHtml } from "lib/cleanBlogHtml";

export function generateStaticParams() {
  return TRANSLATED_BLOG_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const locale = getLocale(params.lang);
  const post = locale?.posts?.[params.slug];
  const source = getBlogBySlug(params.slug);
  if (!locale || !post || !source) {
    return {
      title: "Not found",
      robots: { index: false, follow: true },
    };
  }

  const englishPath = `/blog/${params.slug}`;
  return buildMetadata({
    title: post.metaTitle || post.title,
    description: post.description,
    path: localizedPath(locale.code, englishPath),
    type: "article",
    image: `/blog/${params.slug}/opengraph-image`,
    publishedTime: source.date,
    authors: [locale.ui.author],
    languages: hreflangLanguagesForPath(englishPath),
    locale: locale.ogLocale,
    noIndex: isSoftNoindexBlogPost(source),
  });
}

export default function TranslatedBlogPage({ params }) {
  const locale = getLocale(params.lang);
  const translated = locale?.posts?.[params.slug];
  const source = getBlogBySlug(params.slug);
  if (!locale || !translated || !source) notFound();

  const englishPath = `/blog/${params.slug}`;
  const path = localizedPath(locale.code, englishPath);
  const html = cleanBlogHtml(translated.content);
  const faqs = extractBlogFaqs(html);
  const crumbs = [
    { name: locale.ui.home, path: "/" },
    { name: locale.ui.blog, path: "/blog" },
    { name: translated.title, path },
  ];

  return (
    <>
      <JsonLd
        data={articleSchema(source, {
          path,
          headline: translated.title,
          description: translated.description,
          inLanguage: locale.htmlLang,
          author: locale.ui.author,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {faqs.length ? <JsonLd data={faqSchema(faqs, locale.htmlLang)} /> : null}
      <TranslatedDocument
        locale={locale}
        englishPath={englishPath}
        title={translated.title}
        excerpt={translated.description}
        date={source.date}
        updatedAt={source.updatedAt}
        readTime={source.readTime}
        categoryName={locale.ui.categories?.[source.category] || source.category}
        html={html}
        breadcrumbs={crumbs}
      />
    </>
  );
}
