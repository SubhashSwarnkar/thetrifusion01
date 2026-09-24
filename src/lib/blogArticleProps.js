import {
  blogCategories,
  getPublishedBlogPosts,
  isArchivedPost,
} from "data/blogData";
import { getSeoLandingBySlug } from "data/seoLandingPages";
import { getServiceBySlug } from "data/servicesData";

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

export function getBlogArticleView(post) {
  const category = blogCategories.find((cat) => cat.id === post.category);
  const relatedSolutions = (
    BLOG_SOLUTION_MAP[post.category] || BLOG_SOLUTION_MAP.default
  )
    .map((slug) => getSeoLandingBySlug(slug))
    .filter(Boolean)
    .slice(0, 2)
    .map((solution) => ({
      slug: solution.slug,
      h1: solution.h1,
      outcomeLine: solution.outcomeLine,
    }));

  const relatedServices = (post.relatedServiceSlugs || [])
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean)
    .slice(0, 2)
    .map((service) => ({
      slug: service.slug,
      title: service.title,
      shortDescription: service.shortDescription,
    }));

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
  };
}
