// Razorpay Payment Integration Utilities

/**
 * Get the API base URL with proper formatting
 */
const getApiUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL || "https://api.thetrifusion.in";
  // Remove trailing slash if present
  return apiUrl.replace(/\/$/, '');
};

/**
 * Load Razorpay checkout script
 */
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

/**
 * Create a Razorpay order using the backend API
 * @param {number} amount - Amount in rupees
 * @param {string} currency - Currency code (default: "INR")
 * @param {string|null} receipt - Receipt ID
 * @param {object} customerDetails - Customer information
 * @param {string|null} templateId - Template ID
 * @param {string|null} templateName - Template name
 * @returns {Promise<object>} Razorpay order object
 */
export const createRazorpayOrder = async (amount, currency = "INR", receipt = null, customerDetails = {}, templateId = null, templateName = null) => {
  try {
    // Validate input
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      throw new Error("Invalid amount. Amount must be a positive number.");
    }

    if (!customerDetails.email || !customerDetails.email.trim()) {
      throw new Error("Customer email is required.");
    }

    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/api/create-order`, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify({
        amount: Number(amount),
        currency: currency.toUpperCase(),
        receipt: receipt || `receipt_${Date.now()}`,
        customerName: customerDetails.name || "",
        customerEmail: customerDetails.email.trim(),
        customerPhone: customerDetails.phone || "",
        templateId: templateId || "",
        templateName: templateName || "",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || errorData.error || `Failed to create order (${response.status})`;
      throw new Error(errorMessage);
    }

    const order = await response.json();
    
    // Validate order response
    if (!order || !order.id) {
      throw new Error("Invalid order response from server");
    }

    return order;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    
    // Handle network/CORS errors
    if (error.name === 'TypeError' || error.message.includes('fetch')) {
      throw new Error("Network error: Unable to connect to payment server. Please check your internet connection.");
    }
    
    if (error.message.includes('CORS') || error.message.includes('cross-origin')) {
      throw new Error("CORS error: The API server needs to allow requests from your domain. Please contact support.");
    }
    
    throw error;
  }
};

/**
 * Initiate Razorpay payment
 * @param {object} orderData - Order data from createRazorpayOrder
 * @param {object} options - Payment options and callbacks
 * @returns {Promise<object>} Razorpay instance
 */
export const initiatePayment = async (orderData, options = {}) => {
  // Load Razorpay script
  const scriptLoaded = await loadRazorpayScript();
  
  if (!scriptLoaded || !window.Razorpay) {
    throw new Error("Razorpay SDK failed to load. Please refresh the page and try again.");
  }

  // Validate Razorpay key
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;
  if (!razorpayKey) {
    throw new Error("Razorpay key is not configured. Please contact support.");
  }

  // Validate order data
  if (!orderData || !orderData.id) {
    throw new Error("Invalid order data. Please create an order first.");
  }

  const paymentOptions = {
    key: razorpayKey,
    amount: orderData.amount, // Amount is in currency subunits (paise for INR)
    currency: orderData.currency || "INR",
    name: "TheTriFusion",
    description: options.description || "Template Purchase",
    image: "/logo192.png",
    order_id: orderData.id, // Order ID from backend API
    handler: async function (response) {
      try {
        // Verify payment signature with backend API
        const verificationResult = await verifyPayment(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );

        if (verificationResult.success) {
          // Payment verified successfully
          if (options.onSuccess) {
            options.onSuccess(response, orderData, verificationResult);
          }
        } else {
          const errorMessage = verificationResult.error || "Payment verification failed";
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        if (options.onError) {
          options.onError(error, response, orderData);
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
    },
    // Additional options for better UX
    retry: {
      enabled: true,
      max_count: 3
    }
  };

  try {
    const razorpay = new window.Razorpay(paymentOptions);
    razorpay.open();
    return razorpay;
  } catch (error) {
    console.error("Error opening Razorpay checkout:", error);
    throw new Error("Failed to open payment gateway. Please try again.");
  }
};

/**
 * Verify payment signature using the backend API
 * @param {string} paymentId - Razorpay payment ID
 * @param {string} orderId - Razorpay order ID
 * @param {string} signature - Payment signature from Razorpay
 * @returns {Promise<object>} Verification result
 */
export const verifyPayment = async (paymentId, orderId, signature) => {
  try {
    // Validate input
    if (!paymentId || !orderId || !signature) {
      return {
        success: false,
        error: "Missing payment verification parameters"
      };
    }

    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/api/verify-payment`, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
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
        error: errorData.message || errorData.error || `Payment verification failed (${response.status})`
      };
    }

    const data = await response.json();
    
    // Ensure response has success field
    if (data.success === undefined) {
      data.success = true;
    }
    
    return data;
  } catch (error) {
    console.error("Payment verification error:", error);
    
    // Handle network errors
    if (error.name === 'TypeError' || error.message.includes('fetch')) {
      return { 
        success: false, 
        error: "Network error: Unable to verify payment. Please check your internet connection."
      };
    }
    
    // Handle CORS errors
    if (error.message.includes('CORS') || error.message.includes('cross-origin')) {
      return { 
        success: false, 
        error: "CORS error: Unable to verify payment. Please contact support."
      };
    }
    
    return { 
      success: false, 
      error: error.message || "Payment verification failed"
    };
  }
};
