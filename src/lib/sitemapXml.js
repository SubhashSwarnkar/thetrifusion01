function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function lastmod(value) {
  try {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return d.toISOString().slice(0, 10);
  } catch {
    return null;
  }
}

export function urlsetXml(entries = []) {
  const body = entries
    .map((entry) => {
      const loc = escapeXml(entry.url);
      const modified = lastmod(entry.lastModified);
      const freq = entry.changeFrequency
        ? `\n    <changefreq>${escapeXml(entry.changeFrequency)}</changefreq>`
        : "";
      const priority =
        typeof entry.priority === "number"
          ? `\n    <priority>${entry.priority}</priority>`
          : "";
      const last = modified ? `\n    <lastmod>${modified}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>${last}${freq}${priority}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export function sitemapIndexXml(locs = []) {
  const body = locs
    .map((loc) => `  <sitemap>\n    <loc>${escapeXml(loc)}</loc>\n  </sitemap>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}

export function xmlResponse(xml) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
