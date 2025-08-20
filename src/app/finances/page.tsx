import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Banknote, Receipt } from 'lucide-react';

export default function FinancesPage() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const recentTransactions = [
    {
      id: '1',
      description: 'Venda - Shampoo + Condicionador',
      amount: 84.40,
      type: 'income',
      paymentMethod: 'credit',
      date: '2024-01-15',
      time: '14:30',
    },
    {
      id: '2',
      description: 'Corte Feminino - Maria Silva',
      amount: 80.00,
      type: 'income',
      paymentMethod: 'pix',
      date: '2024-01-15',
      time: '12:00',
    },
    {
      id: '3',
      description: 'Compra de produtos - Fornecedor ABC',
      amount: 450.00,
      type: 'expense',
      paymentMethod: 'debit',
      date: '2024-01-14',
      time: '16:45',
    },
    {
      id: '4',
      description: 'Barba - João Santos',
      amount: 35.00,
      type: 'income',
      paymentMethod: 'cash',
      date: '2024-01-14',
      time: '10:30',
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
        return <DollarSign className="h-4 w-4" />;
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Finanças</h1>
            <p className="text-muted-foreground">
              Acompanhe suas receitas e despesas
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Receipt className="h-4 w-4 mr-2" />
              Relatórios
            </Button>
            <Button>
              <DollarSign className="h-4 w-4 mr-2" />
              Nova Transação
            </Button>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita do Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R$ 15.420</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Despesas do Mês</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">R$ 3.850</div>
              <p className="text-xs text-muted-foreground">
                +5% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ 11.570</div>
              <p className="text-xs text-muted-foreground">
                Margem de 75%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transações Hoje</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                R$ 1.280 em vendas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Fluxo de Caixa - Últimos 30 Dias</CardTitle>
              <CardDescription>
                Receitas vs Despesas
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Gráfico de fluxo de caixa</p>
                  <p className="text-sm">Integração com Recharts em breve</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>
                Distribuição por forma de pagamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { method: 'PIX', percentage: 45, amount: 6939 },
                  { method: 'Cartão de Crédito', percentage: 30, amount: 4626 },
                  { method: 'Dinheiro', percentage: 15, amount: 2313 },
                  { method: 'Cartão de Débito', percentage: 10, amount: 1542 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.method}</span>
                      <span className="text-sm text-muted-foreground">
                        {formatCurrency(item.amount)}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Transações Recentes</CardTitle>
            <CardDescription>
              Últimas movimentações financeiras
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${transaction.type === 'income'
                      ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                      : 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                      }`}>
                      {transaction.type === 'income' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                    </div>

                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          {getPaymentMethodIcon(transaction.paymentMethod)}
                          <span className="ml-1">
                            {getPaymentMethodText(transaction.paymentMethod)}
                          </span>
                        </span>
                        <span>
                          {transaction.date} às {transaction.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                      {transaction.type === 'income' ? '+' : '-'}
                      {formatCurrency(transaction.amount)}
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