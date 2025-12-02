import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { templates, industries } from "data/templatesData";
import { Fade } from "react-awesome-reveal";
import TemplatePreview from "components/TemplatePreview";

export default function TemplatesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndustry === "all") {
      setFilteredTemplates(templates);
    } else {
      setFilteredTemplates(
        templates.filter((t) => t.industry === selectedIndustry)
      );
    }
  }, [selectedIndustry]);

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              Website Templates
            </h1>
            <p className="font-light text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates. 
              Each template is fully responsive and ready to customize.
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition duration-200 text-sm sm:text-base ${
                  selectedIndustry === industry.id
                    ? "bg-theme-purple text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-theme-blue dark:text-white border-2 border-theme-purple dark:border-purple-400 hover:bg-light-theme-purple dark:hover:bg-gray-700"
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTemplates.map((template, index) => (
            <Fade
              key={template.id}
              direction="up"
              delay={index * 100}
              triggerOnce
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  {template.isNew && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      New
                    </div>
                  )}
                  {template.isPopular && (
                    <div className="absolute top-4 left-4 bg-theme-purple text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      Popular
                    </div>
                  )}
                  {template.downloadAvailable && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </div>
                  )}
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400 dark:text-gray-500">
                    {template.category.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-theme-blue dark:text-white font-bold mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{template.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-theme-purple dark:text-purple-400">
                        ₹{template.price.toLocaleString()}
                      </span>
                      {template.originalPrice && (
                        <span className="text-gray-400 dark:text-gray-500 line-through ml-2">
                          ₹{template.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <button
                      onClick={() => {
                        setPreviewTemplate(template);
                        setIsPreviewOpen(true);
                      }}
                      className="flex-1 text-center px-4 py-2 border-2 border-theme-purple text-theme-purple rounded-full hover:bg-light-theme-purple transition duration-200 text-sm sm:text-base"
                    >
                      Preview
                    </button>
                    <Link
                      to={`/templates/${template.id}`}
                      className="flex-1 text-center px-4 py-2 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 text-sm sm:text-base font-medium"
                    >
                      {template.downloadAvailable ? "View Details" : "Buy Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <Fade direction="up" triggerOnce>
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No templates found in this category.
              </p>
            </div>
          </Fade>
        )}
      </section>
      <TemplatePreview
        template={previewTemplate}
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setPreviewTemplate(null);
        }}
      />
      <Footer />
    </>
  );
}

