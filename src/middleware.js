import { NextResponse } from "next/server";
import { canonicalSitePathname } from "lib/canonicalPath";

const APEX = "thetrifusion.in";
const NON_APEX_HOSTS = new Set([
  `www.${APEX}`,
  "thetrifusion.com",
  "www.thetrifusion.com",
]);

const STATIC_EXT =
  /\.(?:svg|png|jpg|jpeg|gif|webp|avif|woff2|mp4|txt|xml|json|ico|css|js|map)$/i;

/** Blog removed from the live site — return 410 Gone (not soft-404 via 301). */
function isRemovedBlogPath(pathname) {
  const path =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname || "/";
  if (path === "/blog" || path === "/blog-1") return true;
  if (path.startsWith("/blog/")) return true;
  if (/^\/(es|pt|ar|id|hi)\/blog(\/|$)/.test(path)) return true;
  return false;
}

function goneResponse() {
  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}

function isStaticAssetPath(pathname) {
  return STATIC_EXT.test(pathname);
}

/**
 * Host + path canonicalization in ONE hop.
 * next.config must NOT also www→apex (that runs before middleware and creates
 * GSC redirect-error chains: www/blog→apex/blog→410, www/ios→apex/ios→/services).
 */
export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Gone blogs on ANY host — never 308 to apex then 410 (GSC Redirect error).
  if (isRemovedBlogPath(pathname)) {
    return goneResponse();
  }

  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const finalPath = canonicalSitePathname(pathname);
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname || "/";
  const needsHostFix = NON_APEX_HOSTS.has(host);
  const needsPathFix = finalPath !== normalizedPath;

  // Single hop to apex + final money URL (covers www legacy paths that would
  // otherwise relative-redirect on www via next.config, then hop again).
  if (needsHostFix || needsPathFix) {
    const target = new URL(`https://${APEX}${finalPath}${search || ""}`);
    const response = NextResponse.redirect(target, 308);
    const canonicalPath = finalPath === "/" ? "" : finalPath;
    response.headers.set(
      "Link",
      `<https://${APEX}${canonicalPath}>; rel="canonical"`
    );
    return response;
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
     * for HTML and static assets alike. Path-only redirects stay in next.config.
     */
    "/((?!_next/static|_next/image).*)",
  ],
};
