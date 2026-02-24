import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { getAllServicePricingPlans } from "data/servicePricingData";
import SEO from "components/common/SEO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

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
    <div className="min-h-screen bg-[#FDFCFE]">
      <SEO 
        title="Pricing Plans | TheTriFusion" 
        description="Explore our transparent and competitive pricing for premium digital services. Tailored plans for startups to enterprises."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-light-theme-purple/30 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-theme-cyan/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="container mx-auto px-5 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-theme-blue mb-8 tracking-tight">
              Invest in <span className="text-theme-purple">Excellence</span>
            </h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
              Transparent, competitive, and value-driven pricing structures designed to scale with your business goals. Choose the plan that fits your vision.
            </p>

            {/* Service Filters - Premium Pill Style */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <button
                onClick={() => setSelectedService(null)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedService === null
                    ? "bg-theme-purple text-white shadow-[0_10px_30px_rgba(102,16,242,0.3)]"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100 shadow-sm"
                }`}
              >
                All Services
              </button>
              {allServicePlans.map((servicePlan) => (
                <button
                  key={servicePlan.serviceId}
                  onClick={() => handleServiceSelect(servicePlan.serviceId)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedService === servicePlan.serviceId
                      ? "bg-theme-purple text-white shadow-[0_10px_30px_rgba(102,16,242,0.3)]"
                      : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100 shadow-sm"
                  }`}
                >
                  <span className="text-lg">{servicePlan.serviceIcon}</span>
                  {servicePlan.serviceTitle}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="pb-32 container mx-auto px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService || 'all'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="space-y-32"
          >
            {allServicePlans
              .filter(servicePlan => !selectedService || servicePlan.serviceId === selectedService)
              .map((servicePlan) => (
                <div key={servicePlan.serviceId}>
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-4">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-light-theme-purple/20 rounded-full border border-light-theme-purple/30">
                        <span className="text-2xl">{servicePlan.serviceIcon}</span>
                        <span className="text-theme-purple font-bold text-sm uppercase tracking-widest">{servicePlan.serviceTitle}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-theme-blue mt-2">
                        Tailored for {servicePlan.serviceTitle}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicePlan.plans.map((plan, planIndex) => (
                      <motion.div
                        key={plan.name}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className={`relative p-8 rounded-[2.5rem] bg-white border shadow-sm transition-all duration-500 ${
                          plan.popular 
                            ? "border-theme-purple ring-4 ring-theme-purple/5 shadow-2xl" 
                            : "border-gray-100 hover:shadow-xl hover:border-theme-purple/20"
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-theme-purple text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                            Most Popular
                          </div>
                        )}

                        <div className="mb-10">
                          <h3 className="text-xl font-bold text-theme-blue mb-4 uppercase tracking-wider">{plan.name}</h3>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl md:text-5xl font-bold text-theme-blue">{plan.price}</span>
                            <span className="text-gray-400 font-light italic">/ project</span>
                          </div>
                          <p className="text-gray-500 text-sm mt-6 font-light leading-relaxed">
                            {plan.description}
                          </p>
                        </div>

                        <div className="h-px w-full bg-gray-100 mb-8"></div>

                        <ul className="space-y-4 mb-12">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full bg-light-theme-purple/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-600 text-sm font-light">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to={`/services/${servicePlan.serviceSlug}`}
                          className={`block w-full text-center py-4 rounded-full font-bold transition-all duration-300 ${
                            plan.popular
                              ? "bg-theme-purple text-white hover:bg-dark-theme-purple shadow-[0_10px_20px_rgba(102,16,242,0.2)]"
                              : "bg-gray-50 text-theme-blue hover:bg-light-theme-purple/20 hover:text-theme-purple"
                          }`}
                        >
                          Select Plan
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Custom Quote CTA */}
      <section className="container mx-auto px-5 pb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center"
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-theme-blue backdrop-blur-3xl z-0"></div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-theme-purple/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-cyan/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Need a Custom Strategy?</h2>
            <p className="text-blue-100 text-lg font-light mb-12 leading-relaxed">
              If your requirements exceed our standard plans, we'll design a bespoke solution perfectly tailored to your enterprise architecture and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-white text-theme-blue rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Talk to an Expert
              </Link>
              <Link to="/discuss-project" className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
