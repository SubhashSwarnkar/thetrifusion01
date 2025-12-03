import React, { useState, useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { calculateTimeline } from "data/pricingData";
import { Fade } from "react-awesome-reveal";

export default function TimelineCalculatorPage() {
  const [projectType, setProjectType] = useState("");
  const [complexity, setComplexity] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [timelineResult, setTimelineResult] = useState(null);

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

  const complexities = [
    { id: "simple", name: "Simple" },
    { id: "medium", name: "Medium" },
    { id: "complex", name: "Complex" }
  ];

  const features = [
    { id: "cms-integration", name: "CMS Integration" },
    { id: "payment-gateway", name: "Payment Gateway" },
    { id: "user-authentication", name: "User Authentication" },
    { id: "api-integration", name: "Third-party API Integration" },
    { id: "admin-panel", name: "Admin Panel" },
    { id: "mobile-responsive", name: "Mobile Responsive" },
    { id: "seo-optimization", name: "SEO Optimization" },
    { id: "analytics-integration", name: "Analytics Integration" }
  ];

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleCalculate = () => {
    if (projectType && complexity) {
      const result = calculateTimeline(projectType, complexity, selectedFeatures);
      setTimelineResult(result);
    }
  };

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              Timeline Calculator
            </h1>
            <p className="font-light text-xl text-gray-400 max-w-2xl mx-auto">
              Estimate how long your project will take to complete. Get a detailed timeline with milestones.
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
                    Complexity
                  </label>
                  <select
                    value={complexity}
                    onChange={(e) => setComplexity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple bg-white text-gray-900"
                  >
                    <option value="">Select Complexity</option>
                    {complexities.map((comp) => (
                      <option key={comp.id} value={comp.id}>
                        {comp.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-theme-blue font-medium mb-4">
                    Additional Features
                  </label>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {features.map((feature) => (
                      <label
                        key={feature.id}
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-light-theme-purple cursor-pointer"
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
                  disabled={!projectType || !complexity}
                  className="w-full px-6 py-4 bg-theme-purple text-white rounded-full text-lg font-medium hover:bg-dark-theme-purple transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate Timeline
                </button>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-light-theme-purple">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Estimated Timeline
              </h2>

              {timelineResult ? (
                <div className="space-y-6">
                  <div className="bg-light-theme-purple rounded-lg p-6">
                    <div className="text-sm text-gray-600 mb-2">Total Duration</div>
                    <div className="text-4xl font-bold text-theme-purple">
                      {timelineResult.totalDays} Days
                    </div>
                    <div className="text-gray-600 mt-2">
                      ({timelineResult.weeks} weeks / {timelineResult.months} months)
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-theme-blue mb-4">Project Milestones</h3>
                    <div className="space-y-3">
                      {timelineResult.milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-8 h-8 bg-theme-purple text-white rounded-full flex items-center justify-center font-bold mr-3">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-theme-blue">
                              {milestone.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {milestone.days} days
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm text-gray-600 mb-2">Estimated Completion</div>
                    <div className="font-medium">
                      {timelineResult.estimatedCompletion.toLocaleDateString()}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full px-6 py-3 bg-theme-blue text-white rounded-full hover:bg-opacity-90 transition duration-200">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Fill in the project details and click "Calculate Timeline" to see your estimate.</p>
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

