"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

export default function TrustBadges() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "200+", label: "Happy Clients", icon: "😊" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
  ];

  const certifications = [
    { name: "ISO Certified", icon: "🏆" },
    { name: "Google Partner", icon: "🔍" },
    { name: "Verified Business", icon: "✓" },
    { name: "Award Winner", icon: "🎖️" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5">
        {/* Stats */}
        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-theme-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Fade>

        {/* Certifications/Badges */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <p className="text-gray-600 font-medium text-sm sm:text-base">Trusted by:</p>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-sm sm:text-base text-gray-700 font-medium">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

