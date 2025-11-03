<p align="center">
  <img alt="Bike Anjo" src="./docs/bikeanjo.png" width="150">
</p>

# Bike Anjo

[![Netlify Status](https://api.netlify.com/api/v1/badges/24e8262d-04a5-4bd3-a5c6-d93d156c279c/deploy-status)](https://app.netlify.com/projects/bikeanjo/deploys)

# Tecnologias

- [Vite](https://vite.dev)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

# Instalação

Instalar dependências do projeto:

```bash
npm install
```

## Testes

Instalar navegadores do Playwright:

```bash
npx playwright install
```

Instalar dependências do sistema operacional do Playwright:

```bash
sudo npx playwright install-deps
```

# Uso

Executar o projeto localmente:

```bash
npm run dev
```

## Testes

Executar testes unitários:

```bash
npm run test
```

Executar testes E2E:

```bash
npm run test:e2e
```

## Storybook

Para iniciar o Storybook e visualizar os componentes da UI em desenvolvimento, execute:

```bash
npm run storybook
```

## API & Deploy

API de email disponível no diretório `/api`.  
**Nota:** A API não funciona no Netlify - requer deploy separado em servidor.

Deploy via Docker disponível através do `deploy/start.sh`:

- `./deploy/start.sh -stage` - Testes locais
- `./deploy/start.sh -prod` - Deploy em produção (requer credenciais e acesso ao servidor)

Veja [`deploy/README.md`](deploy/README.md) para detalhes.

---

## Contato

- Website: [bikeanjo.org](https://bikeanjo.org)
- Email: contato@bikeanjo.org

## Licença

Este projeto está sob a licença [GPL-3.0](LICENSE.md).

---

## Equipe

### Design

- **Teko** - Design e identidade visual

### Desenvolvimento

- **Lucas Guima** ([@lguima](https://github.com/lguima)) - Desenvolvimento inicial
- **Sarah Yukino Nakada** ([@sarassaura](https://github.com/sarassaura)) - Desenvolvimento principal
- **Silvia Abe** ([@silviaabe](https://github.com/silviaabe)) - Layout e componentes

### Colaborações

- [@mariagmss](https://github.com/mariagmss)
- [@jamile-xavier](https://github.com/jamile-xavier)

### Coordenação

- **Julia Guzman** - Gerente de projeto
- **Ian Thomaz** ([@ianthomaz](https://github.com/ianthomaz)) - Delivery

---

<p align="center">
  Feito com ❤️ pela Associação Bike Anjo e voluntariado
</p>
