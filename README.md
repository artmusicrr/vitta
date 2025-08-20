# 🚀 Vitta - Sistema de Gestão para Pequenos Comércios

Sistema completo de agendamento, vendas de produtos e painel financeiro desenvolvido com Next.js, TypeScript e TailwindCSS.

## ✨ Características

- **🎯 Dashboard Intuitivo**: Visão geral completa do negócio com métricas em tempo real
- **📅 Sistema de Agendamentos**: Gestão completa de horários e compromissos
- **🛍️ Controle de Produtos**: Catálogo com controle de estoque e preços
- **💰 Gestão Financeira**: Acompanhamento de receitas, despesas e relatórios
- **👥 Gestão de Usuários**: Controle de acesso e permissões
- **🌙 Tema Escuro/Claro**: Interface adaptável com suporte a temas
- **📱 Responsivo**: Funciona perfeitamente em desktop e mobile
- **⚡ Performance**: Otimizado com Next.js App Router

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS
- **Componentes**: shadcn/ui + Radix UI
- **Ícones**: Lucide React
- **Gráficos**: Recharts (preparado para integração)
- **Estado**: Zustand
- **Linting**: ESLint + Prettier

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas (Next.js App Router)
│   ├── login/             # Página de autenticação
│   ├── dashboard/         # Dashboard principal
│   ├── appointments/      # Gestão de agendamentos
│   ├── products/          # Catálogo de produtos
│   ├── sales/             # Histórico de vendas
│   ├── finances/          # Relatórios financeiros
│   ├── users/             # Gestão de usuários
│   └── settings/          # Configurações do sistema
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (shadcn/ui)
│   └── layout/           # Componentes de layout
├── features/             # Módulos do domínio
│   ├── agendamentos/     # Lógica de agendamentos
│   ├── produtos/         # Lógica de produtos
│   ├── financas/         # Lógica financeira
│   └── usuarios/         # Lógica de usuários
├── hooks/                # Custom hooks
├── lib/                  # Utilitários e integrações
├── services/             # Chamadas para API/backend
├── styles/               # Estilos globais
├── types/                # Definições de tipos
└── config/               # Configurações do projeto
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd vitta
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Credenciais de Demonstração

- **Email**: admin@vitta.com
- **Senha**: 123456

## 📱 Telas Disponíveis

### 🔐 Login
- Autenticação com mock
- Interface limpa e responsiva
- Suporte a tema escuro/claro

### 📊 Dashboard
- Cards com métricas principais
- Gráficos (preparado para Recharts)
- Lista de próximos agendamentos
- Atividade recente

### 📅 Agenda
- Lista de agendamentos do dia
- Filtros por status
- Estatísticas rápidas
- Ações de edição e detalhes

### 🛍️ Produtos
- Catálogo completo
- Controle de estoque
- Cálculo de margem de lucro
- Status ativo/inativo

### 💰 Finanças
- Resumo de receitas e despesas
- Gráficos de fluxo de caixa
- Distribuição por método de pagamento
- Histórico de transações

### 👥 Usuários
- Gestão de funcionários
- Níveis de acesso (Admin/Gerente/Funcionário)
- Status ativo/inativo
- Histórico de login

### ⚙️ Configurações
- Perfil da empresa
- Configurações do sistema
- Backup e segurança
- Notificações

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Paleta personalizada com suporte a tema escuro
- **Tipografia**: Inter como fonte principal
- **Componentes**: shadcn/ui para consistência
- **Espaçamento**: Sistema de grid responsivo
- **Ícones**: Lucide React para uniformidade

## 🔧 Configurações

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_APP_NAME=Vitta
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run format       # Formatação automática
```

## 🚀 Próximos Passos

- [ ] Integração com banco de dados
- [ ] Autenticação real (NextAuth)
- [ ] Gráficos com Recharts
- [ ] Notificações push
- [ ] API REST completa
- [ ] Testes automatizados
- [ ] Deploy em produção

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

**Vitta Team** - Sistema de gestão para pequenos comércios

---

⭐ Se este projeto te ajudou, deixe uma estrela!
# vitta
