import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Server, HardDrive, Cpu, AlertTriangle } from 'lucide-react';

const ServerDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  
  // Sample data - replace with actual data
  const metrics = [
    { timestamp: '00:00', memory: 65, storage: 72 },
    { timestamp: '04:00', memory: 68, storage: 73 },
    { timestamp: '08:00', memory: 75, storage: 75 },
    { timestamp: '12:00', memory: 80, storage: 76 },
    { timestamp: '16:00', memory: 72, storage: 78 },
    { timestamp: '20:00', memory: 70, storage: 77 },
  ];

  return (
    <div className="space-y-6">
      {/* Settings Button */}
      <div className="flex justify-end">
        <a 
          href="/servers/settings" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Settings
        </a>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Server className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Servers</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Cpu className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg Memory Usage</p>
              <h3 className="text-2xl font-bold">72%</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <HardDrive className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg Storage Usage</p>
              <h3 className="text-2xl font-bold">65%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold">Server Metrics Overview</h2>
            <div className="flex space-x-2">
              {['6h', '24h', '7d', '30d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedTimeRange(range)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    selectedTimeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="memory" 
                  stroke="#4F46E5" 
                  strokeWidth={2}
                  dot={false}
                  name="Memory Usage"
                />
                <Line 
                  type="monotone" 
                  dataKey="storage" 
                  stroke="#7C3AED" 
                  strokeWidth={2}
                  dot={false}
                  name="Storage Usage"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Alert Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-amber-500" size={20} />
            <h2 className="text-lg font-semibold">Recent Alerts</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((alert) => (
              <div key={alert} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">High Memory Usage</p>
                    <p className="text-sm text-gray-500">Server-01 exceeded 85% memory usage</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDashboard;