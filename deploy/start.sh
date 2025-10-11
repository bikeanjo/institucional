#!/bin/bash

# BikeAnjo Institucional - Deploy Script
# Usage: ./start.sh -stage | ./start.sh -prod

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Validate arguments
if [ $# -eq 0 ]; then
    print_error "No environment specified"
    echo "Usage: ./start.sh -stage | ./start.sh -prod"
    exit 1
fi

ENV_ARG=$1
ENV_FILE=""
DEPLOY_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$DEPLOY_DIR")"
COMPOSE_FILE="docker-compose-bikeanjo-institucional.yml"

# Determine environment
case $ENV_ARG in
    -stage)
        ENV_FILE="$DEPLOY_DIR/.env.stage"
        print_info "Starting in STAGE environment (local)"
        ;;
    -prod)
        ENV_FILE="$DEPLOY_DIR/.env.prod"
        print_info "Starting in PRODUCTION environment (server)"
        ;;
    *)
        print_error "Invalid environment: $ENV_ARG"
        echo "Usage: ./start.sh -stage | ./start.sh -prod"
        exit 1
        ;;
esac

# Check if env file exists
if [ ! -f "$ENV_FILE" ]; then
    print_error "Environment file not found: $ENV_FILE"
    exit 1
fi

# Load environment variables
print_info "Loading environment from $ENV_FILE"
source $ENV_FILE

# Export variables for docker-compose
export ENV
export FRONTEND_PORT
export API_PORT
export FRONTEND_BIND
export API_BIND

# Check if deploying locally or remotely
if [ "$DEPLOY_LOCAL" = "true" ]; then
    # Local deployment (stage)
    print_info "Deploying locally on this machine"
    
    # Check if Docker is running
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
    
    # Change to deploy directory
    cd "$DEPLOY_DIR"
    
    # Stop existing containers
    print_info "Stopping existing containers..."
    docker compose -f $COMPOSE_FILE down 2>/dev/null || true
    echo "  ✓ Containers stopped"
    
    # Build and start containers
    print_info "Building and starting containers..."
    echo "  → Building API container..."
    docker compose -f $COMPOSE_FILE build api
    
    echo "  → Building Frontend container (this may take a while)..."
    docker compose -f $COMPOSE_FILE build frontend
    
    echo "  → Starting containers..."
    docker compose -f $COMPOSE_FILE up -d
    
    echo "  → Waiting for containers to be healthy..."
    sleep 3
    
    echo ""
    echo "=== Container Status ==="
    docker compose -f $COMPOSE_FILE ps
    
    echo ""
    print_info "✓ Deployment complete!"
    print_info "Frontend: http://localhost:${FRONTEND_PORT}"
    print_info "API: http://localhost:${API_PORT}"
    print_info "API Health: http://localhost:${API_PORT}/api/health"
    
    # Show logs
    echo ""
    print_info "Showing logs (Ctrl+C to exit)..."
    docker compose -f $COMPOSE_FILE logs -f
    
else
    # Remote deployment (production)
    print_info "Deploying to remote server: $DEPLOY_HOST"
    
    # Check SSH connection
    print_info "Testing SSH connection..."
    if ! ssh -o ConnectTimeout=5 $DEPLOY_HOST "echo 'SSH OK'" > /dev/null 2>&1; then
        print_error "Cannot connect to $DEPLOY_HOST"
        exit 1
    fi
    
    print_info "✓ SSH connection successful"
    
    # Create remote directory if it doesn't exist
    print_info "Preparing remote directory..."
    ssh $DEPLOY_HOST "mkdir -p $DEPLOY_PATH"
    
    # Change to project root for syncing
    cd "$PROJECT_ROOT"
    
    # Sync files to server (excluding node_modules, dist, etc)
    print_info "Syncing files to server..."
    echo "  → Transferring project files..."
    rsync -avz --delete \
        --progress \
        --exclude 'node_modules' \
        --exclude 'dist' \
        --exclude '.git' \
        --exclude 'ianthomaz' \
        --exclude '.env' \
        --exclude '.env.stage' \
        --exclude '.DS_Store' \
        ./ $DEPLOY_HOST:$DEPLOY_PATH/ | grep -E '(sending|sent|received|total size)'
    echo "  ✓ Files synced"
    
    # Copy production .env file
    print_info "Copying production environment file..."
    scp api/.env.prod $DEPLOY_HOST:$DEPLOY_PATH/api/.env
    
    # Configure Nginx + SSL on server
    print_info "Configuring Nginx and SSL..."
    ssh $DEPLOY_HOST << 'NGINX_SETUP'
        set -e
        
        echo "  → Checking nginx installation..."
        if ! command -v nginx &> /dev/null; then
            echo "  → Installing nginx..."
            apt update -qq && apt install -y nginx > /dev/null
            echo "  ✓ Nginx installed"
        else
            echo "  ✓ Nginx already installed"
        fi
        
        echo "  → Checking certbot installation..."
        if ! command -v certbot &> /dev/null; then
            echo "  → Installing certbot..."
            apt install -y certbot python3-certbot-nginx > /dev/null
            echo "  ✓ Certbot installed"
        else
            echo "  ✓ Certbot already installed"
        fi
        
        echo "  → Enabling nginx service..."
        systemctl enable nginx > /dev/null 2>&1
        systemctl start nginx > /dev/null 2>&1
        echo "  ✓ Nginx service running"
        
        echo "  → Copying nginx configuration..."
        cp /var/www/bikeanjo-institucional/deploy/nginx-host.conf /etc/nginx/sites-available/bikeanjo-institucional
        
        echo "  → Enabling site..."
        ln -sf /etc/nginx/sites-available/bikeanjo-institucional /etc/nginx/sites-enabled/bikeanjo-institucional
        rm -f /etc/nginx/sites-enabled/default
        
        echo "  → Testing nginx configuration..."
        nginx -t
        
        echo "  → Reloading nginx..."
        systemctl reload nginx
        
        echo "  ✓ Nginx configured successfully"
