# Live Back

Backend para aplicação de mensagens em tempo real com autenticação GitHub.

## 🚀 Tecnologias

- **TypeScript** - Linguagem tipada
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **Socket.io** - Comunicação em tempo real
- **JWT** - Autenticação
- **GitHub OAuth** - Autenticação social

## 📋 Pré-requisitos

- Node.js (v14+)
- Yarn ou npm
- PostgreSQL (ou banco de dados configurado no Prisma)

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ronaldornd/Live-back.git
cd Live-back
```

2. Instale as dependências:
```bash
yarn install
# ou
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite .env com suas credenciais do GitHub OAuth e JWT_SECRET
```

4. Configure o banco de dados:
```bash
yarn prisma migrate dev
# ou
npx prisma migrate dev
```

## 🏃 Executando

Para desenvolvimento com hot reload:
```bash
yarn dev
# ou
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 📝 Estrutura do Projeto

```
src/
├── controller/      # Controladores da aplicação
├── middleware/      # Middlewares Express
├── services/        # Lógica de negócio
├── prisma/         # Configuração do Prisma
├── app.ts          # Configuração da app Express
├── routes.ts       # Definição de rotas
└── server.ts       # Inicialização do servidor
```

## 🔐 Variáveis de Ambiente

Veja [.env.example](.env.example) para a lista completa de variáveis necessárias.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

[ronaldornd](https://github.com/ronaldornd)
