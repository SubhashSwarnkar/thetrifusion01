import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade, Zoom } from "react-awesome-reveal";
import { getAllServicePricingPlans } from "data/servicePricingData";
import SEO from "components/common/SEO";

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [allServicePlans] = useState(getAllServicePricingPlans());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  return (
    <>
      <SEO 
        title="Pricing" 
        description="View our transparent pricing plans for web development, mobile apps, and design services."
      />
      <Header />
      <Breadcrumbs />
      
      <section className="container mx-auto px-5 py-12">
        {/* Service Filter */}
        <Fade direction="up" triggerOnce>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl text-theme-blue font-bold mb-6 text-center">
              Select a Service
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedService(null)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedService === null
                    ? "bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-lg"
                    : "bg-white text-theme-blue border-2 border-gray-200 hover:border-theme-purple"
                }`}
              >
                All Services
              </button>
              {allServicePlans.map((servicePlan) => (
                <button
                  key={servicePlan.serviceId}
                  onClick={() => handleServiceSelect(servicePlan.serviceId)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedService === servicePlan.serviceId
                      ? "bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white shadow-lg"
                      : "bg-white text-theme-blue border-2 border-gray-200 hover:border-theme-purple"
                  }`}
                >
                  {servicePlan.serviceTitle}
                </button>
              ))}
            </div>
          </div>
        </Fade>

        {/* Pricing Plans */}
        {allServicePlans
          .filter(servicePlan => !selectedService || servicePlan.serviceId === selectedService)
          .map((servicePlan, serviceIndex) => (
            <div key={servicePlan.serviceId} className="mb-20">
              <Fade direction="up" triggerOnce delay={serviceIndex * 100}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="text-4xl">{servicePlan.serviceIcon}</span>
                    <h2 className="text-3xl md:text-4xl text-theme-blue font-bold">
                      {servicePlan.serviceTitle}
                    </h2>
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-4"></div>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {servicePlan.serviceDescription}
                  </p>
                </div>
              </Fade>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {servicePlan.plans.map((plan, planIndex) => (
                  <Zoom key={plan.name} delay={planIndex * 100} triggerOnce>
                    <div
                      className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 flex flex-col transform transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "border-theme-purple scale-105 lg:scale-105 md:scale-100 shadow-2xl"
                          : "border-gray-200 hover:border-theme-purple"
                      }`}
                    >
                      {plan.popular && (
                        <div className="bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white text-center py-2 rounded-full mb-4 text-sm font-semibold">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-2xl text-theme-blue font-bold mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-theme-purple">
                          {plan.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">/project</span>
                      </div>
                      <p className="text-gray-600 mb-6 min-h-[3rem]">{plan.description}</p>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-theme-purple to-dark-theme-purple rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/services/${servicePlan.serviceSlug}`}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-theme-purple to-dark-theme-purple text-white rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 font-semibold"
                      >
                        Get Started
                      </Link>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          ))}

        {/* CTA Section */}
        <Fade direction="up" triggerOnce>
          <div className="bg-gradient-to-r from-theme-purple via-purple-600 to-dark-theme-purple rounded-3xl p-8 md:p-12 text-white text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg md:text-xl opacity-95 mb-6 max-w-2xl mx-auto">
              Contact us to discuss your specific requirements and get a tailored quote.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-theme-purple rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

