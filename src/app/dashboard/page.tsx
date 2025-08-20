import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard } from '@/components/ui/metric-card';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  DollarSign,
  Package,
  Users,
  TrendingUp,
  Clock,
  Plus,
  ArrowUpRight,
  Activity,
  BarChart3,
  Target
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Dashboard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              Visão geral do seu negócio em tempo real
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
            <Plus className="h-4 w-4" />
            Nova Venda
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Agendamentos Hoje"
            value="12"
            description="+2 em relação a ontem"
            icon={Calendar}
            trend={{ value: 20, isPositive: true }}
            variant="info"
          />

          <MetricCard
            title="Receita do Mês"
            value="R$ 15.420"
            description="+12% em relação ao mês passado"
            icon={DollarSign}
            trend={{ value: 12, isPositive: true }}
            variant="success"
          />

          <MetricCard
            title="Produtos em Estoque"
            value="89"
            description="5 produtos com estoque baixo"
            icon={Package}
            trend={{ value: -3, isPositive: false }}
            variant="warning"
          />

          <MetricCard
            title="Clientes Ativos"
            value="1.234"
            description="+8 novos este mês"
            icon={Users}
            trend={{ value: 8, isPositive: true }}
            variant="default"
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Receita dos Últimos 7 Dias
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Gráfico de receita diária
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                Ver Detalhes
                <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50/50 dark:bg-gray-800/50">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
                  <p className="font-semibold text-gray-600 dark:text-gray-400">Gráfico de receita</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Integração com Recharts em breve</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-0 shadow-lg">
            <CardHeader className="border-b border-gray-100 dark:border-gray-800">
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                Próximos Agendamentos
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Hoje e amanhã
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { time: '09:00', client: 'Maria Silva', service: 'Corte Feminino', status: 'confirmed' },
                  { time: '10:30', client: 'João Santos', service: 'Barba', status: 'scheduled' },
                  { time: '14:00', client: 'Ana Costa', service: 'Coloração', status: 'confirmed' },
                  { time: '16:30', client: 'Pedro Lima', service: 'Corte Masculino', status: 'pending' },
                ].map((appointment, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50">
                        <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{appointment.time}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{appointment.service}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{appointment.client}</p>
                    </div>
                    <div className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${appointment.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400' : ''}
                      ${appointment.status === 'scheduled' ? 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-400' : ''}
                      ${appointment.status === 'pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400' : ''}
                    `}>
                      {appointment.status === 'confirmed' ? 'Confirmado' : ''}
                      {appointment.status === 'scheduled' ? 'Agendado' : ''}
                      {appointment.status === 'pending' ? 'Pendente' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Atividade Recente
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Últimas ações no sistema
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                Ver Todas
                <ArrowUpRight className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { action: 'Novo agendamento criado', time: '2 min atrás', user: 'Sistema', type: 'appointment' },
                { action: 'Venda realizada - R$ 120,00', time: '15 min atrás', user: 'João', type: 'sale' },
                { action: 'Produto adicionado ao estoque', time: '1 hora atrás', user: 'Maria', type: 'product' },
                { action: 'Cliente cadastrado', time: '2 horas atrás', user: 'Sistema', type: 'user' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/50">
                    <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time} • {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 