import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import ServerDashboard from './pages/ServerDashboard';
import NotificationCenter from './pages/NotificationCenter';
import ServerSettings from './pages/ServerSettings';
import SettingsPage from './pages/SettingsPage';
import Layout from './components/layout/Layout.js';
import HomePage from './pages/HomePage.js';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Dashboard - Home Page */}
          <Route path="/" element={<AppLayout />} />
          
          {/* Server Monitoring Routes */}
          <Route path="/servers" element={<ServerDashboard />} />
          <Route path="/servers/settings" element={<ServerSettings />} />
          
          {/* Notification Routes */}
          <Route path="/notifications" element={<NotificationCenter />} />
          
          {/* Settings Routes */}
          <Route path="/settings" element={<SettingsPage />} />
          
          {/* Layout Test Route */}
          <Route path="/layout" element={<AppLayout />} />
          
          {/* 404 Route */}
          <Route 
            path="*" 
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                  <p className="text-gray-600">Page not found</p>
                </div>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;