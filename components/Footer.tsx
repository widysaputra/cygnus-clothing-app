
import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">{BRAND_NAME}</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} {BRAND_NAME}. All rights reserved. Journey through the cosmos with us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
