import { childSitemapLocs } from "lib/sitemaps";
import { sitemapIndexXml, xmlResponse } from "lib/sitemapXml";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(sitemapIndexXml(childSitemapLocs()));
}
