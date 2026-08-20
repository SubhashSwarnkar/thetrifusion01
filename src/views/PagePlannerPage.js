"use client";

import React, { useState, useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { Fade } from "react-awesome-reveal";

export default function PagePlannerPage() {
  const [selectedPages, setSelectedPages] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availablePages = [
    { id: "home", name: "Home", price: 0, required: true },
    { id: "about", name: "About", price: 2000 },
    { id: "services", name: "Services", price: 3000 },
    { id: "portfolio", name: "Portfolio", price: 3000 },
    { id: "blog", name: "Blog", price: 4000 },
    { id: "contact", name: "Contact", price: 2000 },
    { id: "pricing", name: "Pricing", price: 2500 },
    { id: "team", name: "Team", price: 2000 },
    { id: "testimonials", name: "Testimonials", price: 1500 },
    { id: "faq", name: "FAQ", price: 1500 },
    { id: "gallery", name: "Gallery", price: 3000 },
    { id: "careers", name: "Careers", price: 2500 }
  ];

  useEffect(() => {
    const basePrice = 10000;
    const pagesPrice = selectedPages.reduce(
      (sum, pageId) => {
        const page = availablePages.find((p) => p.id === pageId);
        return sum + (page ? page.price : 0);
      },
      0
    );
    setTotalPrice(basePrice + pagesPrice);
  }, [selectedPages]);

  const handlePageToggle = (pageId) => {
    const page = availablePages.find((p) => p.id === pageId);
    if (page && page.required) return; // Can't deselect required pages

    setSelectedPages((prev) =>
      prev.includes(pageId)
        ? prev.filter((id) => id !== pageId)
        : [...prev, pageId]
    );
  };

  // Auto-select required pages
  useEffect(() => {
    const requiredPages = availablePages
      .filter((p) => p.required)
      .map((p) => p.id);
    setSelectedPages(requiredPages);
  }, []);

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              Visual Page Planner
            </h1>
            <p className="font-light text-xl text-gray-400 max-w-2xl mx-auto">
              Select the pages you need for your website. See the visual structure and get real-time pricing.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Fade direction="left" triggerOnce>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-light-theme-purple">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Select Pages
              </h2>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {availablePages.map((page) => (
                  <label
                    key={page.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                      selectedPages.includes(page.id)
                        ? "border-theme-purple bg-light-theme-purple"
                        : "border-gray-200 hover:border-theme-purple hover:bg-gray-50"
                    } ${page.required ? "opacity-75" : ""}`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPages.includes(page.id)}
                        onChange={() => handlePageToggle(page.id)}
                        disabled={page.required}
                        className="w-5 h-5 text-theme-purple focus:ring-theme-purple rounded"
                      />
                      <span className="ml-3 font-medium text-theme-blue">
                        {page.name}
                        {page.required && (
                          <span className="text-xs text-gray-500 ml-2">(Required)</span>
                        )}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      {page.price > 0 ? `+₹${page.price.toLocaleString()}` : "Free"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-light-theme-purple">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Website Structure
              </h2>

              <div className="mb-6">
                <div className="bg-light-theme-purple rounded-lg p-6 mb-4">
                  <div className="text-sm text-gray-600 mb-2">Total Estimated Price</div>
                  <div className="text-4xl font-bold text-theme-purple">
                    ₹{totalPrice.toLocaleString()}
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Base Price: ₹10,000 (includes Home page)
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-theme-blue mb-3">Selected Pages ({selectedPages.length})</h3>
                <div className="space-y-2">
                  {selectedPages.map((pageId) => {
                    const page = availablePages.find((p) => p.id === pageId);
                    return page ? (
                      <div
                        key={pageId}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-gray-700">{page.name}</span>
                        {page.price > 0 && (
                          <span className="text-gray-600">+₹{page.price.toLocaleString()}</span>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="pt-4 border-t">
                <button className="w-full px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 mb-3">
                  Get Detailed Quote
                </button>
                <button className="w-full px-6 py-3 border-2 border-theme-purple text-theme-purple rounded-full hover:bg-light-theme-purple transition duration-200">
                  Export Plan
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </>
  );
}

