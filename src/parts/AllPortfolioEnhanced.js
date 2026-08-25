"use client";

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "elements/Button";

export default function AllPortfolioEnhanced({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // Filter by type
  const mobile = data.filter((item) => item.type === "Mobile Apps");
  const website = data.filter((item) => item.type === "Website");

  // Search and filter function
  const filterItems = (items) => {
    let filtered = items;

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === "recent") {
      // Keep original order (most recent first)
      filtered = filtered;
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  };

  const renderPortfolioGrid = (items) => {
    const filteredItems = filterItems(items);

    if (filteredItems.length === 0) {
      return (
        <div className="text-center py-12 col-span-full">
          <p className="text-gray-500 text-lg">No projects found matching your search.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
        {filteredItems.map((item, index) => (
          <Fade
            triggerOnce
            direction="up"
            delay={Math.min(index * 100, 500)}
            key={item.id || index}
          >
            <Button type="link" href={`/portfolio/${item.id}`}>
              <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="rounded-t-2xl z-0 w-full h-auto"
                  />
                  <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover transition-opacity duration-300">
                    <button className="focus:outline-none">
                      <svg
                        className="w-20 h-20 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-4">
                  <h2 className="text-theme-blue text-center text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="font-light text-gray-400 text-center text-sm">
                    {item.type}
                  </p>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>
    );
  };

  return (
    <Fade bottom>
      <section className="container mx-auto px-4 py-10">
        {/* Search and Sort Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-10 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-theme-purple bg-white text-gray-900"
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
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-purple focus:border-theme-purple text-sm bg-white text-gray-900"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        <Tabs forceRenderTabPanel={true} className="flex flex-col">
          <TabList>
            <div className="flex flex-row mb-5 flex-wrap gap-3">
              <Tab>
                <button className="font-normal px-5 py-2 text-theme-purple text-base sm:text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  Mobile ({mobile.length})
                </button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 text-theme-purple text-base sm:text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  Website ({website.length})
                </button>
              </Tab>
            </div>
          </TabList>

          <TabPanel>{renderPortfolioGrid(mobile)}</TabPanel>
          <TabPanel>{renderPortfolioGrid(website)}</TabPanel>
        </Tabs>
      </section>
    </Fade>
  );
}

