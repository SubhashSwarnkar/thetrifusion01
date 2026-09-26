import { siteConfig, absoluteSiteUrl } from "../config/site.js";
import { lookupOrganizer } from "./eventOrganizers.js";

const HOME_DESCRIPTION =
  "Trifusion Infotech Private Limited (TheTriFusion) is a software development company in Jaipur, Rajasthan offering custom software, ecommerce websites, mobile apps, UI/UX, and digital marketing for businesses across India.";

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.legalName, siteConfig.legalNameShort],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logoUrl,
    },
    image: siteConfig.defaultOgImage,
    description: HOME_DESCRIPTION,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    address: {
      "@type": "PostalAddress",
      ...(siteConfig.streetAddress
        ? { streetAddress: siteConfig.streetAddress }
        : {}),
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "AdministrativeArea", name: siteConfig.region },
      { "@type": "Country", name: siteConfig.countryName },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IN",
    description: HOME_DESCRIPTION,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

function localBusinessNode() {
  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.legalNameShort],
    url: siteConfig.url,
    image: siteConfig.defaultOgImage,
    logo: siteConfig.logoUrl,
    description: HOME_DESCRIPTION,
    slogan: siteConfig.tagline,
    priceRange: "$$",
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    address: {
      "@type": "PostalAddress",
      ...(siteConfig.streetAddress
        ? { streetAddress: siteConfig.streetAddress }
        : {}),
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Bank Transfer, Cards",
    foundingLocation: {
      "@type": "Place",
      name: `${siteConfig.city}, ${siteConfig.region}, ${siteConfig.countryName}`,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Jaipur",
        description: "Primary office and service location",
      },
      {
        "@type": "City",
        name: "Bhilwara",
        description: "Service area served remotely from Jaipur",
      },
      {
        "@type": "City",
        name: "Udaipur",
        description: "Service area served remotely from Jaipur",
      },
      {
        "@type": "City",
        name: "Kota",
        description: "Service area served remotely from Jaipur",
      },
      {
        "@type": "City",
        name: "Ajmer",
        description: "Service area served remotely from Jaipur",
      },
      { "@type": "AdministrativeArea", name: siteConfig.region },
      { "@type": "Country", name: siteConfig.countryName },
    ],
    knowsLanguage: ["en-IN", "hi"],
    knowsAbout: [
      "Software Development",
      "Website Development",
      "Ecommerce Website Development",
      "Ecommerce Development",
      "Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "White-label Software Development",
      "UI/UX Design",
      "Digital Marketing",
      "RPA",
      "Branding",
      "MLM CRM Development",
      "Fintech App Development",
      "BBPS Software",
      "AEPS Software",
      "DMT Software",
      "XDMT Software",
      "EV Charging App Development",
      "CRM and ERP Development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      url: absoluteSiteUrl("/contact"),
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...organizationNode(),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    ...localBusinessNode(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    ...websiteNode(),
  };
}

export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), localBusinessNode(), websiteNode()],
  };
}

