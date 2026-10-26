/**
 * Templated /solutions/*-{city} doorway pages.
 * Keep Jaipur (real HQ) indexable. Other cities 301 to matching /services
 * (or ecommerce money page) and are omitted from generation + sitemaps.
 */

export const INDEXABLE_CITY_SUFFIXES = new Set(["jaipur"]);

const CITY_SUFFIXES = [
  "jaipur",
  "delhi",
  "mumbai",
  "bangalore",
  "jodhpur",
  "ajmer",
  "kota",
  "bhilwara",
  "udaipur",
];

export function citySuffixFromSolutionSlug(slug) {
  const value = String(slug || "");
  for (const city of CITY_SUFFIXES) {
    if (value.endsWith(`-${city}`)) return city;
  }
  return null;
}

/** True for non-Jaipur templated city landings that should stay noindex. */
export function isNoindexCitySolutionSlug(slug) {
  const city = citySuffixFromSolutionSlug(slug);
  if (!city) return false;
  return !INDEXABLE_CITY_SUFFIXES.has(city);
}

export function isIndexableSolutionSlug(slug) {
  return !isNoindexCitySolutionSlug(slug);
}
