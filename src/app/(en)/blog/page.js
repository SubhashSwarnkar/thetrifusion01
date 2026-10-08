import Link from "next/link";
import Page from "views/BlogPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";
import {
  blogCategories,
  getHubTrendingPosts,
  getPublishedBlogPosts,
} from "data/blogData";
import { toBlogCard } from "lib/blogArticleProps";

export const metadata = pageMetadata("/blog");

export default function RoutePage() {
  const posts = getPublishedBlogPosts();
  const guides = posts.filter((post) => !post.event);
  const events = posts.filter((post) => Boolean(post.event));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Page
        posts={[...guides, ...events].map(toBlogCard)}
        trendingPosts={getHubTrendingPosts().map(toBlogCard)}
        latestPosts={guides.slice(0, 40).map(toBlogCard)}
        categories={blogCategories}
      />
      {/* Plain server-rendered link list so Googlebot always sees every post URL */}
      <nav
        aria-label="All blog articles"
        className="container mx-auto px-5 pb-16"
      >
        <h2 className="text-lg font-bold text-theme-blue mb-4">
          Tech & business guides ({guides.length})
        </h2>
        <ul className="columns-1 sm:columns-2 lg:columns-3 gap-6 text-sm text-gray-700">
          {guides.map((post) => (
            <li key={post.slug} className="mb-2 break-inside-avoid">
              <a href={`/blog/${post.slug}`} className="hover:text-theme-purple">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold text-theme-blue mt-10 mb-4">
          Events calendar ({events.length})
        </h2>
        <ul className="columns-1 sm:columns-2 lg:columns-3 gap-6 text-sm text-gray-700">
          {events.map((post) => (
            <li key={post.slug} className="mb-2 break-inside-avoid">
              <a href={`/blog/${post.slug}`} className="hover:text-theme-purple">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500">
          Looking for services? See{" "}
          <Link href="/services" className="text-theme-purple font-semibold">
            all services
          </Link>
          ,{" "}
          <Link href="/solutions" className="text-theme-purple font-semibold">
            solutions
          </Link>
          , or{" "}
          <Link href="/contact" className="text-theme-purple font-semibold">
            contact
          </Link>
          .
        </p>
      </nav>
    </>
  );
}
