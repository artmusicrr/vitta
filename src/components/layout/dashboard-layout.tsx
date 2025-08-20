'use client';

import { useState } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileClose = () => {
    setIsMobileOpen(false);
  };

  const handleMenuClick = () => {
    setIsMobileOpen(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
      <Sidebar isMobileOpen={isMobileOpen} onMobileClose={handleMobileClose} />

      <div className="flex flex-1 flex-col lg:ml-80">
        <Header onMenuClick={handleMenuClick} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="mx-auto max-w-7xl animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 