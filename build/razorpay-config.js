// Razorpay Runtime Configuration
// This file is loaded at runtime, so it works even if environment variables aren't set at build time
// IMPORTANT: Don't put sensitive keys here if this file is publicly accessible
// Instead, use this as a fallback and ensure environment variables are set properly

(function() {
  // Only set if not already configured via environment variables
  if (typeof window !== 'undefined' && !window.RAZORPAY_CONFIG) {
    window.RAZORPAY_CONFIG = {
      // Set your production key here if needed (not recommended - use env vars instead)
      // keyId: 'rzp_live_YOUR_KEY',
      
      // API URL configuration - always use production API
      apiUrl: 'https://api.thetrifusion.in'
    };
  }
})();

