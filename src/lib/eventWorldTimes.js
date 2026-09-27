/**
 * Build-time local clocks for a scheduled event.
 * Intl.DateTimeFormat with an explicit timeZone runs on the server during
 * static generation, so the HTML is fixed and there is no client clock.
 */

const TIMED_ISO =
  /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/;

/** Cities readers asked for, in display order. Paris and Berlin share a clock. */
export const WORLD_ZONES = [
  { zone: "Europe/London", label: "London" },
  { zone: "America/New_York", label: "New York" },
  { zone: "America/Los_Angeles", label: "Los Angeles" },
  { zone: "America/Toronto", label: "Toronto" },
  { zone: "America/Mexico_City", label: "Mexico City" },
  { zone: "America/Sao_Paulo", label: "São Paulo" },
  { zone: "Europe/Paris", label: "Paris/Berlin" },
  { zone: "Africa/Lagos", label: "Lagos" },
  { zone: "Africa/Johannesburg", label: "Johannesburg" },
  { zone: "Asia/Dubai", label: "Dubai" },
  { zone: "Asia/Riyadh", label: "Riyadh" },
  { zone: "Asia/Karachi", label: "Karachi" },
  { zone: "Asia/Kolkata", label: "India" },
  { zone: "Asia/Dhaka", label: "Dhaka" },
  { zone: "Asia/Singapore", label: "Singapore/Kuala Lumpur" },
  { zone: "Asia/Jakarta", label: "Jakarta" },
  { zone: "Asia/Manila", label: "Manila" },
  { zone: "Asia/Tokyo", label: "Tokyo" },
  { zone: "Australia/Sydney", label: "Sydney" },
  { zone: "Pacific/Auckland", label: "Auckland" },
];

/**
 * Abbreviations for Intl long names. The long name already follows daylight
 * saving at the instant, so winter and summer resolve to different labels.
 * Names that collide (China "CST", Bangladesh "BST") stay on the GMT offset.
 */
const LONG_ABBREV = {
  "British Summer Time": "BST",
  "Greenwich Mean Time": "GMT",
  "Central European Summer Time": "CEST",
  "Central European Standard Time": "CET",
  "Central European Time": "CET",
  "Eastern European Summer Time": "EEST",
  "Eastern European Standard Time": "EET",
  "Western European Summer Time": "WEST",
  "Western European Standard Time": "WET",
  "Eastern Daylight Time": "EDT",
  "Eastern Standard Time": "EST",
  "Central Daylight Time": "CDT",
  "Central Standard Time": "CST",
  "Mountain Daylight Time": "MDT",
  "Mountain Standard Time": "MST",
  "Pacific Daylight Time": "PDT",
  "Pacific Standard Time": "PST",
  "India Standard Time": "IST",
  "Gulf Standard Time": "GST",
  "Arabian Standard Time": "AST",
  "Pakistan Standard Time": "PKT",
  "Singapore Standard Time": "SGT",
  "Malaysia Time": "MYT",
  "Japan Standard Time": "JST",
  "Korean Standard Time": "KST",
  "Australian Eastern Daylight Time": "AEDT",
  "Australian Eastern Standard Time": "AEST",
  "Australian Central Daylight Time": "ACDT",
  "Australian Central Standard Time": "ACST",
  "Australian Western Standard Time": "AWST",
  "New Zealand Daylight Time": "NZDT",
  "New Zealand Standard Time": "NZST",
  "Brasilia Standard Time": "BRT",
  "South Africa Standard Time": "SAST",
  "West Africa Standard Time": "WAT",
  "Philippine Standard Time": "PHT",
  "Western Indonesia Time": "WIB",
  "Central Indonesia Time": "WITA",
  "Eastern Indonesia Time": "WIT",
  "Hong Kong Standard Time": "HKT",
};

