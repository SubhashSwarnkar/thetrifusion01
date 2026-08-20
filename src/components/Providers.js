"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "components/ScrollToTop";
import ContextualWhatsApp from "components/ContextualWhatsApp";
import LiveChat from "components/LiveChat";
import DevToolsBlocker from "components/DevToolsBlocker";
import PromoDialog from "components/PromoDialog";
import AttributionCapture from "components/AttributionCapture";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <AttributionCapture />
      <DevToolsBlocker />
      <ScrollToTop />
      <ContextualWhatsApp />
      <LiveChat />
      <PromoDialog />
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
