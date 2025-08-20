export const APP_CONFIG = {
  name: 'Vitta',
  description: 'Sistema de agendamento, vendas e gestão financeira para pequenos comércios',
  version: '1.0.0',
  author: 'Vitta Team',
} as const;

export const ROUTES = {
  // Auth
  login: '/login',
  logout: '/logout',
  
  // Dashboard
  dashboard: '/dashboard',
  
  // Features
  appointments: '/appointments',
  products: '/products',
  sales: '/sales',
  finances: '/finances',
  users: '/users',
  settings: '/settings',
} as const;

export const NAVIGATION_ITEMS = [
  {
    title: 'Dashboard',
    href: ROUTES.dashboard,
    icon: 'LayoutDashboard',
    description: 'Visão geral do negócio',
  },
  {
    title: 'Agenda',
    href: ROUTES.appointments,
    icon: 'Calendar',
    description: 'Gerenciar agendamentos',
  },
  {
    title: 'Produtos',
    href: ROUTES.products,
    icon: 'Package',
    description: 'Catálogo de produtos',
  },
  {
    title: 'Vendas',
    href: ROUTES.sales,
    icon: 'ShoppingCart',
    description: 'Histórico de vendas',
  },
  {
    title: 'Finanças',
    href: ROUTES.finances,
    icon: 'DollarSign',
    description: 'Relatórios financeiros',
  },
  {
    title: 'Usuários',
    href: ROUTES.users,
    icon: 'Users',
    description: 'Gestão de usuários',
  },
  {
    title: 'Configurações',
    href: ROUTES.settings,
    icon: 'Settings',
    description: 'Configurações do sistema',
  },
] as const;

export const STATUS_OPTIONS = {
  appointment: [
    { value: 'scheduled', label: 'Agendado' },
    { value: 'confirmed', label: 'Confirmado' },
    { value: 'completed', label: 'Concluído' },
    { value: 'cancelled', label: 'Cancelado' },
  ],
  sale: [
    { value: 'pending', label: 'Pendente' },
    { value: 'completed', label: 'Concluída' },
    { value: 'cancelled', label: 'Cancelada' },
  ],
  payment: [
    { value: 'cash', label: 'Dinheiro' },
    { value: 'credit', label: 'Cartão de Crédito' },
    { value: 'debit', label: 'Cartão de Débito' },
    { value: 'pix', label: 'PIX' },
  ],
} as const; 