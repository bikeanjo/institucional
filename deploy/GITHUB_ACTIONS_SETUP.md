# GitHub Actions Deploy Setup

Guia completo para configurar deploy automatizado via GitHub Actions usando chaves SSH dedicadas.

## Status da Configuracao

### [ x ] Chaves SSH geradas no servidor

Chaves SSH dedicadas foram geradas no servidor Linode em `/root/.ssh/github_actions_deploy`.

### [ ] Secrets configurados no GitHub

Precisa configurar os secrets abaixo no GitHub.

### [ ] Primeiro deploy testado

Após configurar os secrets, fazer um deploy de teste.

---

## Configurar Secrets no GitHub

Acesse: `Settings → Secrets and variables → Actions → New repository secret`

Adicione os seguintes secrets:

### 1. SSH_PRIVATE_KEY

**Valor**: A chave privada gerada no servidor (você já tem no output acima)

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDxkbaAM1F8LuAyruDxEtpM7+pu8tRdczU1Vz3lKLEu6gAAAJiZRvjTmUb4
0wAAAAtzc2gtZWQyNTUxOQAAACDxkbaAM1F8LuAyruDxEtpM7+pu8tRdczU1Vz3lKLEu6g
AAAEBw/wLmhU+XY8HgKP6x2Ne83FBxz/zPcsznLARWqTOxPPGRtoAzUXwu4DKu4PES2kzv
6m7y1F1zNTVXPeUosS7qAAAAFWdpdGh1Yi1hY3Rpb25zLWRlcGxveQ==
-----END OPENSSH PRIVATE KEY-----
```

**Importante**: Copie a chave completa incluindo as linhas `-----BEGIN` e `-----END`.

### 2. SSH_HOST

**Valor**: `50.116.15.169`

(Ou use o hostname se preferir: `linode-BikeAnjo-front2025`, mas o IP é mais confiável)

### 3. SSH_USER

**Valor**: `root`

### 4. DEPLOY_PATH

**Valor**: `/var/www/bikeanjo-institucional`

### 5. DOMAIN_PRIMARY

**Valor**: `2025.bikeanjo.org`

### 6. SSL_EMAIL

**Valor**: `ianthomaz@gmail.com`

---

## Como o Deploy Funciona

### Trigger Automático

- Deploy roda automaticamente em push para a branch `stage`

### Trigger Manual

- Você também pode rodar manualmente: `Actions → Deploy to Production → Run workflow`

### Processo de Deploy

1. **Checkout do código** - GitHub Actions faz checkout do código
2. **Setup SSH** - Configura chave SSH privada e testa conexão
3. **Sync files** - Sincroniza arquivos do projeto para o servidor (rsync)
4. **Copy env files** - Copia arquivos `.env.prod` se existirem localmente
5. **Build containers** - Para containers antigos e constrói novos
6. **Start containers** - Inicia containers Docker
7. **Configure Nginx** - Atualiza configuração do Nginx e recarrega
8. **Configure SSL** - Verifica/cria certificados SSL se necessário
9. **Health check** - Testa se frontend e API estão respondendo

---

## Segurança

### Chave SSH Dedicada

- Chave SSH gerada exclusivamente para GitHub Actions
- Separada da sua chave pessoal
- Pode ser revogada a qualquer momento removendo do `authorized_keys`

### Revogar Acesso

Se precisar revogar o acesso do GitHub Actions:

```bash
ssh linode-BikeAnjo-front2025
# Editar authorized_keys e remover a linha da chave github_actions_deploy
nano ~/.ssh/authorized_keys
# Remover a linha que contém "github-actions-deploy"
```

### Secrets Criptografados

- Todos os secrets são criptografados no GitHub
- Nunca aparecem em logs públicos
- Apenas workflows autorizados podem acessar

---

## Troubleshooting

### Deploy falha no SSH connection

**Erro**: `Cannot connect to server`

**Soluções**:

1. Verificar se `SSH_HOST` está correto (use IP: `50.116.15.169`)
2. Verificar se a chave privada foi copiada corretamente (incluir BEGIN/END)
3. Verificar se o servidor está acessível: `ping 50.116.15.169`

### Deploy falha no rsync

**Erro**: `rsync: connection refused`

**Soluções**:

1. Verificar permissões do diretório: `ssh linode-BikeAnjo-front2025 "ls -la /var/www/"`
2. Verificar se o usuário tem permissão de escrita

### Containers não iniciam

**Erro**: Containers falham ao iniciar

**Soluções**:

1. Ver logs: `ssh linode-BikeAnjo-front2025 "cd /var/www/bikeanjo-institucional/deploy && docker compose logs"`
2. Verificar se `.env.prod` existe no servidor
3. Verificar variáveis de ambiente no `.env.prod`

### SSL Certificate falha

**Erro**: Certbot não consegue obter certificado

**Soluções**:

1. Verificar se DNS aponta para o servidor: `nslookup 2025.bikeanjo.org`
2. Verificar se porta 80 está acessível
3. O workflow continua mesmo se SSL falhar (certificado pode já existir)

---

## Testar Deploy Manualmente

Para testar antes de fazer push:

1. **Testar SSH localmente**:

```bash
ssh linode-BikeAnjo-front2025 "echo 'SSH OK'"
```

2. **Fazer deploy manual local**:

```bash
cd deploy
./start.sh -prod
```

3. **Testar workflow manual no GitHub**:

- Vá em `Actions → Deploy to Production`
- Clique em `Run workflow`
- Selecione a branch e clique em `Run workflow`

---

## Monitorar Deploys

### Ver logs do workflow

- `Actions` tab no GitHub mostra histórico de deploys
- Clique em um workflow para ver logs detalhados

### Ver logs no servidor

```bash
ssh linode-BikeAnjo-front2025
cd /var/www/bikeanjo-institucional/deploy
docker compose logs -f
```

---

## Próximos Passos

1. [ ] Adicionar todos os secrets no GitHub
2. [ ] Fazer push para `main` ou rodar workflow manualmente
3. [ ] Verificar se deploy funcionou
4. [ ] Testar acesso ao site: https://2025.bikeanjo.org

---

## Referências

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Deploy Guide](./DEPLOY.md) - Documentação geral de deploy
