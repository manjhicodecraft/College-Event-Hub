# 🎓 CollegeEventHub

🚀 **CollegeEventHub** is a modern web platform designed to help students discover, participate in, and organize college events across different institutions. It connects students with **technical events, workshops, seminars, cultural competitions, and more** happening in various colleges.

---

## 🌟 Key Features

✨ **Event Discovery**  
Students can explore different events happening across campuses.

🧑‍💻 **Tech Event Categories**  
Browse multiple tech domains like AI, Hackathons, Cybersecurity, and more.

📅 **Event Registration**  
Students can register for events and track participation.

🧠 **AI Assistant (Planned Feature)**  
Smart assistant to guide students about competitions and participation strategies.

➕ **Event Creation**  
Organizers can create and manage events.

👤 **User Profile**  
Users can manage their profile and view registered events.

---

## 🧩 Tech Stack

### 🎨 Frontend

* ⚛️ **React.js** - UI framework
* 🎨 **Tailwind CSS** - Modern styling
* 🔗 **Wouter** - Lightweight routing
* 📡 **Axios** - HTTP client
* 🎭 **Framer Motion** - Animations
* 🎨 **Shadcn/UI** - Component library

### ⚙️ Backend

* ☕ **Java Spring Boot** - Backend framework
* 🗄️ **MySQL** - Database
* 🔐 **REST APIs** - API architecture
* 📊 **Maven** - Build tool

### 🤖 AI Integration

* 🧠 **Google Gemini AI** - Smart event assistance

---

## 🏗️ Project Structure

```
CollegeEventHub/
│
├── Backend/                    # Spring Boot backend
│   ├── src/main/
│   │   ├── java/com/thecodex/collegeeventhub/
│   │   │   ├── config/        # Security & CORS configuration
│   │   │   ├── controller/    # REST API controllers
│   │   │   ├── service/       # Business logic
│   │   │   ├── repository/    # Data access layer
│   │   │   ├── model/         # Entity classes
│   │   │   └── exception/     # Exception handling
│   │   └── resources/
│   │       └── application.properties
│   ├── pom.xml
│   └── start-backend.bat
│
├── Frontend/                   # React frontend
│   ├── client/src/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── TechEvent/    # Tech event components
│   │   │   └── Layout.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── TechEventPage.tsx
│   │   │   ├── OrganizeEvent.tsx
│   │   │   └── Profile.tsx
│   │   ├── data/
│   │   │   └── techEventsData.ts
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── App.tsx
│   ├── server/                # Express server
│   ├── shared/                # Shared utilities
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## 📂 Tech Event Categories

The platform includes multiple **technical event categories**:

* 🎯 **All Events** - Browse all available events
* 🚀 **Startup & Entrepreneurship Events** - Pitch competitions, demo days
* 💻 **IT & Software Development Conferences** - React Summit, DevOps, etc.
* 🤖 **AI, Machine Learning & Data Science** - AI conferences, data science weeks
* 🧑‍💻 **Hackathons & Coding Competitions** - Global hackathons, coding challenges
* 🔐 **Cybersecurity Events** - Security conferences, CTF competitions
* 🎮 **Gaming & Esports Tech Events** - Gaming expos, esports tournaments
* 🤖 **Robotics, IoT & Hardware Tech Events** - Innovation summits, IoT fairs

---

## ⚙️ Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (v18 or higher)
* **Java JDK** (v17 or higher)
* **Maven** (v3.6+)
* **MySQL** (v8.0+)
* **Git**

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/CollegeEventHub.git
cd CollegeEventHub
```

---

### 2️⃣ Database Setup

1. Create MySQL database:
```sql
CREATE DATABASE college_event_hub;
```

2. Update `Backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/college_event_hub
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

---

### 3️⃣ Run Frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

**Development Commands:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

---

### 4️⃣ Run Backend

**Option 1: Using Maven**
```bash
cd Backend
mvn spring-boot:run
```

**Option 2: Using Batch File (Windows)**
```bash
cd Backend
.\start-backend.bat
```

Backend will run on:
```
http://localhost:8080
```

**API Endpoints:**
```
GET  /api/events          - Get all events
GET  /api/events/{id}     - Get event by ID
POST /api/events          - Create new event
PUT  /api/events/{id}     - Update event
DELETE /api/events/{id}   - Delete event
```

---

### 5️⃣ Run Full Stack Application

**Using PowerShell Script (Windows):**
```bash
cd Frontend
.\start-fullstack.ps1
```

Or manually open two terminals:
```bash
# Terminal 1 - Backend
cd Backend
mvn spring-boot:run

