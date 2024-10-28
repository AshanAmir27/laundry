import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.webp";
import { PiPhoneCallThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-white border-gray-200 pl-10 shadow-md fixed w-full left-0 z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0" : "relative"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="logo" className="w-24 md:w-28 lg:w-36" />
          </Link>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pr-10 pt-3 text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Links (for larger screens) */}
        <div
          className={`${
            isOpen ? "block bg-white " : "hidden"
          } absolute w-full lg:ml-16 lg:flex lg:w-auto lg:bg-transparent top-full left-0 lg:relative lg:flex-grow lg:items-center`}
        >
          <ul className="flex flex-col text-center lg:flex-row lg:space-x-8 md:px-8 lg:px-0 font-bold ">
            <li>
              <Link
                to="/"
                className="block text-gray-800 hover:text-blue-500 focus:border-b-4 border-blue-500 pb-5 pt-8"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-800 py-0 hover:text-blue-500 active:border-b-4 border-indigo-500 pb-5 pt-8"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-gray-800 py-0 hover:text-blue-500 active:border-b-4 border-indigo-500 pb-5 pt-8"
              >
                Services
              </Link>
            </li>

            {/* Blog with Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="inline-block text-gray-800 py-0 hover:text-blue-500  active:border-b-4 border-indigo-500 pb-5 pt-8 focus:outline-none"
              >
                Blog
              </button>
              {isDropdownOpen && (
                <div className="absolute  left-64  text-left w-40 bg-white border  shadow-lg rounded-sm z-50">
                  <ul>
                    <li>
                      <Link
                        to="/blog"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/article2"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                       Blog Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/article3"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Element
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="block text-gray-800 py-0 focus:border-b-4 border-blue-500 pb-5 pt-8"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Call to action button for larger screens */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <PiPhoneCallThin className="text-blue-600 w-6 h-16" />
            <span className="text-slate-400 ml-2">|</span>
            <a
              href="tel:(08)728256266"
              className="pl-2 text-blue-600 hover:underline text-xl"
            >
              (08) 728 256 266
            </a>
          </div>
          <Link
            to="/appointment"
            className="px-6 py-7 bg-blue-500 text-white hover:bg-blue-600"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
