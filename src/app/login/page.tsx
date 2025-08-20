'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here (e.g., API call)
    // After login, you can redirect or set loading to false
    setTimeout(() => {
      setIsLoading(false);
      // router.push('/dashboard'); // Example redirect
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200">
      <div className="flex w-full max-w-lg items-center justify-center">
        <div
          className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 p-12 text-white shadow-2xl"
          style={{ minWidth: 420, background: 'rgba(31,38,135,0.90)' }}
        >
          <h1 className="mb-2 text-left text-5xl font-bold drop-shadow">
            Login
          </h1>
          <p className="mb-8 text-left text-lg drop-shadow">
            Entre com seus dados corretamente para acessar o sistema.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className="w-32 text-right text-lg font-semibold text-white"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-md border-none bg-blue-900 px-4 text-lg text-white shadow-inner focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="password"
                className="w-32 text-right text-lg font-semibold text-white"
              >
                Password:
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-md border-none bg-blue-900 px-4 text-lg text-white shadow-inner focus:ring-2 focus:ring-blue-300 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-2 text-white"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="mt-2 mb-6 flex items-center justify-between text-sm">
              <span className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 accent-blue-600"
                />
                <label htmlFor="remember" className="ml-2 text-white">
                  Remember Me
                </label>
              </span>
              <a href="#" className="text-blue-200 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 rounded-lg border border-blue-300 bg-blue-400 py-3 text-2xl font-bold text-white shadow-[0_4px_12px_0_rgba(31,38,135,0.37)] transition-all hover:bg-blue-500"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'LOGIN'}
              </button>
            </div>
          </form>
          <div className="mt-10 text-center text-base text-white">
            <p>Credenciais de demonstração:</p>
            <p className="mt-1 font-mono text-xs">admin@vitta.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
