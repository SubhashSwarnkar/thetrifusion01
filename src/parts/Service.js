import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { services } from "data/servicesData";

// Map service titles to slugs
const getServiceSlug = (title) => {
  const service = services.find((s) => s.title === title);
  return service ? service.slug : null;
};

export default function Service({ data }) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-5">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-theme-blue dark:text-white font-bold mb-5">
              Our Services
            </h1>
            <p className="font-light text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We are ready to scale up your business with our comprehensive range of services.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.map((item, index) => {
            const slug = getServiceSlug(item.title);
            const serviceData = services.find((s) => s.title === item.title);
            
            return (
              <Fade
                direction={item.animation || "up"}
                delay={index * 100}
                key={index}
                triggerOnce
              >
                {slug ? (
                  <Link to={`/services/${slug}`}>
                    <div className="bg-white dark:bg-gray-800 group rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-theme-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-xl sm:text-2xl text-theme-blue dark:text-white font-bold">
                            {item.title}
                          </h2>
                          {serviceData && (
                            <span className="text-3xl">{serviceData.icon}</span>
                          )}
                        </div>
                        {serviceData && (
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                            {serviceData.shortDescription}
                          </p>
                        )}
                        <div className="mt-auto flex items-center text-theme-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                          <span>Learn More</span>
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
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white dark:bg-gray-800 group rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl sm:text-2xl text-theme-blue dark:text-white font-bold mb-3">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                )}
              </Fade>
            );
          })}
        </div>
        
        <Fade direction="up" delay={600} triggerOnce>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-theme-purple text-white rounded-full text-lg font-medium hover:bg-dark-theme-purple transition duration-200 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}
