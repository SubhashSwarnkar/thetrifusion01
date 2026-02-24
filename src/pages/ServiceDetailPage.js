import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { getServiceBySlug } from "data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import NotFoundPage from "./NotFoundPage";
import SEO from "components/common/SEO";

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
      active
        ? "bg-theme-purple text-white shadow-lg"
        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
    }`}
  >
    {children}
  </button>
);

const ContentOverview = ({ service }) => (
  <div className="space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-theme-blue">About the Service</h2>
        <p className="text-gray-600 leading-relaxed text-lg font-light">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {service.technologiesList?.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 bg-light-theme-purple/20 text-theme-purple rounded-lg text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-theme-purple/10 blur-3xl rounded-full"></div>
        <img
          src={service.imageUrl}
          alt={service.title}
          className="relative z-10 w-full rounded-3xl shadow-2xl object-cover aspect-video"
        />
      </motion.div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {service.features.slice(0, 8).map((feature, index) => (
        <div key={index} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
          <div className="text-theme-purple mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-semibold text-theme-blue">{feature}</p>
        </div>
      ))}
    </div>
  </div>
);

const ContentProcess = ({ service }) => (
  <div className="relative pt-10">
    <div className="grid grid-cols-1 gap-12">
      {service.process?.map((step, idx) => (
        <div key={idx} className="flex gap-8 items-start group">
          <div className="flex-shrink-0 w-16 h-16 bg-theme-purple text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:rotate-6 transition-transform">
            {idx + 1}
          </div>
          <div className="pt-2">
            <h3 className="text-xl font-bold text-theme-blue mb-2">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContentIndustries = ({ service }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {service.industries?.map((industry, idx) => (
      <div key={idx} className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:border-theme-purple/30 transition-all group">
        <h3 className="text-xl font-bold text-theme-blue mb-4 group-hover:text-theme-purple transition-colors">
          {industry.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
          {industry.description}
        </p>
      </div>
    ))}
  </div>
);

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <SEO 
        title={`${service.title} - TheTriFusion`} 
        description={service.description}
        image={service.imageUrl}
      />
      <Header />
      
      {/* Premium Immersive Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        {/* Animated Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-light-theme-purple/40 rounded-full blur-[120px] animate-float opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-theme-cyan/20 rounded-full blur-[120px] animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="text-8xl md:text-9xl mb-10 relative"
            >
              <div className="absolute inset-0 bg-theme-purple/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <span className="relative z-10 block animate-float">{service.icon}</span>
            </motion.div>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-5 py-1.5 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-theme-purple/10"
            >
              Expert Service
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-theme-blue mb-8 tracking-tighter leading-[1.1]">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-gradient block md:inline" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12 max-w-3xl">
              {service.shortDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-theme-purple text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  Start Project
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-theme-purple to-theme-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                to="/pricing"
                className="px-10 py-5 bg-white text-theme-purple border-2 border-theme-purple rounded-full font-bold text-lg hover:bg-light-theme-purple/10 transition-all flex items-center justify-center hover:scale-105 active:scale-95 shadow-xl"
              >
                View Pricing
              </Link>
            </div>
            
            <div className="mt-20 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Modern Tabs Navigation */}
      <section className="container mx-auto px-5 py-12">
        <div className="flex justify-center flex-wrap gap-4 mb-16 border-b border-gray-100 pb-8">
          <TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>Overview</TabButton>
          {service.process && <TabButton active={activeTab === "process"} onClick={() => setActiveTab("process")}>Our Process</TabButton>}
          {service.industries && <TabButton active={activeTab === "industries"} onClick={() => setActiveTab("industries")}>Industries</TabButton>}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "overview" && <ContentOverview service={service} />}
              {activeTab === "process" && <ContentProcess service={service} />}
              {activeTab === "industries" && <ContentIndustries service={service} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Simplified Bottom CTA */}
      <section className="container mx-auto px-5 py-24">
        <div className="bg-gradient-to-r from-theme-blue to-[#1a3670] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Our experts are ready to help you implement the best {service.title.toLowerCase()} solution for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-white text-theme-blue rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
            >
              Let's Talk Business
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-theme-purple opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-cyan opacity-20 blur-[100px]"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
