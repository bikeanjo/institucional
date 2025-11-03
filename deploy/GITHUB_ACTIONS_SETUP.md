# GitHub Actions Deploy Setup

Guia básico para configurar deploy automatizado via GitHub Actions usando chaves SSH dedicadas.

## Status da Configuracao

### [ x ] Chaves SSH geradas no servidor

Chaves SSH dedicadas foram geradas no servidor Linode.

### [ x ] Secrets configurados no GitHub

Precisa configurar os secrets no GitHub (ver instruções abaixo).

### [ x ] Primeiro deploy testado

Deploy funcionando corretamente!

---

## Configurar Secrets no GitHub

Acesse: `Settings → Secrets and variables → Actions → New repository secret`

Adicione os seguintes secrets:

### 1. SSH_PRIVATE_KEY

**Valor**: A chave privada gerada no servidor

> **Importante**: A chave privada completa deve ser copiada. Inclua as linhas `-----BEGIN OPENSSH PRIVATE KEY-----` e `-----END OPENSSH PRIVATE KEY-----`.
>
> Para obter a chave privada, você precisa:
>
> - Acessar o servidor via SSH
> - Ler o arquivo `/root/.ssh/github_actions_deploy`
> - Ou consultar a documentação completa em `/ianthomaz/notes/GITHUB_ACTIONS_SETUP-COMPLETE.md`

### 2. SSH_HOST

**Valor**: IP ou hostname do servidor (ex: `192.168.1.100` ou `servidor.exemplo.com`)

### 3. SSH_USER

**Valor**: Usuário SSH (geralmente `root`)

### 4. DEPLOY_PATH

**Valor**: Caminho no servidor onde o projeto será deployado (ex: `/var/www/bikeanjo-institucional`)

### 5. DOMAIN_PRIMARY

**Valor**: Domínio principal do site (ex: `2025.bikeanjo.org`)

### 6. SSL_EMAIL

**Valor**: Email para certificados SSL do Let's Encrypt

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
- Pode ser revogada a qualquer momento

### Revogar Acesso

Para revogar o acesso do GitHub Actions, remova a chave pública do arquivo `authorized_keys` no servidor.

### Secrets Criptografados

- Todos os secrets são criptografados no GitHub
- Nunca aparecem em logs públicos
- Apenas workflows autorizados podem acessar

---

## Troubleshooting

### Deploy falha no SSH connection

**Soluções**:

1. Verificar se `SSH_HOST` está correto
2. Verificar se a chave privada foi copiada corretamente (incluir BEGIN/END)
3. Verificar se o servidor está acessível

### Containers não iniciam

**Soluções**:

1. Ver logs no servidor: `ssh SERVER "cd DEPLOY_PATH/deploy && docker compose logs"`
2. Verificar se `.env.prod` existe no servidor
3. Verificar variáveis de ambiente no `.env.prod`

---

## Documentação Completa

Para informações detalhadas, incluindo valores específicos de configuração, consulte:

- `/ianthomaz/notes/GITHUB_ACTIONS_SETUP-COMPLETE.md` (arquivo privado, gitignored)
- `/ianthomaz/notes/DEPLOY-COMPLETE.md` - Documentação completa de deploy (privado, gitignored)

---

## Referências

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
