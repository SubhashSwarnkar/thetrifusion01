import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { getTemplateById } from "data/templatesData";
import { Fade } from "react-awesome-reveal";
import RazorpayButton from "components/payment/RazorpayButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./NotFoundPage";
import { 
  isTemplatePurchased, 
  storePurchase, 
  downloadTemplate,
  getTemplatePurchase 
} from "utils/templateDownload";
import TemplatePreview from "components/TemplatePreview";
import SEO from "components/common/SEO";
import CustomizationModal from "components/CustomizationModal";

export default function TemplateDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = getTemplateById(id);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isPurchased, setIsPurchased] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isCustomizationModalOpen, setIsCustomizationModalOpen] = useState(false);
  const [templateState, setTemplateState] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  // Get or initialize template state (same logic as TemplatesPage)
  const getTemplateState = (tId) => {
    const isCollection = tId.includes("template-full");
    if (isCollection) return null;

    const storageKey = `template_state_${tId}`;
    const saved = localStorage.getItem(storageKey);
    const now = new Date().getTime();
    
    if (saved) {
      const parsed = JSON.parse(saved);
      if (now < parsed.endTime) {
        return parsed;
      }
    }
    
    const isOffer = Math.random() > 0.3; 
    const duration = 12 * 60 * 60 * 1000; 
    
    const randomOffset = Math.floor(Math.random() * (11 * 60 * 60 * 1000));
    const endTime = now + duration - randomOffset;
    
    const offerPrice = Math.floor(Math.random() * (699 - 299 + 1)) + 299;
    const normalPrice = Math.floor(Math.random() * (6999 - 1999 + 1)) + 1999;
    
    const newState = {
      mode: "offer",
      endTime: endTime,
      offerPrice: offerPrice,
      normalPrice: normalPrice
    };
    
    localStorage.setItem(storageKey, JSON.stringify(newState));
    return newState;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (template) {
      setIsPurchased(isTemplatePurchased(template.id));
      const state = getTemplateState(template.id);
      setTemplateState(state);
    }
  }, [id, template]);

  // Timer effect (same logic as TemplatesPage)
  useEffect(() => {
    if (!template || !templateState) return;
    const isCollection = template.id.includes("template-full");
    if (isCollection) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      let current = templateState;
      
      if (now > current.endTime) {
        const isOfferNow = current.mode === "offer";
        const nextMode = isOfferNow ? "normal" : "offer";
        const nextDuration = isOfferNow ? 5 * 60 * 60 * 1000 : 12 * 60 * 60 * 1000;
        
        const nextState = {
          ...current,
          mode: nextMode,
          endTime: now + nextDuration
        };
        
        localStorage.setItem(`template_state_${template.id}`, JSON.stringify(nextState));
        setTemplateState(nextState);
        current = nextState;
      }
      
      const distance = current.endTime - now;
      if (distance < 0) {
          setTimeLeft("00h 00m 00s");
          return;
      }
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [template, templateState]);

  const handlePaymentSuccess = (paymentResponse, orderData) => {
    // Store purchase information
    if (template) {
      const isCollection = template.id.includes("template-full");
      const templatePrice = template.price || 499;
      
      storePurchase(template.id, {
        paymentId: paymentResponse.razorpay_payment_id,
        orderId: paymentResponse.razorpay_order_id,
        signature: paymentResponse.razorpay_signature,
        amount: templatePrice,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone
      });
      setIsPurchased(true);
      toast.success("Payment successful! You can now download your template.");
    }
  };

  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
    toast.error("Payment failed. Please try again.");
  };

  const handleDownload = async () => {
    if (!template || !template.downloadAvailable) {
      toast.error("Download not available for this template.");
      return;
    }

    setIsDownloading(true);
    try {
      await downloadTemplate(
        template.id,
        template.templatePath,
        template.name
      );
      toast.success("Download initiated! Check your downloads folder.");
    } catch (error) {
      console.error("Download error:", error);
      toast.error(error.message || "Download failed. Please contact support.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCustomizationAccept = () => {
    setIsCustomizationModalOpen(false);
    // Navigate to contact page with template info in state
    navigate("/contact", {
      state: {
        customizationRequest: true,
        templateName: template.name,
        templateId: template.id
      }
    });
  };

  if (!template) {
    return <NotFoundPage />;
  }

  // Always use template price (499) - removed dynamic pricing
  const isCollection = template.id.includes("template-full");
  const currentPrice = template.price || 499;

  return (
    <>
      <SEO 
        title={template.name} 
        description={template.description}
        keywords={template.keywords}
        image={template.previewImage}
        type="product"
      />
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="mb-8">
            <Link
              to="/templates"
              className="text-theme-purple hover:underline flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Templates
            </Link>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <Fade direction="left" triggerOnce>
            <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-96 overflow-hidden relative">
              {template.previewImage ? (
                <img 
                  src={template.previewImage} 
                  alt={template.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`w-full h-full flex items-center justify-center ${template.previewImage ? 'hidden' : ''}`}>
                <div className="text-5xl sm:text-6xl">{template.category.charAt(0)}</div>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div>
              <div className="flex items-center gap-2 mb-4">
                {template.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                )}
                {template.isPopular && (
                  <span className="bg-theme-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {template.category}
                </span>
              </div>

              <h1 className="text-4xl text-theme-blue font-bold mb-4">
                {template.name}
              </h1>

              <p className="text-gray-600 text-lg mb-6">{template.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-theme-purple">
                    ₹{currentPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="block w-full text-center mb-4 px-6 py-3 border-2 border-theme-purple text-theme-purple rounded-full hover:bg-light-theme-purple transition duration-200 font-medium"
                >
                  <svg
                    className="w-5 h-5 inline-block mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview Template
                </button>

                {isPurchased ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-6 h-6 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <h3 className="text-lg font-bold text-green-700">
                          Purchase Confirmed!
                        </h3>
                      </div>
                      <p className="text-sm text-green-600 mb-4">
                        You have successfully purchased this template. You can download it now or anytime later.
                      </p>
                      {template.downloadAvailable ? (
                        <button
                          onClick={handleDownload}
                          disabled={isDownloading}
                          className="w-full px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center mb-3"
                        >
                          {isDownloading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Preparing Download...
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                              Download Template
                            </>
                          )}
                        </button>
                      ) : (
                        <p className="text-sm text-gray-600 mb-3">
                          Download will be available soon. You will receive an email with download instructions.
                        </p>
                      )}
                      
                      {/* Customization Button */}
                      <button
                        onClick={() => setIsCustomizationModalOpen(true)}
                        className="w-full px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-purple-700 transition duration-200 font-medium flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
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
                        Customize This Template
                      </button>
                    </div>
                    {(() => {
                      const purchase = getTemplatePurchase(template.id);
                      return purchase && (
                        <div className="text-sm text-gray-600">
                          <p>Purchased on: {new Date(purchase.purchasedAt).toLocaleDateString()}</p>
                          {purchase.downloadCount > 0 && (
                            <p>Downloads: {purchase.downloadCount}</p>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                <div className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      placeholder="Your name"
                      required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple transition duration-200"
                    />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple transition duration-200"
                    />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      placeholder="+91 1234567890"
                      required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple transition duration-200"
                    />
                  </div>
                  
                  <RazorpayButton
                    amount={currentPrice}
                    templateId={template.id}
                    templateName={template.name}
                    customerName={customerInfo.name}
                    customerEmail={customerInfo.email}
                    customerPhone={customerInfo.phone}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-theme-blue mb-4">
                  Features Included
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-theme-purple mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <TemplatePreview
        template={template}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
      <CustomizationModal
        isOpen={isCustomizationModalOpen}
        onClose={() => setIsCustomizationModalOpen(false)}
        onAccept={handleCustomizationAccept}
        templateName={template.name}
      />
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

