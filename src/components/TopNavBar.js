import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  MessageSquare, 
  HelpCircle, 
  ChevronDown,
  Settings,
  LogOut,
  User
} from 'lucide-react';

const TopNavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const notifications = [
    {
      id: 1,
      title: 'High Memory Usage',
      message: 'Server-01 memory usage exceeded 85%',
      time: '2 min ago',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Server Recovered',
      message: 'Server-02 is back online',
      time: '5 min ago',
      type: 'success'
    },
    {
      id: 3,
      title: 'New Alert',
      message: 'Storage usage threshold updated',
      time: '10 min ago',
      type: 'info'
    }
  ];

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 fixed top-0 right-0 left-16 z-10">
      {/* Search Bar */}
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search servers, alerts, settings..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <HelpCircle className="text-gray-600" size={20} />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <MessageSquare className="text-gray-600" size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="text-gray-600" size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2">
              <div className="px-4 py-2 border-b">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-sm text-gray-500">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t">
                <button className="text-sm text-blue-500 hover:text-blue-600 w-full text-center">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="relative">
          <button 
            className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-2"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">EA</span>
            </div>
            <span className="text-sm font-medium">Eshan A.</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2">
                <User size={16} className="text-gray-500" />
                <span>Profile</span>
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2">
                <Settings size={16} className="text-gray-500" />
                <span>Settings</span>
              </button>
              <div className="border-t my-1"></div>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 text-red-500">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;