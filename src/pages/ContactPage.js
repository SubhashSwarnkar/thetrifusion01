import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { DiscussForm } from "parts/DiscussForm";
import { Fade } from "react-awesome-reveal";
import { faqs, getFaqsByCategory } from "data/faqData";
import SEO from "components/common/SEO";
import { toast } from "react-toastify";

export default function ContactPage() {
  const location = useLocation();
  const [data, setData] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: ""
  });
  const [openFaqs, setOpenFaqs] = useState([]);
  const [displayedFaqs] = useState(faqs.slice(0, 5)); // Show first 5 FAQs
  const [customizationInfo, setCustomizationInfo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if user came from customization request
    if (location.state && location.state.customizationRequest) {
      setCustomizationInfo({
        templateName: location.state.templateName,
        templateId: location.state.templateId
      });
      
      // Pre-fill project idea with template customization request
      if (location.state.templateName) {
        setData(prev => ({
          ...prev,
          projectIdea: `I would like to customize the "${location.state.templateName}" template. Please contact me to discuss customization options.`
        }));
      }
      
      // Show success message
      toast.info(`Customization request for "${location.state.templateName}" - Please fill out the form below.`, {
        autoClose: 5000
      });
    }
  }, [location.state]);

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
      [event.target.name]: event.target.value
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: ""
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with TheTriFusion team. Discuss your project, schedule a consultation, or just say hello."
      />
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              Get In Touch
            </h1>
            <p className="font-light text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </Fade>

        {/* Customization Request Banner */}
        {customizationInfo && (
          <Fade direction="down" triggerOnce>
            <div className="mb-8 bg-gradient-to-r from-theme-purple to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Template Customization Request
                  </h3>
                  <p className="text-purple-100 mb-2">
                    You're requesting customization for: <strong>{customizationInfo.templateName}</strong>
                  </p>
                  <p className="text-sm text-purple-200">
                    Fill out the form below with your details and customization requirements. Our team will get back to you with a customized solution.
                  </p>
                </div>
                <button
                  onClick={() => setCustomizationInfo(null)}
                  className="ml-4 text-white hover:text-purple-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Fade>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <Fade direction="left" triggerOnce>
            <div>
              <h2 className="text-2xl sm:text-3xl text-theme-blue font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-theme-purple rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-theme-blue mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:TheTrifusion@gmail.com"
                      className="text-gray-600 hover:text-theme-purple"
                    >
                      TheTrifusion@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-theme-purple rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-theme-blue mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Bhilwara, Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-theme-purple rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-theme-blue mb-1">
                      Social Media
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/thetrifusion/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-theme-purple"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/company/the-trifusion/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-theme-purple"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div>
              <DiscussForm
                data={data}
                onChange={onChange}
                resetForm={resetForm}
              />
            </div>
          </Fade>
        </div>

        {/* FAQ Section */}
        <Fade direction="up" triggerOnce>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-theme-blue font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="font-light text-lg text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions. Need more help?{" "}
                <Link to="/faq" className="text-theme-purple hover:underline">
                  View all FAQs
                </Link>
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {displayedFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-theme-blue pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-theme-purple flex-shrink-0 transform transition-transform duration-200 ${
                        openFaqs.includes(faq.id) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaqs.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Appointment/Consultation Section */}
        <Fade direction="up" triggerOnce>
          <div className="bg-gradient-to-r from-theme-purple to-theme-blue rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">📅</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Book a Free Consultation
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Schedule a consultation to discuss your project and get expert advice from our team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">📞 Phone</h3>
                  <a
                    href="tel:+919799995083"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    +91 9799995083
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">✉️ Email</h3>
                  <a
                    href="mailto:TheTrifusion@gmail.com"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    TheTrifusion@gmail.com
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">💬 WhatsApp</h3>
                  <a
                    href="https://wa.me/919799995083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">📍 Location</h3>
                  <p className="text-white/90">Bhilwara, Rajasthan, India</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/appointment"
                  className="inline-block px-8 py-4 bg-white text-theme-purple rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

