import { NextResponse } from "next/server";
import { canonicalSitePathname } from "lib/canonicalPath";

const APEX = "thetrifusion.in";
const NON_APEX_HOSTS = new Set([
  `www.${APEX}`,
  "thetrifusion.com",
  "www.thetrifusion.com",
]);
/** Production Vercel alias — always 308 to apex (GSC duplicate host). */
const PRODUCTION_VERCEL_ALIAS = "thetrifusion01.vercel.app";

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

function isNextAssetPath(pathname) {
  return (
    pathname.startsWith("/_next/static") || pathname.startsWith("/_next/image")
  );
}

function isVercelAppHost(host) {
  return host === "vercel.app" || host.endsWith(".vercel.app");
}

/**
 * Permanent redirect with an explicit absolute apex Location.
 * Do NOT use NextResponse.redirect(URL) — on same-host requests Next/Vercel
 * relativizes Location to "/path", which www clients resolve back to www.
 */
function apexRedirect(finalPath, search = "") {
  const location = `https://${APEX}${finalPath}${search || ""}`;
  const canonicalPath = finalPath === "/" ? "" : finalPath;
  return new NextResponse(null, {
    status: 308,
    headers: {
      Location: location,
      Link: `<https://${APEX}${canonicalPath}>; rel="canonical"`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

/** Preview / non-production *.vercel.app hosts — keep previews usable but unindexable. */
function vercelPreviewRobotsTxt() {
  return new NextResponse("User-Agent: *\nDisallow: /\n", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

/**
 * Host + path canonicalization in ONE hop.
 * next.config must NOT also www→apex (that runs before middleware and creates
 * GSC redirect-error chains: www/blog→apex/blog→410, www/ios→apex/ios→/services).
 *
 * Matcher includes /_next/static and /_next/image so www asset requests
 * (otherwise 404 without redirect) single-hop to apex — helps kill stale www
 * preferences for digital-marketing and other money URLs.
 */
export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const nextAsset = isNextAssetPath(pathname);

  // Gone blogs on ANY host — never 308 to apex then 410 (GSC Redirect error).
  // Skip for Next internals (they are never blog paths).
  if (!nextAsset && isRemovedBlogPath(pathname)) {
    return goneResponse();
  }

  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const finalPath = nextAsset ? pathname : canonicalSitePathname(pathname);
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname || "/";

  // Production Vercel alias → absolute apex (same path + query), one hop.
  if (host === PRODUCTION_VERCEL_ALIAS) {
    return apexRedirect(finalPath, search || "");
  }

  // Other *.vercel.app (preview deploys): noindex + disallow-all robots.txt.
  // Do not redirect — that would break Vercel preview URLs.
  const vercelPreview = isVercelAppHost(host);
  if (vercelPreview && pathname === "/robots.txt") {
    return vercelPreviewRobotsTxt();
  }

  const needsHostFix = NON_APEX_HOSTS.has(host);
  const needsPathFix = !nextAsset && finalPath !== normalizedPath;

  // Single hop to absolute apex + final money URL (or same Next asset path).
  if (needsHostFix || needsPathFix) {
    return apexRedirect(finalPath, search || "");
  }

  // Static / Next assets — do not rewrite Cache-Control; still noindex previews.
  if (nextAsset || isStaticAssetPath(pathname)) {
    if (vercelPreview) {
      const response = NextResponse.next();
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
      return response;
    }
    return NextResponse.next();
  }

  const response = NextResponse.next();
  if (vercelPreview) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
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
     * Run on HTML, public assets, AND Next build assets so www/.com → apex
     * is permanent for every path (including /_next/static/*).
     */
    "/((?!_next/static|_next/image).*)",
    "/_next/static/:path*",
    "/_next/image",
  ],
};
