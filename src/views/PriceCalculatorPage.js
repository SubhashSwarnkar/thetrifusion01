"use client";

import React, { useState, useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { calculatePrice } from "data/pricingData";
import { industries } from "data/industriesData";
import SEO from "components/common/SEO";

export default function PriceCalculatorPage() {
  const [industry, setIndustry] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceResult, setPriceResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectTypes = [
    { id: "website", name: "Website", icon: "🌐" },
    { id: "mobile-app", name: "Mobile App", icon: "📱" },
    { id: "web-app", name: "Web Application", icon: "💻" },
    { id: "design", name: "UI/UX Design", icon: "🎨" },
    { id: "branding", name: "Branding", icon: "🏷️" },
    { id: "marketing", name: "Digital Marketing", icon: "📈" }
  ];

  const timelines = [
    { id: "urgent", name: "Urgent (1 week)", multiplier: 1.5 },
    { id: "fast", name: "Fast (2 weeks)", multiplier: 1.3 },
    { id: "normal", name: "Normal (1 month)", multiplier: 1.0 },
    { id: "standard", name: "Standard (6 weeks)", multiplier: 0.9 },
    { id: "flexible", name: "Flexible (2 months)", multiplier: 0.8 }
  ];

  const featuresList = [
    { id: "basic-pages", name: "Basic Pages (1-5 pages)" },
    { id: "standard-pages", name: "Standard Pages (6-10 pages)" },
    { id: "premium-pages", name: "Premium Pages (11-20 pages)" },
    { id: "cms-integration", name: "CMS Integration" },
    { id: "payment-gateway", name: "Payment Gateway" },
    { id: "user-authentication", name: "User Authentication" },
    { id: "api-integration", name: "Third-party API Integration" },
    { id: "admin-panel", name: "Admin Panel" },
    { id: "mobile-responsive", name: "Mobile Responsive" },
    { id: "seo-optimization", name: "SEO Optimization" }
  ];

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleCalculate = () => {
    if (industry && projectType && timeline) {
      const result = calculatePrice(industry, projectType, timeline, selectedFeatures);
      setPriceResult(result);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE]">
      <SEO 
        title="Project Price Calculator | TheTriFusion" 
        description="Get an instant, transparent cost estimate for your next digital project. Fast, accurate pricing calculation."
      />
      <Header />
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-theme-purple/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-theme-cyan/5 rounded-full blur-[120px]"
        />
      </div>

      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-5 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-theme-blue mb-8 tracking-tight">
              Project <span className="text-theme-purple">Estimator</span>
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Plan your budget with confidence. Use our intelligent calculator to get a realistic estimate based on your specific industry and technical requirements.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Configuration Panel */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl"
            >
              <div className="space-y-10">
                {/* Industry Selection */}
                <div>
                  <h3 className="text-xl font-bold text-theme-blue mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light-theme-purple/20 flex items-center justify-center text-theme-purple">1</span>
                    Selection Industry
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {industries.filter(i => i.id !== 'default').map((ind) => (
                      <button
                        key={ind.id}
                        onClick={() => setIndustry(ind.id)}
                        className={`p-4 rounded-2xl border text-sm font-medium transition-all duration-300 ${
                          industry === ind.id 
                            ? "border-theme-purple bg-light-theme-purple/10 text-theme-purple shadow-sm" 
                            : "border-gray-100 bg-gray-50 text-gray-400 hover:border-theme-purple/30"
                        }`}
                      >
                        {ind.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <h3 className="text-xl font-bold text-theme-blue mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light-theme-purple/20 flex items-center justify-center text-theme-purple">2</span>
                    Project Type
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-6 rounded-2xl border flex flex-col items-center gap-3 transition-all duration-300 ${
                          projectType === type.id 
                            ? "border-theme-purple bg-theme-purple text-white shadow-lg" 
                            : "border-gray-100 bg-gray-50 text-gray-500 hover:border-theme-purple/30"
                        }`}
                      >
                        <span className="text-3xl">{type.icon}</span>
                        <span className="text-sm font-bold uppercase tracking-wider">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-xl font-bold text-theme-blue mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light-theme-purple/20 flex items-center justify-center text-theme-purple">3</span>
                    Timeline Expectation
                  </h3>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl text-theme-blue focus:ring-2 focus:ring-theme-purple/20 focus:border-theme-purple font-medium outline-none transition-all"
                  >
                    <option value="">Select Priority</option>
                    {timelines.map((tl) => (
                      <option key={tl.id} value={tl.id}>{tl.name}</option>
                    ))}
                  </select>
                </div>

                {/* Additional Features */}
                <div>
                  <h3 className="text-xl font-bold text-theme-blue mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-light-theme-purple/20 flex items-center justify-center text-theme-purple">4</span>
                    Special Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuresList.map((feature) => (
                      <label
                        key={feature.id}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                          selectedFeatures.includes(feature.id)
                            ? "border-theme-purple bg-light-theme-purple/10 text-theme-purple"
                            : "border-gray-50 bg-gray-50 text-gray-500 hover:border-gray-100 shadow-sm hover:shadow-md"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all ${
                          selectedFeatures.includes(feature.id) ? "bg-theme-purple border-theme-purple" : "border-gray-300"
                        }`}>
                          {selectedFeatures.includes(feature.id) && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature.id)}
                          onChange={() => handleFeatureToggle(feature.id)}
                          className="hidden"
                        />
                        <span className="text-sm font-semibold">{feature.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!industry || !projectType || !timeline}
                  className="w-full py-6 bg-theme-purple text-white rounded-2xl text-xl font-bold shadow-2xl shadow-theme-purple/30 hover:bg-dark-theme-purple transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Estimate
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Results Panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                {priceResult ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-theme-blue p-8 md:p-12 rounded-[3rem] text-white overflow-hidden shadow-2xl"
                  >
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-theme-purple/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-cyan/20 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold mb-10 opacity-80 uppercase tracking-widest">Investment Summary</h2>
                      
                      <div className="mb-12">
                        <p className="text-blue-200 text-sm font-bold uppercase tracking-wide mb-4">Estimated Total</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-bold">₹{priceResult.totalPrice.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="space-y-6 mb-12">
                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                          <span className="text-blue-100/60 font-light">Base Architecture</span>
                          <span className="font-bold font-mono">₹{priceResult.basePrice.toLocaleString()}</span>
                        </div>
                        {priceResult.featureCost > 0 && (
                          <div className="flex justify-between items-center py-4 border-b border-white/10">
                            <span className="text-blue-100/60 font-light">Feature Enhancements</span>
                            <span className="font-bold font-mono">₹{priceResult.featureCost.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center py-4">
                          <span className="text-blue-100/60 font-light">Delivery Timeline</span>
                          <span className="text-theme-cyan font-bold">{priceResult.breakdown.estimatedDays} Days</span>
                        </div>
                      </div>

                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-12">
                        <p className="text-xs text-blue-200 uppercase tracking-widest mb-4 font-bold">Selected Config</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-theme-purple/40 rounded-full text-xs font-semibold">{priceResult.breakdown.industry}</span>
                          <span className="px-3 py-1 bg-theme-purple/40 rounded-full text-xs font-semibold">{priceResult.breakdown.projectType}</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <button className="w-full py-5 bg-white text-theme-blue rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 group">
                          Receive Official Proposal
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                        <button className="w-full py-5 bg-transparent border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/5 transition-all">
                          Save Configuration
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-100 p-12 rounded-[3rem] border border-dashed border-gray-300 text-center py-40"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                      📊
                    </div>
                    <h2 className="text-2xl font-bold text-theme-blue mb-4">Awaiting Parameters</h2>
                    <p className="text-gray-500 font-light">
                      Configure your project requirements on the left to generate a live investment projection.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
