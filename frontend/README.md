# Marketplace Inteligente

Marketplace de supermercado com assistente de IA para receitas e comparação de preços.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **SWR** - Hooks para data fetching
- **Axios** - Cliente HTTP
- **Sonner** - Notificações toast
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── cart/           # Página do carrinho
│   ├── products/       # Página de produtos
│   └── layout.tsx      # Layout principal
├── components/         # Componentes React
│   ├── ui/            # Componentes base (shadcn/ui)
│   └── ...            # Componentes específicos
├── lib/               # Utilitários
└── types.ts           # Definições de tipos
```

## 🛠️ Setup

1. **Instalar dependências:**

```bash
npm install
# ou
pnpm install
```

2. **Executar em desenvolvimento:**

```bash
npm run dev
# ou
pnpm dev
```

3. **Acessar:**

```
http://localhost:3001
```

## ⚙️ Configurações

- **Porta:** 3001 (configurada no script dev)
- **Turbopack:** Habilitado para desenvolvimento
- **TypeScript:** Configurado com paths aliases (@/\*)
- **Tailwind:** Configurado com PostCSS
- **ESLint:** Configurado para Next.js

## 🎨 Padrões

- **App Router:** Estrutura de pastas do Next.js 15
- **Componentes:** Organizados por funcionalidade
- **Estilização:** Tailwind CSS com classes utilitárias
- **Tipagem:** TypeScript em todos os arquivos
- **Estado:** SWR para gerenciamento de estado do servidor

## 📦 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código
