
import React from 'react';
import { BRAND_NAME } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/spacehero/1920/1080')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">{BRAND_NAME}</span>
          <span className="block text-gray-300 mt-2">Explore Your Universe</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          Discover unique apparel inspired by the cosmos. Premium quality, stellar designs. Wear the wonder.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#products"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
          >
            Shop Collection
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
