"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { trackEvent, AnalyticsEvents } from "utils/analytics";
import { getAttribution } from "utils/attribution";
import { sendSiteEmail } from "lib/sendSiteEmail";
import { buildLeadTemplateParams } from "lib/leadMessage";

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000 – ₹1.5L",
  "₹1.5L – ₹5L",
  "₹5L – ₹15L",
  "₹15L+",
  "Not sure yet",
];

const PROJECT_OPTIONS = [
  "Website",
  "Ecommerce",
  "Single vendor ecommerce",
  "Multi-vendor ecommerce",
  "Android app",
  "iOS app",
  "Mobile app (both)",
  "White-label / partner",
  "Other",
];

export default function ShortLeadForm({
  defaultProjectType = "Website",
  leadSource = "ads_short_form",
  heading = "Get a scoped next step",
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [attribution, setAttribution] = useState({});
  const [data, setData] = useState({
    name: "",
    phone: "",
    serviceInterest: defaultProjectType,
    budgetRange: "",
    website: "",
  });

  useEffect(() => {
    setAttribution(getAttribution());
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();

    if (data.website) {
      toast.success("Thanks. We will get back to you shortly.");
      return;
    }

    if (!data.name.trim() || !data.phone.trim() || !data.serviceInterest || !data.budgetRange) {
      toast.error("Please fill name, WhatsApp number, project type, and budget.");
      return;
    }

    if (data.phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter a valid 10-digit phone or WhatsApp number.");
      return;
    }

    setSubmitting(true);
    try {
      const leadPayload = {
        name: data.name.trim(),
        company: "Not provided",
        email: "",
        phone: data.phone.trim(),
        projectIdea: `${data.serviceInterest} enquiry via ${leadSource}`,
        serviceInterest: data.serviceInterest,
        budgetRange: data.budgetRange,
        timeline: "",
        website: "",
        leadSource,
        ...attribution,
      };

      await sendSiteEmail(buildLeadTemplateParams(leadPayload));

      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadPayload,
          clientSent: true,
        }),
      }).catch(() => {});

      trackEvent(AnalyticsEvents.GENERATE_LEAD, {
        method: leadSource,
        service_interest: data.serviceInterest,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      });

      router.push(`/thank-you?from=${encodeURIComponent(leadSource)}`);
    } catch (error) {
      toast.error(error.message || "Failed to send. Try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-theme-blue font-medium focus:outline-none focus:ring-2 focus:ring-theme-purple/40";

  return (
    <form
      id="lead-form"
      onSubmit={submit}
      className="relative bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-7"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-theme-purple mb-2">
        4 fields · WhatsApp-first
      </p>
      <h2 className="text-2xl font-black text-theme-blue mb-5">{heading}</h2>

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
          value={data.website}
          onChange={onChange}
        />
      </div>

      <div className="space-y-3">
        <input
          id="ads-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-label="Your name"
          value={data.name}
          onChange={onChange}
          className={fieldClass}
          required
        />
        <input
          id="ads-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="WhatsApp / phone"
          aria-label="WhatsApp or phone"
          value={data.phone}
          onChange={onChange}
          className={fieldClass}
          required
        />
        <select
          name="serviceInterest"
          value={data.serviceInterest}
          onChange={onChange}
          className={fieldClass}
          aria-label="Project type"
          required
        >
          <option value="">Project type</option>
          {PROJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="budgetRange"
          value={data.budgetRange}
          onChange={onChange}
          className={fieldClass}
          aria-label="Budget range"
          required
        >
          <option value="">Budget range</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 rounded-full bg-theme-purple text-white font-bold shadow-lg shadow-theme-purple/25 hover:bg-dark-theme-purple disabled:opacity-60 transition-colors"
        >
          {submitting ? "Sending..." : "Get a callback"}
        </button>
        <p className="text-xs text-gray-400 text-center font-light">
          Jaipur office · we reply on WhatsApp, usually the same day.
        </p>
      </div>
    </form>
  );
}
