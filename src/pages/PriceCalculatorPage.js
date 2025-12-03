import React, { useState, useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { calculatePrice } from "data/pricingData";
import { industries } from "data/industriesData";
import { Fade } from "react-awesome-reveal";

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
    { id: "website", name: "Website" },
    { id: "mobile-app", name: "Mobile App" },
    { id: "web-app", name: "Web Application" },
    { id: "design", name: "UI/UX Design" },
    { id: "branding", name: "Branding" },
    { id: "marketing", name: "Digital Marketing" }
  ];

  const timelines = [
    { id: "urgent", name: "Urgent (1 week)", multiplier: 1.5 },
    { id: "fast", name: "Fast (2 weeks)", multiplier: 1.3 },
    { id: "normal", name: "Normal (1 month)", multiplier: 1.0 },
    { id: "standard", name: "Standard (6 weeks)", multiplier: 0.9 },
    { id: "flexible", name: "Flexible (2 months)", multiplier: 0.8 }
  ];

  const features = [
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
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              Price Calculator
            </h1>
            <p className="font-light text-xl text-gray-400 max-w-2xl mx-auto">
              Get an instant estimate for your project. Fill in the details below and see the pricing breakdown.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Fade direction="left" triggerOnce>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-light-theme-purple">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Project Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-theme-blue font-medium mb-2">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple bg-white text-gray-900"
                  >
                    <option value="">Select Industry</option>
                    {industries
                      .filter((ind) => ind.id !== "default")
                      .map((ind) => (
                        <option key={ind.id} value={ind.id}>
                          {ind.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-theme-blue font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple bg-white text-gray-900"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-theme-blue font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple bg-white text-gray-900"
                  >
                    <option value="">Select Timeline</option>
                    {timelines.map((tl) => (
                      <option key={tl.id} value={tl.id}>
                        {tl.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-theme-blue font-medium mb-4">
                    Additional Features
                  </label>
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                    {features.map((feature) => (
                      <label
                        key={feature.id}
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-light-theme-purple cursor-pointer transition duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature.id)}
                          onChange={() => handleFeatureToggle(feature.id)}
                          className="w-5 h-5 text-theme-purple focus:ring-theme-purple rounded"
                        />
                        <span className="ml-3 text-gray-700">{feature.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!industry || !projectType || !timeline}
                  className="w-full px-6 py-4 bg-theme-purple text-white rounded-full text-lg font-medium hover:bg-dark-theme-purple transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate Price
                </button>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-light-theme-purple">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Price Estimate
              </h2>

              {priceResult ? (
                <div className="space-y-6">
                  <div className="bg-light-theme-purple rounded-lg p-6">
                    <div className="text-sm text-gray-600 mb-2">Total Price</div>
                    <div className="text-4xl font-bold text-theme-purple">
                      ₹{priceResult.totalPrice.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Price</span>
                      <span className="font-medium">₹{priceResult.basePrice.toLocaleString()}</span>
                    </div>
                    {priceResult.featureCost > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Additional Features</span>
                        <span className="font-medium">₹{priceResult.featureCost.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-theme-blue mb-3">Breakdown</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Industry:</span>
                        <span className="dark:text-white">{priceResult.breakdown.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Project Type:</span>
                        <span className="dark:text-white">{priceResult.breakdown.projectType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="dark:text-white">{priceResult.breakdown.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Days:</span>
                        <span className="dark:text-white">{priceResult.breakdown.estimatedDays} days</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full px-6 py-3 bg-theme-blue text-white rounded-full hover:bg-opacity-90 transition duration-200">
                      Get Quote
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Fill in the project details and click "Calculate Price" to see your estimate.</p>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </>
  );
}

