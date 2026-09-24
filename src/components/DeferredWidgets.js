"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "components/ScrollToTop";
import ContextualWhatsApp from "components/ContextualWhatsApp";
import LiveChat from "components/LiveChat";
import AttributionCapture from "components/AttributionCapture";
import CookieConsent from "components/CookieConsent";

/** Chat, toasts and consent UI. Mounted after idle so they stay off the LCP path. */
export default function DeferredWidgets() {
  return (
    <>
      <AttributionCapture />
      <ScrollToTop />
      <ContextualWhatsApp />
      <LiveChat />
      <CookieConsent />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
