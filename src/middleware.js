import { NextResponse } from "next/server";

const APEX = "thetrifusion.in";

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
    return NextResponse.redirect(url, 308);
  }
  const response = NextResponse.next();
  if (!request.nextUrl.pathname.startsWith("/api")) {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=604800"
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
