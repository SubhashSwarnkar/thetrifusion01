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
    <section className="container mx-auto">
      <Fade direction="up">
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Testimonials
        </h1>
      </Fade>
      <Fade direction="up" delay={500}>
        <p className="font-light text-lg text-gray-400 text-center mb-3 sm:mb-3 xl:mb-4">
          What they said about us.
        </p>
      </Fade>
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex-col xl:w-full rounded-2xl shadow-xl sm:shadow-2xl border border-light-theme-purple bg-white px-6 sm:px-8 py-6 mx-2 mb-6 mt-6 xl:mx-auto sm:mx-6 sm:mb-12 transform transition duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-5">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-theme-purple shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-col pl-4 sm:pl-5">
                  <h2 className="text-theme-blue text-lg sm:text-xl md:text-2xl font-bold">{item.name}</h2>
                  <p className="font-light text-gray-500 text-xs sm:text-sm md:text-base">{item.company}</p>
                </div>
              </div>
              <div className="flex items-start mb-3 pl-0 sm:pl-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-light text-base sm:text-lg md:text-xl text-gray-600 pl-0 sm:pl-5 pt-2 pb-1 leading-relaxed italic">
                "{item.testimoni}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
