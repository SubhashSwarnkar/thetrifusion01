"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "components/ScrollToTop";
import ContextualWhatsApp from "components/ContextualWhatsApp";
import LiveChat from "components/LiveChat";
import AttributionCapture from "components/AttributionCapture";
import CookieConsent from "components/CookieConsent";

export default function Providers({ children }) {
  return (
    <>
      {children}
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
