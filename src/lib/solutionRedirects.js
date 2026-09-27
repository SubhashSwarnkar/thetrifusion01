/**
 * Near-duplicate /solutions pages merged into the matching /services page.
 * City pages, /solutions, ecommerce, and the general Jaipur company page stay.
 * Keep next.config.mjs in sync with this list.
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
