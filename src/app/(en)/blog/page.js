import Link from "next/link";
import Page from "views/BlogPage";
import JsonLd from "components/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "lib/schema";
import { pageMetadata } from "lib/seoConfig";
import { getPublishedMarkdownPosts } from "lib/blogMarkdown";

export const metadata = pageMetadata("/blog");

export default function RoutePage() {
  const posts = getPublishedMarkdownPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd
        data={collectionPageSchema({
          name: "Tech, Software & AI Insights | TheTriFusion",
          description:
            "Practical tech, software, and AI insights from TheTriFusion in Jaipur.",
          path: "/blog",
          items: posts,
        })}
      />
      <Page posts={posts} />
      {posts.length > 0 ? (
        <nav
          aria-label="All blog articles"
          className="container mx-auto px-5 pb-16"
        >
          <h2 className="mb-4 text-lg font-bold text-theme-blue">
            All posts ({posts.length})
          </h2>
          <ul className="columns-1 gap-6 text-sm text-gray-700 sm:columns-2 lg:columns-3">
            {posts.map((post) => (
              <li key={post.slug} className="mb-2 break-inside-avoid">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-theme-purple"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
