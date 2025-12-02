import { useEffect } from "react";

export default function LiveChat() {
  useEffect(() => {
    // Tawk.to Live Chat Integration
    // Replace 'YOUR_TAWK_TO_ID' with your actual Tawk.to property ID
    // Get it from: https://dashboard.tawk.to/
    
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/YOUR_TAWK_TO_ID/YOUR_WIDGET_ID";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    // Only add if not already added
    if (!document.getElementById("tawk-script")) {
      script.id = "tawk-script";
      document.body.appendChild(script);
    }

    // Alternative: If you want to use a different chat service, you can modify this
    // For now, this is a placeholder that can be easily configured

    return () => {
      // Cleanup if needed
      const tawkScript = document.getElementById("tawk-script");
      if (tawkScript) {
        // Note: Tawk.to doesn't need cleanup, but other services might
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

// Instructions for setup:
// 1. Go to https://dashboard.tawk.to/
// 2. Sign up or log in
// 3. Create a new property or select existing
// 4. Copy your Property ID and Widget ID
// 5. Replace 'YOUR_TAWK_TO_ID' and 'YOUR_WIDGET_ID' above
// 6. Customize your chat widget in Tawk.to dashboard

