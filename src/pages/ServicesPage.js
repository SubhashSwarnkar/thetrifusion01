import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { services } from "data/servicesData";
import { Fade } from "react-awesome-reveal";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue dark:text-white font-bold mb-5">
              Our Services
            </h1>
            <p className="font-light text-lg text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Fade
              key={service.id}
              direction="up"
              delay={index * 100}
              triggerOnce
            >
              <Link to={`/services/${service.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 p-5 sm:p-6 transform transition duration-500 hover:scale-105 cursor-pointer h-full">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl text-theme-blue dark:text-white font-bold mb-3">
                  {service.title}
                </h2>
                <p className="font-light text-gray-400 dark:text-gray-300 mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-theme-purple dark:text-purple-400 font-medium">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              </Link>
            </Fade>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

