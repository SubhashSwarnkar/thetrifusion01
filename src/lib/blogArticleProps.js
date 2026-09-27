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

const BLOG_SOLUTION_MAP = {
  webdev: [
    "web-development-company-india",
    "ecommerce-website-development",
  ],
  mobile: ["mobile-app-development-company", "ui-ux-design-agency"],
  casestudy: [
    "ecommerce-website-development",
    "mobile-app-development-company",
  ],
  mlm: [
    "crm-erp-software-development",
    "custom-software-development-company",
  ],
  fintech: [
    "custom-software-development-company",
    "mobile-app-development-company",
  ],
  default: [
    "best-software-company-india",
    "custom-software-development-company",
  ],
};

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
  };
}

/** Ecommerce-topic posts always surface the primary ecommerce solution page. */
const ECOMMERCE_TOPIC_RE =
  /ecommerce|e-commerce|online-store|shopify|woocommerce|\bd2c\b|ondc|multi-vendor|marketplace|quick-commerce/i;
const PRIMARY_ECOMMERCE_SOLUTION = "ecommerce-website-development";

export function isEcommerceTopicPost(post) {
  if (!post) return false;
  if (ECOMMERCE_TOPIC_RE.test(post.slug || "")) return true;
  return (post.tags || []).some((tag) => ECOMMERCE_TOPIC_RE.test(String(tag)));
}

export function getBlogArticleView(post) {
  const category = blogCategories.find((cat) => cat.id === post.category);
  const isEcommerceTopic = isEcommerceTopicPost(post);
  const baseSolutionSlugs =
    BLOG_SOLUTION_MAP[post.category] || BLOG_SOLUTION_MAP.default;
  const relatedSolutions = (
    isEcommerceTopic
      ? [
          PRIMARY_ECOMMERCE_SOLUTION,
          ...baseSolutionSlugs.filter((s) => s !== PRIMARY_ECOMMERCE_SOLUTION),
        ]
      : baseSolutionSlugs
  )
    .map((slug) => getSeoLandingBySlug(slug))
    .filter(Boolean)
    .slice(0, 2)
    .map((solution) => ({
      slug: solution.slug,
      h1: solution.h1,
      outcomeLine: solution.outcomeLine,
    }));

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
    categoryName: category?.name || post.category,
    relatedSolutions,
    relatedServices,
    relatedPosts,
    isEcommerceTopic,
  };
}
