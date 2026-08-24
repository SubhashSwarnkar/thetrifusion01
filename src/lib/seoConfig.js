import { siteConfig, absoluteSiteUrl } from "config/site";

export const SITE_URL = siteConfig.url;
export const SITE_NAME = siteConfig.name;
export const SITE_TAGLINE = siteConfig.tagline;
export const DEFAULT_OG_IMAGE = siteConfig.defaultOgImage;

export const pages = {
  "/": {
    title:
      "Software Company in Jaipur, Rajasthan | Web, Apps & Digital Marketing | TheTriFusion",
    description:
      "Trifusion Infotech Private Limited (TheTriFusion) is a software company in Jaipur, Rajasthan offering websites, ecommerce, mobile apps, UI/UX, and digital marketing for businesses across India.",
    keywords:
      "software company Jaipur, web development company Rajasthan, website development Jaipur, software development company India, ecommerce website development, TheTriFusion",
  },
  "/about": {
    title: "About TheTriFusion | Software Agency in Jaipur, Rajasthan",
    description:
      "About Trifusion Infotech Private Limited (TheTriFusion) — a software agency in Jaipur, Rajasthan delivering custom software, websites, mobile apps, ecommerce, and digital marketing across India.",
    keywords:
      "software company Jaipur, IT company Rajasthan, about TheTriFusion, software agency India, web development team Jaipur",
  },
  "/services": {
    title:
      "IT Services in Jaipur | Software, Websites, Apps & Marketing | TheTriFusion",
    description:
      "TheTriFusion services from Jaipur, Rajasthan: custom software, ecommerce websites, mobile apps, UI/UX, CRM/ERP, MSP support, and digital marketing for Indian businesses.",
    keywords:
      "IT services Jaipur, website development Rajasthan, software development services, ecommerce website development, mobile app development India",
  },
  "/solutions": {
    title:
      "Digital Solutions Hub | Jaipur, Rajasthan & India | TheTriFusion",
    description:
      "TheTriFusion solution pages for website development in Jaipur, software company Rajasthan, ecommerce, apps, and digital marketing.",
    keywords:
      "website development company Jaipur, software company Rajasthan, web development Jaipur, ecommerce development, digital marketing agency India",
  },
  "/portfolio": {
    title: "Our Portfolio | TheTriFusion",
    description:
      "Explore successful websites and mobile apps built by TheTriFusion for startups and growing businesses.",
    keywords:
      "portfolio, case studies, web development projects, mobile app projects, TheTriFusion work",
  },
  "/pricing": {
    title: "Pricing Plans | TheTriFusion",
    description:
      "Transparent pricing for websites, mobile apps, and digital services. Choose a plan that fits your business.",
    keywords:
      "pricing, website cost, mobile app cost, web development packages, TheTriFusion pricing",
  },
  "/pricing/calculator": {
    title: "Price Calculator | TheTriFusion",
    description:
      "Estimate project cost instantly for websites, apps, and digital services based on your requirements.",
    keywords:
      "price calculator, project cost estimator, website cost calculator, app pricing",
  },
  "/contact": {
    title: "Contact TheTriFusion in Jaipur | Software Company Rajasthan",
    description:
      "Contact TheTriFusion in Jaipur, Rajasthan for websites, apps, ecommerce, and digital marketing. Call, WhatsApp, or book a free consultation.",
    keywords:
      "contact software company Jaipur, hire web developers Rajasthan, website development quote Jaipur, TheTriFusion contact",
  },
  "/team": {
    title: "Our Team | TheTriFusion",
    description:
      "Meet the developers, designers, and project managers behind TheTriFusion.",
    keywords:
      "TheTriFusion team, developers, designers, project managers, software team",
  },
  "/blog": {
    title: "Blog | TheTriFusion — Insights & Articles",
    description:
      "Articles on web development, mobile apps, AI, cybersecurity, and technology trends from TheTriFusion.",
    keywords:
      "blog, web development blog, mobile app blog, technology insights, TheTriFusion blog",
  },
  "/faq": {
    title: "FAQ | TheTriFusion",
    description:
      "Answers about TheTriFusion services, pricing, timelines, payments, and support.",
    keywords: "FAQ, frequently asked questions, TheTriFusion help, support",
  },
  "/appointment": {
    title: "Book an Appointment | TheTriFusion",
    description:
      "Schedule a consultation with TheTriFusion to discuss your website, app, or digital project.",
    keywords: "book appointment, consultation, meeting, TheTriFusion booking",
  },
  "/discuss-project": {
    title: "Discuss Your Project | TheTriFusion",
    description:
      "Share your project idea and get expert consultation and planning from TheTriFusion.",
    keywords: "discuss project, project consultation, get quote, project planning",
  },
  "/estimate": {
    title: "AI Project Estimator | TheTriFusion",
    description:
      "Get AI-powered estimates for cost, timeline, and features for your software project.",
    keywords:
      "AI estimator, project estimator, cost estimator, timeline calculator",
  },
  "/planner": {
    title: "Visual Page Planner | TheTriFusion",
    description:
      "Plan your website structure visually and get real-time pricing for the pages you need.",
    keywords: "page planner, website planner, site structure, website builder",
  },
  "/timeline": {
    title: "Timeline Calculator | TheTriFusion",
    description:
      "Estimate project milestones and delivery timelines based on project type and complexity.",
    keywords:
      "timeline calculator, project timeline, development duration, delivery estimate",
  },
  "/privacy": {
    title: "Privacy Policy | TheTriFusion",
    description:
      "How Trifusion Infotech Private Limited in Jaipur handles enquiry and website data.",
    keywords: "privacy policy, TheTriFusion, data protection",
  },
  "/terms": {
    title: "Terms of Service | TheTriFusion",
    description:
      "Terms for using the TheTriFusion website and requesting software project work.",
    keywords: "terms of service, TheTriFusion",
  },
};

export function absoluteUrl(path = "/") {
  return absoluteSiteUrl(path);
}

function robotsFor(noIndex) {
  return {
    index: !noIndex,
    follow: !noIndex,
    googleBot: {
      index: !noIndex,
      follow: !noIndex,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

/** Tool / utility routes that should stay out of the index. */
export const NOINDEX_PATHS = new Set([
  "/estimate",
  "/planner",
  "/timeline",
  "/pricing/calculator",
]);

export function pageMetadata(path, options = {}) {
  const page = pages[path] || pages["/"];
  const url = absoluteUrl(path === "/" ? "/" : path);
  const noIndex = Boolean(options.noIndex || NOINDEX_PATHS.has(path));

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: siteConfig.locale,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: robotsFor(noIndex),
  };
}

export function buildMetadata({
  title,
  description,
  keywords,
  path,
  type = "website",
  image,
  publishedTime,
  authors,
  noIndex = false,
}) {
  const url = absoluteUrl(path);
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : DEFAULT_OG_IMAGE;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: siteConfig.locale,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: robotsFor(noIndex),
  };
}

/** Compatibility wrappers — prefer importing from lib/schema */
export {
  organizationSchema as organizationJsonLd,
  websiteSchema as websiteJsonLd,
  articleSchema as articleJsonLd,
  faqSchema as faqPageJsonLd,
  breadcrumbSchema as breadcrumbJsonLd,
} from "lib/schema";
