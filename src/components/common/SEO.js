"use client";

/**
 * Server-side Next.js Metadata API now owns SEO tags.
 * This client helper is intentionally a no-op so it cannot
 * overwrite crawler-visible <title>/meta tags after hydration.
 */
export default function SEO() {
  return null;
}
