import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

export default function Newsletter({ compact = false }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Option 1: Use EmailJS (already configured)
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId = process.env.REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE_ID || "newsletter_template";
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "your_public_key";

      await emailjs.send(serviceId, templateId, {
        email: email,
        to_email: "TheTrifusion@gmail.com",
      }, publicKey);

      // Option 2: Integrate with Mailchimp/SendGrid API here
      // For now, we'll use EmailJS

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-purple bg-white text-gray-900"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <Fade direction="up" triggerOnce>
      <section className="bg-gradient-to-r from-theme-purple to-theme-blue py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest News
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe to our newsletter for tips, insights, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-white text-theme-purple rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 shadow-lg"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}

