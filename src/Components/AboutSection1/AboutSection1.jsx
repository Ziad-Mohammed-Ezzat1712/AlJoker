import React, { useState } from "react";
import blog1 from "../../../Images/blog1.jpg";
import blog2 from "../../../Images/blog2.jpg";
import blog3 from "../../../Images/blog3.jpg";
import blog4 from "../../../Images/blog4.jpg";
import blog5 from "../../../Images/blog5.jpg";
import blog6 from "../../../Images/blog6.jpg";
import { FaGasPump, FaTachometerAlt, FaRegKeyboard } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function AboutSection1() {
  
  return (
    <div className="mb-10">
    <div className="mb-6 xl:px-55 px-12">
        <p className="text-[20px] font-medium ">
          <span className="text-[#D72638] ">Home</span> / About
        </p>
        <h2 className="text-[40px] font-semibold mt-1">About</h2>
        </div>

        <div className="xl:flex flex-col md:flex-row  justify-around px-12 gap-4">
  {/* Left - Text */}
  <div className="flex justify-center xl:max-w-[470px]  md:text-left">
    <h2 className="text-[40px] font-semibold">
      We Value Our Clients And Want Them To Have A Nice Experience
    </h2>
  </div>

  {/* Right - Paragraphs */}
  <div className="space-y-4 xl:max-w-[570px] xl:text-center md:text-left">
    <p className="text-[16px]">
      launched its independent activity in the field of car rental services in Dubai in 2024 under the Dubai government license number 1111111, with the support of the knowledge and experience of the experts in the car industry. 
    </p>

    <p className="text-[16px]">
       In this collection, we have made transparency and honesty the basis of our work to provide a quality, worthy of your choice. At Kara Plus, we have tried to respond to different tastes and preferences of customers in the field of car rental by diversifying our services. Continuous improvement and commitment to accountability are the enabling platform of our service charter. Therefore, we always strive to honor your choice by providing distinctive services.
    </p>
  </div>
</div>

    </div>
  );
}

