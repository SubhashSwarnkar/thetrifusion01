// Razorpay Payment Integration Utilities

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const createRazorpayOrder = async (amount, currency = "INR", receipt = null) => {
  // This should call your backend API to create an order
  // For now, returning a mock order structure
  // TODO: Replace with actual API call
  
  const orderId = `order_${Date.now()}`;
  
  return {
    id: orderId,
    amount: amount * 100, // Razorpay expects amount in paise
    currency: currency,
    receipt: receipt || orderId,
    status: "created"
  };
};

export const initiatePayment = async (orderData, options = {}) => {
  await loadRazorpayScript();

  if (!window.Razorpay) {
    throw new Error("Razorpay SDK failed to load");
  }

  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag";

  const paymentOptions = {
    key: razorpayKey,
    amount: orderData.amount,
    currency: orderData.currency,
    name: "TheTriFusion",
    description: options.description || "Template Purchase",
    order_id: orderData.id,
    handler: function (response) {
      // Handle successful payment
      if (options.onSuccess) {
        options.onSuccess(response);
      }
    },
    prefill: {
      name: options.customerName || "",
      email: options.customerEmail || "",
      contact: options.customerPhone || ""
    },
    theme: {
      color: "#6610f2"
    },
    modal: {
      ondismiss: function () {
        if (options.onDismiss) {
          options.onDismiss();
        }
      }
    }
  };

  const razorpay = new window.Razorpay(paymentOptions);
  razorpay.open();

  return razorpay;
};

export const verifyPayment = async (paymentId, orderId, signature) => {
  // This should call your backend API to verify the payment
  // TODO: Replace with actual API call
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL || ""}/api/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        paymentId,
        orderId,
        signature
      })
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Payment verification error:", error);
    return false;
  }
};

