// Tipos de usuário
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'manager' | 'employee';
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de agendamento
export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  date: Date;
  duration: number; // em minutos
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de produto
export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  cost: number;
  stock: number;
  category: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de venda
export interface Sale {
  id: string;
  clientName: string;
  items: SaleItem[];
  total: number;
  paymentMethod: 'cash' | 'credit' | 'debit' | 'pix';
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Tipos de empresa
export interface Company {
  id: string;
  name: string;
  cnpj: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  theme: 'light' | 'dark';
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de dashboard
export interface DashboardStats {
  totalAppointments: number;
  totalSales: number;
  totalRevenue: number;
  pendingAppointments: number;
  lowStockProducts: number;
}

// Tipos de tema
export type Theme = 'light' | 'dark' | 'system'; 