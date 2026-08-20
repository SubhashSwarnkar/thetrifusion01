/** Minimal sitemap loc extractor (no deps). */
export class XMLParser {
  extractLocs(xml) {
    const locs = [];
    const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
    let match;
    while ((match = re.exec(xml))) {
      locs.push(match[1].trim());
    }
    return [...new Set(locs)];
  }
}
