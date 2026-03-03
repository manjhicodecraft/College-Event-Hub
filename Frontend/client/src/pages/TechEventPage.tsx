import React, { useState, useMemo } from 'react';
import CategoryFilter from '../components/TechEvent/CategoryFilter';
import EventCard from '../components/TechEvent/EventCard';
import { TECH_EVENTS_DATA, type TechEvent } from '../data/techEventsData';

const TechEventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter events based on selected category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'all') {
      return TECH_EVENTS_DATA;
    }
    return TECH_EVENTS_DATA.filter((event: TechEvent) => event.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-12 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold text-center mb-2 animate-fade-in'>
            🚀 Tech Events
          </h1>
          <p className='text-xl text-center text-blue-100'>
            Discover cutting-edge technology events and innovation conferences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Results Count */}
        <div className='mb-6 flex justify-between items-center'>
          <p className='text-gray-700 font-medium'>
            Showing <span className='text-blue-600 font-bold'>{filteredEvents.length}</span> events
          </p>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className='text-sm text-blue-600 hover:text-blue-800 font-medium underline'
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredEvents.map((event: TechEvent) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <svg className='w-24 h-24 mx-auto text-gray-300 mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <h3 className='text-2xl font-semibold text-gray-600 mb-2'>No events found</h3>
            <p className='text-gray-500'>Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechEventPage;
