// MostSearchedCars.jsx
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Bookmark } from "lucide-react"; // أيقونة Bookmark
import { FiChevronLeft, FiChevronRight,FiArrowUp,  } from "react-icons/fi";
import { FaGasPump,FaTachometerAlt,FaRegKeyboard   } from "react-icons/fa";
// صور عربيات (تقدر تبدلها)
import CarImg from "../../../Images/SUV.jpg";
import cross from "../../../Images/cross.jpg";

const categories = ["Sedan", "SUV", "Convertible", "Hatchback"];

// بيانات تجريبية
const cars = {
  Sedan: [
    { id: 1, name: "T-Cross — 2023",des:"4.0 D5 PowerPulse Momentum...", miles: "15 Miles", fuel: "Petrol", gear: "CVT", price: "$15,000", img: cross },
   { id: 2, name: "Range Rover Evoque", des:"4.0 D5 PowerPulse Momentum...", miles: "12 Miles", fuel: "Diesel", gear: "Auto", price: "$45,000", img: CarImg },
    { id: 3, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: cross },
    { id: 4, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: CarImg },
    { id: 5, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: cross },
  { id: 6, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: CarImg },
    { id: 7, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: cross },
    { id: 8, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: CarImg },
 
    { id: 9, name: "Honda Civic — 2023", des:"4.0 D5 PowerPulse Momentum...", miles: "20 Miles", fuel: "Hybrid", gear: "Auto", price: "$18,500", img: CarImg },
  ],
  SUV: [
    { id: 14, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: cross },
  { id: 15, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: CarImg },
    { id: 16, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: cross },
    { id: 17, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: CarImg },
 
    { id: 18, name: "Honda Civic — 2023", des:"4.0 D5 PowerPulse Momentum...", miles: "20 Miles", fuel: "Hybrid", gear: "Auto", price: "$18,500", img: CarImg },
  
    { id: 10, name: "T-Cross — 2023",des:"4.0 D5 PowerPulse Momentum...", miles: "15 Miles", fuel: "Petrol", gear: "CVT", price: "$15,000", img: cross },
   { id: 11, name: "Range Rover Evoque", des:"4.0 D5 PowerPulse Momentum...", miles: "12 Miles", fuel: "Diesel", gear: "Auto", price: "$45,000", img: CarImg },
    { id: 12, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: cross },
    { id: 13, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: CarImg },
    ],
  Convertible: [
   { id: 19, name: "T-Cross — 2023",des:"4.0 D5 PowerPulse Momentum...", miles: "15 Miles", fuel: "Petrol", gear: "CVT", price: "$15,000", img: cross },
   { id: 20, name: "Range Rover Evoque", des:"4.0 D5 PowerPulse Momentum...", miles: "12 Miles", fuel: "Diesel", gear: "Auto", price: "$45,000", img: CarImg },
    { id: 21, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: cross },
    { id: 22, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: CarImg },
    { id: 23, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: cross },
  { id: 24, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: CarImg },
    { id: 25, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: cross },
    { id: 26, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: CarImg },
 
    { id: 27, name: "Honda Civic — 2023", des:"4.0 D5 PowerPulse Momentum...", miles: "20 Miles", fuel: "Hybrid", gear: "Auto", price: "$18,500", img: CarImg },
  ],
  Hatchback: [
    { id: 32, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: cross },
  { id: 33, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: CarImg },
    { id: 34, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: cross },
    { id: 35, name: "Kia Sportage", des:"4.0 D5 PowerPulse Momentum...", miles: "22 Miles", fuel: "Hybrid", gear: "Auto", price: "$32,000", img: CarImg },
 
    { id: 36, name: "Honda Civic — 2023", des:"4.0 D5 PowerPulse Momentum...", miles: "20 Miles", fuel: "Hybrid", gear: "Auto", price: "$18,500", img: CarImg },
   
   { id: 28, name: "T-Cross — 2023",des:"4.0 D5 PowerPulse Momentum...", miles: "15 Miles", fuel: "Petrol", gear: "CVT", price: "$15,000", img: cross },
   { id: 29, name: "Range Rover Evoque", des:"4.0 D5 PowerPulse Momentum...", miles: "12 Miles", fuel: "Diesel", gear: "Auto", price: "$45,000", img: CarImg },
    { id:30, name: "Toyota RAV4", des:"4.0 D5 PowerPulse Momentum...", miles: "25 Miles", fuel: "Petrol", gear: "Manual", price: "$28,000", img: cross },
    { id: 31, name: "BMW X5", des:"4.0 D5 PowerPulse Momentum...", miles: "10 Miles", fuel: "Diesel", gear: "Auto", price: "$55,000", img: CarImg },
    ],
};

export default function RecommendedeCars() {
  const [activeCategory, setActiveCategory] = useState("Sedan");
  const swiperRef = useRef(null);

  return (
    <div className="py-12 bg-white">
      {/* العنوان */}
      <h2 className="text-[40px] md:text-[40px] font-semibold text-center text-[#050B20] mb-8">
       Recommendede Cars for You
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-8 border-b border-gray-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 text-lg font-medium transition-all ${
              activeCategory === cat
                ? "text-[#E63946] border-b-2 border-[#E63946]"
                : "text-gray-700 hover:text-[#E63946]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cars[activeCategory].map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col relative border-[1px] border-gray-300">
                {/* زر Bookmark */}
                <button className="absolute top-10 right-5 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Bookmark className="w-5 h-5 text-gray-700" />
                </button>

                {/* صورة */}
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-[328px] h-[218.64999389648438px] object-contain rounded-lg "
                />

                {/* تفاصيل */}
                <h3 className="text-lg font-bold text-[#0A0A23] mb-1">
                  {car.name}
                </h3>
                  <p className="text-[16px]  text-[#050B20] mb-1"> 
                    
                  {car.des}
                </p>
<div className="flex justify-between border-t border-b border-gray-300 py-4">
  <div>
    <FaTachometerAlt className="text-xl mx-auto mb-2 text-gray-700" />
    <p className="text-[16px]  ">{car.miles}</p>
  </div>

  <div>
    <FaGasPump className="text-xl mx-auto mb-2 text-gray-700" />
    <p className="text-[16px]  ">{car.fuel}</p>
  </div>

  <div>
    <FaRegKeyboard className="text-xl mx-auto mb-2 text-gray-700" />
    <p className="text-[16px]  ">{car.gear}</p>
  </div>
</div>


                <div className="flex justify-between mt-5 items-center ">
                  <span className="text-[20px] font-semibold text-[#0A0A23]">
                    {car.price}
                  </span>
                  <button className="text-[#D72638] font-medium   text-[18px] ">
                   <span className="flex gap-x-1"> View Details<FiArrowUp className="text-[20px] text-[#D72638] mt-1 rotate-[45deg]" /></span> 
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أسهم تحت */}
      <div className="flex justify-center gap-4 mt-6">
  <button
    onClick={() => swiperRef.current.slidePrev()}
    className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
  >
    <FiChevronLeft className="text-2xl text-gray-700" />
  </button>
  <button
    onClick={() => swiperRef.current.slideNext()}
    className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
  >
    <FiChevronRight className="text-2xl text-gray-700" />
  </button>
</div>
      </div>
    </div>
  );
}
