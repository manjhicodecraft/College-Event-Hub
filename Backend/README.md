# CollegeEventHub

A full-stack college event management platform built with Spring Boot and React.

## Tech Stack

- **Backend**: Java Spring Boot 3.2+
- **Frontend**: React.js + Tailwind CSS
- **Database**: MySQL

## Prerequisites

- Java 17+
- Maven 3.6+
- Node.js 16+
- MySQL 8.0+

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   \\\ash
   cd backend
   \\\

2. Configure your database in \pplication.properties\:
   - Update \spring.datasource.username\ and \spring.datasource.password\
   - Create the database \collegeeventhub_db\ in MySQL

3. Build and run:
   \\\ash
   mvn clean install
   mvn spring-boot:run
   \\\

   Or run the batch file:
   \\\ash
   start-backend.bat
   \\\

### 2. Frontend Setup

1. Navigate to the frontend directory:
   \\\ash
   cd frontend
   \\\

2. Install dependencies:
   \\\ash
   npm install
   \\\

3. Run the development server:
   \\\ash
   npm run dev
   \\\

   Or run the batch file:
   \\\ash
   start-frontend.bat
   \\\

## API Endpoints

Base URL: \http://localhost:8080/api/events\

### Event Management

- \GET /\ - Get all active events
- \GET /{id}\ - Get event by ID
- \POST /\ - Create a new event
- \PUT /{id}\ - Update an event
- \DELETE /{id}\ - Delete an event (soft delete)
- \GET /type/{eventType}\ - Get events by type
- \GET /date/{eventDate}\ - Get events by date
- \GET /search/{name}\ - Search events by name

### Event Types

- SEMINAR
- WORKSHOP
- HACKATHON
- SPORTS
- CULTURAL

## Frontend Integration

The frontend connects to the backend via API calls. Example:

\\\javascript
// In your React service/api file
const API_BASE_URL = 'http://localhost:8080/api/events';

// Fetch all events
const fetchEvents = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};

// Create a new event
const createEvent = async (eventData) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
  return response.json();
};
\\\

## Running the Full Stack Application

Run both applications simultaneously:

\\\ash
# Run the full stack script
start-fullstack.ps1
\\\

## Database Schema

The application uses an 'events' table with the following columns:
- id (Primary Key, Auto Increment)
- name (VARCHAR, Not Null)
- description (TEXT)
- event_date (DATE, Not Null)
- location (VARCHAR)
- event_type (VARCHAR)
- max_participants (INT)
- is_active (BOOLEAN, Default: true)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## Environment Configuration

The application is configured to accept requests from:
- http://localhost:5173 (Vite default)
- http://localhost:3000 (Create React App default)
- http://localhost:3001 (Alternative React port)

## Deployment

For production deployment:
1. Change \spring.jpa.hibernate.ddl-auto\ to 'validate' in production
2. Secure your database credentials
3. Use environment variables for sensitive data
4. Consider using a reverse proxy like Nginx
