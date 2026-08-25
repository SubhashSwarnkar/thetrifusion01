import { siteConfig, absoluteSiteUrl } from "config/site";

const HOME_DESCRIPTION =
  "Trifusion Infotech Private Limited (TheTriFusion) is a software development company in Jaipur, Rajasthan offering custom software, ecommerce websites, mobile apps, UI/UX, and digital marketing for businesses across India.";

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.legalNameShort],
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
      { "@type": "AdministrativeArea", name: siteConfig.region },
      { "@type": "Country", name: siteConfig.countryName },
    ],
    knowsLanguage: ["en-IN", "hi"],
    knowsAbout: [
      "Software Development",
      "Website Development",
      "Ecommerce Website Development",
      "Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "White-label Software Development",
      "UI/UX Design",
      "Digital Marketing",
      "RPA",
      "Branding",
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

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteSiteUrl(path),
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "AdministrativeArea", name: siteConfig.region },
      { "@type": "Country", name: siteConfig.countryName },
    ],
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

export function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl || siteConfig.defaultOgImage,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
    mainEntityOfPage: absoluteSiteUrl(`/blog/${post.slug}`),
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
