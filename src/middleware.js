import { NextResponse } from "next/server";

const APEX = "thetrifusion.in";

/** Blog removed from the live site — return 410 Gone (not soft-404 via 301). */
function isRemovedBlogPath(pathname) {
  if (pathname === "/blog" || pathname === "/blog-1") return true;
  if (pathname.startsWith("/blog/")) return true;
  if (/^\/(es|pt|ar|id|hi)\/blog(\/|$)/.test(pathname)) return true;
  return false;
}

/** Permanent host canonicalization when the request reaches the Next app. */
export function middleware(request) {
  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  if (
    host === `www.${APEX}` ||
    host === "thetrifusion.com" ||
    host === "www.thetrifusion.com"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = APEX;
    url.port = "";
    const response = NextResponse.redirect(url, 308);
    // Prefer apex even on the redirect hop (GSC duplicate-canonical cases).
    const canonicalPath = url.pathname === "/" ? "" : url.pathname;
    response.headers.set(
      "Link",
      `<https://${APEX}${canonicalPath}${url.search || ""}>; rel="canonical"`
    );
    return response;
  }

  const { pathname } = request.nextUrl;
  if (isRemovedBlogPath(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }

  const response = NextResponse.next();
  if (!pathname.startsWith("/api")) {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=604800"
    );
    const canonicalPath = pathname === "/" ? "" : pathname;
    response.headers.set(
      "Link",
      `<https://${APEX}${canonicalPath}>; rel="canonical"`
    );
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Skip Next internals and static assets; still cover HTML routes.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|woff2|mp4|txt|xml|json)$).*)",
  ],
};
