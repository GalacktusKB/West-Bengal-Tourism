import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-amber-600">Explore Bengal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'text-amber-600 bg-amber-100' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'text-amber-600 bg-amber-100' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/places" 
              className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'text-amber-600 bg-amber-100' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
            >
              Places Roadmaps
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'text-amber-600 bg-amber-100' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'text-amber-600 bg-amber-100' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'}`}
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex items-center">
            <NavLink 
              to="/login" 
              className="ml-4 px-4 py-2 rounded-lg font-medium text-amber-600 hover:bg-amber-50 transition-all"
            >
              Become a Guide
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none"
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

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${scrolled ? 'bg-white/90' : 'bg-white/95'} backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <NavLink 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-100 text-amber-600' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/gallery" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-100 text-amber-600' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/places" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-100 text-amber-600' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Places Roadmaps
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-100 text-amber-600' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-100 text-amber-600' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'}`}
          >
            Contact Us
          </NavLink>
          <NavLink 
            to="/login" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-600 hover:bg-amber-50"
          >
            LogIn
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;