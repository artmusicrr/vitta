'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SidebarNav } from './sidebar-nav';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Sparkles, Zap } from 'lucide-react';

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-80 border-r border-border/40 bg-white/80 backdrop-blur-xl transition-all duration-300 ease-in-out lg:translate-x-0',
          isCollapsed && 'w-20',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          'dark:bg-gray-900/80 dark:border-gray-800/40'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-border/40 px-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Vitta
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    Business Suite
                  </span>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon-sm"
              className="h-8 w-8 rounded-xl lg:flex hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleCollapse}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <SidebarNav isCollapsed={isCollapsed} />
          </div>

          {/* Footer */}
          <div className="border-t border-border/40 p-6">
            {!isCollapsed && (
              <div className="space-y-3">
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-950/50 dark:to-purple-950/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                      <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Pro Plan
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Ativo até 2025
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">
                    © 2024 Vitta. Todos os direitos reservados.
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    v1.0.0 • Beta
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
} 