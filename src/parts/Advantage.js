import React from "react";
import Image from "next/image";

export default function Advantage({ data }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <h2 className="text-5xl text-theme-blue dark:text-white text-center font-bold">
          Why Choose Us
        </h2>

        <p className="font-light text-lg text-gray-400 dark:text-gray-300 text-center mb-12 sm:mb-5 xl:mb-0">
          Why you should choose us to handle your project.
        </p>

        <div className="flex flex-col sm:flex-row">
          <div className="flex-col">
            {data[0].map((item, index) => (
              <div key={index}>
                  <div className="bg-white dark:bg-gray-800 flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 transform transition duration-500 hover:scale-105">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={160}
                      height={160}
                      className="w-1/3 h-auto"
                      loading="lazy"
                      sizes="160px"
                    />
                    <div className="flex-col pl-5">
                      <h2 className="text-theme-blue dark:text-white text-2xl">{item.title}</h2>
                      <p className="font-light text-gray-400 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {data[1].map((item, index) => (
              <div key={index}>
                  <div className="bg-white dark:bg-gray-800 flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 transform transition duration-500 hover:scale-105">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={160}
                      height={160}
                      className="w-1/3 h-auto"
                      loading="lazy"
                      sizes="160px"
                    />
                    <div className="flex-col pl-5">
                      <h2 className="text-theme-blue dark:text-white text-2xl">{item.title}</h2>
                      <p className="font-light text-gray-400 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
