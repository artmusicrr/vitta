import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: {
    key: string;
    title: string;
    render?: (item: T) => React.ReactNode;
    sortable?: boolean;
  }[];
  title?: string;
  description?: string;
  searchable?: boolean;
  filterable?: boolean;
  actions?: React.ReactNode;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  title,
  description,
  searchable = false,
  filterable = false,
  actions,
  className,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredData = React.useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  return (
    <Card className={cn('overflow-hidden', className)}>
      {(title || searchable || filterable || actions) && (
        <CardHeader className="border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {title && <CardTitle>{title}</CardTitle>}
              {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {searchable && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
              )}
              {filterable && (
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
              )}
              {actions}
            </div>
          </div>
        </CardHeader>
      )}

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/30">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={cn(
                      'px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider',
                      column.sortable && 'cursor-pointer hover:text-foreground transition-colors'
                    )}
                  >
                    {column.title}
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/30 transition-colors"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                      {column.render ? column.render(item) : String(item[column.key])}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredData.length === 0 && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <p className="text-muted-foreground">Nenhum resultado encontrado</p>
              {searchTerm && (
                <p className="text-sm text-muted-foreground mt-1">
                  Tente ajustar os termos de busca
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 