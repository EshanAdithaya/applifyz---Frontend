// src/components/settings/SettingsPage.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings, Bell, Shield, Server, User, Mail, Phone } from 'lucide-react';

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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings size={20} />
            <span>General Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Name
              </label>
              <Input
                value={generalSettings.systemName}
                onChange={(e) => setGeneralSettings(prev => ({
                  ...prev,
                  systemName: e.target.value
                }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Refresh Interval (seconds)
              </label>
              <Input
                type="number"
                value={generalSettings.refreshInterval}
                onChange={(e) => setGeneralSettings(prev => ({
                  ...prev,
                  refreshInterval: parseInt(e.target.value)
                }))}
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-t">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500">Enable dark theme for the dashboard</p>
            </div>
            <Switch
              checked={generalSettings.darkMode}
              onCheckedChange={(checked) => setGeneralSettings(prev => ({
                ...prev,
                darkMode: checked
              }))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Alert Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell size={20} />
            <span>Alert Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Critical Alert Threshold (%)
              </label>
              <Input
                type="number"
                value={alertSettings.criticalThreshold}
                onChange={(e) => setAlertSettings(prev => ({
                  ...prev,
                  criticalThreshold: parseInt(e.target.value)
                }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Warning Alert Threshold (%)
              </label>
              <Input
                type="number"
                value={alertSettings.warningThreshold}
                onChange={(e) => setAlertSettings(prev => ({
                  ...prev,
                  warningThreshold: parseInt(e.target.value)
                }))}
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
              <Switch
                checked={alertSettings.enableEmailAlerts}
                onCheckedChange={(checked) => setAlertSettings(prev => ({
                  ...prev,
                  enableEmailAlerts: checked
                }))}
              />
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400" />
                <div>
                  <h3 className="font-medium">SMS Alerts</h3>
                  <p className="text-sm text-gray-500">Receive alerts via SMS</p>
                </div>
              </div>
              <Switch
                checked={alertSettings.enableSMSAlerts}
                onCheckedChange={(checked) => setAlertSettings(prev => ({
                  ...prev,
                  enableSMSAlerts: checked
                }))}
              />
            </div>

            <div className="flex items-center justify-between py-4 border-t">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400" />
                <div>
                  <h3 className="font-medium">Phone Alerts</h3>
                  <p className="text-sm text-gray-500">Receive critical alerts via phone call</p>
                </div>
              </div>
              <Switch
                checked={alertSettings.enablePhoneAlerts}
                onCheckedChange={(checked) => setAlertSettings(prev => ({
                  ...prev,
                  enablePhoneAlerts: checked
                }))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel Changes</Button>
        <Button>Save Settings</Button>
      </div>
    </div>
  );
};

export default SettingsPage;