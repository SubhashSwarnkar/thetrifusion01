import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { templates, industries } from "data/templatesData";
import { Fade } from "react-awesome-reveal";
import TemplatePreview from "components/TemplatePreview";
import SEO from "components/common/SEO";

// Template Card Component to handle individual timers
const TemplateCard = ({ template, index, onPreview, onCollectionClick }) => {
  const isCollection = template.id.includes("template-full");

  // Get or initialize template state
  // Only use state/timer if NOT a collection
  const getTemplateState = (tId) => {
    if (isCollection) return null;

    const storageKey = `template_state_${tId}`;
    const saved = localStorage.getItem(storageKey);
    const now = new Date().getTime();
    
    if (saved) {
      const parsed = JSON.parse(saved);
      if (now < parsed.endTime) {
        return parsed;
      }
    }
    
    const isOffer = Math.random() > 0.3; 
    const duration = 12 * 60 * 60 * 1000; 
    
    // Random START time offset so they don't all look like 11:59:59
    const randomOffset = Math.floor(Math.random() * (11 * 60 * 60 * 1000));
    const endTime = now + duration - randomOffset;
    
    const offerPrice = Math.floor(Math.random() * (699 - 299 + 1)) + 299;
    const normalPrice = Math.floor(Math.random() * (6999 - 1999 + 1)) + 1999;
    
    const newState = {
      mode: "offer",
      endTime: endTime,
      offerPrice: offerPrice,
      normalPrice: normalPrice
    };
    
    localStorage.setItem(storageKey, JSON.stringify(newState));
    return newState;
  };

  const [templateState, setTemplateState] = useState(() => getTemplateState(template.id));
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (isCollection) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      let current = templateState;
      
      // Check if expired
      if (now > current.endTime) {
        const isOfferNow = current.mode === "offer";
        const nextMode = isOfferNow ? "normal" : "offer";
        const nextDuration = isOfferNow ? 5 * 60 * 60 * 1000 : 12 * 60 * 60 * 1000;
        
        const nextState = {
          ...current,
          mode: nextMode,
          endTime: now + nextDuration
        };
        
        localStorage.setItem(`template_state_${template.id}`, JSON.stringify(nextState));
        setTemplateState(nextState);
        current = nextState;
      }
      
      // Calculate time string
      const distance = current.endTime - now;
      if (distance < 0) {
          setTimeLeft("00h 00m 00s");
          return;
      }
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [template.id, templateState, isCollection]);

  const currentPrice = !isCollection && templateState ? (templateState.mode === "offer" ? templateState.offerPrice : templateState.normalPrice) : 0;

  return (
    <Fade
      direction="up"
      delay={index * 100}
      triggerOnce
    >
      <div className="bg-white rounded-2xl shadow-xl border border-light-theme-purple overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col relative h-full">
        {!isCollection && templateState.mode === "offer" && (
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 z-20 text-center uppercase tracking-wider shadow-md">
             Special Offer Ends in: {timeLeft}
          </div>
        )}
         {!isCollection && templateState.mode === "normal" && (
          <div className="absolute top-0 left-0 w-full bg-gray-600 text-white text-xs font-bold px-3 py-1 z-20 text-center uppercase tracking-wider shadow-md">
             Deal Starts in: {timeLeft}
          </div>
        )}

        <div className="relative h-48 bg-gray-200 overflow-hidden mt-6">
          {template.isNew && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              New
            </div>
          )}
          {template.downloadAvailable && (
            <div className={`absolute top-4 ${template.isNew ? 'right-20' : 'right-4'} bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center`}>
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </div>
          )}
          {template.previewImage ? (
            <img 
              src={template.previewImage} 
              alt={template.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className={`w-full h-full flex items-center justify-center text-6xl text-gray-400 ${template.previewImage ? 'hidden' : ''}`}>
            {template.category.charAt(0)}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl text-theme-blue font-bold mb-2">
            {template.name}
          </h3>
          <p className="text-gray-600 mb-4">{template.description}</p>
          <div className="flex items-center justify-between mb-4 mt-auto">
            {!isCollection ? (
              <div>
                <span className={`text-2xl font-bold ${templateState.mode === "offer" ? "text-red-500" : "text-theme-blue"}`}>
                  ₹{currentPrice.toLocaleString()}
                </span>
                {templateState.mode === "offer" && (
                  <span className="text-gray-400 line-through ml-2 text-sm">
                    ₹{templateState.normalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            ) : (
                <div className="text-theme-purple font-medium">
                    {template.features.length} Items included
                </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            {!isCollection && (
              <button
                onClick={() => onPreview(template)}
                className="flex-1 text-center px-4 py-2 border-2 border-theme-purple text-theme-purple rounded-full hover:bg-light-theme-purple transition duration-200 text-sm sm:text-base"
              >
                Preview
              </button>
            )}
            
            {isCollection ? (
                <button
                    onClick={() => onCollectionClick(template.industry)}
                    className="flex-1 text-center px-4 py-2 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 text-sm sm:text-base font-medium"
                >
                    View Collection
                </button>
            ) : (
                <Link
                  to={`/templates/${template.id}`}
                  className="flex-1 text-center px-4 py-2 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 text-sm sm:text-base font-medium"
                >
                  {template.downloadAvailable ? "View Details" : "Buy Now"}
                </Link>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

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
      <SEO 
        title="Website Templates" 
        description="Premium, ready-to-use website templates for various industries. Optimized for performance and conversion."
        keywords="website templates, premium templates, html themes, react templates, download templates, buy website template, professional web design"
      />
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
                    : "bg-white text-theme-blue border-2 border-theme-purple hover:bg-light-theme-purple"
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTemplates.map((template, index) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              index={index} 
              onPreview={(t) => {
                setPreviewTemplate(t);
                setIsPreviewOpen(true);
              }}
              onCollectionClick={(industry) => {
                  setSelectedIndustry(industry);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
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

