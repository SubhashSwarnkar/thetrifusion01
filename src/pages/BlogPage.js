import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import {
  blogCategories,
  blogPosts,
  getBlogsByCategory,
  searchBlogs,
} from "data/blogData";
import SEO from "components/common/SEO";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState(blogPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    if (searchQuery.trim()) {
      filtered = searchBlogs(searchQuery);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setDisplayedPosts(filtered);
  }, [selectedCategory, searchQuery]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <SEO 
        title="Blog" 
        description="Insights, tutorials, and trends in software development, design, and technology."
      />
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-5xl text-theme-blue text-center font-bold mb-3">
            Our Blog
          </h1>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Stay updated with the latest trends, tips, and insights in web development, mobile apps, and digital marketing.
          </p>
        </Fade>

        {/* Search Bar */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 pr-12 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-theme-purple text-lg bg-white text-gray-900"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </Fade>

        {/* Category Filter */}
        <Fade direction="up" delay={400} triggerOnce>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition duration-200 ${
                  selectedCategory === category.id
                    ? "bg-theme-purple text-white shadow-lg"
                    : "bg-white text-theme-blue border-2 border-theme-purple hover:bg-light-theme-purple"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </Fade>

        {/* Blog Posts Grid */}
        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <Fade key={post.id} direction="up" delay={index * 100} triggerOnce>
                <Link to={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-2xl shadow-xl border border-light-theme-purple overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer h-full flex flex-col">
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {post.featured && (
                        <div className="absolute top-4 right-4 bg-theme-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl text-theme-blue font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="px-3 py-1 bg-light-theme-purple text-theme-purple rounded-full text-sm font-medium">
                          {blogCategories.find((cat) => cat.id === post.category)?.name || post.category}
                        </span>
                        <span className="text-theme-purple font-medium hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Fade>
            ))}
          </div>
        ) : (
          <Fade direction="up" triggerOnce>
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No blog posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200"
              >
                Clear Filters
              </button>
            </div>
          </Fade>
        )}
      </section>
      <Footer />
    </>
  );
}

