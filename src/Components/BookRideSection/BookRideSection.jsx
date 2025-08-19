import React from "react";
import carImage from "../../../Images/sextion.jpg"; // ← غير المسار حسب مكان الصورة عندك

export default function HeroSection() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto">
      {/* Left side - Text */}
      <div className="bg-black text-white flex justify-between items-center px-10 py-16 h-[300px] md:h-[442px] md:col-span-2">
       <div> <h2 className="text-[40px] font-semibold mb-4 leading-snug">
          Once the engine starts, the <br /> adventure begins.
        </h2>
        <p className="text-white  font-medium text-[20px] mb-6">
          Top Airports. Local Suppliers. 24/7 Support.
        </p></div>
          <div className="">
       <button className="bg-[#D72638] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg w-fit">
          Book Ride
        </button>
     </div>
      </div>
   

      {/* Right side - Image */}
      <div className="w-full h-[250px] md:h-[442px] md:col-span-1">
        <img
          src={carImage}
          alt="Car"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

