import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // هنا تقدر تبعت الداتا لـ API أو تعمل اللي انت عاوزه
  };

  return (
    <div className="bg-white max-w-10xl xl:rounded-[60px] relative z-40 xl:mt-[-50px]  mt-[-20px] mb-[-50px] mx-auto px-4 py-10">
     <div className="mb-6 px-5  lg:px-6 xl:px-40  max-w-[1500px]">
        <p className="text-[20px] font-medium">
          <span className="text-[#D72638]">Home</span> / Contact Us
        </p>
        <h2 className="text-[40px] font-semibold mt-1">Contact Us</h2>
       
      </div>
   
     <div className="mb-6 px-5 mx-auto  lg:px-6 xl:px-40  max-w-[1500px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+20 123 456 789"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Inquiry */}
        <div>
          <label className="block mb-1 font-medium">Your Inquiry</label>
          <textarea
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your inquiry here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-[18px] font-medium cursor-pointer bg-[#D72638] text-white py-3 rounded-lg hover:bg-[#ea293c] transition"
        >
          Send Message
        </button>
      </form>
</div>
    </div>
  );
}
