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
    if (!amount || amount <= 0) {
      toast.error("Invalid amount");
      return;
    }

    setLoading(true);

    try {
      // Create order
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

      // Initiate payment
      await initiatePayment(orderData, {
        description: `Purchase: ${templateName}`,
        customerName,
        customerEmail,
        customerPhone,
        onSuccess: (response) => {
          setLoading(false);
          toast.success("Payment successful!");
          if (onSuccess) {
            onSuccess(response, orderData);
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
      toast.error("Payment failed. Please try again.");
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

