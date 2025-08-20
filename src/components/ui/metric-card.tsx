import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning' | 'info' | 'destructive';
  className?: string;
}

const variantStyles = {
  default: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
  success: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
  warning: 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30',
  info: 'bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30',
  destructive: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30',
};

const iconColors = {
  default: 'text-blue-600 dark:text-blue-400',
  success: 'text-emerald-600 dark:text-emerald-400',
  warning: 'text-amber-600 dark:text-amber-400',
  info: 'text-sky-600 dark:text-sky-400',
  destructive: 'text-red-600 dark:text-red-400',
};

const iconBgColors = {
  default: 'bg-blue-100 dark:bg-blue-900/50',
  success: 'bg-emerald-100 dark:bg-emerald-900/50',
  warning: 'bg-amber-100 dark:bg-amber-900/50',
  info: 'bg-sky-100 dark:bg-sky-900/50',
  destructive: 'bg-red-100 dark:bg-red-900/50',
};

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = 'default',
  className,
}: MetricCardProps) {
  return (
    <Card className={cn('overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift', className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <div className="flex items-baseline space-x-3">
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</p>
              {trend && (
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                    trend.isPositive
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400'
                  )}
                >
                  {trend.isPositive ? '↗' : '↘'} {trend.value}%
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
            )}
          </div>
          {Icon && (
            <div className={cn('p-4 rounded-2xl', variantStyles[variant])}>
              <div className={cn('p-3 rounded-xl', iconBgColors[variant])}>
                <Icon className={cn('h-6 w-6', iconColors[variant])} />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 