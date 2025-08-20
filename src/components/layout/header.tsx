'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/hooks/use-theme';
import { Moon, Sun, Menu, User, Bell, Settings, LogOut, Search } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/40 bg-white/80 backdrop-blur-xl px-6 dark:bg-gray-900/80">
      <div className="flex items-center gap-6">
        <Button
          variant="ghost"
          size="icon-sm"
          className="h-9 w-9 rounded-xl lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={onMenuClick}
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <div className="hidden lg:block">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Gerencie seu negócio com eficiência
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="h-9 w-64 rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-400"
          />
        </div>

        {/* Notificações */}
        <Button
          variant="ghost"
          size="icon-sm"
          className="h-9 w-9 rounded-xl relative hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500" />
          <span className="sr-only">Notificações</span>
        </Button>

        {/* Tema */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleTheme}
          className="h-9 w-9 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Avatar e Menu */}
        <div className="relative">
          <Button
            variant="ghost"
            className="relative h-9 w-9 rounded-full p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Avatar className="h-9 w-9 ring-2 ring-gray-200 dark:ring-gray-700">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Empresa Vitta</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  empresa@vitta.com
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-start px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </Button>
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-start px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Button>
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-start px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 