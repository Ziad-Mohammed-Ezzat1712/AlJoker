import React, { useState } from 'react';
import logo from '../../../public/Logo.png';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function NaveBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black pb-12 top-0 right-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center mx-auto px-4 lg:px-10 py-4">
        
        {/* Left side: Logo + Links */}
        <div className="flex items-center gap-8 px-10">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-[100px] h-[54px]" />
          </NavLink>

          <ul className="hidden lg:flex gap-5 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium px-3 text-[15px] ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourcars"
                className={({ isActive }) =>
                  `font-medium px-3 text-[15px] ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Our Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `font-medium px-3 text-[15px] ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium px-3 text-[15px] ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-medium px-3 text-[15px] ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <span className="text-white font-medium px-3 text-[15px]">
                <i className="fa-solid fa-mobile"></i> +75 123 456 789
              </span>
            </li>
          </ul>
        </div>

        {/* Right side: Sign in + Language */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-white font-medium text-[15px] cursor-pointer">Sign in</span>
          <select className="text-white bg-black font-medium outline-none text-[15px]">
            <option value="">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <NavLink
                onClick={toggleMenu}
                to="/"
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                to="/ourcars"
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Our Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                to="/blog"
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                to="/about"
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                to="/contact"
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-[#D72638]" : "text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li><span className="text-white">+75 123 456 789</span></li>
            <hr className="border-gray-700" />
            <span className="text-white cursor-pointer">Sign in</span>
            <select className="text-white bg-black font-medium outline-none text-[15px]">
              <option value="">English</option>
              <option value="ar">Arabic</option>
            </select>
          </ul>
        </div>
      )}
    </nav>
  );
}
