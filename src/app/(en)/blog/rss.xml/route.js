import { getPublishedMarkdownPosts } from "lib/blogMarkdown";
import { absoluteSiteUrl } from "config/site";

export const dynamic = "force-static";

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const posts = getPublishedMarkdownPosts();
  const items = posts
    .map((post) => {
      const link = absoluteSiteUrl(`/blog/${post.slug}`);
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${escapeXml(pubDate)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>TheTriFusion Blog</title>
    <link>${escapeXml(absoluteSiteUrl("/blog"))}</link>
    <description>Tech, software, and AI insights from TheTriFusion in Jaipur.</description>
    <language>en-in</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
