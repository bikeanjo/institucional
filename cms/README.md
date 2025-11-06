# CMS Standalone

CMS minimalista para gerenciar arquivos JSON do site.

## Quick Start

```bash
cd cms
npm install
cp .env.example .env
npm start
```

Acesse: `http://localhost:3002/admin`

## Configuração

Edite `.env`:

- `ADMIN_PASSWORD`: Senha de acesso
- `CONTENT_DIR`: Caminho dos JSONs (padrão: `../public/data`)
- `PORT`: Porta do servidor (padrão: 3002)

## Estrutura

- `server.js` - API Node.js
- `admin.html` - Interface web
- Autenticação via senha única (JWT, sessão 24h)
