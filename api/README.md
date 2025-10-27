# 📧 API de Email - Bike Anjo

API flexível para envio de emails com templates personalizáveis.

## 🚀 Instalação

```bash
cd api
npm install
```

## ▶️ Executar

```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## 📡 Endpoints

### POST `/api/send-email`

Envia email usando template personalizado.

**Body:**

```json
{
  "to": "contato@bikeanjo.org",
  "subject": "Novo contato via site",
  "template": "contato",
  "data": {
    "nome": "João Silva",
    "email": "joao@email.com",
    "telefone": "(11) 99999-9999",
    "assunto": "Dúvida sobre voluntariado",
    "mensagem": "Gostaria de saber como me tornar voluntário...",
    "data": "02/10/2025"
  }
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email enviado com sucesso",
  "result": {
    "messageId": "<message-id>",
    "accepted": ["contato@bikeanjo.org"],
    "rejected": []
  }
}
```

### GET `/api/health`

Verifica se a API está funcionando.

## 🔐 Autenticação

Todos os endpoints de envio de email requerem autenticação via API Key no header:

```bash
x-api-key: YOUR_API_KEY
```

**Exemplo com curl:**

```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"to":"contato@bikeanjo.org","subject":"Test","template":"contato","data":{}}'
```

## 📁 Estrutura

```
api/
├── server.js              # Servidor principal
├── services/
│   └── emailService.js    # Serviço de email com Nodemailer
├── templates/
│   └── contato.html       # Template de contato
├── logs/
│   └── emails.json        # Registro de emails enviados (auto-gerado)
└── package.json           # Dependências
```

## 📊 Sistema de Logs

Todos os emails enviados são registrados automaticamente em `logs/emails.json`:

### Estrutura do Log:

```json
[
  {
    "timestamp": "2025-10-09T21:30:00.000Z",
    "status": "success",
    "to": "contato@bikeanjo.org",
    "subject": "Novo contato via site",
    "template": "contato",
    "data": {
      "nome": "João Silva",
      "email": "joao@email.com",
      "mensagem": "..."
    },
    "result": {
      "messageId": "<abc123@smtp.gmail.com>",
      "accepted": ["contato@bikeanjo.org"],
      "rejected": []
    },
    "error": null
  }
]
```

### Características:

- ✅ **Auto-gerenciado**: Criado automaticamente no primeiro envio
- ✅ **Limitado**: Mantém apenas os últimos 1000 registros
- ✅ **Persistente**: Arquivo real no host (não virtualizado no container)
- ✅ **Rastreável**: Registra sucessos e falhas
- 🔒 **Gitignored**: Logs não são commitados

## 🎨 Templates

Templates HTML com variáveis `{{variavel}}` que são substituídas pelos dados enviados.

**Exemplo de template:**

```html
<h1>Olá {{nome}}!</h1>
<p>Seu email: {{email}}</p>
```

## 🔧 Configuração

### Email SMTP

Configurações em `services/emailService.js`:

- **Host:** smtp.gmail.com
- **Porta:** 587 (TLS)
- **From:** Equipe Bike Anjo <noreply@bikeanjo.org>

### Variáveis de Ambiente (Recomendado)

Para maior segurança em produção, recomenda-se usar variáveis de ambiente:

```bash
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
API_KEY=sua-api-key-segura
PORT=3000
```

**Nota:** As credenciais SMTP devem ser mantidas privadas e não devem ser commitadas no repositório.
