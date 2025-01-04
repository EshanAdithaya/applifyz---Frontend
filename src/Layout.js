import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Server, 
  Bell, 
  Settings,
  Search,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  LogOut,
  User
} from 'lucide-react';

// Example Page Components
const HomePage = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to your dashboard</p>
  </div>
);

const ServersPage = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h1 className="text-2xl font-bold mb-4">Servers</h1>
    <p>Manage your servers here</p>
  </div>
);

const NotificationsPage = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h1 className="text-2xl font-bold mb-4">Notifications</h1>
    <p>View all notifications</p>
  </div>
);

const SettingsPage = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <p>Manage your account settings</p>
  </div>
);

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);

  const navigationItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Server, path: '/servers', label: 'Servers' },
    { icon: Bell, path: '/notifications', label: 'Notifications' },
    { icon: Settings, path: '/settings', label: 'Settings' }
  ];

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
    <div className="min-h-screen bg-gray-50">
      {/* TopBar */}
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
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <HelpCircle className="text-gray-600" size={20} />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <MessageSquare className="text-gray-600" size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="text-gray-600" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
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
                <div className="border-t my-1" />
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 text-red-500">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SideBar */}
      <div className="w-16 bg-white border-r fixed top-0 left-0 bottom-0 z-20">
        <div className="h-16 flex items-center justify-center border-b">
          <button 
            onClick={() => navigate('/')} 
            className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center"
          >
            <span className="text-white text-xl font-bold">A</span>
          </button>
        </div>
        <div className="py-4 flex flex-col items-center space-y-2">
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
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-16 pt-16">
        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servers" element={<ServersPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;