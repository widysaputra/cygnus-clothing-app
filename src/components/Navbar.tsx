import React from 'react';
import { BRAND_NAME } from '../constants';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import SearchIcon from './icons/SearchIcon';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {BRAND_NAME}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Shop</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Collections</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white p-2 rounded-full transition-colors">
              <SearchIcon className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white p-2 rounded-full transition-colors relative">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