NGINX_SETUP
    
    # Deploy on server
    print_info "Building and starting Docker containers..."
    ssh $DEPLOY_HOST << REMOTE_COMMANDS
        cd $DEPLOY_PATH/deploy
        
        echo "  → Loading environment variables..."
        export ENV=$ENV
        export FRONTEND_PORT=$FRONTEND_PORT
        export API_PORT=$API_PORT
        export FRONTEND_BIND=$FRONTEND_BIND
        export API_BIND=$API_BIND
        echo "    ENV: \$ENV"
        echo "    Frontend: \$FRONTEND_BIND:\$FRONTEND_PORT"
        echo "    API: \$API_BIND:\$API_PORT"
        
        echo "  → Stopping existing containers..."
        docker compose -f $COMPOSE_FILE down 2>/dev/null || true
        
        echo "  → Building containers (this may take a while)..."
        echo "    - Building API container..."
        docker compose -f $COMPOSE_FILE build api
        
        echo "    - Building Frontend container..."
        docker compose -f $COMPOSE_FILE build frontend
        
        echo "  → Starting containers..."
        docker compose -f $COMPOSE_FILE up -d
        
        echo "  → Waiting for containers to be healthy..."
        sleep 3
        
        echo ""
        echo "=== Container Status ==="
        docker compose -f $COMPOSE_FILE ps
        
        echo ""
        echo "  ✓ Docker deployment complete!"
REMOTE_COMMANDS
    
    # Configure SSL with Certbot
    print_info "Configuring SSL certificates..."
    ssh $DEPLOY_HOST << SSL_SETUP
        set -e
        
        echo "  → Checking SSL certificate for $DOMAIN_PRIMARY..."
        if [ ! -d "/etc/letsencrypt/live/$DOMAIN_PRIMARY" ]; then
            echo "  → Obtaining SSL certificate from Let's Encrypt..."
            echo "    Domain: $DOMAIN_PRIMARY"
            echo "    Email: $SSL_EMAIL"
            
            certbot --nginx \
                -d $DOMAIN_PRIMARY \
                --non-interactive \
                --agree-tos \
                --email $SSL_EMAIL \
                --redirect
            
            if [ \$? -eq 0 ]; then
                echo "  ✓ SSL certificate obtained and configured"
                echo "  ✓ HTTP → HTTPS redirect enabled"
            else
                echo "  ⚠ SSL configuration failed."
                echo "    Possible causes:"
                echo "    - DNS not pointing to this server"
                echo "    - Port 80/443 blocked"
                echo "    - Domain not accessible"
                echo ""
                echo "    To configure manually later, run on server:"
                echo "    certbot --nginx -d $DOMAIN_PRIMARY --email $SSL_EMAIL"
            fi
        else
            echo "  ✓ SSL certificate already exists for $DOMAIN_PRIMARY"
            echo "    Certificate path: /etc/letsencrypt/live/$DOMAIN_PRIMARY/"
        fi
        
        echo "  → Enabling automatic SSL renewal..."
        systemctl enable certbot.timer > /dev/null 2>&1 || true
        systemctl start certbot.timer > /dev/null 2>&1 || true
        echo "  ✓ Auto-renewal configured"
SSL_SETUP
    
    # Final health check
    print_info "Running final health checks..."
    echo "  → Testing frontend via nginx..."
    if curl -s --max-time 5 http://${DOMAIN_PRIMARY}/ | grep -q "Bike Anjo" 2>/dev/null; then
        echo "  ✓ Frontend is responding"
    else
        print_warning "Frontend health check timed out (may still be starting)"
    fi
    
    echo "  → Testing API via nginx..."
    if curl -s --max-time 5 http://${DOMAIN_PRIMARY}/api/health | grep -q "OK" 2>/dev/null; then
        echo "  ✓ API is responding"
    else
        print_warning "API health check timed out (may still be starting)"
    fi
    
    echo ""
    print_info "========================================="
    print_info "✓ DEPLOYMENT COMPLETE!"
    print_info "========================================="
    echo ""
    print_info "Site URLs:"
    print_info "  • HTTP:  http://${DOMAIN_PRIMARY} (redirects to HTTPS)"
    print_info "  • HTTPS: https://${DOMAIN_PRIMARY}"
    print_info "  • API:   https://${DOMAIN_PRIMARY}/api/health"
    echo ""
    print_info "Containers:"
    print_info "  • bikeanjo-institucional-frontend-production (port 8080 → nginx)"
    print_info "  • bikeanjo-institucional-api-production (port 3000 → nginx)"
    echo ""
    print_info "View logs on server:"
    print_info "  ssh $DEPLOY_HOST 'cd $DEPLOY_PATH/deploy && docker compose logs -f'"
    echo ""
    
fi

