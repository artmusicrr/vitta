'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAVIGATION_ITEMS } from '@/config/constants';
import * as Icons from 'lucide-react';

interface SidebarNavProps {
  isCollapsed?: boolean;
}

export function SidebarNav({ isCollapsed = false }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {NAVIGATION_ITEMS.map((item) => {
        const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'group relative flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
              isCollapsed && 'justify-center px-3'
            )}
            title={isCollapsed ? item.title : undefined}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-blue-500 to-purple-500" />
            )}
            <Icon className={cn(
              'h-5 w-5 transition-all duration-200',
              isActive
                ? 'text-white'
                : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200'
            )} />
            {!isCollapsed && (
              <span className="truncate font-medium">{item.title}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
} 