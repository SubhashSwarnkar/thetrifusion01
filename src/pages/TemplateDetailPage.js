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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (template) {
      setIsPurchased(isTemplatePurchased(template.id));
    }
  }, [id, template]);

  const handlePaymentSuccess = (paymentResponse, orderData) => {
    // Store purchase information
    if (template) {
      storePurchase(template.id, {
        paymentId: paymentResponse.razorpay_payment_id,
        orderId: paymentResponse.razorpay_order_id,
        signature: paymentResponse.razorpay_signature,
        amount: template.price,
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

  if (!template) {
    return <NotFoundPage />;
  }

  return (
    <>
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
                    ₹{template.price.toLocaleString()}
                  </span>
                  {template.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ₹{template.originalPrice.toLocaleString()}
                    </span>
                  )}
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
                          className="w-full px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center"
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
                        <p className="text-sm text-gray-600">
                          Download will be available soon. You will receive an email with download instructions.
                        </p>
                      )}
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
                    amount={template.price}
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
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