# Terminal 2 - Frontend
cd Frontend
npm run dev
```

---

## 📸 Application Flow

### User Journey

1️⃣ **Dashboard Landing**  
User opens the dashboard and sees "Discover Campus Events"

2️⃣ **Browse Categories**  
Filter events by category: All, TechEvent, Workshop, Seminars, Cultural Events

3️⃣ **Explore Tech Events**  
Click **"TechEvent"** in the filter row to navigate to dedicated TechEvent page

4️⃣ **Filter Tech Categories**  
Browse 8 tech-specific categories:
* Startup & Entrepreneurship
* IT & Software Development
* AI, ML & Data Science
* Hackathons & Coding
* Cybersecurity
* Gaming & Esports
* Robotics, IoT & Hardware

5️⃣ **View Event Details**  
See complete event information:
* Event image and title
* Date and location
* Description and attendees
* Registration button

6️⃣ **Register for Event**  
Click "Register Now" to participate (authentication required in future)

---

## 🎯 Key Pages

### 🏠 Dashboard (`/`)
* Main landing page
* Event discovery interface
* Category filter row
* Event cards grid

### 🚀 TechEventPage (`/techevents`)
* Dedicated tech events page
* 8 tech category filters
* 15+ sample tech events
* Responsive grid layout

### 📝 OrganizeEvent (`/organize`)
* Event creation form
* For organizers and colleges

### 👤 Profile (`/profile`)
* User profile management
* View registered events
* Edit user information

---

## 🎨 Design Features

### Color Scheme
* **Primary Gradient:** Blue (#2563eb) → Purple (#9333ea)
* **Background:** Subtle gradients
* **Cards:** White with shadows
* **Text:** Gray scale for readability

### Animations
* **Fade In:** Page load animations
* **Scale Up:** Card hover effects
* **Smooth Transitions:** All interactive elements
* **Spring Animation:** Active filter states

### Responsive Breakpoints
* **Mobile (< 768px):** 1 column layout
* **Tablet (≥ 768px):** 2 columns layout
* **Desktop (≥ 1024px):** 3 columns layout

---

## 🚀 Future Enhancements

### 🔐 Authentication
* User login/register functionality
* JWT-based authentication
* Role-based access (Student/Organizer/Admin)

### 🧠 AI-Powered Features
* Smart event recommendations
* Personalized suggestions based on interests
* Chatbot for event queries
* Competition strategy guidance

### 📊 Analytics Dashboard
* Event participation statistics
* User engagement metrics
* Popular categories tracking
* Attendance trends

### 📍 Location-Based Discovery
* Map integration for event locations
* Nearby events suggestion
* Distance filtering
* Campus navigation

### 🏆 Gamification
* Leaderboards for active participants
* Achievement badges
* Points system
* Competition rankings

### 📱 Mobile App
* React Native mobile application
* Push notifications
* Offline mode
* QR code check-in

### 🔔 Notifications
* Email notifications for new events
* Reminder system
* Event updates alerts
* Registration confirmations

---

## 🧪 Testing

### Run Tests

**Backend:**
```bash
cd Backend
mvn test
```

**Frontend:**
```bash
cd Frontend
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Submit a pull request**

### Contribution Guidelines
* Follow existing code style
* Write meaningful commit messages
* Add comments for complex logic
* Test your changes thoroughly
* Update documentation if needed

---

## 📄 License

This project is licensed under the **MIT License**.

```
Copyright (c) 2026 CollegeEventHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👩‍💻 Author

**Developed with ❤️ by Your Name**

* GitHub: [@your-username](https://github.com/your-username)
* Email: your.email@example.com
* LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

---

## 🙏 Acknowledgments

* **React.js** - UI framework
* **Tailwind CSS** - Styling library
* **Spring Boot** - Backend framework
* **Shadcn/UI** - Component library
* **Framer Motion** - Animation library
* **Wouter** - Routing library

---

## 📞 Support

For issues, questions, or contributions:

* **Report Bugs:** Create an issue on GitHub
* **Feature Requests:** Submit a feature request
* **Questions:** Use GitHub Discussions or contact author

---

## 🎓 Project Status

**Current Version:** 1.0.0  
**Status:** ✅ Active Development  

### Completed Features
- ✅ Dashboard with event discovery
- ✅ TechEvent page with category filtering
- ✅ Event cards with detailed information
- ✅ Responsive design for all devices
- ✅ Beautiful animations and transitions
- ✅ 15+ sample tech events
- ✅ Clean, intuitive UI

### In Progress
- 🔄 Backend API integration
- 🔄 Database connectivity
- 🔄 User authentication

### Planned
- 📅 AI assistant integration
- 📅 Real-time notifications
- 📅 Advanced analytics

---

⭐ **If you like this project, don't forget to star the repository!**

---

**Last Updated:** March 3, 2026  
**Project:** CollegeEventHub  
**Version:** 1.0.0
