import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "parts/Header";
import Footer from "parts/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { Fade } from "react-awesome-reveal";

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹15,000",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO",
        "1 month support"
      ]
    },
    {
      name: "Standard",
      price: "₹35,000",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 pages",
        "CMS integration",
        "Payment gateway",
        "Advanced SEO",
        "3 months support",
        "Analytics setup"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹75,000",
      description: "Complete solution for established businesses",
      features: [
        "Unlimited pages",
        "Custom features",
        "Admin panel",
        "API integration",
        "6 months support",
        "Priority support",
        "Performance optimization"
      ]
    }
  ];

  return (
    <>
      <Header />
      <Breadcrumbs />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue dark:text-white font-bold mb-5">
              Pricing Plans
            </h1>
            <p className="font-light text-xl text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include responsive design and modern features.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Fade
              key={plan.name}
              direction="up"
              delay={index * 100}
              triggerOnce
            >
              <div
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border-2 flex flex-col ${
                  plan.popular
                    ? "border-theme-purple dark:border-purple-400 transform scale-105 lg:scale-105 md:scale-100"
                    : "border-light-theme-purple dark:border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="bg-theme-purple text-white text-center py-2 rounded-full mb-4 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl text-theme-blue dark:text-white font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-theme-purple dark:text-purple-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/project</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-theme-purple dark:text-purple-400 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing/calculator"
                  className="block w-full text-center px-6 py-3 bg-theme-purple text-white rounded-full hover:bg-dark-theme-purple transition duration-200 font-medium"
                >
                  Get Started
                </Link>
              </div>
            </Fade>
          ))}
        </div>

        <Fade direction="up" triggerOnce>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need a custom solution? Use our calculator to get an estimate.
            </p>
            <Link
              to="/pricing/calculator"
              className="inline-block px-8 py-4 bg-theme-blue text-white rounded-full text-lg font-medium hover:bg-opacity-90 transition duration-200"
            >
              Price Calculator
            </Link>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

