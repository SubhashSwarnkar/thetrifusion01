/**
 * Render-time cleanup for blog article HTML.
 *
 * Some generated posts repeat the same closing section (heading plus
 * paragraphs) several times, and many carry an internal editorial line about
 * "AdSense-safe" coverage that was never meant for readers. Stored data is
 * left untouched; this only changes what is rendered.
 *
 * 1. A block-level element (p, ul, ol, blockquote, table, h2-h6) whose text
 *    already appeared earlier in the same article is dropped. Short blocks
 *    (under 30 characters of text) are kept unless they are headings whose
 *    whole section was dropped.
 * 2. Paragraphs that are internal AdSense policy notes are dropped.
 */

const BLOCK_RE =
  /<(p|ul|ol|blockquote|table|h[2-6])\b[^>]*>[\s\S]*?<\/\1\s*>/gi;

const INTERNAL_NOTE_RE =
  /\bAdSense[- ](safe|compliance|compliant|polic)/i;

function blockText(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function cleanBlogHtml(html) {
  if (typeof html !== "string" || !html) return html;

  const parts = [];
  let last = 0;
  let m;
  BLOCK_RE.lastIndex = 0;
  while ((m = BLOCK_RE.exec(html)) !== null) {
    if (m.index > last) parts.push({ raw: html.slice(last, m.index), gap: true });
    parts.push({ raw: m[0], tag: m[1].toLowerCase(), text: blockText(m[0]) });
    last = m.index + m[0].length;
  }
  if (last < html.length) parts.push({ raw: html.slice(last), gap: true });

  const seen = new Set();
  for (const part of parts) {
    if (part.gap) continue;
    const isHeading = /^h[2-6]$/.test(part.tag);
    if (!isHeading && part.tag === "p" && INTERNAL_NOTE_RE.test(part.text)) {
      part.drop = true;
      continue;
    }
    const key = `${isHeading ? "h" : "b"}:${part.text}`;
    if (seen.has(key)) {
      if (isHeading) part.dupHeading = true;
      else if (part.text.length >= 30) part.drop = true;
    } else {
      seen.add(key);
    }
  }

  // Drop a repeated heading only when everything in its section was dropped.
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (!part.dupHeading) continue;
    let allDropped = true;
    for (let j = i + 1; j < parts.length; j += 1) {
      const next = parts[j];
      if (next.gap) continue;
      if (/^h[2-6]$/.test(next.tag)) break;
      if (!next.drop) {
        allDropped = false;
        break;
      }
    }
    if (allDropped) part.drop = true;
  }

  return parts
    .filter((p) => !p.drop)
    .map((p) => p.raw)
    .join("")
    .replace(/\n{3,}/g, "\n\n");
}

export default cleanBlogHtml;
