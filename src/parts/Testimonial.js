"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial({ data }) {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <Fade direction="up" triggerOnce>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-4">
            Work you can verify
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
          <p className="font-light text-lg text-gray-400 max-w-2xl mx-auto">
            Five real projects with a case study or live URL. No star ratings,
            no invented reviews.
          </p>
        </div>
      </Fade>

      <div className="relative px-4 sm:px-12">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="mySwiper !pb-14"
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative group overflow-hidden">
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 text-9xl text-theme-purple opacity-5 font-serif select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  "
                </div>

                {/* Profile Header */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-theme-purple to-theme-blue">
                      <img
                        src={item.imageUrl}
                        alt={`${item.name} project screenshot`}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-theme-blue text-lg font-bold group-hover:text-theme-purple transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium line-clamp-1">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Project note */}
                <p className="text-gray-600 text-base leading-relaxed relative z-10">
                  {item.testimoni}
                </p>
                {item.url ? (
                  <a
                    href={item.url}
                    className="inline-flex items-center mt-5 px-4 py-2 rounded-xl bg-theme-purple/10 text-theme-purple font-bold text-sm hover:bg-theme-purple hover:text-white transition-colors relative z-10"
                    {...(item.url.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {item.linkLabel || "Verify this project →"}
                  </a>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute top-1/2 -left-2 sm:-left-6 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-theme-purple hover:bg-theme-purple hover:text-white transition-all duration-300 border border-gray-100 focus:outline-none">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute top-1/2 -right-2 sm:-right-6 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-theme-purple hover:bg-theme-purple hover:text-white transition-all duration-300 border border-gray-100 focus:outline-none">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
