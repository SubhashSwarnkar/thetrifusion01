// Blog Data
// Using placeholder images since blog images don't exist yet

// Blog Categories
export const blogCategories = [
  {
    id: "all",
    name: "All Posts",
    icon: "📰",
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: "🌐",
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    icon: "📱",
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    icon: "🎨",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: "📈",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Development Trends for 2024",
    slug: "10-essential-web-development-trends-2024",
    excerpt: "Discover the latest web development trends that are shaping the digital landscape in 2024. From AI integration to progressive web apps, stay ahead of the curve.",
    description: "A comprehensive guide to the most important web development trends for 2024",
    content: "",
    category: "web-development",
    author: "TheTriFusion Team",
    date: "2024-01-15",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    featured: true,
    tags: ["web development", "trends", "2024", "technology"],
  },
  {
    id: 2,
    title: "Building Responsive Mobile Apps: Best Practices",
    slug: "building-responsive-mobile-apps-best-practices",
    excerpt: "Learn the best practices for creating responsive and user-friendly mobile applications that work seamlessly across all devices and screen sizes.",
    description: "Expert tips for building responsive mobile applications",
    content: "",
    category: "mobile-apps",
    author: "TheTriFusion Team",
    date: "2024-01-10",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    featured: false,
    tags: ["mobile apps", "responsive design", "best practices"],
  },
  {
    id: 3,
    title: "The Future of UI/UX Design: What to Expect",
    slug: "future-of-ui-ux-design-what-to-expect",
    excerpt: "Explore the evolving landscape of UI/UX design and discover what trends and innovations are shaping the future of user experience.",
    description: "Insights into the future of UI/UX design",
    content: "",
    category: "ui-ux",
    author: "TheTriFusion Team",
    date: "2024-01-05",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    featured: false,
    tags: ["UI/UX", "design", "future trends"],
  },
  {
    id: 4,
    title: "Digital Marketing Strategies That Actually Work",
    slug: "digital-marketing-strategies-that-actually-work",
    excerpt: "Uncover proven digital marketing strategies that drive real results for businesses of all sizes. From SEO to social media, learn what works.",
    description: "Effective digital marketing strategies for modern businesses",
    content: "",
    category: "digital-marketing",
    author: "TheTriFusion Team",
    date: "2023-12-28",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    featured: false,
    tags: ["digital marketing", "SEO", "social media"],
  },
  {
    id: 5,
    title: "React vs Vue: Which Framework Should You Choose?",
    slug: "react-vs-vue-which-framework-should-you-choose",
    excerpt: "A detailed comparison between React and Vue.js to help you make an informed decision for your next web development project.",
    description: "Comprehensive comparison of React and Vue.js frameworks",
    content: "",
    category: "web-development",
    author: "TheTriFusion Team",
    date: "2023-12-20",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    featured: true,
    tags: ["React", "Vue", "JavaScript", "frameworks"],
  },
  {
    id: 6,
    title: "How to Optimize Your Website for Better Performance",
    slug: "how-to-optimize-your-website-for-better-performance",
    excerpt: "Learn essential techniques to improve your website's loading speed, user experience, and overall performance.",
    description: "Website optimization tips for better performance",
    content: "",
    category: "web-development",
    author: "TheTriFusion Team",
    date: "2023-12-15",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    featured: false,
    tags: ["performance", "optimization", "web development"],
  },
];

// Get blog post by slug
export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

// Get blogs by category
export function getBlogsByCategory(categoryId) {
  if (categoryId === "all") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === categoryId);
}

// Search blogs
export function searchBlogs(query) {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
