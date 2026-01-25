import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';

import LoadingPage from "components/LoadingPage";


// Lazy load pages for better performance
const LandingPage = lazy(() => import("pages/LandingPage"));
const ServicesPage = lazy(() => import("pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("pages/ServiceDetailPage"));
const ProjectPage = lazy(() => import("pages/ProjectPage"));
const ProjectDetailPage = lazy(() => import("pages/ProjectDetailPage"));
const PricingPage = lazy(() => import("pages/PricingPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const ContactPage = lazy(() => import("pages/ContactPage"));
const TemplatesPage = lazy(() => import("pages/TemplatesPage"));
const TemplateDetailPage = lazy(() => import("pages/TemplateDetailPage"));
const TeamPage = lazy(() => import("pages/TeamPage"));
const DiscussProjectPage = lazy(() => import("pages/DiscussProjectPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const FAQPage = lazy(() => import("pages/FAQPage"));
const BlogPage = lazy(() => import("pages/BlogPage"));
const BlogDetailPage = lazy(() => import("pages/BlogDetailPage"));
const AppointmentPage = lazy(() => import("pages/AppointmentPage"));
import ScrollToTop from "components/ScrollToTop";
import WhatsAppButton from "components/WhatsAppButton";
import LiveChat from "components/LiveChat";
import Breadcrumbs from "components/Breadcrumbs";
// import DevToolsBlocker from "components/DevToolsBlocker"; // Disabled to allow dev mode
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./assets/css/styles.css";

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<ProjectPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/:id" element={<TemplateDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/discuss-project" element={<DiscussProjectPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* <DevToolsBlocker /> */} {/* Disabled to allow dev mode */}
      <ScrollToTop />
      <WhatsAppButton />
      <LiveChat />
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
    </HelmetProvider>
  );
}

export default App;
