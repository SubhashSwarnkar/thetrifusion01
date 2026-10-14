import { buildSitemapParts } from "lib/sitemaps";
import { urlsetXml, xmlResponse } from "lib/sitemapXml";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(urlsetXml(buildSitemapParts().solutions));
}
