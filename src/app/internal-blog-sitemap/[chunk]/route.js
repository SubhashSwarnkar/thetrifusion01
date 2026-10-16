import { getBlogSitemapChunk } from "lib/sitemaps";
import { urlsetXml, xmlResponse } from "lib/sitemapXml";

export const dynamic = "force-dynamic";

export function GET(_request, { params }) {
  const n = Number(params?.chunk);
  if (!Number.isInteger(n) || n < 2) {
    return new Response("Not found", { status: 404 });
  }
  const entries = getBlogSitemapChunk(n - 1);
  if (!entries) {
    return new Response("Not found", { status: 404 });
  }
  return xmlResponse(urlsetXml(entries));
}
