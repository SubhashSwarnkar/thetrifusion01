import React from "react";

// Blog Data
export const blogCategories = [
  { id: "all", name: "All Posts", icon: "📝" },
  { id: "web-development", name: "Web Development", icon: "🌐" },
  { id: "mobile-development", name: "Mobile Development", icon: "📱" },
  { id: "ui-ux", name: "UI/UX Design", icon: "🎨" },
  { id: "digital-marketing", name: "Digital Marketing", icon: "📈" },
  { id: "business", name: "Business", icon: "💼" },
  { id: "technology", name: "Technology", icon: "⚡" },
  { id: "cloud-devops", name: "Cloud & DevOps", icon: "☁️" },
  { id: "software-development", name: "Software Development", icon: "💻" },
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Development Trends for 2024",
    slug: "10-essential-web-development-trends-2024",
    category: "web-development",
    author: "TheTriFusion Team",
    date: "2024-01-15",
    readTime: "5 min read",
    excerpt: "Discover the latest web development trends that will shape the digital landscape in 2024. From AI integration to progressive web apps, stay ahead of the curve.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Web.png",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose the Right Mobile App Development Framework",
    slug: "choose-right-mobile-app-development-framework",
    category: "mobile-development",
    author: "TheTriFusion Team",
    date: "2024-01-10",
    readTime: "7 min read",
    excerpt: "A comprehensive guide to choosing between React Native, Flutter, and native development for your mobile app project.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Mobile.png",
    featured: true,
  },
  {
    id: 3,
    title: "UI/UX Design Principles Every Developer Should Know",
    slug: "ui-ux-design-principles-for-developers",
    category: "ui-ux",
    author: "TheTriFusion Team",
    date: "2024-01-05",
    readTime: "6 min read",
    excerpt: "Learn the fundamental UI/UX design principles that can help developers create more user-friendly and intuitive applications.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Design.png",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Marketing Strategies for Small Businesses in 2024",
    slug: "digital-marketing-strategies-small-businesses-2024",
    category: "digital-marketing",
    author: "TheTriFusion Team",
    date: "2024-01-01",
    readTime: "8 min read",
    excerpt: "Effective digital marketing strategies that small businesses can implement to grow their online presence and attract more customers.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Web.png",
    featured: false,
  },
  {
    id: 5,
    title: "The Future of E-commerce: Trends and Predictions",
    slug: "future-of-ecommerce-trends-predictions",
    category: "business",
    author: "TheTriFusion Team",
    date: "2023-12-28",
    readTime: "6 min read",
    excerpt: "Explore the emerging trends in e-commerce and how businesses can prepare for the future of online shopping.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Web.png",
    featured: false,
  },
  {
    id: 6,
    title: "React vs Vue vs Angular: Which Framework to Choose?",
    slug: "react-vs-vue-vs-angular-which-framework",
    category: "web-development",
    author: "TheTriFusion Team",
    date: "2023-12-25",
    readTime: "9 min read",
    excerpt: "A detailed comparison of the three most popular JavaScript frameworks to help you make an informed decision for your next project.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Web.png",
    featured: false,
  },
  {
    id: 7,
    title: "Building Scalable Web Applications: Best Practices",
    slug: "building-scalable-web-applications-best-practices",
    category: "web-development",
    author: "TheTriFusion Team",
    date: "2023-12-20",
    readTime: "7 min read",
    excerpt: "Learn the best practices for building web applications that can scale with your business growth.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Web.png",
    featured: false,
  },
  {
    id: 8,
    title: "Mobile App Security: Essential Tips for Developers",
    slug: "mobile-app-security-essential-tips",
    category: "mobile-development",
    author: "TheTriFusion Team",
    date: "2023-12-15",
    readTime: "5 min read",
    excerpt: "Essential security practices every mobile app developer should implement to protect user data and prevent vulnerabilities.",
    content: "Full blog post content here...",
    imageUrl: "/assets/images/Services/Mobile.png",
    featured: false,
  },
];

// Helper functions
export const getBlogBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getBlogsByCategory = (categoryId) => {
  if (categoryId === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === categoryId);
};

export const getFeaturedBlogs = () => {
  return blogPosts.filter((post) => post.featured);
};

export const searchBlogs = (query) => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery)
  );
};

