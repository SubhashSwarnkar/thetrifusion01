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
  const location = useLocation();
  const path = location.pathname;
  const timeoutRef = useRef(null);

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
    <header className="header absolute top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center h-20 px-5">
        <BrandIcon />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              path === "/" ? "text-theme-purple" : "text-theme-blue hover:text-theme-purple"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown - Enhanced */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-all ${
                path.startsWith("/services") ? "text-theme-purple" : "text-theme-blue hover:text-theme-purple"
              }`}
            >
              Services
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    onClick={handleLinkClick}
                    className="group p-4 rounded-2xl hover:bg-light-theme-purple/10 border border-transparent hover:border-light-theme-purple/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-light-theme-purple/20 flex items-center justify-center text-2xl group-hover:bg-theme-purple group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <p className="font-bold text-theme-blue group-hover:text-theme-purple transition-colors">{service.title}</p>
                        <p className="text-xs text-gray-400 font-light line-clamp-1">{service.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 pt-4 mt-4 border-t border-gray-50 flex justify-center">
                   <Link to="/services" onClick={handleLinkClick} className="text-xs font-bold text-theme-purple uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                     View All Specialized Ecosystems →
                   </Link>
                </div>
              </div>
            </Transition>
          </div>

          <Link
            to="/portfolio"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              path.startsWith("/portfolio") || path.startsWith("/project") ? "text-theme-purple" : "text-theme-blue hover:text-theme-purple"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/pricing"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              path.startsWith("/pricing") ? "text-theme-purple" : "text-theme-blue hover:text-theme-purple"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              path.startsWith("/blog") ? "text-theme-purple" : "text-theme-blue hover:text-theme-purple"
            }`}
          >
            Insights
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 text-sm font-semibold transition-all ${
              path === "/about" ? "text-theme-purple" : "text-theme-blue hover:text-theme-purple"
            }`}
          >
            Company
          </Link>

          <Link
            to="/contact"
            className="ml-4 px-8 py-3 bg-theme-purple text-white rounded-full text-sm font-bold shadow-lg shadow-theme-purple/20 hover:bg-dark-theme-purple hover:scale-105 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <span className={`w-8 h-0.5 bg-theme-blue transition-all ${isCollapse ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-8 h-0.5 bg-theme-blue transition-all ${isCollapse ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-0.5 bg-theme-blue transition-all ${isCollapse ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu - Enhanced */}
      <Transition
        show={isCollapse}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-10"
      >
        <div className="mobile-menu fixed inset-0 top-20 bg-white z-[60] overflow-y-auto lg:hidden">
          <nav className="p-6 space-y-2">
            <Link to="/" onClick={handleLinkClick} className="block p-4 text-xl font-bold text-theme-blue border-b border-gray-50">Home</Link>
            
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center p-4 text-xl font-bold text-theme-blue border-b border-gray-50"
              >
                Services
                <svg className={`w-6 h-6 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-gray-50/50 rounded-[2rem] mt-4 border border-gray-100/50"
                  >
                    <div className="p-4 grid grid-cols-1 gap-3">
                      {services.map(s => (
                        <Link 
                          key={s.id} 
                          to={`/services/${s.slug}`} 
                          onClick={handleLinkClick} 
                          className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-theme-purple/30 hover:shadow-md transition-all group active:scale-[0.98]"
                        >
                          <div className="w-12 h-12 flex-shrink-0 bg-light-theme-purple/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-theme-purple group-hover:text-white transition-all">
                            {s.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-theme-blue group-hover:text-theme-purple transition-colors">{s.title}</span>
                            <span className="text-[10px] text-gray-400 font-light truncate max-w-[180px]">{s.shortDescription}</span>
                          </div>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio" onClick={handleLinkClick} className="block p-4 text-xl font-bold text-theme-blue border-b border-gray-50">Portfolio</Link>
            <Link to="/pricing" onClick={handleLinkClick} className="block p-4 text-xl font-bold text-theme-blue border-b border-gray-50">Pricing</Link>
            <Link to="/blog" onClick={handleLinkClick} className="block p-4 text-xl font-bold text-theme-blue border-b border-gray-50">Insights</Link>
            <Link to="/about" onClick={handleLinkClick} className="block p-4 text-xl font-bold text-theme-blue border-b border-gray-50">Company</Link>
            
            <div className="pt-8">
              <Link to="/contact" onClick={handleLinkClick} className="block w-full text-center py-5 bg-theme-purple text-white rounded-2xl text-xl font-bold shadow-xl shadow-theme-purple/20">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
