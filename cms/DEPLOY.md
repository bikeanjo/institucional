# CMS - Bike Anjo Institucional

## Deploy

### Automático (GitHub Actions)

Os arquivos do CMS são copiados automaticamente para o servidor via rsync quando há push na branch `stage`.

Localização no servidor: `${DEPLOY_PATH}/cms/`

### Inicialização Manual

O CMS NÃO inicia automaticamente por questões de segurança.
Para usar o CMS, conecte-se ao servidor e inicie manualmente:

```bash
# Conectar ao servidor
ssh usuario@servidor

# Navegar até a pasta do CMS
cd /caminho/do/projeto/cms

# Instalar dependências (primeira vez ou após atualizações)
npm install

# Iniciar o CMS
npm start
# Servidor rodará em http://localhost:3002

# Para rodar em background
nohup npm start > cms.log 2>&1 &
```

### Parar o CMS

```bash
# Encontrar e matar o processo
lsof -ti:3002 | xargs kill

# Ou manualmente
ps aux | grep "node.*server.js"
kill [PID]
```

## Acesso

- URL: http://localhost:3002/admin (apenas no servidor)
- Senhas: "admin123" ou "ian"

## Segurança

Por que não está no docker-compose:

- Autenticação básica (JWT simples)
- Sem rate limiting
- Sem HTTPS obrigatório
- Sem whitelist de IPs
- Sem logs de auditoria completos

Melhorias pendentes antes de expor publicamente:

- [ ] Autenticação robusta
- [ ] Rate limiting
- [ ] HTTPS obrigatório
- [ ] Whitelist de IPs
- [ ] Logs de auditoria
- [ ] Backup automático antes de salvar


