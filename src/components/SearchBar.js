"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { searchFaqs } from "data/faqData";

export default function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length > 2) {
      // Search FAQs
      const faqResults = searchFaqs(query).slice(0, 3);
      
      // Simple search for pages (you can expand this)
      const pageResults = [
        { type: "page", title: "Services", url: "/services" },
        { type: "page", title: "Portfolio", url: "/portfolio" },
        { type: "page", title: "Pricing", url: "/pricing" },
        { type: "page", title: "About", url: "/about" },
        { type: "page", title: "Contact", url: "/contact" },
        { type: "page", title: "FAQ", url: "/faq" },
      ].filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3);

      setResults([
        ...faqResults.map(faq => ({ type: "faq", ...faq })),
        ...pageResults
      ]);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowResults(false);
      setQuery("");
    }
  };

  const handleResultClick = (result) => {
    if (result.type === "faq") {
      router.push(`/faq#faq-${result.id}`);
    } else {
      router.push(result.url);
    }
    setShowResults(false);
    setQuery("");
  };

  return (
    <div ref={searchRef} className="relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length > 2 && setShowResults(true)}
          placeholder={placeholder}
          className="w-full sm:w-64 px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-theme-purple text-sm bg-white text-gray-900"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setShowResults(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </form>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result)}
              className="w-full text-left px-4 py-3 hover:bg-light-theme-purple transition duration-200 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start">
                {result.type === "faq" ? (
                  <>
                    <span className="text-theme-purple mr-3 mt-1">❓</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-theme-blue">{result.question}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{result.answer}</p>
                      <span className="text-xs text-theme-purple mt-1 inline-block">FAQ</span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-theme-purple mr-3 mt-1">📄</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-theme-blue">{result.title}</p>
                      <span className="text-xs text-gray-500 mt-1 inline-block">Page</span>
                    </div>
                  </>
                )}
              </div>
            </button>
          ))}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <button
              onClick={handleSearch}
              className="text-sm text-theme-purple hover:underline font-medium"
            >
              See all results for "{query}"
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

