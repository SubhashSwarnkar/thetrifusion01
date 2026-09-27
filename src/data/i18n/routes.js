import { absoluteSiteUrl } from "config/site";
import {
  isTranslatedBlogSlug,
  isTranslatedEnglishPath,
  TRANSLATED_BLOG_SLUGS,
  TRANSLATED_SERVICE_PATH,
  TRANSLATED_SERVICE_SLUG,
} from "./catalog";

export {
  isTranslatedBlogSlug,
  isTranslatedEnglishPath,
  TRANSLATED_BLOG_SLUGS,
  TRANSLATED_SERVICE_PATH,
  TRANSLATED_SERVICE_SLUG,
};

/** Visible order in the switcher and in hreflang output. */
export const LOCALE_ORDER = ["en", "es", "pt", "ar", "id", "hi"];

export const LOCALE_CODES = ["es", "pt", "ar", "id", "hi"];

export const LOCALE_LABELS = {
  en: "English",
  es: "Español",
  pt: "Português",
  ar: "العربية",
  id: "Indonesia",
  hi: "हिन्दी",
};

export function localizedPath(lang, englishPath) {
  if (!englishPath) return "/";
  if (lang === "en") return englishPath;
  return `/${lang}${englishPath}`;
}

/** Absolute hreflang map. Null when this English URL has no translation. */
export function hreflangLanguagesForPath(englishPath) {
  if (!isTranslatedEnglishPath(englishPath)) return null;
  const languages = {};
  for (const code of LOCALE_ORDER) {
    languages[code] = absoluteSiteUrl(localizedPath(code, englishPath));
  }
  languages["x-default"] = absoluteSiteUrl(englishPath);
  return languages;
}

/**
 * Point in-article links at the translated URL when that target exists.
 * Other internal links stay on the English URL.
 */
export function localizeHrefs(html, lang) {
  if (!html || !lang || lang === "en") return html;
  return html.replace(/href="(\/[^"]*)"/g, (full, href) => {
    const hashIndex = href.indexOf("#");
    const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
    const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
    const clean = path.length > 1 ? path.replace(/\/$/, "") : path;
    if (clean === TRANSLATED_SERVICE_PATH) {
      return `href="/${lang}${clean}${hash}"`;
    }
    const match = clean.match(/^\/blog\/([a-z0-9-]+)$/);
    if (match && isTranslatedBlogSlug(match[1])) {
      return `href="/${lang}/blog/${match[1]}${hash}"`;
    }
    return full;
  });
}
