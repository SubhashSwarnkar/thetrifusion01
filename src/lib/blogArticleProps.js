import {
  blogCategories,
  getPublishedBlogPosts,
  isArchivedPost,
} from "data/blogData";
import { getSeoLandingBySlug } from "data/seoLandingPages";
import { getServiceBySlug } from "data/servicesData";

/** Service URLs already anchored in the article body. */
function serviceHrefsInHtml(html) {
  const found = new Set();
  const source = typeof html === "string" ? html : "";
  const re = /href="(\/services\/[^"#?]+)/g;
  let match;
  while ((match = re.exec(source))) {
    const href = match[1].replace(/\/$/, "");
    found.add(
      href === "/services/web-development"
        ? "/services/website-development"
        : href
    );
  }
  return found;
}

/** Related cards on blog posts. Merged solutions point at the /services twin. */
const BLOG_RELATED = {
  webdev: [
    { type: "service", slug: "website-development" },
    { type: "solution", slug: "ecommerce-website-development" },
  ],
  mobile: [
    { type: "service", slug: "mobile-app-development" },
    { type: "service", slug: "ui-ux-design" },
  ],
  casestudy: [
    { type: "solution", slug: "ecommerce-website-development" },
    { type: "service", slug: "mobile-app-development" },
  ],
  mlm: [
    { type: "service", slug: "crm-erp-development" },
    { type: "service", slug: "software-development" },
  ],
  fintech: [
    { type: "service", slug: "software-development" },
    { type: "service", slug: "mobile-app-development" },
  ],
  default: [
    { type: "solution", slug: "best-software-company-india" },
    { type: "service", slug: "software-development" },
  ],
};

function relatedCard(item) {
  if (!item) return null;
  if (item.type === "service") {
    const service = getServiceBySlug(item.slug);
    if (!service) return null;
    return {
      slug: service.slug,
      h1: service.bannerTitle || service.title,
      outcomeLine: service.shortDescription,
      href: `/services/${service.slug}`,
    };
  }
  const solution = getSeoLandingBySlug(item.slug);
  if (!solution) return null;
  return {
    slug: solution.slug,
    h1: solution.h1,
    outcomeLine: solution.outcomeLine,
    href: `/solutions/${solution.slug}`,
  };
}

/** Fields the blog index needs. Omits article HTML so it stays off the client bundle. */
export function toBlogCard(post) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    author: post.author,
    imageUrl: post.imageUrl,
    featured: Boolean(post.featured),
    event: Boolean(post.event),
  };
}

/** Ecommerce-topic posts always surface the primary ecommerce solution page. */
const ECOMMERCE_TOPIC_RE =
  /ecommerce|e-commerce|online-store|shopify|woocommerce|\bd2c\b|ondc|store|multi-vendor|marketplace|quick-commerce/i;
const EV_TOPIC_RE = /\bev\b|charging|ocpp|ocpi|electric[- ]vehicles?/i;
const PRIMARY_ECOMMERCE_SOLUTION = "ecommerce-website-development";

export function isEcommerceTopicPost(post) {
  if (!post) return false;
  if (ECOMMERCE_TOPIC_RE.test(post.slug || "")) return true;
  return (post.tags || []).some((tag) => ECOMMERCE_TOPIC_RE.test(String(tag)));
}

export function isEvTopicPost(post) {
  if (!post) return false;
  const tags = (post.tags || []).join(" ");
  return EV_TOPIC_RE.test(`${post.slug || ""} ${post.title || ""} ${tags}`);
}

export function getBlogArticleView(post) {
  const category = blogCategories.find((cat) => cat.id === post.category);
  const isEcommerceTopic = isEcommerceTopicPost(post);
  const baseRelated = BLOG_RELATED[post.category] || BLOG_RELATED.default;
  const relatedItems = isEcommerceTopic
    ? [
        { type: "solution", slug: PRIMARY_ECOMMERCE_SOLUTION },
        ...baseRelated.filter(
          (item) =>
            !(
              item.type === "solution" &&
              item.slug === PRIMARY_ECOMMERCE_SOLUTION
            )
        ),
      ]
    : baseRelated;
  const relatedSolutions = relatedItems
    .map(relatedCard)
    .filter(Boolean)
    .slice(0, 2);

  if (isEvTopicPost(post)) {
    const evService = getServiceBySlug("ev-charging-app-development");
    if (
      evService &&
      !relatedSolutions.some((item) => item.href === "/services/ev-charging-app-development")
    ) {
      relatedSolutions.push({
        slug: evService.slug,
        h1: evService.title,
        outcomeLine: evService.shortDescription,
        href: "/services/ev-charging-app-development",
      });
    }
  }

  const linkedServiceHrefs = serviceHrefsInHtml(post.content);
  const relatedServices = [];
  for (const serviceSlug of post.relatedServiceSlugs || []) {
    const service = getServiceBySlug(serviceSlug);
    if (!service) continue;
    const href = `/services/${service.slug}`;
    if (linkedServiceHrefs.has(href)) continue;
    linkedServiceHrefs.add(href);
    relatedServices.push({
      slug: service.slug,
      title: service.title,
      shortDescription: service.shortDescription,
    });
    if (relatedServices.length === 2) break;
  }

  const relatedPosts = getPublishedBlogPosts()
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.category === post.category &&
        !isArchivedPost(item.slug)
    )
    .slice(0, 2)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
    }));

  return {
    post: {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      readTime: post.readTime,
      author: post.author,
      category: post.category,
    },
    categoryName: post.event ? "Events" : category?.name || post.category,
    relatedSolutions,
    relatedServices,
    relatedPosts,
    isEcommerceTopic,
  };
}
