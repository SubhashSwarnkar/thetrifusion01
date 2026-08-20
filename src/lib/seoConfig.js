import { siteConfig, absoluteSiteUrl } from "config/site";

export const SITE_URL = siteConfig.url;
export const SITE_NAME = siteConfig.name;
export const SITE_TAGLINE = siteConfig.tagline;
export const DEFAULT_OG_IMAGE = siteConfig.defaultOgImage;

export const pages = {
  "/": {
    title:
      "Software Development Company in India | Web, Apps & Digital Marketing | TheTriFusion",
    description:
      "TheTriFusion is a software development company in India offering custom software, ecommerce websites, online stores, mobile apps, UI/UX, MSP support, and digital marketing for startups and enterprises.",
    keywords:
      "software development company India, best software company India, ecommerce website development, digital marketing agency, web development company India, mobile app development, TheTriFusion",
  },
  "/about": {
    title: "About TheTriFusion | Software Agency in India",
    description:
      "About TheTriFusion — a software agency in India delivering custom software, websites, mobile apps, ecommerce, and digital marketing from Bhilwara, Rajasthan to clients worldwide.",
    keywords:
      "software agency India, about TheTriFusion, IT company India, software development company Bhilwara, web development team",
  },
  "/services": {
    title:
      "IT & Digital Services | Software, Ecommerce, Apps & Marketing | TheTriFusion",
    description:
      "Explore TheTriFusion services: custom software development, ecommerce websites, online stores, mobile apps, UI/UX design, CRM/ERP, MSP support, and digital marketing in India.",
    keywords:
      "software development services, ecommerce website development, digital marketing services, mobile app development, web development company India",
  },
  "/solutions": {
    title:
      "Digital Solutions Hub | Software, Ecommerce & Marketing | TheTriFusion",
    description:
      "Browse TheTriFusion solution pages for software company India, ecommerce, online store development, digital marketing agency, MSP services, and more.",
    keywords:
      "software solutions India, ecommerce development, digital marketing agency, MSP services, web development company India",
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
    title: "Contact TheTriFusion | Software & Digital Marketing Company India",
    description:
      "Contact TheTriFusion for custom software, ecommerce websites, mobile apps, MSP support, and digital marketing. Get a free consultation from our India-based team.",
    keywords:
      "contact software company India, hire web developers India, ecommerce development quote, digital marketing consultation",
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
