/**
 * Render-time cleanup for blog article HTML.
 *
 * Stored post data is left untouched. This only changes what is rendered.
 *
 * 1. A block-level element (p, ul, ol, blockquote, table, h2-h6) whose text
 *    already appeared earlier in the same article is dropped. Short blocks
 *    (under 30 characters of text) are kept unless they are headings whose
 *    whole section was dropped.
 * 2. Paragraphs that are internal AdSense policy notes are dropped.
 * 3. Pipeline meta sections are dropped from their heading through the next h2.
 * 4. Paragraphs that start with "Verification note" are dropped.
 * 5. Paragraphs that mention the publishing pipeline are dropped.
 * 6. Sentences that begin with "This page does not" are removed from paragraph
 *    text nodes. A paragraph left with fewer than 3 words is dropped.
 * 7. A heading whose section ended up empty is dropped, and blank runs collapse.
 */

const BLOCK_RE =
  /<(p|ul|ol|blockquote|table|h[2-6])\b[^>]*>[\s\S]*?<\/\1\s*>/gi;

const INTERNAL_NOTE_RE =
  /\bAdSense[- ](safe|compliance|compliant|polic)/i;

const META_HEADINGS = new Set([
  "additional notes for planners and publishers",
  "why early, accurate pages win the search peak",
  "editorial standards we use on thetrifusion event desks",
  "for publishers building their own event seo engines",
]);

const PIPELINE_RE =
  /FAQPage schema|content arrays|production build|IndexNow|search peak|crawlers discover|Thin pages that only|speculative filler|SEO-clean event hubs|event SEO engine/i;

const SELF_TALK_PHRASE = "this page does not";

function blockText(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function wordCount(html) {
  const text = String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

function headingRank(tag) {
  const match = /^h([2-6])$/.exec(tag || "");
  return match ? Number(match[1]) : 0;
}

function parseBlocks(html) {
  const parts = [];
  let last = 0;
  let match;
  BLOCK_RE.lastIndex = 0;
  while ((match = BLOCK_RE.exec(html)) !== null) {
    if (match.index > last) {
      parts.push({ raw: html.slice(last, match.index), gap: true });
    }
    parts.push({
      raw: match[0],
      tag: match[1].toLowerCase(),
      text: blockText(match[0]),
    });
    last = match.index + match[0].length;
  }
  if (last < html.length) parts.push({ raw: html.slice(last), gap: true });
  return parts;
}

function applyDuplicateAndPolicyRules(parts) {
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
}

function isMetaHeading(part) {
  return /^h[234]$/.test(part.tag) && META_HEADINGS.has(part.text);
}

function dropMetaSections(parts) {
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (part.gap || part.drop || !isMetaHeading(part)) continue;
    part.drop = true;
    for (let j = i + 1; j < parts.length; j += 1) {
      const next = parts[j];
      if (!next.gap && next.tag === "h2") break;
      next.drop = true;
    }
  }
}

function isSentenceStart(text, index) {
  let cursor = index - 1;
  while (cursor >= 0 && /\s/.test(text[cursor])) cursor -= 1;
  if (cursor < 0) return true;
  return /[.!?]/.test(text[cursor]);
}

/** Remove "This page does not…" sentences from text nodes only. */
function stripSelfTalkText(text) {
  const lower = text.toLowerCase();
  let out = "";
  let cursor = 0;
  let removed = false;
  while (cursor < text.length) {
    const index = lower.indexOf(SELF_TALK_PHRASE, cursor);
    if (index === -1) {
      out += text.slice(cursor);
      break;
    }
    if (!isSentenceStart(text, index)) {
      out += text.slice(cursor, index + SELF_TALK_PHRASE.length);
      cursor = index + SELF_TALK_PHRASE.length;
      continue;
    }
    const afterPhrase = index + SELF_TALK_PHRASE.length;
    const relativeEnd = text.slice(afterPhrase).search(/[.!?]/);
    if (relativeEnd === -1) {
      out += text.slice(cursor);
      break;
    }
    let end = afterPhrase + relativeEnd + 1;
    while (end < text.length && /\s/.test(text[end])) end += 1;
    out += text.slice(cursor, index);
    cursor = end;
    removed = true;
  }
  return removed ? out : text;
}

function stripSelfTalk(html) {
  const pieces = html.split(/(<[^>]+>)/g);
  let removed = false;
  const next = pieces
    .map((piece) => {
      if (!piece || piece.startsWith("<")) return piece;
      const stripped = stripSelfTalkText(piece);
      if (stripped !== piece) removed = true;
      return stripped;
    })
    .join("");
  return removed ? next : html;
}

function applyParagraphRulesToP(pHtml) {
  const text = blockText(pHtml);
  if (/^verification note\b/.test(text)) return "";
  if (PIPELINE_RE.test(text)) return "";
  const cleaned = stripSelfTalk(pHtml);
  if (cleaned !== pHtml && wordCount(cleaned) < 3) return "";
  return cleaned;
}

function applyParagraphRules(parts) {
  for (const part of parts) {
    if (part.drop) continue;
    if (part.gap) {
      part.raw = stripSelfTalk(part.raw);
      continue;
    }
    if (part.tag === "p") {
      const next = applyParagraphRulesToP(part.raw);
      if (!next) part.drop = true;
      else part.raw = next;
      continue;
    }
    // Lists and other blocks can carry the same self-talk sentence outside a p.
    const paragraphRe = /<p\b[^>]*>[\s\S]*?<\/p\s*>/gi;
    part.raw = stripSelfTalk(
      part.raw.replace(paragraphRe, (pHtml) => applyParagraphRulesToP(pHtml))
    );
  }
}

function dropEmptyHeadings(parts) {
  for (let i = parts.length - 1; i >= 0; i -= 1) {
    const part = parts[i];
    if (part.gap || part.drop) continue;
    const rank = headingRank(part.tag);
    if (!rank) continue;
    let empty = true;
    for (let j = i + 1; j < parts.length; j += 1) {
      const next = parts[j];
      if (next.gap) {
        if (blockText(next.raw)) {
          empty = false;
          break;
        }
        continue;
      }
      const nextRank = headingRank(next.tag);
      if (nextRank && nextRank <= rank) break;
      if (!next.drop) {
        empty = false;
        break;
      }
    }
    if (empty) part.drop = true;
  }
}

function collapseBlankRuns(html) {
  return html.replace(/(?:[ \t]*\n){3,}/g, "\n\n");
}

export function cleanBlogHtml(html) {
  if (typeof html !== "string" || !html) return html;

  const parts = parseBlocks(html);
  applyDuplicateAndPolicyRules(parts);
  dropMetaSections(parts);
  applyParagraphRules(parts);
  dropEmptyHeadings(parts);

  return collapseBlankRuns(
    parts
      .filter((part) => !part.drop)
      .map((part) => part.raw)
      .join("")
  );
}

export default cleanBlogHtml;
