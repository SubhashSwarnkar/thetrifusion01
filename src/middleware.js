import { NextResponse } from "next/server";

/**
 * Host canonicalization is handled in Vercel Domains
 * (apex thetrifusion.in = Production; www redirects to apex).
 * Do not redirect apex → www here or it creates a redirect loop.
 */
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|google.*\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|html)$).*)",
  ],
};
