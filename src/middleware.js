import { NextResponse } from "next/server";

const APEX = "thetrifusion.in";

const STATIC_EXT =
  /\.(?:svg|png|jpg|jpeg|gif|webp|avif|woff2|mp4|txt|xml|json|ico|css|js|map)$/i;

/** Blog removed from the live site — return 410 Gone (not soft-404 via 301). */
function isRemovedBlogPath(pathname) {
  if (pathname === "/blog" || pathname === "/blog-1") return true;
  if (pathname.startsWith("/blog/")) return true;
  if (/^\/(es|pt|ar|id|hi)\/blog(\/|$)/.test(pathname)) return true;
  return false;
}

function isStaticAssetPath(pathname) {
  return STATIC_EXT.test(pathname);
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

  // Static assets: host already apex — do not rewrite Cache-Control.
  if (isStaticAssetPath(pathname)) {
    return NextResponse.next();
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
     * Run on all paths except Next internals so www/.com → apex is permanent
     * for HTML and static assets alike. next.config redirects are the other hop.
     */
    "/((?!_next/static|_next/image).*)",
  ],
};
