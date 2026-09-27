/** Shared shape check lives in index.js. UI copy is per locale file. */

export function localeShell({
  code,
  htmlLang,
  dir,
  ogLocale,
  dateLocale,
  ui,
  posts,
  service,
}) {
  return { code, htmlLang, dir, ogLocale, dateLocale, ui, posts, service };
}
