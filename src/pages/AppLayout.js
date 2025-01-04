// src/components/layout/AppLayout.tsx
import React from 'react';
import { Bell, Settings, Server, Home } from 'lucide-react';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Home size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Server size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-colors">
            <Settings size={20} />
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-6">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Applifyz Monitor</h1>
              <p className="text-gray-500">Server Monitoring Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell size={20} />
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">EA</span>
              </div>
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;