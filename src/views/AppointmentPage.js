"use client";

import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";

export default function AppointmentPage() {
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
              Book a Consultation
            </h1>
            <p className="font-light text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project and get expert advice from our team.
            </p>
          </div>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <div className="max-w-4xl mx-auto">
            {/* Calendly Embed - Replace with your Calendly link */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/your-username/consultation"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>

            {/* Alternative: Custom Booking Form */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl text-theme-blue font-bold mb-6">
                Or Contact Us Directly
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    📞 Phone
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:+919799995083" className="hover:text-theme-purple">
                      +91 9799995083
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    ✉️ Email
                  </h3>
                  <p className="text-gray-600">
                    <a href="mailto:TheTrifusion@gmail.com" className="hover:text-theme-purple">
                      TheTrifusion@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    💬 WhatsApp
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="https://wa.me/919799995083"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-theme-purple"
                    >
                      Chat with us
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-theme-blue mb-2">
                    📍 Location
                  </h3>
                  <p className="text-gray-600">
                    Jaipur, Rajasthan, India
                  </p>
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

