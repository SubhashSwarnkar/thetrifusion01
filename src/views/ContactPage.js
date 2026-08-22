"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { DiscussForm } from "parts/DiscussForm";
import { Fade } from "react-awesome-reveal";
import { faqs } from "data/faqData";
import SEO from "components/common/SEO";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import {
  COMPANY_EMAIL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "data/companyInfo";
import { AWS_PROMO_OFFER, getOfferPrefill } from "data/promoOffer";

export default function ContactPage() {
  const [isAwsOffer, setIsAwsOffer] = useState(false);
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
    serviceInterest: "",
    budgetRange: "",
    timeline: "",
    website: "",
  });
  const [openFaqs, setOpenFaqs] = useState([]);
  const [displayedFaqs] = useState(faqs.slice(0, 5));

  useEffect(() => {
    window.scrollTo(0, 0);

    // Read offer from URL after mount — avoids useSearchParams CSR bailout
    const offerParam = new URLSearchParams(window.location.search).get("offer");
    const prefill = getOfferPrefill(offerParam);
    if (!prefill) return;

    setIsAwsOffer(offerParam === AWS_PROMO_OFFER.queryValue);
    setData((prev) => ({
      ...prev,
      company: prev.company || prefill.company,
      projectIdea: prev.projectIdea || prefill.projectIdea,
    }));

    const timer = window.setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleFaq = (faqId) => {
    setOpenFaqs((prev) =>
      prev.includes(faqId)
        ? prev.filter((id) => id !== faqId)
        : [...prev, faqId]
    );
  };

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
      serviceInterest: "",
      budgetRange: "",
      timeline: "",
      website: "",
    });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with TheTriFusion team. Discuss your project, schedule a consultation, or just say hello."
      />
      <Header />

      <main className="overflow-hidden">
        <Breadcrumbs />

        <section className="relative pt-10 pb-20 bg-white">
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-light-theme-purple/30 rounded-full blur-[120px] -z-10 animate-float opacity-50"></div>
          <div
            className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-theme-cyan/10 rounded-full blur-[100px] -z-10 animate-float opacity-40"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container mx-auto px-5">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-light-theme-purple/30 text-theme-purple font-bold text-xs uppercase tracking-[0.2em] mb-6">
                Get In Touch
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-theme-blue mb-8 tracking-tighter leading-none">
                Let’s Build Something <br />
                <span className="text-gradient">Extraordinary</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
                Have a vision? We have the expertise. Let&apos;s start a conversation
                that transforms your business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-8">
                  <h2 className="text-4xl font-black text-theme-blue tracking-tight">
                    Contact <span className="text-theme-purple">Details</span>
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Email Us",
                        value: COMPANY_EMAIL,
                        icon: "✉️",
                        link: `mailto:${COMPANY_EMAIL}`,
                        event: AnalyticsEvents.CLICK_EMAIL,
                      },
                      {
                        title: "Registered Company",
                        value: "Trifusion Infotech Pvt. Ltd.",
                        icon: "🏢",
                        link: null,
                      },
                      {
                        title: "Visit Us",
                        value: "Jaipur, Rajasthan, India",
                        icon: "📍",
                        link: null,
                      },
                      {
                        title: "LinkedIn",
                        value: "TheTriFusion",
                        icon: "in",
                        link: LINKEDIN_URL,
                      },
                      {
                        title: "Instagram",
                        value: "@thetrifusion",
                        icon: "📸",
                        link: INSTAGRAM_URL,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-500"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {item.title}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={
                                item.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.link.startsWith("http")
                                  ? "noreferrer"
                                  : undefined
                              }
                              onClick={() => {
                                if (item.event) trackEvent(item.event);
                              }}
                              className="text-xl font-bold text-theme-blue hover:text-theme-purple transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-xl font-bold text-theme-blue">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-theme-blue text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-theme-purple/20 rounded-full blur-[120px]"></div>
                  <h3 className="text-2xl font-black mb-6 relative z-10">
                    Common Questions
                  </h3>
                  <div className="space-y-4 relative z-10">
                    {displayedFaqs.slice(0, 3).map((faq) => (
                      <div
                        key={faq.id}
                        className="border-b border-white/10 pb-4"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left flex justify-between items-center group"
                        >
                          <span className="font-bold text-white/80 group-hover:text-white transition-colors">
                            {faq.question}
                          </span>
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              openFaqs.includes(faq.id) ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openFaqs.includes(faq.id) && (
                          <p className="mt-2 text-sm text-white/60 font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/faq"
                    className="inline-block mt-8 text-sm font-bold text-theme-cyan hover:underline uppercase tracking-widest"
                  >
                    View all FAQs →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7" id="contact-form">
                {isAwsOffer && (
                  <div className="mb-6 p-5 rounded-2xl border border-theme-purple/20 bg-light-theme-purple/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-theme-purple mb-1">
                      AWS Marketplace Offer
                    </p>
                    <p className="text-sm text-theme-blue font-medium">
                      Description is pre-filled with the ₹9,999 AWS package
                      details. Add your name, email, and phone — submit to reach
                      our team by email.
                    </p>
                  </div>
                )}
                <DiscussForm
                  data={data}
                  onChange={onChange}
                  resetForm={resetForm}
                  leadSource={isAwsOffer ? "aws_promo_offer" : "contact_form"}
                />
              </div>
            </div>

            <Fade direction="up" triggerOnce>
              <div className="relative rounded-[4rem] overflow-hidden bg-theme-blue p-12 md:p-24 shadow-2xl mb-20 text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-theme-purple/20 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-theme-cyan/10 rounded-full blur-[120px]"></div>

                <div className="relative z-10">
                  <div className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">
                    Consultation
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                    Ready for a <br />
                    <span className="text-gradient">Deep Dive?</span>
                  </h2>
                  <p className="text-white/70 text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                    Schedule a 1-on-1 strategy session with our senior architects.
                    No sales pitch, just real technical value.
                  </p>

                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-theme-blue rounded-full text-xl font-black hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-black/40"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
