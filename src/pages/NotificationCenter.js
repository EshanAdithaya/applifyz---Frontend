import React, { useState } from 'react';
import { Bell, AlertTriangle, Info } from 'lucide-react';

const NotificationCenter = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'critical',
      title: 'High Memory Usage Alert',
      message: 'Server-01 memory usage exceeded 90%',
      timestamp: '10 minutes ago',
      server: 'Server-01',
      status: 'unread'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Storage Space Warning',
      message: 'Server-03 storage usage reached 85%',
      timestamp: '1 hour ago',
      server: 'Server-03',
      status: 'read'
    },
    {
      id: 3,
      type: 'info',
      title: 'System Update',
      message: 'Server monitoring system updated to version 2.1.0',
      timestamp: '2 hours ago',
      server: 'System',
      status: 'read'
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-amber-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notification Center</h1>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          {/* Custom Tabs */}
          <div className="border-b pb-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setFilter('all')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bell size={16} />
                <span>All</span>
              </button>
              <button
                onClick={() => setFilter('critical')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  filter === 'critical'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <AlertTriangle size={16} />
                <span>Critical</span>
              </button>
              <button
                onClick={() => setFilter('warning')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  filter === 'warning'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <AlertTriangle size={16} />
                <span>Warnings</span>
              </button>
              <button
                onClick={() => setFilter('info')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  filter === 'info'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Info size={16} />
                <span>Info</span>
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="mt-6 space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  notification.status === 'unread' ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-white">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">
                        {notification.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {notification.server}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.timestamp}
                        </span>
                      </div>
                    </div>
                    <p className="mt-1 text-gray-600">{notification.message}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details
                      </button>
                      {notification.type === 'critical' && (
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Take Action
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;