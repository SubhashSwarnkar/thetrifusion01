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

export const createRazorpayOrder = async (amount, currency = "INR", receipt = null, customerDetails = {}, templateId = null, templateName = null) => {
  try {
    const apiUrl = process.env.REACT_APP_API_URL || "https://api.thetrifusion.in/";
    const response = await fetch(`${apiUrl}/api/create-order`, {
      method: "POST",
      mode: "cors", // Explicitly set CORS mode
      credentials: "omit", // Don't send credentials for cross-origin requests
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receipt || `receipt_${Date.now()}`,
        customerName: customerDetails.name || "",
        customerEmail: customerDetails.email || "",
        customerPhone: customerDetails.phone || "",
        templateId: templateId || "",
        templateName: templateName || "",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || errorData.message || "Failed to create order");
    }

    const order = await response.json();
    return order;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    // Check if it's a CORS error
    if (error.message.includes('CORS') || error.message.includes('cross-origin') || error.name === 'TypeError') {
      throw new Error("CORS error: The API server needs to allow requests from thetrifusion.in. Please contact the backend administrator to add thetrifusion.in to the allowed origins.");
    }
    throw error;
  }
};

export const initiatePayment = async (orderData, options = {}) => {
  await loadRazorpayScript();

  if (!window.Razorpay) {
    throw new Error("Razorpay SDK failed to load");
  }

  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;

  if (!razorpayKey) {
    // Fallback or warning if key is missing in frontend
    console.warn("REACT_APP_RAZORPAY_KEY_ID is not set in frontend .env");
  }

  const paymentOptions = {
    key: razorpayKey,
    amount: orderData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: orderData.currency,
    name: "TheTriFusion",
    description: options.description || "Template Purchase",
    image: "/logo192.png", // Optional: Add your logo
    order_id: orderData.id, // This is the order_id created in the backend
    handler: async function (response) {
      try {
        // Verify payment with backend
        const verificationResult = await verifyPayment(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );

        if (verificationResult.success) {
          if (options.onSuccess) {
            options.onSuccess(response, orderData);
          }
        } else {
          throw new Error("Payment verification failed");
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        if (options.onError) {
          options.onError(error);
        } else {
            // Default error handling
            alert("Payment verification failed: " + error.message);
        }
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
  try {
    const apiUrl = process.env.REACT_APP_API_URL || "https://api.thetrifusion.in/";
    const response = await fetch(`${apiUrl}/api/verify-payment`, {
      method: "POST",
      mode: "cors", // Explicitly set CORS mode
      credentials: "omit", // Don't send credentials for cross-origin requests
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        orderId,
        paymentId,
        signature
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { 
        success: false, 
        error: errorData.error || errorData.message || "Payment verification failed" 
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Payment verification error:", error);
    // Check if it's a CORS error
    if (error.message.includes('CORS') || error.message.includes('cross-origin') || error.name === 'TypeError') {
      return { 
        success: false, 
        error: "CORS error: The API server needs to allow requests from thetrifusion.in. Please contact the backend administrator."
      };
    }
    return { success: false, error: error.message };
  }
};
