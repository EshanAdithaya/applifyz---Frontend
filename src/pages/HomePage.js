import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Bell, 
  AlertTriangle, 
  Check, 
  Mail, 
  Phone,
  MessageSquare,
  Shield,
  Activity,
  Clock
} from 'lucide-react';

const HomePage = () => {
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState(null);
  const [thresholds, setThresholds] = useState({
    memory: 80,
    storage: 85,
    cpu: 90
  });

  // Mock data - replace with actual API calls
  const mockServers = [
    {
      id: 1,
      name: 'Production Server 1',
      status: 'healthy',
      memory: 65,
      storage: 72,
      cpu: 45,
      uptime: '99.9%',
      lastCheck: '2 mins ago'
    },
    {
      id: 2,
      name: 'Production Server 2',
      status: 'warning',
      memory: 85,
      storage: 65,
      cpu: 78,
      uptime: '99.7%',
      lastCheck: '1 min ago'
    }
  ];

  useEffect(() => {
    // Replace with actual API call
    setServers(mockServers);
  }, []);

  const getStatusColor = (value, threshold) => {
    if (value >= threshold) return 'text-red-500';
    if (value >= threshold - 10) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Server className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Servers</p>
              <h3 className="text-2xl font-bold">{servers.length}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Check className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Healthy Servers</p>
              <h3 className="text-2xl font-bold">
                {servers.filter(s => s.status === 'healthy').length}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertTriangle className="text-yellow-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Warnings</p>
              <h3 className="text-2xl font-bold">
                {servers.filter(s => s.status === 'warning').length}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Activity className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg Uptime</p>
              <h3 className="text-2xl font-bold">99.8%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Settings */}
      {/* <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Alert Settings</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Notification Methods</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <Mail size={16} className="text-gray-500" />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <MessageSquare size={16} className="text-gray-500" />
                  <span>SMS Alerts</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <Phone size={16} className="text-gray-500" />
                  <span>Phone Calls (Critical)</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Resource Thresholds</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Memory Usage Alert (%)</label>
                  <input 
                    type="number" 
                    value={thresholds.memory}
                    onChange={(e) => setThresholds({...thresholds, memory: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Storage Usage Alert (%)</label>
                  <input 
                    type="number"
                    value={thresholds.storage}
                    onChange={(e) => setThresholds({...thresholds, storage: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">CPU Usage Alert (%)</label>
                  <input 
                    type="number"
                    value={thresholds.cpu}
                    onChange={(e) => setThresholds({...thresholds, cpu: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Server List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Servers Overview</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {servers.map(server => (
              <div 
                key={server.id}
                className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer"
                onClick={() => setSelectedServer(server)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Server size={20} className={getStatusColor(server.memory, thresholds.memory)} />
                    <div>
                      <h3 className="font-medium">{server.name}</h3>
                      <p className="text-sm text-gray-500">Last checked: {server.lastCheck}</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <div>
                      <p className="text-gray-500">Memory</p>
                      <p className={getStatusColor(server.memory, thresholds.memory)}>
                        {server.memory}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Storage</p>
                      <p className={getStatusColor(server.storage, thresholds.storage)}>
                        {server.storage}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">CPU</p>
                      <p className={getStatusColor(server.cpu, thresholds.cpu)}>
                        {server.cpu}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Uptime</p>
                      <p className="text-green-500">{server.uptime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>Applifyz Monitor - Designed and Developed by Eshan Adithaya</p>
        <p>Contact: eshangunathilaka10@gmail.com</p>
      </div>
    </div>
  );
};

export default HomePage;