/** Countries whose civil time is a single IANA zone for event venues. */
const SINGLE_ZONE = {
  IN: "Asia/Kolkata",
  PK: "Asia/Karachi",
  BD: "Asia/Dhaka",
  AE: "Asia/Dubai",
  SA: "Asia/Riyadh",
  QA: "Asia/Qatar",
  KW: "Asia/Kuwait",
  BH: "Asia/Bahrain",
  OM: "Asia/Muscat",
  SG: "Asia/Singapore",
  MY: "Asia/Kuala_Lumpur",
  JP: "Asia/Tokyo",
  KR: "Asia/Seoul",
  CN: "Asia/Shanghai",
  HK: "Asia/Hong_Kong",
  TW: "Asia/Taipei",
  TH: "Asia/Bangkok",
  VN: "Asia/Ho_Chi_Minh",
  PH: "Asia/Manila",
  LK: "Asia/Colombo",
  NP: "Asia/Kathmandu",
  GB: "Europe/London",
  IE: "Europe/Dublin",
  DE: "Europe/Berlin",
  IT: "Europe/Rome",
  NL: "Europe/Amsterdam",
  BE: "Europe/Brussels",
  AT: "Europe/Vienna",
  CH: "Europe/Zurich",
  PL: "Europe/Warsaw",
  CZ: "Europe/Prague",
  HR: "Europe/Zagreb",
  LV: "Europe/Riga",
  TR: "Europe/Istanbul",
  GR: "Europe/Athens",
  SE: "Europe/Stockholm",
  NO: "Europe/Oslo",
  DK: "Europe/Copenhagen",
  FI: "Europe/Helsinki",
  HU: "Europe/Budapest",
  RO: "Europe/Bucharest",
  ZA: "Africa/Johannesburg",
  NG: "Africa/Lagos",
  KE: "Africa/Nairobi",
  EG: "Africa/Cairo",
  GH: "Africa/Accra",
  BA: "Europe/Sarajevo",
  IL: "Asia/Jerusalem",
  BG: "Europe/Sofia",
};

const COUNTRY_ALIAS = {
  UK: "GB",
  "UNITED KINGDOM": "GB",
  "GREAT BRITAIN": "GB",
  USA: "US",
  "UNITED STATES": "US",
  "UNITED STATES OF AMERICA": "US",
  UAE: "AE",
  "UNITED ARAB EMIRATES": "AE",
  INDIA: "IN",
  SPAIN: "ES",
  FRANCE: "FR",
  GERMANY: "DE",
  ITALY: "IT",
  JAPAN: "JP",
  CHINA: "CN",
  BRAZIL: "BR",
  MEXICO: "MX",
  AUSTRALIA: "AU",
  CANADA: "CA",
  "NEW ZEALAND": "NZ",
  SINGAPORE: "SG",
  MALAYSIA: "MY",
  PAKISTAN: "PK",
};

const CITY_ZONE = {};
const REGION_ZONE = {};

function assignCities(country, zone, cities) {
  for (const city of cities) CITY_ZONE[`${country}|${city}`] = zone;
}

function assignRegions(country, zone, regions) {
  for (const region of regions) REGION_ZONE[`${country}|${region}`] = zone;
}

assignCities("US", "America/New_York", [
  "new york",
  "brooklyn",
  "manhattan",
  "queens",
  "bronx",
  "boston",
  "philadelphia",
  "miami",
  "atlanta",
  "washington",
  "charlotte",
  "orlando",
  "tampa",
  "pittsburgh",
  "cleveland",
  "cincinnati",
  "detroit",
  "indianapolis",
  "cape canaveral",
  "jacksonville",
]);
assignCities("US", "America/Chicago", [
  "chicago",
  "green bay",
  "minneapolis",
  "milwaukee",
  "dallas",
  "houston",
  "austin",
  "san antonio",
  "new orleans",
  "kansas city",
  "st louis",
  "st. louis",
  "nashville",
  "memphis",
]);
assignCities("US", "America/Denver", [
  "denver",
  "salt lake city",
  "el paso",
]);
assignCities("US", "America/Phoenix", ["phoenix"]);
assignCities("US", "America/Los_Angeles", [
  "los angeles",
  "san francisco",
  "seattle",
  "las vegas",
  "portland",
  "san diego",
  "oakland",
  "sacramento",
  "indian wells",
]);
assignCities("US", "America/Anchorage", ["anchorage"]);
assignCities("US", "Pacific/Honolulu", ["honolulu"]);

