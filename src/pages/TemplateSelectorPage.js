import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { templates, industries } from "data/templatesData";
import { getAllIndustries } from "data/industriesData";
import { Fade } from "react-awesome-reveal";

export default function TemplateSelectorPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndustry) {
      setFilteredTemplates(
        templates.filter((t) => t.industry === selectedIndustry.id)
      );
    } else {
      setFilteredTemplates([]);
    }
  }, [selectedIndustry]);

  const industryList = getAllIndustries();

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue dark:text-white font-bold mb-5">
              Select Your Industry
            </h1>
            <p className="font-light text-xl text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your industry to see relevant website templates designed specifically for your business type.
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {industryList.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry)}
                className={`p-6 rounded-2xl border-2 transform transition duration-300 hover:scale-105 bg-white dark:bg-gray-800 ${
                  selectedIndustry?.id === industry.id
                    ? "border-theme-purple dark:border-purple-400 bg-light-theme-purple dark:bg-gray-700"
                    : "border-gray-200 dark:border-gray-600 hover:border-theme-purple dark:hover:border-purple-400"
                }`}
              >
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-theme-blue dark:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{industry.description}</p>
              </button>
            ))}
          </div>
        </Fade>

        {selectedIndustry && (
          <Fade direction="up" triggerOnce>
            <div>
              <h2 className="text-3xl text-theme-blue dark:text-white font-bold mb-8 text-center">
                Templates for {selectedIndustry.name}
              </h2>
              
              {filteredTemplates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTemplates.map((template, index) => (
                    <Fade
                      key={template.id}
                      direction="up"
                      delay={index * 100}
                      triggerOnce
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 overflow-hidden transform transition duration-500 hover:scale-105">
                        <div className="relative h-48 bg-gray-200">
                          {template.isNew && (
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              New
                            </div>
                          )}
                          {template.isPopular && (
                            <div className="absolute top-4 left-4 bg-theme-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                              Popular
                            </div>
                          )}
                          <div className="w-full h-full flex items-center justify-center text-6xl">
                            {template.category.charAt(0)}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl text-theme-blue dark:text-white font-bold mb-2">
                            {template.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{template.description}</p>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <span className="text-2xl font-bold text-theme-purple">
                                ₹{template.price.toLocaleString()}
                              </span>
                              {template.originalPrice && (
                                <span className="text-gray-400 line-through ml-2">
                                  ₹{template.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <a
                              href={template.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-4 py-2 border-2 border-theme-purple text-theme-purple rounded-full hover:bg-light-theme-purple transition duration-200"
                            >
                              View Demo
                            </a>
                            <Link
                              to={`/templates/${template.id}`}
                              className="flex-1 text-center px-4 py-2 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200"
                            >
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No templates available for this industry yet. Check back soon!
                  </p>
                </div>
              )}
            </div>
          </Fade>
        )}

        {!selectedIndustry && (
          <Fade direction="up" triggerOnce>
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Select an industry above to see available templates
              </p>
            </div>
          </Fade>
        )}
      </section>
      <Footer />
    </>
  );
}

