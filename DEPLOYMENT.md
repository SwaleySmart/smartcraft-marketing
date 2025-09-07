# 🚀 SmartCraft Production Deployment (Ploi + Hetzner)

## Overview
Your SmartCraft monorepo is now configured for **production-ready deployment** where:
- **Main site** (`smartcraft.co`) → Nuxt.js frontend 
- **Admin panel** (`smartcraft.co/cp`) → Statamic control panel
- **GraphQL API** (`smartcraft.co/graphql`) → Statamic GraphQL endpoint

## 📋 Deployment Steps

### 1. Ploi Server Configuration

#### Create Two Services on Ploi:
1. **Backend Service** (Statamic):
   - **Repository**: Your monorepo
   - **Branch**: `main`
   - **Root Directory**: `/cms`
   - **Domain**: `api.smartcraft.co` (or subdomain)

2. **Frontend Service** (Nuxt.js):
   - **Repository**: Your monorepo  
   - **Branch**: `main`
   - **Root Directory**: `/web`
   - **Domain**: `smartcraft.co`

### 2. Nginx Configuration

#### Main Site (smartcraft.co)
```nginx
server {
    listen 80;
    server_name smartcraft.co www.smartcraft.co;
    root /home/ploi/smartcraft.co/web/dist;
    index index.html;

    # Statamic Admin Routes
    location /cp {
        proxy_pass http://127.0.0.1:8080/cp;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # GraphQL API
    location /graphql {
        proxy_pass http://127.0.0.1:8080/graphql;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # API Routes
    location /api {
        proxy_pass http://127.0.0.1:8080/api;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Static files
    location / {
        try_files $uri $uri/ /index.html;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Backend Service (Port 8080)
```nginx
server {
    listen 8080;
    server_name 127.0.0.1;
    root /home/ploi/smartcraft-cms/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

### 3. Environment Configuration

#### CMS Environment (`/cms/.env`)
```env
APP_NAME=Smartcraft
APP_ENV=production
APP_URL=https://smartcraft.co

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=smartcraft_prod
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

# Statamic
STATAMIC_LICENSE_KEY=your_license_key
STATAMIC_PRO_ENABLED=true
STATAMIC_GRAPHQL_ENABLED=true

# Security
APP_KEY=your_app_key
```

#### Web Environment (`/web/.env`)
```env
NUXT_PUBLIC_SITE_NAME=Smartcraft
NUXT_PUBLIC_SITE_URL=https://smartcraft.co
GRAPHQL_ENDPOINT=https://smartcraft.co/graphql
NODE_ENV=production
```

### 4. Build Scripts

#### Ploi Deploy Script (CMS):
```bash
cd /home/ploi/smartcraft-cms/cms
composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache  
php artisan view:cache
php artisan migrate --force
```

#### Ploi Deploy Script (Web):
```bash
cd /home/ploi/smartcraft.co/web
npm ci
npm run build
```

### 5. File Permissions
```bash
# CMS
chown -R ploi:ploi /home/ploi/smartcraft-cms
chmod -R 755 /home/ploi/smartcraft-cms
chmod -R 777 /home/ploi/smartcraft-cms/cms/storage
chmod -R 777 /home/ploi/smartcraft-cms/cms/bootstrap/cache

# Web  
chown -R ploi:ploi /home/ploi/smartcraft.co
chmod -R 755 /home/ploi/smartcraft.co
```

## 🎯 Result

After deployment, you'll have:
- ✅ **`smartcraft.co`** → Your Nuxt.js app with all Vue components
- ✅ **`smartcraft.co/cp`** → Statamic admin panel
- ✅ **`smartcraft.co/graphql`** → GraphQL API endpoint
- ✅ **Single server** deployment with optimal performance
- ✅ **All your components** preserved and working
- ✅ **SEO optimized** with SSR/SSG from Nuxt.js

## 🔄 Local Development
The same structure works locally:
```bash
npm run dev    # Start both services
# Visit: http://smartcraft.test (main site)
# Admin: http://smartcraft.test/cp  
# GraphQL: http://smartcraft.test/graphql
```

This setup gives you **modern architecture** in development with **simple deployment** to production! 🚀