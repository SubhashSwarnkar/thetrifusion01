import React, { useState } from "react";
import { initiatePayment, createRazorpayOrder } from "utils/razorpay";
import { toast } from "react-toastify";

export default function RazorpayButton({ 
  amount, 
  templateId, 
  templateName,
  customerName = "",
  customerEmail = "",
  customerPhone = "",
  onSuccess,
  onError 
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    // Validate amount
    if (!amount || amount <= 0) {
      toast.error("Invalid amount");
      return;
    }

    // Validate customer email (required for payment)
    if (!customerEmail || !customerEmail.trim()) {
      toast.error("Please provide your email address");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create order using backend API (/api/create-order)
      const orderData = await createRazorpayOrder(
        amount,
        "INR",
        `template_${templateId}_${Date.now()}`,
        {
          name: customerName,
          email: customerEmail,
          phone: customerPhone
        },
        templateId,
        templateName
      );

      // Step 2: Initiate Razorpay payment with the order
      await initiatePayment(orderData, {
        description: `Purchase: ${templateName}`,
        customerName,
        customerEmail,
        customerPhone,
        templateId,
        templateName,
        onSuccess: (response, orderData, verificationResult) => {
          setLoading(false);
          toast.success("Payment successful!");
          if (onSuccess) {
            onSuccess(response, orderData, verificationResult);
          }
        },
        onError: (error, response, orderData) => {
          setLoading(false);
          const errorMessage = error?.message || "Payment verification failed";
          toast.error(errorMessage);
          if (onError) {
            onError(error, response, orderData);
          }
        },
        onDismiss: () => {
          setLoading(false);
          toast.info("Payment cancelled");
        }
      });
    } catch (error) {
      setLoading(false);
      console.error("Payment error:", error);
      
      // Show specific error messages
      const errorMessage = error?.message || "Payment failed. Please try again.";
      toast.error(errorMessage);
      
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading || !amount || amount <= 0}
      className="w-full px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
    >
      {loading ? "Processing..." : `Buy Now - ₹${amount.toLocaleString()}`}
    </button>
  );
}

