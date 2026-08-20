import { NextResponse } from "next/server";
import { siteConfig } from "config/site";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  const apex = siteConfig.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];

  if (host === apex) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = `www.${apex}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json)$).*)",
  ],
};
