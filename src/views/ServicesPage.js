"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { services } from "data/servicesData";
import { motion } from "framer-motion";
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SEO 
        title="Our Services - TheTriFusion" 
        description="Explore our comprehensive digital solutions including web development, mobile apps, UI/UX design, and more."
      />
      <Header />
      
      {/* Hero Section with Background Decoration */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[50rem] h-[50rem] bg-light-theme-purple/40 rounded-full blur-[120px] animate-float opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[45rem] h-[45rem] bg-theme-cyan/20 rounded-full blur-[120px] animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-sm uppercase tracking-widest mb-6 border border-theme-purple/10"
            >
              Our Solutions
            </motion.span>
            <h1 className="text-6xl md:text-8xl text-theme-blue font-black mb-8 tracking-tighter leading-none">
              Modern Services for <br />
              <span className="text-gradient">Digital Success</span>
            </h1>
            <p className="font-light text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              Transforming complex challenges into elegant digital solutions with our full-cycle development services.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-48 h-1.5 bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-purple rounded-full animate-float"></div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full bg-white/40 backdrop-blur-md rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-theme-purple/30 group-hover:-translate-y-2">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="text-6xl mb-6 bg-light-theme-purple/50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-theme-purple group-hover:text-white transition-all duration-300">
                        <span className="transform transition-transform">{service.icon}</span>
                      </div>
                      
                      <h2 className="text-2xl text-theme-blue font-bold mb-4 group-hover:text-theme-purple transition-colors">
                        {service.title}
                      </h2>
                      
                      <p className="font-light text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      
                      <div className="flex items-center text-theme-purple font-semibold group/link">
                        Explore Service
                        <motion.span 
                          className="ml-3"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.span>
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-theme-purple/5 rounded-full blur-2xl group-hover:bg-theme-purple/10 transition-colors"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="container mx-auto px-5 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-theme-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-white rounded-full blur-[120px]"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
            Have a project in mind?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Let's build something extraordinary together. Our team is ready to turn your vision into reality.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 bg-theme-purple text-white rounded-full font-bold text-lg hover:bg-white hover:text-theme-blue transition-all duration-300 shadow-xl relative z-10"
          >
            Start Your Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
