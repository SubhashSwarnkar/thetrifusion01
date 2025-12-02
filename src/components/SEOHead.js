import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getServiceBySlug } from "data/servicesData";
import { getTemplateById } from "data/templatesData";
import { getBlogBySlug } from "data/blogData";
import { Portfolios } from "json/landingPageData";

// SEO data for different pages
const seoData = {
  "/": {
    title: "TheTriFusion | IT Solutions, Websites & Mobile Apps",
    description: "TheTriFusion offers custom websites, mobile apps, and digital marketing solutions at budget-friendly rates. Helping startups & businesses achieve their online goals.",
    keywords: "web development, mobile app development, UI/UX design, digital marketing, software development, India",
  },
  "/services": {
    title: "Our Services | TheTriFusion",
    description: "Comprehensive IT services including web development, mobile apps, UI/UX design, digital marketing, and more. Professional solutions for your business.",
    keywords: "web development services, mobile app development, UI/UX design services, digital marketing",
  },
  "/portfolio": {
    title: "Our Portfolio | TheTriFusion",
    description: "Explore our portfolio of successful projects. See how we've helped businesses grow with our web and mobile solutions.",
    keywords: "portfolio, projects, case studies, web development projects",
  },
  "/project": {
    title: "Our Portfolio | TheTriFusion",
    description: "Explore our portfolio of successful projects. See how we've helped businesses grow with our web and mobile solutions.",
    keywords: "portfolio, projects, case studies, web development projects",
  },
  "/pricing": {
    title: "Pricing Plans | TheTriFusion",
    description: "Affordable pricing plans for web development, mobile apps, and digital services. Choose the perfect plan for your business needs.",
    keywords: "pricing, packages, web development cost, mobile app cost",
  },
  "/pricing/calculator": {
    title: "Price Calculator | TheTriFusion",
    description: "Get an instant price estimate for your project. Calculate costs for web development, mobile apps, and digital services based on your requirements.",
    keywords: "price calculator, project cost estimator, web development cost calculator, mobile app pricing",
  },
  "/about": {
    title: "About Us | TheTriFusion",
    description: "Learn about TheTriFusion - a leading software development company in India. Our mission, vision, and team dedicated to your success.",
    keywords: "about us, company, team, software development company",
  },
  "/contact": {
    title: "Contact Us | TheTriFusion",
    description: "Get in touch with TheTriFusion. We're here to help with your web development, mobile app, and digital marketing needs.",
    keywords: "contact, get in touch, support, inquiry",
  },
  "/templates": {
    title: "Website Templates | TheTriFusion",
    description: "Browse our collection of professional website templates. Industry-specific templates for gym, restaurant, education, and more.",
    keywords: "website templates, templates, pre-built websites",
  },
  "/templates/selector": {
    title: "Select Your Industry Template | TheTriFusion",
    description: "Choose your industry to find the perfect website template. Browse templates designed specifically for gym, restaurant, education, healthcare, and e-commerce businesses.",
    keywords: "industry templates, website templates by industry, business templates, industry-specific websites",
  },
  "/estimate": {
    title: "AI Project Estimator | TheTriFusion",
    description: "Get instant AI-powered project estimates for cost, timeline, and features. Describe your project idea and receive detailed estimates from our AI assistant.",
    keywords: "AI estimator, project estimator, cost estimator, timeline calculator, AI project estimation",
  },
  "/planner": {
    title: "Visual Page Planner | TheTriFusion",
    description: "Plan your website structure visually. Select the pages you need and get real-time pricing. Build your perfect website with our interactive page planner.",
    keywords: "page planner, website planner, site structure planner, website builder",
  },
  "/timeline": {
    title: "Timeline Calculator | TheTriFusion",
    description: "Estimate your project timeline with our timeline calculator. Get detailed project milestones and completion dates based on your project type and complexity.",
    keywords: "timeline calculator, project timeline, development timeline, project duration estimator",
  },
  "/team": {
    title: "Our Team | TheTriFusion",
    description: "Meet the talented team behind TheTriFusion. Our skilled developers, designers, and project managers are dedicated to delivering exceptional results.",
    keywords: "team, developers, designers, project managers, software development team",
  },
  "/discuss-project": {
    title: "Discuss Your Project | TheTriFusion",
    description: "Share your project idea with us. Get expert consultation and detailed project planning. Let's discuss how we can bring your vision to life.",
    keywords: "discuss project, project consultation, project planning, get quote",
  },
  "/faq": {
    title: "Frequently Asked Questions | TheTriFusion",
    description: "Find answers to common questions about our services, pricing, payment methods, and support. Get instant answers to your queries.",
    keywords: "FAQ, frequently asked questions, help, support",
  },
  "/blog": {
    title: "Blog | TheTriFusion - Latest Articles & Insights",
    description: "Read our latest blog posts about web development, mobile apps, UI/UX design, digital marketing, and technology trends. Stay updated with industry insights.",
    keywords: "blog, articles, web development blog, mobile app blog, technology blog, IT blog",
  },
  // 404 page will be handled separately
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    let seo;
    
    // Handle dynamic routes
    if (currentPath.startsWith("/services/")) {
      // Service detail page
      const slug = currentPath.split("/services/")[1];
      const service = getServiceBySlug(slug);
      if (service) {
        seo = {
          title: `${service.title} | TheTriFusion Services`,
          description: service.description || service.shortDescription,
          keywords: `${service.title.toLowerCase()}, ${service.slug}, web development, mobile app, UI/UX design, software development`,
        };
      } else {
        seo = seoData["/services"] || seoData["/"];
      }
    } else if (currentPath.startsWith("/project/") || currentPath.startsWith("/portfolio/")) {
      // Project/Portfolio detail page
      const id = currentPath.split("/").pop();
      const project = Portfolios.find((p) => p.id === id);
      if (project) {
        seo = {
          title: `${project.title} | Portfolio | TheTriFusion`,
          description: project.description || `View ${project.title} project by TheTriFusion. ${project.type} project showcasing our expertise.`,
          keywords: `${project.title}, portfolio, ${project.type.toLowerCase()}, case study, web development project, mobile app project`,
        };
      } else {
        seo = seoData["/portfolio"] || seoData["/"];
      }
    } else if (currentPath.startsWith("/templates/") && currentPath !== "/templates/selector") {
      // Template detail page
      const id = currentPath.split("/templates/")[1];
      const template = getTemplateById(id);
      if (template) {
        seo = {
          title: `${template.name} - ${template.category} Template | TheTriFusion`,
          description: `${template.description} Buy ${template.name} template for ₹${template.price.toLocaleString()}. ${template.category} website template.`,
          keywords: `${template.name}, ${template.category.toLowerCase()} template, website template, ${template.industry} template, pre-built website`,
        };
      } else {
        seo = seoData["/templates"] || seoData["/"];
      }
    } else if (currentPath.startsWith("/blog/")) {
      // Blog detail page
      const slug = currentPath.split("/blog/")[1];
      const post = getBlogBySlug(slug);
      if (post) {
        seo = {
          title: `${post.title} | TheTriFusion Blog`,
          description: post.excerpt || post.description || `Read ${post.title} on TheTriFusion blog. ${post.readTime} read.`,
          keywords: `${post.title}, blog, ${post.category}, web development, technology, ${post.tags?.join(", ") || ""}`,
        };
      } else {
        seo = seoData["/blog"] || seoData["/"];
      }
    } else {
      // Static routes
      seo = seoData[currentPath];
      if (!seo) {
        // Default/404 page SEO
        seo = {
          title: "Page Not Found | TheTriFusion",
          description: "The page you're looking for doesn't exist. Return to TheTriFusion homepage to explore our services, portfolio, and more.",
          keywords: "404, page not found, error",
        };
      }
    }

    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seo.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", seo.keywords);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", seo.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", seo.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", window.location.href);

    // Update og:type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.setAttribute("content", "website");

    // Update og:image (using default site image)
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", `${window.location.origin}/logo.svg`);

    // Update Twitter Card tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute("content", "summary_large_image");

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute("content", seo.title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute("content", seo.description);
  }, [location]);

  return null;
}

