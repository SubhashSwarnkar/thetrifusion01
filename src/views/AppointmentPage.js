"use client";

import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import Script from "next/script";
import { siteConfig } from "config/site";
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "data/companyInfo";
import { trackEvent, AnalyticsEvents } from "utils/analytics";

export default function AppointmentPage() {
  const calendlyUrl = siteConfig.calendlyUrl;
  const phoneHref = `tel:${COMPANY_PHONE_DISPLAY.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi TriFusion, I want to book a discovery call."
  )}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-4">
              Book a 15-minute consultation
            </h1>
            <p className="font-light text-lg text-gray-600 max-w-2xl mx-auto">
              Jaipur team · low-commitment call to see if the project is a fit.
              Pick a slot or WhatsApp us.
            </p>
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="max-w-4xl mx-auto">
            {calendlyUrl ? (
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 mb-8">
                <div
                  className="calendly-inline-widget"
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </div>
            ) : (
              <div className="bg-light-theme-purple/40 rounded-2xl p-8 border border-theme-purple/20 mb-8 text-center">
                <p className="text-theme-blue font-medium mb-4">
                  Calendar embed is not configured yet. WhatsApp or call the
                  Jaipur office for a 15-minute slot.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
                      source: "appointment",
                    })
                  }
                  className="inline-flex px-7 py-3.5 bg-green-500 text-white rounded-full font-bold"
                >
                  WhatsApp to book
                </a>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Or contact the Jaipur office
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href={phoneHref}
                      onClick={() =>
                        trackEvent(AnalyticsEvents.CLICK_PHONE, {
                          source: "appointment",
                        })
                      }
                      className="hover:text-theme-purple"
                    >
                      {COMPANY_PHONE_DISPLAY}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      onClick={() =>
                        trackEvent(AnalyticsEvents.CLICK_EMAIL, {
                          source: "appointment",
                        })
                      }
                      className="hover:text-theme-purple"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent(AnalyticsEvents.CLICK_WHATSAPP, {
                          source: "appointment",
                        })
                      }
                      className="hover:text-theme-purple"
                    >
                      Chat with us
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    Office
                  </h3>
                  <p className="text-gray-600">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}
