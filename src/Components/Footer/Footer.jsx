import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/Logo.png';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black text-white px-2 md:px-30 pt-30 pb-10  border-b">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {/* Logo */}
          <div className="w-[80%] flex flex-col gap-7 items-start ">
            <img src={logo} alt="Logo" className="h-20 w-40 object-contain" />
             <p className='text-white '>Al Joker Company was established in 2022 in the United Arab Emirates, Dubai. This group is trying to make easy and fast transportation </p>
          </div>

          {/* Need Help */}
          <div className="flex flex-col items-start sm:items-start ">
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
           <Link to="/"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Home </p></Link>
            <Link to="/ourcars"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Our Cars </p></Link>
            <Link to="contact"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Contact </p></Link>
            <Link to="/about"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">About </p></Link>
            <Link to="/blog"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Blogs </p></Link>
          </div>

          {/* Info */}
           <div className="flex flex-col items-start sm:items-start">
            <h2 className="font-semibold text-lg mb-4">Social </h2>
            <Link to="https://www.facebook.com/profile.php?id=61578290960070" target="_blank"><p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Facebook </p></Link>
            <Link  target="_blank"><p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">LinkedIn </p></Link>
             <Link to="https://www.instagram.com/eljokerdrivedubai/?next=%2F" target="_blank"><p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Instagram </p></Link>
                </div>


          {/* Blog Posts */}
             <div className="flex flex-col items-start sm:items-start">
            <h2 className="font-semibold text-lg mb-4">Legal</h2>
            <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Terms and Conditions </p>
            <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Privacy Policy</p>
              </div>

        </div>
      </footer>

      {/* Copyright Bottom Bar */}
      <div className="bg-black p-6 text-white text-center md:text-left">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-lg font-semibold">@ 2025 Al Joker . All rights reserved.</h1>
           <div className=' ' >
            <Link to="https://www.facebook.com/profile.php?id=61578290960070" target="_blank" className=" px-5">
              <i className="fab fa-facebook text-[#DB2C33] hover:text-white text-[25px]"></i>
            </Link>
            <Link to="https://www.instagram.com/eljokerdrivedubai/?next=%2F" target="_blank" className=" px-5">
              <i className="fa-brands fa-square-instagram text-[#DB2C33] hover:text-white text-[25px]"></i>
            </Link>
            <Link to="/linkedin" className=" px-5">
              <i className="fab fa-linkedin text-[#DB2C33] hover:text-white text-[25px]"></i>
            </Link>
        </div>
        </div>
       
      </div>
    </>
  );
}
