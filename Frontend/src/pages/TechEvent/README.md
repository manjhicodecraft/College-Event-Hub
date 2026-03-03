# TechEvent Feature - CollegeEventHub

## 📁 Folder Structure

\\\
frontend/src/
├── App.jsx                          # Main app with routing
├── components/
│   └── TechEvent/
│       ├── CategoryFilter.jsx       # Category filter buttons component
│       └── EventCard.jsx            # Individual event card component
├── pages/
│   └── TechEvent/
│       └── TechEventPage.jsx        # Main TechEvent page
└── data/
    └── techEventsData.js            # Dummy data and categories
\\\

## 🎯 Features Implemented

### 1. **Category Filtering System**
- 8 tech event categories with emoji icons
- Dynamic filtering with smooth transitions
- Active state highlighting
- Clear filter option

### 2. **Event Cards**
Each card displays:
- High-quality event image
- Event title
- Category badge
- Short description
- Event date
- Location
- Attendee count
- Price tag
- Register button with hover effects

### 3. **Responsive Design**
- Mobile-first approach
- Grid layout: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Touch-friendly buttons
- Optimized for all screen sizes

### 4. **Modern UI/UX**
- Gradient backgrounds
- Smooth animations and transitions
- Hover effects on cards and buttons
- Shadow depth for visual hierarchy
- Color-coded category badges

## 🚀 Usage

### Navigate to Tech Events
From the Dashboard, click the **"🚀 Tech Events"** button to navigate to the TechEvent page.

### Filter Events
Click on any category button to filter events:
- 🎯 All Events (default)
- 🚀 Startup & Entrepreneurship
- �� IT & Software Development
- 🤖 AI, ML & Data Science
- ⚡ Hackathons & Coding
- 🔒 Cybersecurity
- 🎮 Gaming & Esports
- 🦾 Robotics, IoT & Hardware

## 📊 Tech Event Categories

1. **Startup & Entrepreneurship Events**
   - Pitch competitions
   - Investor meetups
   - Founder networking

2. **IT & Software Development Conferences**
   - Programming languages
   - Frameworks & tools
   - Best practices

3. **AI, ML & Data Science Events**
   - Machine learning workshops
   - Data analytics seminars
   - Neural networks research

4. **Hackathons & Coding Competitions**
   - 24-48 hour marathons
   - Problem-solving challenges
   - Prize competitions

5. **Cybersecurity Events**
   - Ethical hacking
   - Security conferences
   - CTF competitions

6. **Gaming & Esports Tech Events**
   - Game development
   - VR/AR technology
   - Competitive gaming

7. **Robotics, IoT & Hardware Tech Events**
   - Autonomous robots
   - Smart home devices
   - IoT innovations

## 🎨 Design Features

### Color Scheme
- Primary: Blue to Purple gradient
- Background: Subtle gradient from gray via blue to purple
- Cards: White with shadow elevation
- Text: Gray scale for readability

### Animations
- Card hover: Scale up + shadow increase
- Button hover: Scale up + color shift
- Image hover: Zoom effect inside card
- Page load: Fade-in animation

### Typography
- Headings: Bold, large font sizes
- Body: Medium weight for readability
- Badges: Uppercase, tracked letters

## 📦 Components Breakdown

### TechEventPage.jsx
Main container component that:
- Manages selected category state
- Filters events based on selection
- Renders header, filters, and event grid
- Handles empty state

### CategoryFilter.jsx
Filter component that:
- Displays all category buttons
- Shows active state with gradient background
- Handles category selection
- Includes emoji icons for visual appeal

### EventCard.jsx
Card component that:
- Displays event information
- Formats dates properly
- Shows price badge
- Includes icons for date, location, attendees
- Provides register call-to-action

## 🔧 Customization

### Add New Events
Edit \src/data/techEventsData.js\:

\\\javascript
{
  id: 16,
  title: "Your Event Title",
  category: "startup", // must match category ID
  description: "Event description",
  date: "2026-09-15",
  location: "City, Country",
  image: "https://image-url.com/image.jpg",
  attendees: 500,
  price: ""
}
\\\

### Add New Category
Add to \TECH_EVENT_CATEGORIES\ array in \	echEventsData.js\:

\\\javascript
{ id: 'new-category', name: 'New Category Name', icon: '🆕' }
\\\

## 🌐 API Integration Ready

The component is designed to easily integrate with your Spring Boot backend:

\\\javascript
// Replace dummy data import with API call
import { useEffect, useState } from 'react';

const TechEventPage = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8080/api/events/tech')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);
  
  // Use events instead of TECH_EVENTS_DATA
};
\\\

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## ✅ Best Practices Followed

1. ✅ Functional components with hooks
2. ✅ Proper prop drilling
3. ✅ useMemo for performance optimization
4. ✅ Tailwind CSS utility classes
5. ✅ Clean code structure
6. ✅ Reusable components
7. ✅ Consistent naming conventions
8. ✅ Accessibility considerations

## 🎯 Future Enhancements

- Search functionality
- Event registration modal
- Share event feature
- Calendar integration
- Event bookmarking
- Advanced filters (price, date range)
- Pagination for large datasets
- Sort by date/popularity

## 🐛 Troubleshooting

### Images not loading?
- Check internet connection (images from Unsplash)
- Verify image URLs are accessible

### Routing not working?
- Ensure react-router-dom is installed: \
pm install react-router-dom\
- Check BrowserRouter is wrapping your App

### Styles not applying?
- Verify Tailwind CSS is configured
- Check if Tailwind directives are in index.css

## 📞 Support

For issues or questions, check the CollegeEventHub documentation or contact the development team.
