"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { services } from "data/servicesData";
import { motion } from "framer-motion";
import SEO from "components/common/SEO";
import ServiceIcon from "components/ServiceIcon";
import { accentAt } from "lib/themeAccents";

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
      
      <section className="relative pt-10 pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-light-theme-purple/40 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-10 left-0 w-[22rem] h-[22rem] bg-theme-cyan/15 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-40 left-1/3 w-[16rem] h-[16rem] bg-theme-pink/10 rounded-full blur-[90px] -z-10" />
        
        <div className="container mx-auto px-5 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-xs uppercase tracking-[0.2em] mb-5">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-theme-blue font-black mb-3 tracking-tight leading-[1.1]">
              IT services from{" "}
              <span className="text-gradient">Jaipur</span>
            </h1>
            <div className="mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
            <p className="font-light text-lg text-gray-500 leading-relaxed max-w-2xl">
              Software, websites, mobile apps, UI/UX, and digital marketing —
              scoped and delivered remotely across India.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, idx) => {
              const accent = accentAt(idx);
              return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className={`relative h-full rounded-2xl border p-6 overflow-hidden hover:shadow-lg transition-all duration-300 ${accent.card}`}>
                    <span className={`absolute left-0 top-0 h-full w-1.5 ${accent.bar}`} />
                    <div className={`w-11 h-11 mb-5 rounded-xl flex items-center justify-center ${accent.iconWrap} group-hover:bg-theme-purple group-hover:text-white transition-colors`}>
                      <ServiceIcon slug={service.slug} className="w-5 h-5" />
                    </div>
                      
                    <h2 className="text-xl text-theme-blue font-bold mb-2 group-hover:text-theme-purple transition-colors">
                      {service.title}
                    </h2>
                      
                    <p className="font-light text-gray-500 mb-6 line-clamp-3 leading-relaxed text-sm">
                      {service.shortDescription}
                    </p>
                      
                    <span className={`inline-flex items-center font-semibold text-sm ${accent.text}`}>
                      Explore
                      <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="container mx-auto px-5 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-theme-blue via-theme-purple to-theme-cyan rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">
            Have a project in mind?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10 font-light">
            Share the problem and the deadline. We will come back with a scoped next step.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3.5 bg-white text-theme-purple rounded-full font-bold hover:bg-light-theme-purple transition-colors relative z-10"
          >
            Talk to us
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
