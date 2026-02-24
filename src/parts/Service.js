import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "data/servicesData";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Service({ data }) {
  // Map service titles to slugs and data
  const getFullServiceData = (title) => {
    return services.find((s) => s.title.toLowerCase() === title.toLowerCase()) || 
           services.find((s) => s.title.toLowerCase().includes(title.toLowerCase()));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-light-theme-purple/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-theme-cyan/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl text-theme-blue font-bold mb-6 leading-tight"
            >
              Innovation Driven <br />
              <span className="text-theme-purple">Digital Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl font-light leading-relaxed"
            >
              We provide scalable, future-ready solutions that help businesses thrive in the digital age.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pb-2"
          >
            <Link to="/services" className="group text-theme-purple font-bold text-lg flex items-center gap-2">
              All Services
              <span className="w-10 h-10 rounded-full bg-light-theme-purple/30 flex items-center justify-center group-hover:bg-theme-purple group-hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => {
            const serviceData = getFullServiceData(item.title);
            const slug = serviceData?.slug;
            
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group"
              >
                <Link to={slug ? `/services/${slug}` : "#"} className="block h-full">
                  <div className="h-full bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-theme-purple/20 transition-all duration-500 relative overflow-hidden">
                    {/* Hover State Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-10">
                        <div className="w-20 h-20 bg-light-theme-purple/20 rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 group-hover:bg-theme-purple group-hover:text-white transition-all duration-500">
                          {serviceData?.icon || "🚀"}
                        </div>
                        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-theme-purple">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-theme-blue mb-4 group-hover:text-theme-purple transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                        {serviceData?.shortDescription || "Tailored solutions designed to elevate your business through cutting-edge technology and strategic innovation."}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-1 w-12 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-theme-purple transition-all duration-500"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-theme-purple">Explore</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
