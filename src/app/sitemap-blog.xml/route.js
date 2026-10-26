export const dynamic = "force-static";

/** Blog child sitemap retired — blogs return 410; not listed in sitemap index. */
export function GET() {
  return new Response("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}