assignRegions("US", "America/New_York", [
  "ct",
  "connecticut",
  "de",
  "delaware",
  "ga",
  "georgia",
  "me",
  "maine",
  "md",
  "maryland",
  "ma",
  "massachusetts",
  "nh",
  "new hampshire",
  "nj",
  "new jersey",
  "ny",
  "new york",
  "nc",
  "north carolina",
  "oh",
  "ohio",
  "pa",
  "pennsylvania",
  "ri",
  "rhode island",
  "sc",
  "south carolina",
  "vt",
  "vermont",
  "va",
  "virginia",
  "wv",
  "west virginia",
  "dc",
  "district of columbia",
]);
assignRegions("US", "America/Chicago", [
  "al",
  "alabama",
  "ar",
  "arkansas",
  "il",
  "illinois",
  "ia",
  "iowa",
  "la",
  "louisiana",
  "mn",
  "minnesota",
  "ms",
  "mississippi",
  "mo",
  "missouri",
  "ok",
  "oklahoma",
  "wi",
  "wisconsin",
]);
assignRegions("US", "America/Denver", [
  "co",
  "colorado",
  "mt",
  "montana",
  "nm",
  "new mexico",
  "ut",
  "utah",
  "wy",
  "wyoming",
]);
assignRegions("US", "America/Los_Angeles", [
  "ca",
  "california",
  "wa",
  "washington",
]);
assignRegions("US", "Pacific/Honolulu", ["hi", "hawaii"]);
assignRegions("US", "America/Phoenix", ["az", "arizona"]);

assignCities("CA", "America/Toronto", [
  "toronto",
  "ottawa",
  "montreal",
  "quebec",
  "quebec city",
]);
assignCities("CA", "America/Vancouver", ["vancouver"]);
assignCities("CA", "America/Edmonton", ["calgary", "edmonton"]);
assignCities("CA", "America/Winnipeg", ["winnipeg"]);
assignRegions("CA", "America/Toronto", ["ontario", "on", "quebec", "qc"]);
assignRegions("CA", "America/Vancouver", ["british columbia", "bc"]);
assignRegions("CA", "America/Edmonton", ["alberta", "ab"]);
assignRegions("CA", "America/Winnipeg", ["manitoba", "mb"]);
assignRegions("CA", "America/Regina", ["saskatchewan", "sk"]);
assignRegions("CA", "America/Halifax", ["nova scotia", "ns"]);
assignRegions("CA", "America/Moncton", ["new brunswick", "nb"]);
assignRegions("CA", "America/St_Johns", ["newfoundland and labrador", "nl"]);

assignCities("MX", "America/Mexico_City", [
  "mexico city",
  "ciudad de mexico",
  "cdmx",
  "guadalajara",
  "monterrey",
]);
assignCities("MX", "America/Tijuana", ["tijuana", "mexicali"]);
assignCities("MX", "America/Cancun", ["cancun"]);

assignCities("BR", "America/Sao_Paulo", [
  "sao paulo",
  "rio de janeiro",
  "brasilia",
  "belo horizonte",
  "curitiba",
  "porto alegre",
]);
assignCities("BR", "America/Recife", ["recife", "salvador", "fortaleza", "natal"]);
assignCities("BR", "America/Manaus", ["manaus"]);
assignCities("BR", "America/Rio_Branco", ["rio branco"]);

assignCities("AU", "Australia/Sydney", ["sydney", "canberra"]);
assignCities("AU", "Australia/Melbourne", ["melbourne"]);
assignCities("AU", "Australia/Brisbane", ["brisbane", "gold coast"]);
assignCities("AU", "Australia/Perth", ["perth"]);
assignCities("AU", "Australia/Adelaide", ["adelaide"]);
assignCities("AU", "Australia/Hobart", ["hobart"]);
assignCities("AU", "Australia/Darwin", ["darwin"]);
assignRegions("AU", "Australia/Sydney", [
  "nsw",
  "new south wales",
  "act",
  "australian capital territory",
]);
assignRegions("AU", "Australia/Melbourne", ["vic", "victoria"]);
assignRegions("AU", "Australia/Brisbane", ["qld", "queensland"]);
assignRegions("AU", "Australia/Perth", ["wa", "western australia"]);
assignRegions("AU", "Australia/Adelaide", ["sa", "south australia"]);
assignRegions("AU", "Australia/Hobart", ["tas", "tasmania"]);
assignRegions("AU", "Australia/Darwin", ["nt", "northern territory"]);

assignCities("ID", "Asia/Jakarta", ["jakarta", "bandung", "surabaya", "medan"]);
assignCities("ID", "Asia/Makassar", ["bali", "denpasar", "makassar"]);
assignCities("ID", "Asia/Jayapura", ["jayapura"]);

const zoneOk = new Map();

function isValidZone(zone) {
  if (typeof zone !== "string" || !zone.trim()) return false;
  const name = zone.trim();
  if (zoneOk.has(name)) return zoneOk.get(name);
  let ok = false;
  try {
    Intl.DateTimeFormat("en-GB", { timeZone: name }).format(0);
    ok = true;
  } catch {
    ok = false;
  }
  zoneOk.set(name, ok);
  return ok;
}

