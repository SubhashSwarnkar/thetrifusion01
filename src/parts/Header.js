"use client";

import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BrandIcon from "./BrandIcon";
import ServiceIcon from "components/ServiceIcon";
import { accentAt } from "lib/themeAccents";
import { services } from "../data/servicesData";

const SERVICE_MENU_GROUPS = [
  {
    heading: "Build",
    accentIndex: 0,
    slugs: [
      "software-development",
      "website-development",
      "mobile-app-development",
      "ai-development",
      "devops",
    ],
  },
  {
    heading: "Design",
    accentIndex: 2,
    slugs: ["ui-ux-design", "graphic-design", "branding"],
  },
  {
    heading: "Grow",
    accentIndex: 1,
    slugs: [
      "digital-marketing",
      "rpa",
      "salesforce",
      "business-modernization",
      "on-demand",
    ],
  },
];

function getService(slug) {
  return services.find((item) => item.slug === slug);
}

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const path = pathname;
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
  }, [pathname]);

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

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsCollapse(false);
        setIsMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
      <div className="container mx-auto flex items-center gap-6 px-5">
        <div className="flex flex-col justify-center flex-shrink-0">
          <BrandIcon compact />
          <span className="hidden lg:block text-[10px] font-medium text-gray-500 tracking-wide mt-0.5">
            Jaipur, Rajasthan
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-end gap-0.5 xl:gap-1 flex-1 min-w-0">
          {[
            { name: "Home", to: "/" },
            { name: "Services", isDropdown: true },
            { name: "Solutions", to: "/solutions" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Pricing", to: "/pricing" },
            { name: "Insights", to: "/blog" },
            { name: "Company", to: "/about" },
          ].map((item) => {
            const isActive = item.isDropdown
              ? path.startsWith("/services")
              : item.to === "/"
                ? path === "/"
                : path.startsWith(item.to);
            const linkClass = `px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg border-b-2 transition-colors ${
              isActive
                ? "text-theme-purple border-theme-purple"
                : "text-theme-blue border-transparent hover:text-theme-purple"
            }`;

            return (
            <div key={item.name} className="relative">
              {item.isDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                    className={`${linkClass} inline-flex items-center gap-1`}
                  >
                    {item.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  href={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={linkClass}
                >
                  {item.name}
                </Link>
              )}
            </div>
            );
          })}

          <Link
            href="/contact"
            className="ml-3 xl:ml-5 px-6 py-2.5 bg-theme-purple text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg whitespace-nowrap transition-shadow"
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

      <Transition
        show={isServicesOpen}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <div
          className="hidden lg:block absolute left-0 right-0 top-full pt-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_16px_40px_rgba(21,44,91,0.12)] p-5 md:p-6">
              <div className="grid grid-cols-3 gap-6">
                {SERVICE_MENU_GROUPS.map((group) => {
                  const groupAccent = accentAt(group.accentIndex);
                  return (
                  <div key={group.heading}>
                    <p className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-3 px-2 ${groupAccent.text}`}>
                      {group.heading}
                    </p>
                    <ul className="space-y-0.5">
                      {group.slugs.map((slug, idx) => {
                        const service = getService(slug);
                        if (!service) return null;
                        const accent = accentAt(group.accentIndex + idx);
                        return (
                          <li key={slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={handleLinkClick}
                              className="group/item flex items-start gap-3 rounded-xl px-2 py-2 hover:bg-gray-50 transition-colors"
                            >
                              <span className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${accent.iconWrap} group-hover/item:bg-theme-purple group-hover/item:text-white transition-colors`}>
                                <ServiceIcon slug={service.slug} className="w-4 h-4" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-theme-blue group-hover/item:text-theme-purple transition-colors">
                                  {service.title}
                                </span>
                                <span className="block text-xs text-gray-400 font-light leading-snug line-clamp-1">
                                  {service.shortDescription}
                                </span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-theme-purple/10 flex items-center justify-between gap-4">
                <p className="text-xs text-theme-blue/50 hidden sm:block">
                  Web, apps, design and growth — from Jaipur.
                </p>
                <Link
                  href="/services"
                  onClick={handleLinkClick}
                  className="ml-auto inline-flex items-center gap-2 text-sm font-bold text-theme-purple hover:text-dark-theme-purple"
                >
                  View all services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>

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
              <p className="text-sm font-semibold text-gray-500 mb-8">
                Office · Jaipur, Rajasthan
              </p>
              <nav className="flex flex-col space-y-6">
                {[
                  { name: "Home", to: "/" },
                  { name: "Services", isDropdown: true },
                  { name: "Solutions", to: "/solutions" },
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
                              {services.map((s, sIdx) => {
                                const accent = accentAt(sIdx);
                                return (
                                <Link
                                  key={s.id}
                                  href={`/services/${s.slug}`}
                                  onClick={handleLinkClick}
                                  className={`flex items-center gap-3 py-2.5 px-3 rounded-xl border ${accent.card}`}
                                >
                                  <span className={`w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center ${accent.iconWrap}`}>
                                    <ServiceIcon slug={s.slug} className="w-4 h-4" />
                                  </span>
                                  <span className="font-semibold text-theme-blue text-base">{s.title}</span>
                                </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={item.to} 
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
                  href="/contact" 
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
