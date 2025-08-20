import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Eye, Receipt, CreditCard, Banknote } from 'lucide-react';

export default function SalesPage() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const sales = [
    {
      id: '1',
      clientName: 'Maria Silva',
      items: [
        { name: 'Shampoo Profissional', quantity: 1, price: 45.90 },
        { name: 'Condicionador Hidratante', quantity: 1, price: 38.50 },
      ],
      total: 84.40,
      paymentMethod: 'credit',
      status: 'completed',
      date: '2024-01-15',
      time: '14:30',
    },
    {
      id: '2',
      clientName: 'João Santos',
      items: [
        { name: 'Máscara Capilar', quantity: 1, price: 65.00 },
      ],
      total: 65.00,
      paymentMethod: 'pix',
      status: 'completed',
      date: '2024-01-15',
      time: '12:00',
    },
    {
      id: '3',
      clientName: 'Ana Costa',
      items: [
        { name: 'Óleo Capilar', quantity: 2, price: 28.90 },
        { name: 'Shampoo Profissional', quantity: 1, price: 45.90 },
      ],
      total: 103.70,
      paymentMethod: 'cash',
      status: 'pending',
      date: '2024-01-14',
      time: '16:45',
    },
  ];

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'credit':
        return <CreditCard className="h-4 w-4" />;
      case 'debit':
        return <CreditCard className="h-4 w-4" />;
      case 'cash':
        return <Banknote className="h-4 w-4" />;
      case 'pix':
        return <Receipt className="h-4 w-4" />;
      default:
        return <ShoppingCart className="h-4 w-4" />;
    }
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'credit':
        return 'Cartão de Crédito';
      case 'debit':
        return 'Cartão de Débito';
      case 'cash':
        return 'Dinheiro';
      case 'pix':
        return 'PIX';
      default:
        return method;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluída';
      case 'pending':
        return 'Pendente';
      case 'cancelled':
        return 'Cancelada';
      default:
        return status;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Vendas</h1>
            <p className="text-muted-foreground">
              Histórico e gestão de vendas
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Venda
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                R$ 1.280 em vendas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vendas do Mês</CardTitle>
              <ShoppingCart className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">156</div>
              <p className="text-xs text-muted-foreground">
                R$ 8.420 em vendas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <Receipt className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ 54</div>
              <p className="text-xs text-muted-foreground">
                Por venda
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
              <ShoppingCart className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">3</div>
              <p className="text-xs text-muted-foreground">
                Aguardando pagamento
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sales List */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Vendas</CardTitle>
            <CardDescription>
              Lista de todas as vendas realizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sales.map((sale) => (
                <div
                  key={sale.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                      <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">Venda #{sale.id}</p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            sale.status
                          )}`}
                        >
                          {getStatusText(sale.status)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{sale.clientName}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center">
                          {getPaymentMethodIcon(sale.paymentMethod)}
                          <span className="ml-1">
                            {getPaymentMethodText(sale.paymentMethod)}
                          </span>
                        </span>
                        <span>
                          {sale.date} às {sale.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(sale.total)}</p>
                      <p className="text-sm text-muted-foreground">
                        {sale.items.length} item{sale.items.length > 1 ? 's' : ''}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {sale.items.map((item, index) => (
                          <span key={index}>
                            {item.quantity}x {item.name}
                            {index < sale.items.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Receipt className="h-4 w-4" />
                      </Button>
                    </div>
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