function norm(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCountry(value) {
  const upper = String(value || "")
    .trim()
    .toUpperCase();
  if (!upper) return "";
  if (COUNTRY_ALIAS[upper]) return COUNTRY_ALIAS[upper];
  return /^[A-Z]{2}$/.test(upper) ? upper : "";
}

function locationFields(event) {
  const loc = event && event.location;
  if (!loc || typeof loc !== "object") {
    return { country: "", locality: "", region: "", blob: "" };
  }
  const country = normalizeCountry(loc.addressCountry);
  const locality = norm(loc.addressLocality);
  const region = norm(loc.addressRegion);
  const name = norm(typeof loc.name === "string" ? loc.name : "");
  return {
    country,
    locality,
    region,
    blob: [locality, region, name].filter(Boolean).join(" "),
  };
}

function explicitZone(event) {
  const loc = event && event.location && typeof event.location === "object" ? event.location : null;
  const candidates = [event.timeZone, event.timezone, loc && loc.timeZone, loc && loc.timezone];
  for (const candidate of candidates) {
    if (typeof candidate !== "string") continue;
    const zone = candidate.trim();
    if (isValidZone(zone)) return zone;
  }
  return null;
}

function countryZone(country, blob) {
  if (!country) return null;
  if (country === "ES") {
    if (
      /canary|canarias|tenerife|las palmas|lanzarote|fuerteventura|gran canaria|la gomera|el hierro/.test(
        blob
      )
    ) {
      return "Atlantic/Canary";
    }
    return "Europe/Madrid";
  }
  if (country === "PT") {
    if (/azores|acores|ponta delgada/.test(blob)) return "Atlantic/Azores";
    if (/madeira|funchal/.test(blob)) return "Atlantic/Madeira";
    return "Europe/Lisbon";
  }
  if (country === "NZ") {
    return /chatham/.test(blob) ? "Pacific/Chatham" : "Pacific/Auckland";
  }
  if (country === "FR") {
    if (
      /guadeloupe|martinique|cayenne|french guiana|reunion|papeete|tahiti|noumea|new caledonia|mayotte|fort-de-france|polynesia|saint-pierre|saint pierre/.test(
        blob
      )
    ) {
      return null;
    }
    return "Europe/Paris";
  }
  if (
    country === "US" ||
    country === "CA" ||
    country === "AU" ||
    country === "BR" ||
    country === "MX" ||
    country === "ID" ||
    country === "RU"
  ) {
    return null;
  }
  const zone = SINGLE_ZONE[country];
  return zone && isValidZone(zone) ? zone : null;
}

export function deriveVenueTimeZone(event) {
  if (!event || typeof event !== "object") return null;
  const explicit = explicitZone(event);
  if (explicit) return explicit;
  const { country, locality, region, blob } = locationFields(event);
  if (country && locality && CITY_ZONE[`${country}|${locality}`]) {
    return CITY_ZONE[`${country}|${locality}`];
  }
  if (country && region && REGION_ZONE[`${country}|${region}`]) {
    return REGION_ZONE[`${country}|${region}`];
  }
  return countryZone(country, blob);
}

function venueLabel(event) {
  const loc = event && event.location;
  let place = "";
  if (typeof loc === "string") place = loc.trim();
  else if (loc && typeof loc === "object") {
    place = String(loc.addressLocality || loc.name || "").trim();
  }
  if (!place || place.length > 80) return "Venue";
  return `${place} (venue)`;
}

function partsOf(instant, timeZone, options) {
  return new Intl.DateTimeFormat("en-GB", { timeZone, ...options }).formatToParts(instant);
}

function part(parts, type) {
  return parts.find((item) => item.type === type)?.value || "";
}

function zoneAbbreviation(instant, timeZone) {
  const longParts = partsOf(instant, timeZone, { timeZoneName: "long" });
  const longName = part(longParts, "timeZoneName");
  if (longName && LONG_ABBREV[longName]) return LONG_ABBREV[longName];
  const offsetParts = partsOf(instant, timeZone, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "shortOffset",
  });
  return part(offsetParts, "timeZoneName");
}

