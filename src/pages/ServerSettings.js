import React, { useState } from 'react';
import { Plus, X, Mail, Phone, MessageSquare } from 'lucide-react';

const ServerSettings = () => {
  const [thresholds, setThresholds] = useState({
    memory: 80,
    storage: 85
  });

  const [notifications, setNotifications] = useState({
    email: ['eshangunathilaka10@gmail.com'],
    phone: [],
    sms: []
  });

  const [newContact, setNewContact] = useState('');
  const [activeTab, setActiveTab] = useState('email');

  const handleAddContact = () => {
    if (newContact) {
      setNotifications(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], newContact]
      }));
      setNewContact('');
    }
  };

  const handleRemoveContact = (type, contact) => {
    setNotifications(prev => ({
      ...prev,
      [type]: prev[type].filter(c => c !== contact)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Alert Thresholds Card */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Alert Thresholds</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Memory Usage Threshold (%)
              </label>
              <input
                type="number"
                value={thresholds.memory}
                onChange={(e) => setThresholds(prev => ({
                  ...prev,
                  memory: parseInt(e.target.value)
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Storage Usage Threshold (%)
              </label>
              <input
                type="number"
                value={thresholds.storage}
                onChange={(e) => setThresholds(prev => ({
                  ...prev,
                  storage: parseInt(e.target.value)
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings Card */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Notification Settings</h2>
        </div>
        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('email')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'email'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Mail size={16} />
              <span>Email</span>
            </button>
            <button
              onClick={() => setActiveTab('phone')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'phone'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Phone size={16} />
              <span>Phone</span>
            </button>
            <button
              onClick={() => setActiveTab('sms')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'sms'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <MessageSquare size={16} />
              <span>SMS</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                value={newContact}
                onChange={(e) => setNewContact(e.target.value)}
                placeholder={`Add ${activeTab} contact...`}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleAddContact}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
              >
                <Plus size={16} className="mr-2" />
                Add
              </button>
            </div>

            <div className="space-y-2">
              {notifications[activeTab].map((contact) => (
                <div
                  key={contact}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span>{contact}</span>
                  <button
                    onClick={() => handleRemoveContact(activeTab, contact)}
                    className="text-gray-500 hover:text-red-500 focus:outline-none"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ServerSettings;