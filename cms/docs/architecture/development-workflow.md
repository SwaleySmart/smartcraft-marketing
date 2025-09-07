# Development Workflow

## Local Development Setup

### Prerequisites
```bash
# Install PHP 8.3+, Composer, Node.js 18+, MySQL, Redis
php --version  # Should be 8.3+
composer --version
node --version  # Should be 18+
npm --version
mysql --version
redis-cli --version
```

### Initial Setup
```bash
# Clone and install dependencies
git clone <repository-url> smartcraft
cd smartcraft
composer install
npm install

# Environment setup
cp .env.example .env
php artisan key:generate
php artisan storage:link

# Database setup
php artisan migrate
php artisan statamic:install

# Build frontend assets
npm run build
```

### Development Commands
```bash
# Start all services
php artisan serve &
npm run dev &
redis-server &

# Start frontend only
npm run dev

# Start backend only
php artisan serve

# Run tests
php artisan test           # Laravel tests
npm run test              # Frontend tests
npm run test:e2e          # E2E tests
```

## Environment Configuration

### Required Environment Variables
```bash
# Frontend (.env - used by Vite)
VITE_APP_NAME="Smartcraft"
VITE_POSTHOG_KEY=your_posthog_key
VITE_POSTHOG_HOST=https://app.posthog.com

# Backend (.env)
APP_NAME="Smartcraft"
APP_ENV=local
APP_KEY=base64:generated_key
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=smartcraft
DB_USERNAME=root
DB_PASSWORD=

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

# Shared
STATAMIC_LICENSE_KEY=your_license_key
STATAMIC_STACHE_WATCHER=true
STATAMIC_STATIC_CACHING_STRATEGY=null
```