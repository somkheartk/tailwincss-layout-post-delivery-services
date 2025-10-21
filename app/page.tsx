'use client';

import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import TrackingSection from '@/components/TrackingSection';
import ServicesSection from '@/components/ServicesSection';
import OrderList from '@/components/OrderList';
import Footer from '@/components/Footer';
import { Language, getTranslation } from '@/locales/translations';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'tracking' | 'orders'>('tracking');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('th');
  const [role, setRole] = useState<string>('customer');

  const t = getTranslation(language);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Header 
        onMenuClick={handleSidebarToggle}
        language={language}
        onLanguageChange={handleLanguageChange}
        role={role}
        onRoleChange={handleRoleChange}
        t={t}
      />
      
      {/* Mobile Sidebar */}
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        language={language}
        t={t}
        isMobile={true}
      />
      
      {/* Desktop Sidebar */}
      <Sidebar 
        open={true} 
        onClose={() => {}}
        language={language}
        t={t}
        isMobile={false}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: 'calc(100% - 260px)' },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar /> {/* Spacer for fixed header */}
        
        <Box sx={{ flex: 1, px: { xs: 2, sm: 4 }, py: 4 }}>
          {/* Tab Navigation */}
          <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <button
                onClick={() => setActiveTab('tracking')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'tracking'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t.trackingTab}
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'orders'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t.ordersTab}
              </button>
            </Box>
          </Box>

          {/* Content based on active tab */}
          {activeTab === 'tracking' ? (
            <>
              <TrackingSection language={language} t={t} />
              <ServicesSection language={language} t={t} />
            </>
          ) : (
            <OrderList />
          )}
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
