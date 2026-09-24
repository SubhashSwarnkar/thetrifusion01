import Link from "next/link";
import { getHubTrendingPosts } from "data/blogData";

/** Server-rendered so the homepage client bundle does not include blog HTML. */
export default function HomeTrendingPosts() {
  const posts = getHubTrendingPosts().slice(0, 9);

  return (
    <section id="home-trending-blog" className="container mx-auto px-5 pb-10">
      <div className="rounded-2xl border border-theme-purple/15 bg-white p-6 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-purple mb-1">
              Trending now
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-theme-blue">
              Fresh explainers from the blog
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-theme-purple hover:underline">
            All posts →
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg px-3 py-2 text-theme-blue hover:bg-light-theme-purple/60 hover:text-theme-purple transition-colors"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
