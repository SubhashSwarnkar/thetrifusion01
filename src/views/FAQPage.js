"use client";

import React, { useState, useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import { faqCategories, faqs, getFaqsByCategory, searchFaqs } from "data/faqData";
import SEO from "components/common/SEO";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState([]);
  const [displayedFaqs, setDisplayedFaqs] = useState(faqs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = faqs;
    
    if (searchQuery.trim()) {
      filtered = searchFaqs(searchQuery);
    } else if (selectedCategory !== "all") {
      filtered = getFaqsByCategory(selectedCategory);
    }
    
    setDisplayedFaqs(filtered);
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (faqId) => {
    setOpenFaqs((prev) =>
      prev.includes(faqId)
        ? prev.filter((id) => id !== faqId)
        : [...prev, faqId]
    );
  };

  const handleHelpful = (faqId, isHelpful) => {
    // In a real app, you'd send this to analytics/backend
    console.log(`FAQ ${faqId} was marked as ${isHelpful ? "helpful" : "not helpful"}`);
  };

  return (
    <>
      <SEO 
        title="FAQ" 
        description="Find answers to frequently asked questions about TheTriFusion's services, process, and pricing."
      />
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-5xl text-theme-blue text-center font-bold mb-3">
            Frequently Asked Questions
          </h1>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Find answers to common questions about our services, pricing, and processes.
          </p>
        </Fade>

        {/* Search Bar */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-theme-purple text-lg bg-white text-gray-900"
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
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-medium transition duration-200 ${
                selectedCategory === "all"
                  ? "bg-theme-purple text-white shadow-lg"
                  : "bg-white text-theme-blue border-2 border-theme-purple hover:bg-light-theme-purple"
              }`}
            >
              All Categories
            </button>
            {faqCategories.map((category) => (
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

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto">
          {displayedFaqs.length > 0 ? (
            displayedFaqs.map((faq, index) => {
              const isOpen = openFaqs.includes(faq.id);
              const category = faqCategories.find((cat) => cat.id === faq.category);
              
              return (
                <Fade key={faq.id} direction="up" delay={index * 50} triggerOnce>
                  <div className="bg-white rounded-xl shadow-lg border border-light-theme-purple mb-4 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition duration-200"
                    >
                      <div className="flex items-center flex-1">
                        <span className="text-2xl mr-3">{category?.icon || "❓"}</span>
                        <h3 className="text-lg sm:text-xl text-theme-blue font-bold pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        className={`w-6 h-6 text-theme-purple transform transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                          <span className="text-sm text-gray-500">Was this helpful?</span>
                          <button
                            onClick={() => handleHelpful(faq.id, true)}
                            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition duration-200 text-sm font-medium"
                          >
                            👍 Yes
                          </button>
                          <button
                            onClick={() => handleHelpful(faq.id, false)}
                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition duration-200 text-sm font-medium"
                          >
                            👎 No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })
          ) : (
            <Fade direction="up" triggerOnce>
              <div className="text-center py-12">
                <p className="text-xl text-gray-500 mb-4">No FAQs found matching your search.</p>
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
        </div>

        {/* Contact CTA */}
        <Fade direction="up" delay={500} triggerOnce>
          <div className="max-w-2xl mx-auto mt-12 p-8 bg-light-theme-purple rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please get in touch with our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

