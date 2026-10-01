"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildLeadTemplateParams } from "lib/leadMessage";
import {
  LEAD_POPUP_STORAGE_KEY,
  canCountLeadPopupTime,
  isCookieBannerOpen,
  isLeadPopupBlocked,
  writeLeadPopupStatus,
} from "lib/leadPopupGate";
import { sendSiteEmail } from "lib/sendSiteEmail";
import { getAttribution } from "utils/attribution";
import { AnalyticsEvents, trackEvent } from "utils/analytics";

const NEED_OPTIONS = [
  "Mobile App",
  "Website",
  "Ecommerce",
  "EV Charging Software",
  "Custom Software",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled])';

function parseContact(value) {
  const contact = String(value || "").trim();
  if (!contact) return null;
  if (contact.includes("@")) {
    return EMAIL_RE.test(contact) ? { email: contact, phone: "" } : null;
  }
  const digits = contact.replace(/\D/g, "");
  if (digits.length >= 7) return { email: "", phone: contact };
  return null;
}

export default function LeadPopup() {
  const pathname = usePathname();
  const dialogRef = useRef(null);
  const retiredRef = useRef(false);
  const revealedRef = useRef(false);
  const phaseRef = useRef("form");
  const submittingRef = useRef(false);
  const closeRef = useRef(() => {});
  const errorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    name: "",
    contact: "",
    need: "",
    website: "",
  });

  phaseRef.current = phase;
  submittingRef.current = submitting;

  const closePopup = () => {
    retiredRef.current = true;
    setOpen(false);
    if (phaseRef.current !== "success") {
      writeLeadPopupStatus("dismissed");
    }
  };
  closeRef.current = closePopup;

  useEffect(() => {
    if (isLeadPopupBlocked()) {
      retiredRef.current = true;
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    const sync = () => {
      if (retiredRef.current) {
        setOpen(false);
        return;
      }
      // Cookie banner pauses the show; closing it reveals the same popup.
      if (isCookieBannerOpen()) {
        setOpen(false);
        return;
      }
      if (!canCountLeadPopupTime()) {
        setOpen(false);
        if (revealedRef.current) retiredRef.current = true;
        return;
      }
      revealedRef.current = true;
      setOpen(true);
    };

    sync();
    const id = window.setInterval(sync, 200);
    const onStorage = (event) => {
      if (event.key === LEAD_POPUP_STORAGE_KEY && event.newValue) {
        retiredRef.current = true;
        setOpen(false);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("storage", onStorage);
    };
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("tf-lead-open", open);
    return () => document.documentElement.classList.remove("tf-lead-open");
  }, [open]);

  useLayoutEffect(() => {
    if (!open) {
      document.documentElement.style.removeProperty("--tf-lead-popup-height");
      return undefined;
    }
    const node = dialogRef.current;
    if (!node || typeof ResizeObserver === "undefined") return undefined;
    const apply = () => {
      const height = Math.ceil(node.getBoundingClientRect().height);
      document.documentElement.style.setProperty(
        "--tf-lead-popup-height",
        `${height}px`
      );
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--tf-lead-popup-height");
    };
  }, [open, phase]);

  useEffect(() => {
    if (!open) return undefined;
    const root = dialogRef.current;
    if (!root) return undefined;
    const previous = document.activeElement;
    root.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = [...root.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.tabIndex !== -1 && !el.closest("[aria-hidden='true']")
      );
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !root.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !root.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previous && typeof previous.focus === "function") {
        previous.focus({ preventScroll: true });
      }
    };
  }, [open, phase]);

  useEffect(() => {
    if (!error || !errorRef.current) return;
    errorRef.current.focus({ preventScroll: true });
  }, [error]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submittingRef.current) return;

    const name = fields.name.trim();
    const contact = fields.contact.trim();
    const need = fields.need.trim();
    const parsed = parseContact(contact);

    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!parsed) {
      setError(
        "Enter a valid email or a phone number with at least 7 digits."
      );
      return;
    }
    if (!NEED_OPTIONS.includes(need)) {
      setError("Please choose what you need.");
      return;
    }

    if (fields.website) {
      writeLeadPopupStatus("submitted");
      phaseRef.current = "success";
      setPhase("success");
      setError("");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const pageUrl = window.location.href;
      let attribution = {};
      try {
        attribution = getAttribution();
      } catch {
        attribution = {};
      }

      const projectIdea = [
        "source=popup",
        `Page: ${pageUrl}`,
        `What do you need: ${need}`,
        `Contact: ${contact}`,
      ].join("\n");

      const leadPayload = {
        name,
        company: "Not provided",
        email: parsed.email,
        phone: parsed.phone,
        projectIdea,
        serviceInterest: need,
        budgetRange: "",
        timeline: "",
        website: "",
        leadSource: "popup",
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
        method: "popup_lead",
        label: "popup_lead",
        event_label: "popup_lead",
        service_interest: need,
        page_path: window.location.pathname,
      });

      writeLeadPopupStatus("submitted");
      if (retiredRef.current) return;
      phaseRef.current = "success";
      setPhase("success");
    } catch (sendError) {
      setError(sendError?.message || "Could not send right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="tf-lead-root">
      <div
        className="tf-lead-overlay"
        onClick={closePopup}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        id="tf-lead-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tf-lead-title"
        tabIndex={-1}
        className="tf-lead-popup flex flex-col overflow-hidden bg-white text-left shadow-2xl border border-gray-100 rounded-t-2xl sm:rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-purple"
      >
        <div className="h-1 w-full shrink-0 bg-gradient-to-r from-theme-purple via-theme-cyan to-theme-pink" />
        <div className="flex items-start gap-2 px-4 pt-3 pb-2 shrink-0">
          <h2
            id="tf-lead-title"
            className="flex-1 text-sm sm:text-base font-black text-theme-blue leading-snug"
            aria-live="polite"
          >
            {phase === "success"
              ? "Thanks! We'll contact you soon."
              : "Planning a project? Get a free quote in 24 hours"}
          </h2>
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close"
            className="shrink-0 w-11 h-11 rounded-full text-gray-500 hover:bg-gray-100 hover:text-theme-blue text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {phase === "success" ? (
          <div className="px-4 pb-4" />
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="overflow-y-auto px-4 pb-3 space-y-2"
          >
            <div aria-hidden="true" className="sr-only">
              <label htmlFor="tf-lead-website">Website</label>
              <input
                id="tf-lead-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={fields.website}
                onChange={onChange}
              />
            </div>

            <div>
              <label
                htmlFor="tf-lead-name"
                className="block text-[11px] font-semibold text-gray-500 mb-1"
              >
                Name
              </label>
              <input
                id="tf-lead-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                value={fields.name}
                onChange={onChange}
                disabled={submitting}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white text-base sm:text-sm text-theme-blue font-medium focus:outline-none focus:ring-2 focus:ring-theme-purple/40"
              />
            </div>

            <div>
              <label
                htmlFor="tf-lead-contact"
                className="block text-[11px] font-semibold text-gray-500 mb-1"
              >
                Phone or Email
              </label>
              <input
                id="tf-lead-contact"
                name="contact"
                type="text"
                autoComplete="on"
                required
                aria-required="true"
                aria-invalid={error.startsWith("Enter a valid") ? true : undefined}
                value={fields.contact}
                onChange={onChange}
                disabled={submitting}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white text-base sm:text-sm text-theme-blue font-medium focus:outline-none focus:ring-2 focus:ring-theme-purple/40"
              />
            </div>

            <div>
              <label
                htmlFor="tf-lead-need"
                className="block text-[11px] font-semibold text-gray-500 mb-1"
              >
                What do you need?
              </label>
              <select
                id="tf-lead-need"
                name="need"
                required
                aria-required="true"
                value={fields.need}
                onChange={onChange}
                disabled={submitting}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white text-base sm:text-sm text-theme-blue font-medium focus:outline-none focus:ring-2 focus:ring-theme-purple/40"
              >
                <option value="">Select one</option>
                {NEED_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {error ? (
              <p
                ref={errorRef}
                tabIndex={-1}
                role="alert"
                className="text-xs text-red-600 focus:outline-none"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-full bg-theme-purple text-white text-sm font-bold shadow-lg shadow-theme-purple/25 hover:bg-dark-theme-purple disabled:opacity-60 transition-colors"
            >
              {submitting ? "Sending..." : "Get a free quote"}
            </button>
            <button
              type="button"
              onClick={closePopup}
              className="w-full py-1.5 text-sm text-gray-500 hover:text-theme-blue"
            >
              No thanks
            </button>
            <p className="text-[11px] leading-snug text-gray-500 text-center">
              We use this only to reply to your quote.{" "}
              <Link
                href="/privacy"
                onClick={(event) => {
                  if (
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey ||
                    event.button !== 0
                  ) {
                    return;
                  }
                  retiredRef.current = true;
                  setOpen(false);
                }}
                className="underline text-theme-purple"
              >
                Privacy
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
