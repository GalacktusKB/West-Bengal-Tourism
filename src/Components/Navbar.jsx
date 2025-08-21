import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Modern Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-route text-white text-lg"></i>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-gray-800">Explore</span>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent ml-1">
                  Bengal
                </span>
              </div>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) => `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-amber-600 bg-amber-50 shadow-inner' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-amber-600 bg-amber-50 shadow-inner' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'}`}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/places"
              className={({ isActive }) => `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-amber-600 bg-amber-50 shadow-inner' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'}`}
            >
              Roadmaps
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-amber-600 bg-amber-50 shadow-inner' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-amber-600 bg-amber-50 shadow-inner' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'}`}
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden lg:flex items-center">
           
            <NavLink
              to="/login"
              className="ml-4 px-5 py-2.5 rounded-xl font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Become a Guide
            </NavLink>
          </div>

          {/* Mobile menu button - Now visible at lg:1024px */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-700 hover:text-amber-600 hover:bg-amber-50 focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Now visible at lg:1024px */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} ${scrolled ? 'bg-white/95' : 'bg-white/95'} backdrop-blur-md shadow-xl`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300 ${isActive ? 'bg-amber-50 text-amber-600 shadow-inner' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300 ${isActive ? 'bg-amber-50 text-amber-600 shadow-inner' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/places"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300 ${isActive ? 'bg-amber-50 text-amber-600 shadow-inner' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Places Roadmaps
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300 ${isActive ? 'bg-amber-50 text-amber-600 shadow-inner' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300 ${isActive ? 'bg-amber-50 text-amber-600 shadow-inner' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center mt-2"
          >
            Become a Guide
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;