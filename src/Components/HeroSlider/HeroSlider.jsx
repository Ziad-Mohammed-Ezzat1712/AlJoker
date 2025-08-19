import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarSlider from '../../../Images/CarSlidar.png';

import "swiper/css";
import "swiper/css/navigation";
import "../HeroSlider/sliderCustom.css"; // ملف CSS المخصص للأزرار

const slides = [
  {
    id: 1,
    title: "Save big with our car rental",
    subtitle:
      "Discover the Best Cheap Car Rental Deals with Daily, Weekly and Monthly Offers",
    img: CarSlider
  },
  {
    id: 2,
    title: "Luxury Cars at Affordable Rates",
    subtitle: "Drive the car of your dreams for less than you think",
    img: CarSlider
  },
  {
    id: 3,
    title: "Drive in Style and Comfort",
    subtitle: "Choose from our wide range of premium vehicles",
    img: CarSlider
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[680px] rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full bg-center bg-cover flex flex-col justify-center items-center text-center px-4"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* خلفية داكنة */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              {/* النص */}
              <div className="relative top-[-150px] z-10">
                <p className="text-white font-medium text-[18px] md:text-[18px] mb-2">
                  {slide.subtitle}
                </p>
                <h2 className="text-[#D72638] font-bold text-[60px] md:text-[60px]">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      <div >
        
       <button className="swiper-button-prev bg-white rounded-full text-md p-2 ">
        <FaChevronLeft className="text-red-500 " />
      </button>
      <button className="swiper-button-next bg-white rounded-full text-md p-2 ">
        <FaChevronRight className="text-red-500 " />
      </button>
      </div>
    </div>
  );
}
