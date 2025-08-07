# Marketplace Inteligente

Backend de uma aplicação de marketplace com funcionalidades de IA para catálogo, carrinho de compras e chat inteligente.

## 🚀 Tecnologias

- **Framework**: NestJS 11
- **Linguagem**: TypeScript
- **Banco de Dados**: PostgreSQL
- **IA/LLM**: OpenAI GPT e Google Gemini
- **Validação**: Zod
- **Testes**: Jest

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta na OpenAI (opcional)
- Conta no Google AI Studio (opcional)

## ⚙️ Configuração

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd backend
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto:

```env
# Servidor
PORT=3000

# PostgreSQL
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=marketplace

# LLM Provider (openai ou gemini)
LLM_PROVIDER=openai

# OpenAI (se usar OpenAI)
OPENAI_API_KEY=sua_chave_openai

# Google AI (se usar Gemini)
GOOGLE_AI_API_KEY=sua_chave_google_ai
```

4. **Configure o banco de dados**

```bash
# Crie o banco de dados
createdb marketplace
```

## 🏃‍♂️ Executando o projeto

**Desenvolvimento:**

```bash
npm run start:dev
```

**Produção:**

```bash
npm run build
npm run start:prod
```

**Testes:**

```bash
npm run test
npm run test:e2e
```

## 📁 Estrutura do Projeto

```
src/
├── cart/           # Módulo do carrinho de compras
├── catalog/        # Módulo do catálogo
├── chat/           # Módulo de chat inteligente
├── shared/         # Serviços compartilhados
│   ├── llm/        # Integração com LLMs
│   └── postgres.service.ts
├── middlewares/    # Middlewares customizados
└── webhooks.controller.ts
```

## 🔧 Padrões Utilizados

- **Arquitetura Modular**: NestJS com módulos independentes
- **Injeção de Dependência**: Serviços injetáveis
- **Factory Pattern**: Seleção dinâmica de provedores LLM
- **Middleware Pattern**: Processamento de requisições
- **Repository Pattern**: Acesso a dados via PostgresService

## 🌐 Endpoints Principais

- `/catalog` - Gerenciamento do catálogo
- `/cart` - Operações do carrinho
- `/chat` - Chat inteligente
- `/webhooks/openai` - Webhooks para OpenAI

## 📝 Scripts Disponíveis

- `npm run start:dev` - Desenvolvimento com hot reload
- `npm run build` - Build para produção
- `npm run test` - Executar testes unitários
- `npm run test:e2e` - Executar testes end-to-end
- `npm run lint` - Verificar código com ESLint
- `npm run format` - Formatar código com Prettier
