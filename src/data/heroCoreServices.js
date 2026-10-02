import { serviceNav } from "./serviceNav";
import { SERVICE_MENU_GROUPS } from "./serviceMenu";

/**
 * Real offers that have their own page but are not rows in the services menu.
 * City, buyer-guide, and redirected /solutions pages stay out — they repeat a
 * service already linked above.
 */
const ADDITIONAL_OFFERS = {
  Build: [
    {
      slug: "white-label-development",
      label: "White-label Development",
      href: "/white-label-development",
    },
  ],
  Grow: [
    {
      slug: "msp-managed-it-services",
      label: "MSP & Managed IT Services",
      href: "/solutions/msp-managed-it-services",
    },
  ],
};

/** Commercial anchors already emphasized on the homepage. */
const HIGHLIGHT_SLUGS = new Set([
  "website-development",
  "mobile-app-development",
  "ecommerce-website-development",
  "ecommerce-development",
]);

function offersFromMenu() {
  const bySlug = new Map(serviceNav.map((item) => [item.slug, item]));

  return SERVICE_MENU_GROUPS.map((group) => {
    const items = [];

    for (const extra of group.extras || []) {
      items.push({
        slug: extra.slug,
        label: extra.title,
        href: extra.href,
        highlight: HIGHLIGHT_SLUGS.has(extra.slug),
      });
    }

    for (const slug of group.slugs) {
      const service = bySlug.get(slug);
      if (!service) continue;
      items.push({
        slug: service.slug,
        label: service.title,
        href: `/services/${service.slug}`,
        highlight: HIGHLIGHT_SLUGS.has(service.slug),
      });
    }

    for (const extra of ADDITIONAL_OFFERS[group.heading] || []) {
      items.push({
        ...extra,
        highlight: HIGHLIGHT_SLUGS.has(extra.slug),
      });
    }

    return { heading: group.heading, items };
  });
}

export const heroCoreGroups = offersFromMenu();
