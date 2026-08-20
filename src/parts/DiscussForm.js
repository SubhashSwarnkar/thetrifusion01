"use client";

import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "elements/Form";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import { getAttribution } from "utils/attribution";

const SERVICE_OPTIONS = [
  "",
  "Custom software",
  "Ecommerce / online store",
  "Website",
  "Mobile app",
  "UI/UX design",
  "Digital marketing",
  "MSP / IT support",
  "CRM / ERP",
  "Other",
];

const BUDGET_OPTIONS = [
  "",
  "Under ₹50,000",
  "₹50,000 – ₹1.5L",
  "₹1.5L – ₹5L",
  "₹5L – ₹15L",
  "₹15L+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "",
  "ASAP / under 4 weeks",
  "1–2 months",
  "2–4 months",
  "4+ months",
  "Exploring only",
];

const selectClass =
  "w-full p-4 font-light text-lg text-theme-blue rounded border border-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-theme-purple";

export const DiscussForm = (actions) => {
  const {
    data,
    resetForm,
    leadSource = "discuss_form",
    titleAs = "h2",
  } = actions;
  const [submitting, setSubmitting] = useState(false);
  const [attribution, setAttribution] = useState({});
  const TitleTag = titleAs === "h1" ? "h1" : "h2";

  useEffect(() => {
    setAttribution(getAttribution());
  }, []);

  const submitEmail = async () => {
    const {
      name,
      company,
      email,
      phone,
      projectIdea,
      serviceInterest = "",
      budgetRange = "",
      timeline = "",
      website = "",
    } = data;

    if (!name || !company || !email || !phone || !projectIdea) {
      toast.error(
        "Please fill out all fields (name, company, email, phone, and description)."
      );
      return;
    }

    const isAwsOffer =
      leadSource === "aws_promo_offer" ||
      (projectIdea || "").includes("[AWS Marketplace Offer");

    setSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          projectIdea,
          serviceInterest,
          budgetRange,
          timeline,
          website,
          leadSource,
          ...attribution,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      trackEvent(AnalyticsEvents.GENERATE_LEAD, {
        method: leadSource,
        offer: isAwsOffer ? "aws-marketplace" : undefined,
        service_interest: serviceInterest || undefined,
        page_path:
          typeof window !== "undefined" ? window.location.pathname : "",
      });

      toast.success(
        isAwsOffer
          ? "Offer enquiry sent! We will email you shortly about the AWS package."
          : "Success! we'll get back to you soon. Thank you!"
      );
      resetForm();
    } catch (error) {
      toast.error(error.message || "Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col container mx-auto justify-center">
      <div className="bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-theme-purple/10 rounded-full blur-2xl"></div>

        <TitleTag className="text-4xl text-theme-blue text-center font-black mb-4 tracking-tight">
          Let's <span className="text-theme-purple">Collaborate</span>
        </TitleTag>

        <Fade direction="up" triggerOnce>
          <p className="font-light text-lg text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Fill out the form below and we'll connect within 24 hours to turn
            your vision into reality.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {/* Honeypot — hidden from users */}
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] opacity-0 h-0 overflow-hidden"
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={data.website || ""}
                onChange={actions.onChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form
                id="name"
                name="name"
                type="text"
                value={data.name}
                placeholder="Full Name"
                className="w-full"
                onChange={actions.onChange}
              />
              <Form
                id="company"
                name="company"
                type="text"
                value={data.company}
                placeholder="Company Name"
                className="w-full"
                onChange={actions.onChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form
                id="email"
                name="email"
                type="email"
                value={data.email}
                placeholder="Work Email"
                className="w-full"
                onChange={actions.onChange}
              />
              <Form
                id="phone"
                name="phone"
                type="number"
                value={data.phone}
                placeholder="Contact Number"
                className="w-full"
                onChange={actions.onChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <select
                name="serviceInterest"
                value={data.serviceInterest || ""}
                onChange={actions.onChange}
                className={selectClass}
                aria-label="Service interest"
              >
                <option value="">Service interest</option>
                {SERVICE_OPTIONS.filter(Boolean).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="budgetRange"
                value={data.budgetRange || ""}
                onChange={actions.onChange}
                className={selectClass}
                aria-label="Budget range"
              >
                <option value="">Budget range</option>
                {BUDGET_OPTIONS.filter(Boolean).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="timeline"
                value={data.timeline || ""}
                onChange={actions.onChange}
                className={selectClass}
                aria-label="Timeline"
              >
                <option value="">Timeline</option>
                {TIMELINE_OPTIONS.filter(Boolean).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Briefly describe your project idea..."
              className="w-full"
              onChange={actions.onChange}
            />

            <button
              className="group relative px-12 py-5 bg-theme-purple text-white rounded-2xl font-black text-xl shadow-xl shadow-theme-purple/20 overflow-hidden transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 mt-4 disabled:opacity-60"
              type="button"
              onClick={submitEmail}
              disabled={submitting}
            >
              <span className="relative z-10 flex items-center gap-2">
                {submitting
                  ? "Sending..."
                  : leadSource === "aws_promo_offer"
                    ? "Submit AWS Offer Enquiry"
                    : "Send Message"}
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-theme-purple to-theme-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};
