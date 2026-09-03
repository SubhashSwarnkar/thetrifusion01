"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import { WHATSAPP_NUMBER, COMPANY_PHONE_DISPLAY } from "data/companyInfo";
import { getServiceBySlug } from "data/servicesData";
import { trackEvent, AnalyticsEvents } from "utils/analytics";

function getContextualChips(pathname) {
  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "").split("/")[0];
    const service = getServiceBySlug(slug);
    const serviceName = service?.title || slug.replace(/-/g, " ");

    if (slug === "mlm-crm-development") {
      return [
        { label: "🌳 MLM CRM Quote", text: "Hi TriFusion, I need an MLM CRM software quote for our compensation plan." },
        { label: "📊 Genealogy & Wallets", text: "Hi TriFusion, we need unilevel genealogy tree, KYC verification, and wallet payout modules." },
        { label: "📱 MLM Mobile Apps", text: "Hi TriFusion, do you build iOS and Android field apps for network marketing leaders?" },
        { label: "📅 Book Discovery Call", text: "Hi TriFusion, I want to book a 15-minute discovery call for our MLM project." },
      ];
    }
    if (slug === "ev-charging-app-development") {
      return [
        { label: "⚡ EV Charging App", text: "Hi TriFusion, I need an EV charging app with OCPI roaming & OCPP charger control." },
        { label: "🔌 eMSP & CPO System", text: "Hi TriFusion, we need a driver mobile app (iOS/Android) plus an operator web console." },
        { label: "🔋 PlugOne Demo", text: "Hi TriFusion, can you share live capabilities based on your PlugOne EV platform?" },
        { label: "📅 Book Discovery Call", text: "Hi TriFusion, I want to book a technical consultation for EV charging software." },
      ];
    }
    if (slug === "fintech-app-development") {
      return [
        { label: "💳 BBPS / AEPS / DMT", text: "Hi TriFusion, I want to buy BBPS, AEPS, DMT or XDMT software (retailer + distributor + admin)." },
        { label: "🏦 Retailer Banking App", text: "Hi TriFusion, we need a white-label retailer Android app with BBPS, AEPS and DMT." },
        { label: "🔐 KYC & UPI Add-ons", text: "Hi TriFusion, we need KYC, UPI and settlement ledgers on our fintech software." },
        { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we schedule a consultation on BBPS / AEPS / DMT software?" },
      ];
    }
    if (slug === "crm-erp-development") {
      return [
        { label: "📊 Custom CRM / ERP", text: "Hi TriFusion, I need custom CRM / ERP modules tailored to our business workflow." },
        { label: "📑 Replace Excel Chaos", text: "Hi TriFusion, we want to replace our spreadsheets with a structured web & mobile app." },
        { label: "📦 Inventory & Billing", text: "Hi TriFusion, we need sales pipelines, inventory management, and billing dashboards." },
        { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we discuss a phased CRM/ERP rollout from Jaipur?" },
      ];
    }
    if (slug === "ios-app-development" || slug === "android-app-development" || slug === "mobile-app-development") {
      return [
        { label: "📱 Mobile App Quote", text: `Hi TriFusion, I need a ${serviceName} quote for our business.` },
        { label: "🚀 Cross-Platform MVP", text: "Hi TriFusion, we need a React Native / Flutter MVP for iOS and Android in 8-12 weeks." },
        { label: "🎨 Have Figma Designs", text: "Hi TriFusion, we already have Figma UI designs ready and need development & store listing." },
        { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we schedule a 15-minute call to scope our mobile app?" },
      ];
    }
    if (slug === "website-development") {
      return [
        { label: "🌐 Website Quote", text: "Hi TriFusion, I want a high-performance Next.js / React business website quote." },
        { label: "🛒 Ecommerce Store", text: "Hi TriFusion, we need a custom Ecommerce website with payment gateways & admin." },
        { label: "🔄 Redesign Site", text: "Hi TriFusion, we want to modernize our existing website for better SEO and speed." },
        { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we book a quick discovery call for our website project?" },
      ];
    }

    return [
      { label: `💬 ${serviceName} Quote`, text: `Hi TriFusion, I need a consultation and quote for ${serviceName}.` },
      { label: "💰 Timeline & Cost", text: `Hi TriFusion, what is the starting cost and delivery timeline for ${serviceName}?` },
      { label: "🚀 Custom Scope", text: `Hi TriFusion, we have specific requirements for ${serviceName}. Can we get a written estimate?` },
      { label: "📅 Book Discovery Call", text: `Hi TriFusion, can we schedule a 15-minute discovery call for ${serviceName}?` },
    ];
  }

  if (pathname.startsWith("/pricing")) {
    return [
      { label: "💰 Pricing Breakdown", text: "Hi TriFusion, I want a detailed pricing breakdown and scope for our project." },
      { label: "🚀 MVP Starting Range", text: "Hi TriFusion, what would be the MVP cost for our web / mobile software?" },
      { label: "📑 Get Written Scope", text: "Hi TriFusion, I have a brief ready. Can you share a written scope and estimate?" },
      { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we book a 15-minute call to discuss budget and milestones?" },
    ];
  }

  if (pathname.startsWith("/portfolio")) {
    return [
      { label: "🏆 Similar Project Quote", text: "Hi TriFusion, I saw your live portfolio projects and want to build something similar." },
      { label: "⚡ EV / Dairy / Ecommerce", text: "Hi TriFusion, I want to learn more about your work on PlugOne, Connect Dairy, or DailyConcepts." },
      { label: "🚀 Technical Architecture", text: "Hi TriFusion, what tech stack do you recommend for our new software build?" },
      { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we schedule a call to review our project requirements?" },
    ];
  }

  if (pathname.startsWith("/ecommerce-development")) {
    return [
      { label: "🛒 Single Vendor ₹25k", text: "Hi TriFusion, I want the Single Vendor ecommerce package at ₹25,000 (web + Android + iOS)." },
      { label: "🏪 Multi-Vendor ₹35k", text: "Hi TriFusion, I want the Multi-Vendor ecommerce package at ₹35,000 (web + Android + iOS marketplace)." },
      { label: "🥬 Grocery / Fashion Store", text: "Hi TriFusion, I need an ecommerce store (grocery / clothing / other) with web + Android + iOS." },
      { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we schedule a 15-minute call for the ecommerce package?" },
    ];
  }

  if (pathname.startsWith("/web-development") || pathname.startsWith("/android-app-development") || pathname.startsWith("/ios-app-development")) {
    const type = pathname.includes("android") ? "Android App" : pathname.includes("ios") ? "iOS App" : "Website";
    return [
      { label: `🚀 ${type} Quote`, text: `Hi TriFusion, I want a ${type} development quote from the Jaipur team.` },
      { label: "⏱️ 6-8 Week Launch", text: `Hi TriFusion, can we launch our ${type} MVP within 6-8 weeks?` },
      { label: "💰 Price Range", text: `Hi TriFusion, what is the starting estimate for our ${type} project?` },
      { label: "📅 Book Discovery Call", text: "Hi TriFusion, can we schedule a 15-minute call today?" },
    ];
  }

  // Default Chips for Home & other pages
  return [
    { label: "🚀 Custom Software Quote", text: "Hi TriFusion, I want a custom software development quote for our business." },
    { label: "🌐 Website / Ecommerce", text: "Hi TriFusion, I need a modern React / Next.js website with SEO & post-launch support." },
    { label: "📱 Mobile App (iOS/Android)", text: "Hi TriFusion, I want to build a mobile app (iOS and Android) for our product." },
    { label: "⚡ EV / MLM / CRM Solution", text: "Hi TriFusion, I need a consultation for an EV charging / MLM / CRM software solution." },
    { label: "📅 Book 15-min Call", text: "Hi TriFusion, can we schedule a 15-minute discovery call this week?" },
  ];
}

export default function WhatsAppWidget({ defaultMessage }) {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [activeChipIndex, setActiveChipIndex] = useState(null);
  const modalRef = useRef(null);
  const textareaRef = useRef(null);

  const chips = useMemo(() => getContextualChips(pathname), [pathname]);

  // Initialize or update default message based on route
  useEffect(() => {
    const initialMsg = defaultMessage || chips[0]?.text || "Hi TriFusion, I want a project consultation.";
    setMessage(initialMsg);
    setActiveChipIndex(0);
  }, [pathname, defaultMessage, chips]);

  // Listen for custom trigger events from any in-page button
  useEffect(() => {
    const handleOpenModal = (event) => {
      const customText = event.detail?.message;
      if (customText) {
        setMessage(customText);
        setActiveChipIndex(null);
      }
      setIsOpen(true);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 150);
    };

    window.addEventListener("open-whatsapp-modal", handleOpenModal);
    return () => window.removeEventListener("open-whatsapp-modal", handleOpenModal);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        // Only close if not clicking the toggle button itself
        const toggleBtn = document.getElementById("floating-whatsapp-trigger");
        if (toggleBtn && toggleBtn.contains(event.target)) return;
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleChipClick = (chipText, index) => {
    setMessage(chipText);
    setActiveChipIndex(index);
    textareaRef.current?.focus();
  };

  const handleSend = () => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const finalMsg = message.trim() || chips[0]?.text || "Hi TriFusion, I want a project consultation.";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(finalMsg)}`;

    trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
      message_preview: finalMsg.slice(0, 80),
      page_path: pathname,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      <button
        id="floating-whatsapp-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setTimeout(() => textareaRef.current?.focus(), 150);
          }
        }}
        aria-label="Chat with TheTriFusion on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-[0_8px_30px_rgb(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        
        {isOpen ? (
          <svg className="w-6 h-6 transition-transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}

        {/* Hover label tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
            Chat on WhatsApp
          </span>
        )}
      </button>

      {/* Interactive WhatsApp Popover Card (Opens Upwards above button) */}
      {isOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-label="WhatsApp Quick Chat"
          className="absolute bottom-[68px] right-0 w-[92vw] sm:w-[390px] max-w-[420px] max-h-[calc(100vh-100px)] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-emerald-500/25 overflow-hidden flex flex-col z-50 transition-all duration-200 origin-bottom-right"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-lg font-black border border-white/30">
                  ⚡
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-emerald-700 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">TheTriFusion Team</h3>
                <p className="text-xs text-emerald-100 font-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  Jaipur HQ · Typically replies in 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-[#efeae2]/50 to-white max-h-[62vh] overflow-y-auto space-y-4">
            {/* Greeting Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                TF
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-gray-100 text-xs sm:text-sm text-slate-800 leading-relaxed max-w-[88%]">
                <p className="font-semibold text-emerald-800 mb-1">Namaste! 👋</p>
                <p className="text-gray-600 font-light">
                  Choose a quick option below or type your custom requirement. We will continue directly in WhatsApp!
                </p>
              </div>
            </div>

            {/* Quick Pre-filled Chips */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">
                Quick Select Option
              </p>
              <div className="flex flex-wrap gap-1.5">
                {chips.map((chip, idx) => {
                  const isSelected = activeChipIndex === idx;
                  return (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => handleChipClick(chip.text, idx)}
                      className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all text-left ${
                        isSelected
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm scale-102"
                          : "bg-white text-slate-700 border-gray-200 hover:border-emerald-500 hover:text-emerald-700 shadow-2xs"
                      }`}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Editable Message Input Area */}
            <div>
              <div className="flex items-center justify-between mb-1.5 px-1">
                <label htmlFor="wa-custom-msg" className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Your Message to Send
                </label>
                <span className="text-[10px] text-gray-400">
                  Editable · {message.length} chars
                </span>
              </div>
              <div className="relative">
                <textarea
                  id="wa-custom-msg"
                  ref={textareaRef}
                  rows={3}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setActiveChipIndex(null);
                  }}
                  placeholder="Type your custom requirement, budget, or question here..."
                  className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none text-slate-800 resize-none shadow-inner bg-white font-normal"
                />
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <button
              type="button"
              onClick={handleSend}
              className="w-full py-3.5 px-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Chat on WhatsApp Now</span>
            </button>

            {/* Urgent Phone Link */}
            <div className="pt-2 text-center">
              <p className="text-[11px] text-gray-500 font-light">
                Prefer a phone call?{" "}
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  onClick={() => trackEvent(AnalyticsEvents.CLICK_PHONE, { source: "whatsapp_widget" })}
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Call {COMPANY_PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
