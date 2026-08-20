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
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
          <p className="font-light text-lg text-gray-400 max-w-2xl mx-auto">
            See what our clients have to say about their experience working with us.
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
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-theme-blue text-lg font-bold group-hover:text-theme-purple transition-colors duration-300">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm font-medium line-clamp-1">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-base leading-relaxed italic relative z-10">
                  "{item.testimoni}"
                </p>
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
