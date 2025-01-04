// src/components/settings/ServerSettings.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
      <Card>
        <CardHeader>
          <CardTitle>Alert Thresholds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Memory Usage Threshold (%)
              </label>
              <Input
                type="number"
                value={thresholds.memory}
                onChange={(e) => setThresholds(prev => ({
                  ...prev,
                  memory: parseInt(e.target.value)
                }))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Storage Usage Threshold (%)
              </label>
              <Input
                type="number"
                value={thresholds.storage}
                onChange={(e) => setThresholds(prev => ({
                  ...prev,
                  storage: parseInt(e.target.value)
                }))}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
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
              <Input
                value={newContact}
                onChange={(e) => setNewContact(e.target.value)}
                placeholder={`Add ${activeTab} contact...`}
                className="flex-1"
              />
              <Button onClick={handleAddContact}>
                <Plus size={16} className="mr-2" />
                Add
              </Button>
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
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerSettings;