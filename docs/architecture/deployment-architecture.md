# Deployment Architecture

## Deployment Strategy

**Frontend Deployment:**
- **Platform:** Hetzner VPS via Ploi.io
- **Build Command:** `npm run build`
- **Output Directory:** `public/build`
- **CDN/Edge:** Cloudflare for global asset delivery

**Backend Deployment:**
- **Platform:** Hetzner VPS via Ploi.io  
- **Build Command:** `composer install --optimize-autoloader --no-dev`
- **Deployment Method:** Zero-downtime deployment via Ploi

## CI/CD Pipeline
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: 8.3
          extensions: dom, curl, libxml, mbstring, zip, pcntl, pdo, sqlite, pdo_sqlite
          
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
          
      - name: Install dependencies
        run: |
          composer install --no-interaction --prefer-dist --optimize-autoloader
          npm ci
          
      - name: Run tests
        run: |
          php artisan test
          npm run test
          npm run test:e2e
          
      - name: Build assets
        run: npm run build
        
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Ploi
        uses: ploi-deploy/action@v1
        with:
          webhook-url: ${{ secrets.PLOI_WEBHOOK_URL }}
```

## Environments
| Environment | Frontend URL | Backend URL | Purpose |
|-------------|-------------|-------------|---------|
| Development | http://localhost:5173 | http://localhost:8000 | Local development |
| Staging | https://staging.smartcraft.com | https://staging.smartcraft.com | Pre-production testing |
| Production | https://smartcraft.com | https://smartcraft.com | Live environment |