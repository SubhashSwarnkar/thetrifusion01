import { CITY_SOLUTION_SERVICE_REDIRECTS } from "lib/citySolutionRedirects";

/**
 * Near-duplicate /solutions pages merged into the matching /services page.
 * Jaipur HQ city pages, /solutions hub, ecommerce, MSP, the buyer guide, and
 * software-company-rajasthan stay. Non-Jaipur city landings 301 to the
 * matching service (or ecommerce money page). Keep next.config.mjs in sync.
 */
export const SOLUTION_SERVICE_REDIRECTS = [
  {
    slug: "android-app-development-company-jaipur",
    destination: "/services/android-app-development",
  },
  {
    slug: "web-development-company-jaipur",
    destination: "/services/website-development",
  },
  {
    slug: "web-development-company-india",
    destination: "/services/website-development",
  },
  {
    slug: "custom-software-development-company",
    destination: "/services/software-development",
  },
  {
    slug: "crm-erp-software-development",
    destination: "/services/crm-erp-development",
  },
  {
    slug: "ui-ux-design-agency",
    destination: "/services/ui-ux-design",
  },
  {
    slug: "digital-marketing-agency",
    destination: "/services/digital-marketing",
  },
  {
    slug: "mobile-app-development-company",
    destination: "/services/mobile-app-development",
  },
  {
    slug: "software-development-company-jaipur",
    destination: "/services/software-development",
  },
  ...CITY_SOLUTION_SERVICE_REDIRECTS,
];

export const REDIRECTED_SOLUTION_SLUGS = new Set(
  SOLUTION_SERVICE_REDIRECTS.map((item) => item.slug)
);

export function solutionRedirectDestination(slug) {
  return (
    SOLUTION_SERVICE_REDIRECTS.find((item) => item.slug === slug)?.destination ||
    null
  );
}
