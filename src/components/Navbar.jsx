import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-lg rounded-full mx-auto max-w-6xl p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black mr-2">CD</div>
          <span className="text-sm italic text-gray-500">car delar</span>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="text-black block sm:hidden focus:outline-none"
          onClick={toggleSidebar}
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu Items */}
        <ul className="hidden sm:flex space-x-8 text-lg">
          <li className="hover:underline">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:underline">
            <a href="#buy-old-car">BUY OLD CAR</a>
          </li>
          <li className="hover:underline">
            <a href="#service-available">SERVICE AVAILABLE</a>
          </li>
          <li className="hover:underline">
            <a href="#book-service">BOOK SERVICE</a>
          </li>
          <li className="hover:underline">
            <a href="#about-us">ABOUT US</a>
          </li>
          <li className="hover:underline">
            <a href="#contact-us">CONTACT US</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar for Mobile View */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="p-4 flex items-center justify-between">
          {/* Logo in Sidebar */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black mr-2">CD</div>
            <span className="text-sm italic text-gray-500">car delar</span>
          </div>
          {/* Close button */}
          <button
            className="text-black focus:outline-none"
            onClick={toggleSidebar}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu Items */}
        <ul className="flex flex-col space-y-4 text-lg p-4">
          <li className="hover:underline">
            <a href="#home" onClick={toggleSidebar}>HOME</a>
          </li>
          <li className="hover:underline">
            <a href="#buy-old-car" onClick={toggleSidebar}>BUY OLD CAR</a>
          </li>
          <li className="hover:underline">
            <a href="#service-available" onClick={toggleSidebar}>SERVICE AVAILABLE</a>
          </li>
          <li className="hover:underline">
            <a href="#book-service" onClick={toggleSidebar}>BOOK SERVICE</a>
          </li>
          <li className="hover:underline">
            <a href="#about-us" onClick={toggleSidebar}>ABOUT US</a>
          </li>
          <li className="hover:underline">
            <a href="#contact-us" onClick={toggleSidebar}>CONTACT US</a>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Navbar;
