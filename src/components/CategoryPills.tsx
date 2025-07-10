import React from 'react';
import { ProductCategory } from '../types';
import { CATEGORIES } from '../constants';

interface CategoryPillsProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center">Browse by Category</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPills;
