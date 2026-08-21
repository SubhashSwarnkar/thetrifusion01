import { siteConfig, absoluteSiteUrl } from "config/site";

const HOME_DESCRIPTION =
  "Trifusion Infotech Private Limited (TheTriFusion) is a software development company in Bhilwara, Rajasthan offering custom software, ecommerce websites, mobile apps, UI/UX, and digital marketing for businesses across India.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.legalNameShort],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
    image: siteConfig.defaultOgImage,
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
      { "@type": "City", name: siteConfig.city },
      { "@type": "AdministrativeArea", name: siteConfig.region },
      { "@type": "Country", name: siteConfig.countryName },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: [
      "Software Development",
      "Ecommerce Website Development",
      "Online Store Development",
      "Digital Marketing",
      "Mobile App Development",
      "UI/UX Design",
      "CRM and ERP Software",
      "Managed IT Services",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      url: absoluteSiteUrl("/contact"),
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IN",
    description: HOME_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      brand: siteConfig.name,
    },
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
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.countryName,
    },
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
  };
}
