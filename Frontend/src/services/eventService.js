// services/eventService.js

const API_BASE_URL = 'http://localhost:8080/api/events';

export const eventService = {
  // Get all events
  getAllEvents: async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Get event by ID
  getEventById: async (id) => {
    try {
      const response = await fetch(\\/\\);
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  },

  // Create new event
  createEvent: async (eventData) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  // Update event
  updateEvent: async (id, eventData) => {
    try {
      const response = await fetch(\\/\\, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  // Delete event
  deleteEvent: async (id) => {
    try {
      const response = await fetch(\\/\\, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return response.status;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  },

  // Get events by type
  getEventsByType: async (eventType) => {
    try {
      const response = await fetch(\\/type/\\);
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching events by type:', error);
      throw error;
    }
  },

  // Search events by name
  searchEvents: async (name) => {
    try {
      const response = await fetch(\\/search/\\);
      if (!response.ok) {
        throw new Error(HTTP error! status: \);
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching events:', error);
      throw error;
    }
  }
};

export default eventService;
