import React, { useState } from 'react';
import { Settings, Bell, Server, Mail, Phone } from 'lucide-react';

const SettingsPage = () => {
  const [generalSettings, setGeneralSettings] = useState({
    systemName: 'Applifyz Monitor',
    refreshInterval: 30,
    retentionDays: 30,
    darkMode: false
  });

  const [alertSettings, setAlertSettings] = useState({
    enableEmailAlerts: true,
    enableSMSAlerts: true,
    enablePhoneAlerts: false,
    criticalThreshold: 90,
    warningThreshold: 80,
    alertFrequency: 15
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">System Settings</h1>

      {/* General Settings */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <Settings size={20} />
            <h2 className="text-lg font-semibold">General Settings</h2>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Name
              </label>
              <input
                value={generalSettings.systemName}
                onChange={(e) => setGeneralSettings(prev => ({
                  ...prev,
                  systemName: e.target.value
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Refresh Interval (seconds)
              </label>
              <input
                type="number"
                value={generalSettings.refreshInterval}
                onChange={(e) => setGeneralSettings(prev => ({
                  ...prev,
                  refreshInterval: parseInt(e.target.value)
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-t">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500">Enable dark theme for the dashboard</p>
            </div>
            <button
              onClick={() => setGeneralSettings(prev => ({
                ...prev,
                darkMode: !prev.darkMode
              }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                generalSettings.darkMode ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  generalSettings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Alert Settings */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <Bell size={20} />
            <h2 className="text-lg font-semibold">Alert Settings</h2>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Critical Alert Threshold (%)
              </label>
              <input
                type="number"
                value={alertSettings.criticalThreshold}
                onChange={(e) => setAlertSettings(prev => ({
                  ...prev,
                  criticalThreshold: parseInt(e.target.value)
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Warning Alert Threshold (%)
              </label>
              <input
                type="number"
                value={alertSettings.warningThreshold}
                onChange={(e) => setAlertSettings(prev => ({
                  ...prev,
                  warningThreshold: parseInt(e.target.value)
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-t">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400" />
                <div>
                  <h3 className="font-medium">Email Alerts</h3>
                  <p className="text-sm text-gray-500">Receive alerts via email</p>
                </div>
              </div>
              <button
                onClick={() => setAlertSettings(prev => ({
                  ...prev,
                  enableEmailAlerts: !prev.enableEmailAlerts
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  alertSettings.enableEmailAlerts ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    alertSettings.enableEmailAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400" />
                <div>
                  <h3 className="font-medium">SMS Alerts</h3>
                  <p className="text-sm text-gray-500">Receive alerts via SMS</p>
                </div>
              </div>
              <button
                onClick={() => setAlertSettings(prev => ({
                  ...prev,
                  enableSMSAlerts: !prev.enableSMSAlerts
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  alertSettings.enableSMSAlerts ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    alertSettings.enableSMSAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400" />
                <div>
                  <h3 className="font-medium">Phone Alerts</h3>
                  <p className="text-sm text-gray-500">Receive critical alerts via phone call</p>
                </div>
              </div>
              <button
                onClick={() => setAlertSettings(prev => ({
                  ...prev,
                  enablePhoneAlerts: !prev.enablePhoneAlerts
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  alertSettings.enablePhoneAlerts ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    alertSettings.enablePhoneAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Cancel Changes
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;