export function videoObjectSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Software development work from TheTriFusion in Jaipur",
    description: HOME_DESCRIPTION,
    thumbnailUrl: siteConfig.defaultOgImage,
    contentUrl: `${siteConfig.url}/videos/hero-showcase.mp4`,
    uploadDate: "2026-08-20",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function itemListSchema({ name, items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteSiteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  price,
  offers = [],
  pricedOffers = [],
  areaServed,
  provider,
}) {
  const url = absoluteSiteUrl(path);
  const offerUrl = (value) => {
    if (!value) return undefined;
    if (value.startsWith("http")) return value;
    return absoluteSiteUrl(value);
  };
  const priceOfferNodes =
    pricedOffers.length > 0
      ? pricedOffers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          description: offer.description,
          priceCurrency: "INR",
          price: String(offer.price),
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01",
          url: offer.url ? absoluteSiteUrl(offer.url) : url,
        }))
      : price
        ? [
            {
              "@type": "Offer",
              priceCurrency: "INR",
              price: String(price),
              availability: "https://schema.org/InStock",
              validFrom: "2026-01-01",
              url,
            },
          ]
        : [];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    ...(serviceType ? { serviceType, alternateName: serviceType } : {}),
    description,
    url,
    category: "Information Technology Services",
    provider: provider || { "@id": `${siteConfig.url}/#localbusiness` },
    brand: { "@id": `${siteConfig.url}/#organization` },
    areaServed: areaServed || [
      { "@type": "City", name: "Jaipur" },
      { "@type": "AdministrativeArea", name: siteConfig.region },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "Country", name: siteConfig.countryName },
    ],
    termsOfService: absoluteSiteUrl("/terms"),
    ...(priceOfferNodes.length > 0
      ? {
          offers:
            priceOfferNodes.length === 1
              ? priceOfferNodes[0]
              : priceOfferNodes,
        }
      : {}),
    ...(offers && offers.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} Offerings`,
            itemListElement: offers.map((offer, index) => {
              const itemUrl = offerUrl(offer.url);
              return {
                "@type": "Offer",
                ...(itemUrl ? { url: itemUrl } : {}),
                itemOffered: {
                  "@type": "Service",
                  name: offer.title || offer.name,
                  description: offer.description,
                  ...(itemUrl ? { url: itemUrl } : {}),
                },
                position: index + 1,
              };
            }),
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.path === "/" ? "/" : item.path),
    })),
  };
}

export function faqSchema(faqItems = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}


const TRENDS_EXPLAINER_RE = /why-trending|why trending|\bexplained\b|explainer/i;

/** Year-round offsets only. DST countries stay unzoned when the post has no offset. */
const STABLE_OFFSET_BY_COUNTRY = {
  IN: "+05:30",
  PK: "+05:00",
  CN: "+08:00",
  JP: "+09:00",
  KR: "+09:00",
  TH: "+07:00",
  SG: "+08:00",
  AE: "+04:00",
  SA: "+03:00",
  BD: "+06:00",
  LK: "+05:30",
  NP: "+05:45",
};

/**
 * Trends explainers ("why trending", "explained") are not fixtures.
 * A post that also carries a real startDate is still a scheduled event.
 */
export function isTrendsExplainer(post) {
  if (!post) return false;
  return TRENDS_EXPLAINER_RE.test(`${post.slug || ""} ${post.title || ""}`);
}

function plainText(value) {
  if (!value || typeof value !== "string") return "";
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function schemaOrgUrl(value, fallback) {
  const raw = value || fallback;
  if (typeof raw === "string" && /^https?:\/\//i.test(raw)) return raw;
  return `https://schema.org/${raw || fallback}`;
}

function apexImageUrl(pathOrUrl) {
  const absolute =
    typeof pathOrUrl === "string" && /^https?:\/\//i.test(pathOrUrl)
      ? pathOrUrl
      : absoluteSiteUrl(pathOrUrl || "/");
  return absolute.replace(
    /^https:\/\/www\.thetrifusion\.in/i,
    "https://thetrifusion.in"
  );
}

function eventImage(post) {
  if (post && post.slug) {
    return [apexImageUrl(`/blog/${post.slug}/opengraph-image`)];
  }
  if (post && post.imageUrl) {
    return [apexImageUrl(post.imageUrl)];
  }
  return [apexImageUrl(siteConfig.defaultOgImage)];
}

function eventDescription(post) {
  return plainText(post.metaDescription || post.description || post.excerpt);
}

function sportBlob(post, ev) {
  return [post.slug, post.title, ev.name, ev.organizer, ev.type, ...(post.tags || [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function cleanSide(side) {
  return String(side || "")
    .replace(/\s*[—–-]\s+.*$/u, "")
    .replace(/\s+\d+(?:st|nd|rd|th)\s+(?:t20i|odi|test)\b.*$/i, "")
    .replace(/\s+(?:t20i|odi)\b(?:\s+series)?(?:\s+\d{4})?.*$/i, "")
    .trim();
}

function knownTeams(post, ev) {
  if (ev.type !== "SportsEvent") return null;
  const named = (value) => {
    if (typeof value === "string") return value.trim();
    if (value && typeof value === "object" && value.name) return String(value.name).trim();
    return "";
  };
  const explicitHome = named(ev.homeTeam);
  const explicitAway = named(ev.awayTeam);
  if (explicitHome && explicitAway) {
    return { home: explicitHome, away: explicitAway };
  }

  const blob = sportBlob(post, ev);
  const name = String(ev.name || "");
  if (/\s+at\s+/i.test(name) && /\b(nba|nfl|national football league)\b/.test(blob)) {
    const parts = name.split(/\s+at\s+/i);
    if (parts.length === 2) {
      return { away: parts[0].trim(), home: parts[1].trim() };
    }
  }
  if (!/\s+vs\.?\s+/i.test(name)) return null;
  if (/\b(nfl|national football league|nba)\b/.test(blob)) return null;
  if (/asian games|hockey/.test(blob)) return null;
  const homeFirst =
    /premier league|uefa|laliga|lega serie a|bundesliga|all india football|aiff|fifa|nations league|football|bcci|cricket|t20|odi|new zealand cricket|pakistan cricket/.test(
      blob
    );
  if (!homeFirst) return null;
  const parts = name.split(/\s+vs\.?\s+/i);
  if (parts.length !== 2) return null;
  const home = cleanSide(parts[0]);
  const away = cleanSide(parts[1]);
  if (!home || !away) return null;
  return { home, away };
}

function durationMinutes(post, ev) {
  if (!String(ev.startDate).includes("T")) return null;
  const blob = sportBlob(post, ev);
  if (/\bnfl\b|national football league/.test(blob)) return 210;
  if (/\bt20/.test(blob)) return 240;
  if (/\bodi\b/.test(blob)) return 480;
  if (/asian games|hockey|nba\b|formula|marathon|tennis|\batp\b|\bwta\b/.test(blob)) {
    return null;
  }
  const football =
    /premier league|uefa|laliga|lega serie a|bundesliga|all india football|aiff|fifa|nations league/.test(
      blob
    );
  if (football && /\bvs\b/.test(blob) && !/season start|season-start/.test(blob)) {
    return 120;
  }
  return null;
}

function formatWithOffset(instantMs, offset) {
  let offsetMinutes = 0;
  if (offset !== "Z") {
    const sign = offset.startsWith("-") ? -1 : 1;
    const [hours, mins] = offset.slice(1).split(":").map(Number);
    offsetMinutes = sign * (hours * 60 + mins);
  }
  const shifted = new Date(instantMs + offsetMinutes * 60000);
  const pad = (n) => String(n).padStart(2, "0");
  const stamp = `${shifted.getUTCFullYear()}-${pad(shifted.getUTCMonth() + 1)}-${pad(
    shifted.getUTCDate()
  )}T${pad(shifted.getUTCHours())}:${pad(shifted.getUTCMinutes())}:${pad(
    shifted.getUTCSeconds()
  )}`;
  return offset === "Z" ? `${stamp}Z` : `${stamp}${offset}`;
}

function addMinutesKeepingOffset(iso, minutes) {
  const match = String(iso).match(
    /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:\d{2}|Z)$/
  );
  if (!match) return null;
  const instant = Date.parse(iso);
  if (Number.isNaN(instant)) return null;
  return formatWithOffset(instant + minutes * 60000, match[5]);
}

function isoToMs(iso) {
  const value = String(iso || "");
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return Date.parse(`${value}T00:00:00Z`);
  if (/[+-]\d{2}:\d{2}$/.test(value) || value.endsWith("Z")) return Date.parse(value);
  if (/T/.test(value)) return Date.parse(`${value}Z`);
  return Number.NaN;
}

function isEndBeforeStart(endDate, startDate) {
  const end = isoToMs(endDate);
  const start = isoToMs(startDate);
  if (Number.isNaN(end) || Number.isNaN(start)) return false;
  return end < start;
}

function endOfLocalDay(startDate, ev) {
  const timed = String(startDate).match(
    /^(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:\d{2}([+-]\d{2}:\d{2}|Z)$/
  );
  if (timed) return `${timed[1]}T23:59:00${timed[2]}`;
  const day = String(startDate).match(/^(\d{4}-\d{2}-\d{2})/);
  if (!day) return null;
  const country =
    ev.location && typeof ev.location === "object" ? ev.location.addressCountry : "";
  const offset = STABLE_OFFSET_BY_COUNTRY[country];
  return offset ? `${day[1]}T23:59:00${offset}` : `${day[1]}T23:59:00`;
}

function resolveEndDate(post, ev) {
  if (ev.endDate && !isEndBeforeStart(ev.endDate, ev.startDate)) return ev.endDate;
  const minutes = durationMinutes(post, ev);
  if (minutes) {
    const added = addMinutesKeepingOffset(ev.startDate, minutes);
    if (added && !isEndBeforeStart(added, ev.startDate)) return added;
  }
  return endOfLocalDay(ev.startDate, ev);
}

function knownPerformer(ev) {
  if (typeof ev.performer === "string" && ev.performer.trim()) {
    return { "@type": "Person", name: ev.performer.trim() };
  }
  if (ev.performer && typeof ev.performer === "object" && ev.performer.name) {
    return {
      "@type": ev.performer["@type"] || "Person",
      name: String(ev.performer.name),
    };
  }
  const live = String(ev.name || "").match(/^(.+?)\s+live\s+(?:at|in)\b/i);
  if (!live) return null;
  const name = live[1].trim();
  if (!name) return null;
  const group = /guns n['’]? roses|\bband\b/i.test(name);
  return { "@type": group ? "MusicGroup" : "Person", name };
}

function resolveOffer(ev, post, organizer) {
  const direct =
    (ev.offers && typeof ev.offers === "object" && (ev.offers.url || ev.offers.href)) ||
    ev.ticketUrl ||
    ev.offerUrl;
  let url = null;
  if (typeof direct === "string" && direct.trim()) {
    url = /^https?:\/\//i.test(direct) ? direct.trim() : absoluteSiteUrl(direct.trim());
  } else if (organizer && organizer.offerUrl) {
    url = organizer.offerUrl;
  } else {
    url = absoluteSiteUrl(`/blog/${post.slug}`);
  }

  const offer = { "@type": "Offer", url };
  const priceSource =
    ev.price != null
      ? ev
      : ev.offers && typeof ev.offers === "object" && ev.offers.price != null
        ? ev.offers
        : null;
  if (priceSource && priceSource.priceCurrency) {
    offer.price = String(priceSource.price);
    offer.priceCurrency = String(priceSource.priceCurrency);
  }
  return offer;
}

function locationNode(ev, attendanceMode, offerUrl) {
  const place = ev.location;
  const name = typeof place === "string" ? place : place && place.name ? place.name : null;
  if (!name) return null;

  const online = String(attendanceMode).includes("OnlineEventAttendanceMode");
  if (online) {
    return {
      "@type": "VirtualLocation",
      name,
      url: offerUrl,
    };
  }

  const address =
    place && typeof place === "object"
      ? {
          "@type": "PostalAddress",
          ...(place.addressLocality ? { addressLocality: place.addressLocality } : {}),
          ...(place.addressRegion ? { addressRegion: place.addressRegion } : {}),
          ...(place.addressCountry ? { addressCountry: place.addressCountry } : {}),
        }
      : null;

  return {
    "@type": "Place",
    name,
    ...(address && Object.keys(address).length > 1 ? { address } : {}),
  };
}

/**
 * Optional per-post Event / SportsEvent JSON-LD.
 * Pass post.event = {
 *   type: "SportsEvent" | "Event",
 *   name, startDate (ISO), endDate?,
 *   location: { name, addressLocality?, addressRegion?, addressCountry? },
 *   organizer?: string,
 *   eventStatus?: string (default EventScheduled),
 *   eventAttendanceMode?: string (default OfflineEventAttendanceMode),
 *   homeTeam?, awayTeam?, performer?, price?, priceCurrency?
 * }
 * Trends explainers without a scheduled event object emit nothing.
 * Missing/invalid event objects are ignored so other posts stay unchanged.
 */
export function eventSchema(post) {
  if (!post || typeof post !== "object") return null;
  const ev = post.event;
  const scheduled =
    ev && typeof ev === "object" && ev.name && ev.startDate && ev.location;
  if (isTrendsExplainer(post) && !scheduled) return null;
  if (!scheduled) return null;

  const type = ev.type === "SportsEvent" ? "SportsEvent" : "Event";
  const attendanceMode = schemaOrgUrl(
    ev.eventAttendanceMode,
    "OfflineEventAttendanceMode"
  );
  const organizerRecord =
    ev.organizer && typeof ev.organizer === "object" && ev.organizer.url
      ? {
          name: ev.organizer.name,
          url: ev.organizer.url,
          offerUrl: ev.organizer.offerUrl || ev.organizer.url,
        }
      : lookupOrganizer(ev.organizer);
  const organizer =
    organizerRecord && organizerRecord.name && organizerRecord.url
      ? {
          "@type": "Organization",
          name: organizerRecord.name,
          url: organizerRecord.url,
        }
      : null;
  const offer = resolveOffer(ev, post, organizerRecord);
  const location = locationNode(ev, attendanceMode, offer.url);
  if (!location) return null;

  const endDate = resolveEndDate(post, ev);
  const description = eventDescription(post);
  const teams = knownTeams(post, ev);
  const performer = teams ? null : knownPerformer(ev);

  return {
    "@context": "https://schema.org",
    "@type": type,
    name: ev.name,
    startDate: ev.startDate,
    ...(endDate ? { endDate } : {}),
    ...(description ? { description } : {}),
    image: eventImage(post),
    eventStatus: schemaOrgUrl(ev.eventStatus, "EventScheduled"),
    eventAttendanceMode: attendanceMode,
    location,
    url: absoluteSiteUrl(`/blog/${post.slug}`),
    ...(organizer ? { organizer } : {}),
    offers: offer,
    ...(teams
      ? {
          homeTeam: { "@type": "SportsTeam", name: teams.home },
          awayTeam: { "@type": "SportsTeam", name: teams.away },
        }
      : {}),
    ...(performer ? { performer } : {}),
  };
}

export function articleSchema(post) {
  const canonical = absoluteSiteUrl(`/blog/${post.slug}`);
  const imageUrl = post.imageUrl
    ? post.imageUrl.startsWith("http")
      ? post.imageUrl
      : absoluteSiteUrl(post.imageUrl)
    : siteConfig.defaultOgImage;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonical}#article`,
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: post.author || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    url: canonical,
    isPartOf: {
      "@type": "Blog",
      "@id": absoluteSiteUrl("/blog"),
      name: "TheTriFusion Blog",
      publisher: {
        "@type": "Organization",
        name: siteConfig.legalName,
      },
    },
    keywords: post.keywords || post.category,
    about: post.category,
  };
}

export function creativeWorkSchema(project) {
  const liveUrl =
    typeof project.credit === "string" && /^https?:\/\//i.test(project.credit)
      ? project.credit
      : null;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description:
      project.description ||
      `${project.title} — ${project.type} project by ${siteConfig.name}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: absoluteSiteUrl(`/portfolio/${project.id}`),
    ...(liveUrl ? { sameAs: liveUrl } : {}),
  };
}
