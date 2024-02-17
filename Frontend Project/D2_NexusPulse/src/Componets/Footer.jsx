import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="text-2xl font-extrabold mb-4">NexusPulse University</div>
        <p className="text-base mb-4">
          A Legacy of Wisdom, A Future of Possibilities – NexusPulse.
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            Programs
          </a>
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            Admissions
          </a>
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-500 transition-all duration-300">
            Terms of Service
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-all duration-300">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-all duration-300">
            <i className="fab fa-twitter-square text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-all duration-300">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-500 transition-all duration-300">
            <i className="fab fa-instagram-square text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
