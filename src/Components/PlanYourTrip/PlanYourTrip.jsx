// PlanYourTrip.jsx
import React from "react";
import caricon from "../../../Images/Car-Icon.png";
import driveicon from "../../../Images/Let's-Drive.png";
import contacticon from "../../../Images/Contact.png";

const steps = [
  {
    icon: caricon,
    title: "Select a Car",
    desc: "Choose a vehicle that fits your requirements in terms of size, features and fuel efficiency. Booking in advance can secure availability and potentially better rates.",
  },
  {
    icon: driveicon,
    title: "Let's Drive",
    desc: "Congratulations on renting your car! Drive safe and we wish you an unforgettable and enjoyable time on the road! Thank you for choosing Al Joker.",
  },
  {
    icon: contacticon,
    title: "Contact Operator",
    desc: "Whether you have questions about our services, need assistance with your booking, or require support during your rental, reach out to our customer service team for any inquiries or assistance.",
  },
];

export default function PlanYourTrip() {
  return (
    <div className="bg-gray-100 py-16 w-[90%] mx-auto">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* العنوان الكبير */}
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#050B20] leading-snug text-center md:text-left">
          Plan Your trip now
        </h2>

        {/* العناصر */}
        <div className="max-w-3xl md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* أول عنصر */}
          <div className="flex flex-col text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img src={steps[0].icon} alt="" className="w-[74px]  h-[74px]" />
            </div>
            <h3 className="font-bold text-[20px] mb-2">{steps[0].title}</h3>
            <p className="text-[16px] leading-relaxed text-gray-700">
              {steps[0].desc}
            </p>
          </div>

          {/* تاني عنصر */}
          <div className="flex flex-col text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img src={steps[1].icon} alt="" className="w-[74px] h-[74px]" />
            </div>
            <h3 className="font-bold text-[20px] mb-2">{steps[1].title}</h3>
            <p className="text-[16px] leading-relaxed text-gray-700">
              {steps[1].desc}
            </p>
          </div>

          {/* تالت عنصر واخد الصف كله */}
          <div className="flex flex-col col-span-1 sm:col-span-2 text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img src={steps[2].icon} alt="" className="w-[74px] h-[74px]" />
            </div>
            <h3 className="font-bold text-[20px] mb-2">{steps[2].title}</h3>
            <p className="text-[16px] leading-relaxed text-gray-700">
              {steps[2].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
