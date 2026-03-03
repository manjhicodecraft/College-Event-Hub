import React from 'react';
import { TECH_EVENT_CATEGORIES } from '../../data/techEventsData';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className='w-full mb-8'>
      <h3 className='text-lg font-semibold text-gray-700 mb-4'>Filter by Category</h3>
      <div className='flex flex-wrap gap-3 justify-center'>
        {TECH_EVENT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
              transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg
              ${selectedCategory === category.id 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
          >
            <span className='mr-2'>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
