import React from 'react';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
      {/* Event Image */}
      <div className='relative h-48 overflow-hidden'>
        <img
          src={event.image}
          alt={event.title}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
        />
        <div className='absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
          {event.price}
        </div>
      </div>

      {/* Event Content */}
      <div className='p-5'>
        {/* Title */}
        <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-1'>
          {event.title}
        </h3>

        {/* Category Badge */}
        <div className='mb-3'>
          <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wide'>
            {event.category}
          </span>
        </div>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed'>
          {event.description}
        </p>

        {/* Event Details */}
        <div className='space-y-2 mb-4'>
          <div className='flex items-center text-gray-700 text-sm'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
            </svg>
            <span>{formatDate(event.date)}</span>
          </div>
          <div className='flex items-center text-gray-700 text-sm'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <span className='line-clamp-1'>{event.location}</span>
          </div>
          <div className='flex items-center text-gray-700 text-sm'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        {/* Register Button */}
        <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg'>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
