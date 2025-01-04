import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Server, Bell, Settings } from 'lucide-react';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Server, path: '/servers', label: 'Servers' },
    { icon: Bell, path: '/notifications', label: 'Notifications' },
    { icon: Settings, path: '/settings', label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-lg flex flex-col items-center py-4">
        <div 
          className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer mb-8"
          onClick={() => navigate('/')}
        >
          <span className="text-white font-bold">A</span>
        </div>
        
        <nav className="flex flex-col space-y-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`p-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
                title={item.label}
              >
                <Icon size={20} />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;