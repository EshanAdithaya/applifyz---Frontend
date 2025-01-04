import React from 'react';
import { Bell, Settings, Server, Home } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import TopNavBar from '../components/TopNavBar';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Home size={20} />
          </Link>
          <Link to="/servers" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Server size={20} />
          </Link>
          <Link to="/notifications" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Bell size={20} />
          </Link>
          <Link to="/settings" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Settings size={20} />
          </Link>
        </nav>
      </div>

      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Content */}
      <div className="ml-16 pt-16 p-6">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;