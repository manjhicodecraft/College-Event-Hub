# 🚀 Quick Start Guide - TechEvent Feature

## Running the Application

### Option 1: Run Full Stack App
```bash
cd Frontend
npm run dev
```

### Option 2: Use PowerShell Script (Windows)
```powershell
.\start-fullstack.ps1
```

### Option 3: Run Backend & Frontend Separately
**Terminal 1 - Backend:**
```bash
cd Backend
.\start-backend.bat
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
```

## Accessing TechEvent Feature

1. **Open Browser**: Navigate to `http://localhost:8080` or `http://localhost:5173`
2. **Dashboard**: You'll see the main dashboard with event categories
3. **Click Tech Events Button**: Look for the gradient button:
   ```
   🚀 Tech Events
   ```
4. **Browse Events**: You'll be taken to `/tech-events` page

## Features Overview

### On the TechEvent Page:

#### Header Section
- Large gradient header with "🚀 Tech Events" title
- Subtitle: "Discover cutting-edge technology events"

#### Category Filters (8 buttons)
- 🎯 All Events (default selected)
- 🚀 Startup & Entrepreneurship
- 💻 IT & Software Development
- 🤖 AI, ML & Data Science
- ⚡ Hackathons & Coding
- 🔒 Cybersecurity
- 🎮 Gaming & Esports
- 🦾 Robotics, IoT & Hardware

#### Event Cards Grid
Each card displays:
- 📷 Event image (hover zoom effect)
- 🏷️ Price badge (Free/Paid)
- 📝 Event title
- 🏷️ Category badge
- 📄 Short description
- 📅 Date
- 📍 Location
- 👥 Attendee count
- 🔘 Register Now button

## How to Use

### Filtering Events
1. Click any category button
2. Events automatically filter
3. Selected category highlighted with gradient
4. See event count update
5. Click "All Events" to reset

### Browsing Events
- Scroll through grid of cards
- Hover over cards for interactive effects
- Click "Register Now" (backend integration pending)

### Responsive Design
- **Mobile**: 1 column layout
- **Tablet**: 2 columns
- **Desktop**: 3 columns

## Testing the Feature

### Test Checklist
✅ Navigate from Dashboard to TechEvents page  
✅ Verify all 8 category buttons display  
✅ Click each category - events should filter  
✅ Verify "All Events" shows all 15 events  
✅ Check hover effects on cards  
✅ Test responsive layout (resize browser)  
✅ Verify empty state when filtering shows no results  
✅ Click "Clear Filter" button  

### Sample Test Flow
```
1. Dashboard → Click "Tech Events" button
2. Should see 15 events in grid
3. Click "AI, ML & Data Science" 
4. Should see 3 AI events only
5. Click "All Events"
6. Should see all 15 events again
7. Click "Hackathons & Coding"
8. Should see 1 hackathon event
9. Clear filter
10. Back to 15 events
```

## File Locations

### Main Components
```
Frontend/client/src/
├── pages/TechEventPage.tsx      # Main page
├── components/TechEvent/
│   ├── CategoryFilter.tsx       # Filter buttons
│   └── EventCard.tsx            # Event card
└── data/techEventsData.ts       # Event data
```

### Updated Files
```
Frontend/client/src/
├── App.tsx                      # Added /tech-events route
└── pages/Dashboard.tsx          # Added TechEvent button
```

## Dummy Data Included

### 15 Sample Events:
1. TechCrunch Startup Battlefield (Startup)
2. React Summit 2026 (Software)
3. AI & ML Global Conference (AI-ML)
4. Global Hackathon 2026 (Hackathon)
5. CyberSec Con 2026 (Cybersecurity)
6. Esports Tech Expo (Gaming)
7. Robotics & IoT Innovation Summit (Robotics)
8. Y Combinator Demo Day (Startup)
9. DevOps Enterprise Summit (Software)
10. Data Science Week (AI-ML)
11. CTF Security Challenge (Cybersecurity)
12. Game Developers Conference (Gaming)
13. Smart Home Tech Fair (Robotics)
14. Women in Tech Leadership (Startup)
15. Quantum Computing Symposium (AI-ML)

## Styling Features

### Color Palette
- **Primary**: Blue (#2563eb) → Purple (#9333ea)
- **Background**: Gradient (gray/blue/purple)
- **Cards**: White with shadows
- **Text**: Gray scale

### Animations
- Fade-in on page load
- Card hover scale effect
- Smooth transitions
- Spring animation for active filter

## Troubleshooting

### Issue: Page not loading
**Solution**: Check if dev server is running on correct port

### Issue: Images not showing
**Solution**: Check internet connection (Unsplash CDN)

### Issue: Routing not working
**Solution**: Ensure wouter is installed (`npm install wouter`)

### Issue: Styles broken
**Solution**: Verify Tailwind CSS is configured (`npm run build`)

## Next Steps

### Backend Integration (Coming Soon)
1. Connect to Spring Boot API
2. Replace dummy data with real events
3. Implement event registration
4. Add user authentication
5. Enable CRUD operations

### Future Features
- Event search functionality
- Event details page
- User favorites
- Share events
- Email notifications
- Admin panel

## Support

For issues or questions:
1. Check TECH_EVENT_FEATURE.md for detailed docs
2. Review component code for implementation details
3. Check browser console for errors
4. Verify all dependencies are installed

---

**Happy Coding! 🎉**
