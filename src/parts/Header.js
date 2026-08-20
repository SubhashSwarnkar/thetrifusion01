import React, { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Transition } from "@headlessui/react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";
import { services } from "../data/servicesData";

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const timeoutRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsCollapse(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCollapse && !event.target.closest('.mobile-menu') && !event.target.closest('button[aria-label="Toggle navigation menu"]')) {
        setIsCollapse(false);
        setIsMobileServicesOpen(false);
      }
    };

    if (isCollapse) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isCollapse]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const handleLinkClick = () => {
    setIsCollapse(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex justify-between items-center px-5 transition-all duration-500">
        <BrandIcon />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {[
            { name: "Home", to: "/" },
            { name: "Services", isDropdown: true },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Pricing", to: "/pricing" },
            { name: "Insights", to: "/blog" },
            { name: "Company", to: "/about" },
          ].map((item) => (
            <div key={item.name} className="relative group">
              {item.isDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-5 py-2 text-sm font-bold flex items-center gap-1.5 transition-all rounded-full ${
                      path.startsWith("/services") ? "text-theme-purple bg-light-theme-purple/20" : "text-theme-blue hover:text-theme-purple hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <Transition
                    show={isServicesOpen}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-4 scale-95"
                    enterTo="opacity-100 translate-y-0 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0 scale-100"
                    leaveTo="opacity-0 translate-y-4 scale-95"
                  >
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          onClick={handleLinkClick}
                          className="group/item p-4 rounded-2xl hover:bg-light-theme-purple/10 border border-transparent hover:border-light-theme-purple/20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-light-theme-purple/20 flex items-center justify-center text-2xl group-hover/item:bg-theme-purple group-hover/item:text-white transition-all duration-300">
                              {service.icon}
                            </div>
                            <div>
                              <p className="font-bold text-theme-blue group-hover/item:text-theme-purple transition-colors">{service.title}</p>
                              <p className="text-xs text-gray-400 font-light line-clamp-1">{service.shortDescription}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 pt-6 mt-4 border-t border-gray-50 flex justify-center">
                         <Link to="/services" onClick={handleLinkClick} className="group/btn relative px-8 py-3 overflow-hidden rounded-full bg-gray-50 text-theme-purple text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-white">
                           <span className="relative z-10">View All Specializations</span>
                           <div className="absolute inset-0 bg-theme-purple translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                         </Link>
                      </div>
                    </div>
                  </Transition>
                </div>
              ) : (
                <Link
                  to={item.to}
                  className={`px-5 py-2 text-sm font-bold transition-all rounded-full relative ${
                    path === item.to || (item.to !== "/" && path.startsWith(item.to)) 
                      ? "text-theme-purple bg-light-theme-purple/20" 
                      : "text-theme-blue hover:text-theme-purple hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  {path === item.to && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-theme-purple rounded-full"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="ml-6 px-8 py-3 bg-theme-purple text-white rounded-full text-sm font-black shadow-[0_10px_20px_-5px_rgba(102,16,242,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(102,16,242,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-[110]"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <span className={`w-8 h-0.5 transition-all ${isCollapse ? "bg-theme-purple rotate-45 translate-y-2" : "bg-theme-blue"}`}></span>
          <span className={`w-8 h-0.5 transition-all ${isCollapse ? "opacity-0" : "bg-theme-blue"}`}></span>
          <span className={`w-8 h-0.5 transition-all ${isCollapse ? "bg-theme-purple -rotate-45 -translate-y-2" : "bg-theme-blue"}`}></span>
        </button>
      </div>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isCollapse && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-24 h-full flex flex-col">
              <nav className="flex flex-col space-y-6">
                {[
                  { name: "Home", to: "/" },
                  { name: "Services", isDropdown: true },
                  { name: "Portfolio", to: "/portfolio" },
                  { name: "Pricing", to: "/pricing" },
                  { name: "Insights", to: "/blog" },
                  { name: "Company", to: "/about" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    {item.isDropdown ? (
                      <div className="space-y-4">
                        <button 
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex justify-between items-center w-full py-4 text-4xl font-black text-theme-blue border-b border-gray-50"
                        >
                          {item.name}
                          <svg className={`w-8 h-8 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-theme-purple" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="grid grid-cols-1 gap-4 overflow-hidden pl-4"
                            >
                              {services.map(s => (
                                <Link 
                                  key={s.id} 
                                  to={`/services/${s.slug}`} 
                                  onClick={handleLinkClick} 
                                  className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl group active:scale-95 transition-all"
                                >
                                  <div className="w-10 h-10 flex-shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:bg-theme-purple group-hover:text-white transition-all">
                                    {s.icon}
                                  </div>
                                  <span className="font-bold text-theme-blue">{s.title}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={item.to} 
                        onClick={handleLinkClick}
                        className={`block py-4 text-4xl font-black transition-all ${
                          path === item.to ? "text-theme-purple translate-x-4" : "text-theme-blue"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-10 pb-10"
              >
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick} 
                  className="block w-full text-center py-6 bg-theme-purple text-white rounded-3xl text-2xl font-black shadow-2xl shadow-theme-purple/30 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Your Project
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-theme-purple to-theme-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
