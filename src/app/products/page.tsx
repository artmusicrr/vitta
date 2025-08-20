import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      id: '1',
      name: 'Shampoo Profissional',
      description: 'Shampoo para todos os tipos de cabelo',
      price: 45.90,
      cost: 25.00,
      stock: 15,
      category: 'Cuidados',
      isActive: true,
    },
    {
      id: '2',
      name: 'Condicionador Hidratante',
      description: 'Condicionador com óleos essenciais',
      price: 38.50,
      cost: 20.00,
      stock: 8,
      category: 'Cuidados',
      isActive: true,
    },
    {
      id: '3',
      name: 'Máscara Capilar',
      description: 'Máscara de tratamento intensivo',
      price: 65.00,
      cost: 35.00,
      stock: 3,
      category: 'Tratamentos',
      isActive: true,
    },
    {
      id: '4',
      name: 'Óleo Capilar',
      description: 'Óleo para finalização e brilho',
      price: 28.90,
      cost: 15.00,
      stock: 0,
      category: 'Finalização',
      isActive: false,
    },
  ];

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { color: 'text-red-600', text: 'Sem estoque' };
    if (stock <= 5) return { color: 'text-yellow-600', text: 'Estoque baixo' };
    return { color: 'text-green-600', text: 'Em estoque' };
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
            <p className="text-muted-foreground">
              Gerencie seu catálogo de produtos
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Produto
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ativos</CardTitle>
              <Package className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">76</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Estoque Baixo</CardTitle>
              <Package className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sem Estoque</CardTitle>
              <Package className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">5</div>
            </CardContent>
          </Card>
        </div>

        {/* Products List */}
        <Card>
          <CardHeader>
            <CardTitle>Catálogo de Produtos</CardTitle>
            <CardDescription>
              Lista de todos os produtos cadastrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => {
                const stockStatus = getStockStatus(product.stock);
                const profit = product.price - product.cost;
                const profitMargin = (profit / product.price) * 100;

                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                        <Package className="h-6 w-6 text-muted-foreground" />
                      </div>

                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">{product.name}</p>
                          {!product.isActive && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
                              Inativo
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                          <span>Categoria: {product.category}</span>
                          <span className={stockStatus.color}>
                            {stockStatus.text} ({product.stock})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(product.price)}</p>
                        <p className="text-sm text-muted-foreground">
                          Custo: {formatCurrency(product.cost)}
                        </p>
                        <p className="text-xs text-green-600">
                          Margem: {profitMargin.toFixed(1)}%
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 