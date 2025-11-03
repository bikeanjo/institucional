# API de Email

API para envio de emails com templates.

## Setup

```bash
cd api
npm install
npm start
```

## Endpoints

### POST `/api/send-email`

**Body:**

```json
{
  "to": "contato@bikeanjo.org",
  "subject": "Assunto",
  "template": "contato",
  "data": { "nome": "...", "email": "...", "mensagem": "..." }
}
```

**Headers:**

```
x-api-key: YOUR_API_KEY
```

### GET `/api/health`

Health check endpoint.

## Configuração

Variáveis de ambiente:

```bash
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
API_KEY=sua-api-key
PORT=3000
```

Templates em `templates/`. Logs em `logs/emails.json` (gitignored).
