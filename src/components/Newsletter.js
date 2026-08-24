"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { sendSiteEmail } from "lib/sendSiteEmail";

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
      await sendSiteEmail({
        from_name: email,
        name: "Newsletter signup",
        company: "—",
        email,
        phone: "—",
        projectIdea: `Newsletter signup\n\nEmail: ${email}`,
        reply_to: email,
        from_email: email,
        message: `Newsletter signup\n\nEmail: ${email}`,
      });

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
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-theme-blue -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-theme-purple/40 to-transparent -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-theme-cyan/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-theme-pink/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-white/20">
                Newsletter
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Insights Delivered <br />
                <span className="text-theme-cyan">Directly to You</span>
              </h2>
              <p className="text-white/70 mb-10 text-xl font-light max-w-2xl mx-auto">
                Join our community of innovators. Get the latest tech trends and digital performance tips twice a month.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-theme-cyan transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-5 bg-white text-theme-blue rounded-2xl font-black hover:bg-theme-cyan hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 shadow-xl shadow-black/20"
                >
                  {loading ? "..." : "Subscribe"}
                </button>
              </form>
              
              <p className="text-white/40 text-sm mt-6 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure & Spam-free. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