function ymdInZone(instant, timeZone) {
  const parts = partsOf(instant, timeZone, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const year = part(parts, "year");
  const month = part(parts, "month");
  const day = part(parts, "day");
  if (!year || !month || !day) return "";
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function calendarDelta(fromYmd, toYmd) {
  if (!fromYmd || !toYmd || fromYmd === toYmd) return 0;
  const [fy, fm, fd] = fromYmd.split("-").map(Number);
  const [ty, tm, td] = toYmd.split("-").map(Number);
  const from = Date.UTC(fy, fm - 1, fd);
  const to = Date.UTC(ty, tm - 1, td);
  return Math.round((to - from) / 86400000);
}

function dayShiftLabel(delta) {
  if (delta === 0) return "";
  if (delta === 1) return "next day";
  if (delta === -1) return "previous day";
  if (delta > 1) return `${delta} days later`;
  return `${Math.abs(delta)} days earlier`;
}

function formatInZone(instant, timeZone) {
  if (!isValidZone(timeZone)) return null;
  const dateText = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(instant);
  const timeParts = partsOf(instant, timeZone, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  let hour = part(timeParts, "hour");
  const minute = part(timeParts, "minute");
  if (!hour || !minute) return null;
  if (hour === "24") hour = "00";
  const abbrev = zoneAbbreviation(instant, timeZone);
  return {
    dateText,
    timeText: abbrev ? `${hour.padStart(2, "0")}:${minute.padStart(2, "0")} ${abbrev}` : `${hour}:${minute}`,
    ymd: ymdInZone(instant, timeZone),
  };
}

function rowFrom(instant, timeZone, label, kind, referenceYmd) {
  const formatted = formatInZone(instant, timeZone);
  if (!formatted) return null;
  return {
    id: `${kind}:${label}`,
    kind,
    zone: timeZone,
    label,
    dateText: formatted.dateText,
    timeText: formatted.timeText,
    dayShift: dayShiftLabel(calendarDelta(referenceYmd, formatted.ymd)),
  };
}

/**
 * Rows for the world-time table, or null when the start cannot be shown.
 * Skips a missing start, a date-only start, and a start that is already past.
 */
export function buildEventWorldTimes(event, now = Date.now()) {
  if (!event || typeof event !== "object") return null;
  const iso = String(event.startDate || "").trim();
  const match = iso.match(TIMED_ISO);
  if (!match) return null;
  const instantMs = Date.parse(iso);
  if (Number.isNaN(instantMs) || instantMs < now) return null;

  const instant = new Date(instantMs);
  const venueZone = deriveVenueTimeZone(event);
  const referenceYmd =
    (venueZone && ymdInZone(instant, venueZone)) || match[1];

  const rows = [];
  if (venueZone) {
    const venue = rowFrom(instant, venueZone, venueLabel(event), "venue", referenceYmd);
    if (venue) rows.push(venue);
  }
  for (const place of WORLD_ZONES) {
    const row = rowFrom(instant, place.zone, place.label, "city", referenceYmd);
    if (row) rows.push(row);
  }
  if (!rows.some((row) => row.kind === "city")) return null;

  const name = String(event.name || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return { eventName: name, rows };
}

export function eventHasWorldTimes(event, now = Date.now()) {
  return Boolean(buildEventWorldTimes(event, now));
}

function rowPhrase(row) {
  const shift = row.dayShift ? ` (${row.dayShift})` : "";
  return `${row.timeText} on ${row.dateText}${shift}`;
}

function joinList(items) {
  if (items.length <= 1) return items[0] || "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function eventWorldTimeFaq(event, now = Date.now()) {
  const model = buildEventWorldTimes(event, now);
  if (!model || !model.eventName) return null;
  const city = (zone) => model.rows.find((row) => row.kind === "city" && row.zone === zone);
  const london = city("Europe/London");
  const newYork = city("America/New_York");
  const losAngeles = city("America/Los_Angeles");
  const sydney = city("Australia/Sydney");
  const parts = [
    london && `${rowPhrase(london)} in the UK (London)`,
    newYork && `${rowPhrase(newYork)} in New York`,
    losAngeles && `${rowPhrase(losAngeles)} in Los Angeles`,
    sydney && `${rowPhrase(sydney)} in Sydney`,
  ].filter(Boolean);
  if (parts.length < 3) return null;
  return {
    question: `What time does ${model.eventName} start in the UK, US and Australia?`,
    answer: `${model.eventName} starts at ${joinList(parts)}. Times follow the organiser's published schedule and can change.`,
  };
}

function questionKey(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function withEventWorldTimeFaq(event, faqs, now = Date.now()) {
  const list = Array.isArray(faqs) ? faqs.filter(Boolean) : [];
  const extra = eventWorldTimeFaq(event, now);
  if (!extra) return list;
  const key = questionKey(extra.question);
  if (list.some((item) => questionKey(item.question) === key)) return list;
  return [...list, extra];
}
