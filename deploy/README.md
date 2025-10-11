# 🚀 Deploy - BikeAnjo Institucional

Quick deployment guide. For full documentation, see [DEPLOY.md](DEPLOY.md).

## Quick Start

```bash
# Stage (local)
./start.sh -stage

# Production (server)
./start.sh -prod
```

## Requirements

- Docker Desktop (for local)
- SSH access configured (for production)
- API `.env` configured (`../api/.env`)

## What's Here

- `start.sh` - Main deployment script
- `docker-compose-bikeanjo-institucional.yml` - Container configuration
- `Dockerfile.frontend` - React + Nginx
- `Dockerfile.api` - Node.js API
- `nginx.conf` - Web server config
- `.env.stage` / `.env.prod` - Environment variables

## First Time Setup

1. Configure API environment:
   ```bash
   cp ../api/.env.example ../api/.env
   # Edit ../api/.env with credentials
   ```

2. Run locally:
   ```bash
   ./start.sh -stage
   ```

3. Access:
   - Frontend: http://localhost
   - API: http://localhost:3000

## Full Documentation

See [DEPLOY.md](DEPLOY.md) for complete documentation.

