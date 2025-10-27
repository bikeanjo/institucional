# 🚀 Deploy Guide - BikeAnjo Institucional

## Overview

This project uses Docker Compose for deployment with separate environments for staging and production.

## Architecture

```
┌─────────────────────────────────────────┐
│           Nginx (Frontend)              │
│  - Serves React static files           │
│  - Proxies /api/* to API container     │
│  - Port 80                              │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│           API (Node.js)                 │
│  - Email service                        │
│  - Port 3000                            │
└─────────────────────────────────────────┘
```

## Prerequisites

### Local (Stage)

- Docker Desktop installed and running
- Ports 80 and 3000 available

### Production

- SSH access configured (`linode-BikeAnjo-front2025` in `~/.ssh/config`)
- Docker installed on remote server
- Appropriate permissions on remote server

## Quick Start

### Stage (Local Testing)

```bash
# From project root
./deploy/start.sh -stage

# Or from deploy directory
cd deploy
./start.sh -stage
```

### Production (Deploy to Server)

```bash
# From project root
./deploy/start.sh -prod

# Or from deploy directory
cd deploy
./start.sh -prod
```

## Environment Files

### `.env.stage` (Local)

- Local development/testing
- Runs on your machine
- Uses ports 80 and 3000

### `.env.prod` (Production)

- Remote server deployment
- SSH configuration required
- Syncs files and deploys via rsync

### `.env.example`

- Template file (safe to commit)
- Copy to create your own `.env.stage` or `.env.prod`

## Files Structure

```
.
├── deploy/                                     # All deployment files
│   ├── start.sh                                # Main deployment script
│   ├── docker-compose-bikeanjo-institucional.yml   # Container orchestration
│   ├── Dockerfile.frontend                     # Frontend build + nginx
│   ├── Dockerfile.api                          # API container
│   ├── nginx.conf                              # Nginx configuration
│   ├── .env.stage                              # Stage environment (gitignored)
│   ├── .env.prod                               # Production environment (gitignored)
│   ├── .env.example                            # Template (committed)
│   └── DEPLOY.md                               # This file
├── api/                                        # API source code
├── src/                                        # Frontend source code
└── package.json                                # Project dependencies
```

## API Configuration

The API requires a `.env` file in the `api/` directory:

```bash
# Use production credentials
cp api/.env.prod api/.env

# Or for local testing
cp api/.env.example api/.env
```

## Commands

### Start Stage

```bash
cd deploy
./start.sh -stage
# Frontend: http://localhost
# API: http://localhost:3000
```

### Start Production

```bash
cd deploy
./start.sh -prod
# Deploys to configured server
```

### Stop Containers (Local)

```bash
cd deploy
docker-compose -f docker-compose-bikeanjo-institucional.yml down
```

### View Logs (Local)

```bash
cd deploy
docker-compose -f docker-compose-bikeanjo-institucional.yml logs -f
```

### Rebuild Containers

```bash
cd deploy
docker-compose -f docker-compose-bikeanjo-institucional.yml up --build -d
```

## Production Deployment Process

When running `./start.sh -prod`:

1. ✅ Validates SSH connection
2. 📁 Creates remote directory
3. 📤 Syncs files (excludes node_modules, .git, etc)
4. 🔐 Copies production .env
5. 🐳 Stops existing containers
6. 🏗️ Builds new containers
7. 🚀 Starts containers
8. ✅ Shows status

## Troubleshooting

### Port Already in Use (Local)

```bash
# Check what's using port 80
lsof -i :80

# Check what's using port 3000
lsof -i :3000
```

### Docker Not Running

```bash
# Start Docker Desktop
open -a Docker
```

### SSH Connection Failed

```bash
# Test SSH connection
ssh linode-BikeAnjo-front2025 "echo 'OK'"
```

### View Container Logs

```bash
# All containers
docker-compose -f docker-compose-bikeanjo-institucional.yml logs

# Specific container
docker logs bikeanjo-frontend-stage
docker logs bikeanjo-api-stage
```

## Development Workflow

### For Frontend Developers (Netlify)

- Continue using `npm run dev` for local development
- Push to `main` branch → Netlify auto-deploys
- Docker Compose is optional, used only for server deployment

### For Server Deployment (You)

1. Test locally: `./start.sh -stage`
2. If everything works: `./start.sh -prod`
3. Monitor logs on server

## Notes

- **Netlify**: Uses `npm run build`, ignores Docker files
- **Server**: Uses Docker Compose for containerized deployment
- **Local Dev**: Can use either `npm run dev` or Docker
- **API**: Runs only in Docker (not on Netlify)

## Security

- ✅ `.env` files are gitignored
- ✅ API credentials in `api/.env` (gitignored)
- ✅ Only `.env.example` is committed
- ✅ Production credentials stay on server

---

**Need help?** Check the [main README](README.md) or ask Ian.
