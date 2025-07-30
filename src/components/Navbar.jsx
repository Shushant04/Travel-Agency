import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container mx-auto px-4 flex justify-start items-center h-16">
        <h3 className="text-2xl font-bold">Travel</h3>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/Gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/Contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          <button className="py-2 px-6 border bg-gray-300">Login</button>
        </div>

        {/* Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white space-y-4 py-4">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/Gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/Contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          <button className="py-2 px-6 border bg-gray-300">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
