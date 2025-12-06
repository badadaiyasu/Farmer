// src/components/buyer/BuyerDashboardLayout.tsx
import React from 'react';

interface BuyerDashboardLayoutProps {
  children: React.ReactNode;
}

export default function BuyerDashboardLayout({ children }: BuyerDashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add buyer-specific header, navigation, etc. */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold">Buyer Dashboard</h1>
        </div>
      </nav>
      <main className="py-6">{children}</main>
    </div>
  );
}