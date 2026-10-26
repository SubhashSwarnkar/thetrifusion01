/**
 * Non-Jaipur /solutions city landings → matching money URL.
 * Keep next.config.mjs and internalLinks EXACT_REDIRECTS in sync via
 * SOLUTION_SERVICE_REDIRECTS (which spreads this list).
 *
 * Jaipur HQ pages stay live. Do not 301 Jaipur city URLs here.
 */

export const CITY_SOLUTION_SERVICE_REDIRECTS = [
  // Website (templated metros + Rajasthan service-area pages)
  {
    slug: "website-development-company-delhi",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-mumbai",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-bangalore",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-jodhpur",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-bhilwara",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-udaipur",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-kota",
    destination: "/services/website-development",
  },
  {
    slug: "website-development-company-ajmer",
    destination: "/services/website-development",
  },
  // Software
  {
    slug: "software-development-company-delhi",
    destination: "/services/software-development",
  },
  {
    slug: "software-development-company-mumbai",
    destination: "/services/software-development",
  },
  {
    slug: "software-development-company-bangalore",
    destination: "/services/software-development",
  },
  {
    slug: "software-development-company-jodhpur",
    destination: "/services/software-development",
  },
  // Mobile
  {
    slug: "mobile-app-development-company-delhi",
    destination: "/services/mobile-app-development",
  },
  {
    slug: "mobile-app-development-company-mumbai",
    destination: "/services/mobile-app-development",
  },
  {
    slug: "mobile-app-development-company-bangalore",
    destination: "/services/mobile-app-development",
  },
  {
    slug: "mobile-app-development-company-jodhpur",
    destination: "/services/mobile-app-development",
  },
  // Ecommerce → money ecommerce page (not a thin city duplicate)
  {
    slug: "ecommerce-website-development-delhi",
    destination: "/solutions/ecommerce-website-development",
  },
  {
    slug: "ecommerce-website-development-mumbai",
    destination: "/solutions/ecommerce-website-development",
  },
  {
    slug: "ecommerce-website-development-bangalore",
    destination: "/solutions/ecommerce-website-development",
  },
  {
    slug: "ecommerce-website-development-jodhpur",
    destination: "/solutions/ecommerce-website-development",
  },
  // Digital marketing
  {
    slug: "digital-marketing-company-delhi",
    destination: "/services/digital-marketing",
  },
  {
    slug: "digital-marketing-company-mumbai",
    destination: "/services/digital-marketing",
  },
  {
    slug: "digital-marketing-company-bangalore",
    destination: "/services/digital-marketing",
  },
  {
    slug: "digital-marketing-company-jodhpur",
    destination: "/services/digital-marketing",
  },
  // Fintech
  {
    slug: "fintech-app-development-delhi",
    destination: "/services/fintech-app-development",
  },
  {
    slug: "fintech-app-development-mumbai",
    destination: "/services/fintech-app-development",
  },
  {
    slug: "fintech-app-development-bangalore",
    destination: "/services/fintech-app-development",
  },
  {
    slug: "fintech-app-development-jodhpur",
    destination: "/services/fintech-app-development",
  },
];

export const CITY_REDIRECTED_SOLUTION_SLUGS = new Set(
  CITY_SOLUTION_SERVICE_REDIRECTS.map((item) => item.slug)
);
