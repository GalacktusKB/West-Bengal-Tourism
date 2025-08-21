import React from 'react'

const Footer = () => {
  return (
    <div>
     {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-amber-400 font-bold text-2xl">Bengal<span className="text-white">Tour</span></span>
            <p className="mt-4 text-gray-400">Discover the beauty and culture of West Bengal with our expertly crafted tours and travel experiences.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Travel Packages</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+91 98765 43210</li>
              <li>info@bengaltour.com</li>
              <li>Kolkata, West Bengal, India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for travel updates and offers</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg focus:outline-none flex-grow text-gray-800" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BengalTour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
