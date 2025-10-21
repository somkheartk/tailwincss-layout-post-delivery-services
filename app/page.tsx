'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import TrackingSection from '@/components/TrackingSection';
import ServicesSection from '@/components/ServicesSection';
import OrderList from '@/components/OrderList';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'tracking' | 'orders'>('tracking');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('tracking')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tracking'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Track Shipment
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'orders'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Orders
            </button>
          </nav>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'tracking' ? (
          <>
            <TrackingSection />
            <ServicesSection />
          </>
        ) : (
          <OrderList />
        )}
      </main>

      <Footer />
    </div>
  );
}
