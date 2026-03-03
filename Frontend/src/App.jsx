import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TechEventPage from './pages/TechEvent/TechEventPage';

// Sample Dashboard component with TechEvent button
const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>College Event Hub</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Link to='/tech-events'>
            <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-8 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
              🚀 Tech Events
            </button>
          </Link>
          {/* Add more event type buttons here */}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tech-events' element={<TechEventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
