# Correct Installation Guide: Statamic + Inertia.js + Vue 3

This guide provides the **correct approach** for setting up the Smartcraft marketing website foundation using Statamic-first architecture.

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+
- NPM or Yarn

## Step-by-Step Installation

### 1. Create Fresh Statamic Project

```bash
# Create new Statamic project (includes Laravel)
composer create-project statamic/statamic smartcraft
cd smartcraft
```

### 2. Install Inertia.js Integration

```bash
# Install Inertia for Laravel
composer require inertiajs/inertia-laravel

# Install Inertia-Statamic adapter (CRITICAL for Vue hydration)
composer require parallax/inertia-statamic-adapter
```

### 3. Install Frontend Dependencies

```bash
# Core Vue 3 + Inertia stack
npm install @inertiajs/vue3 vue@next @vitejs/plugin-vue

# Development tools
npm install vite @types/node typescript

# UI Framework
npm install tailwindcss postcss autoprefixer

# State management
npm install pinia

# Testing
npm install --save-dev vitest @vue/test-utils playwright
```

### 4. Configure Environment

```bash
# Copy and configure environment
cp .env.example .env
php artisan key:generate
php artisan storage:link

# Configure for file-based storage (no database)
# Edit .env to ensure:
# CACHE_DRIVER=file
# SESSION_DRIVER=file
# QUEUE_CONNECTION=sync
```

### 5. Set Up Inertia Middleware

```bash
# Publish Inertia middleware
php artisan inertia:middleware

# Add middleware to Http/Kernel.php 'web' group
# \App\Http\Middleware\HandleInertiaRequests::class,
```

### 6. Create Admin User (Flat-file)

```bash
# Create admin user (stored in users/ directory as YAML)
php artisan make:user
```

### 7. Configure Frontend Build System

Create `vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
```

### 8. Set Up Tailwind CSS

```bash
# Initialize Tailwind
npx tailwindcss init -p
```

Configure `tailwind.config.js`:
```javascript
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 9. Build Assets

```bash
# Build for development
npm run build

# Or start development server
npm run dev
```

### 10. Start Development Servers

```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite dev server (if using npm run dev)
npm run dev
```

## Verify Installation

1. **Laravel**: Visit `http://localhost:8000`
2. **Statamic Control Panel**: Visit `http://localhost:8000/cp`
3. **Check flat-file storage**: Confirm `content/`, `users/` directories exist
4. **Test Inertia**: Create a simple Vue page and verify hydration

## Key Differences from Previous Attempt

### ❌ **What Was Wrong Before:**
- Started with `composer create-project laravel/laravel` (Laravel-first)
- Added Statamic as package with `composer require statamic/cms`
- Configured database storage for Statamic
- Used MySQL for sessions and users
- Laravel 10 instead of Laravel 12

### ✅ **What's Correct Now:**
- Start with `composer create-project statamic/statamic` (Statamic-first)
- Statamic includes Laravel as foundation
- Pure flat-file storage (no database)
- File-based cache and sessions
- Includes Inertia-Statamic adapter for proper Vue hydration
- Laravel 12 compatibility

## Architecture Benefits

- **Version Control Friendly**: All content in Git
- **Simple Deployment**: No database migrations
- **Fast Development**: No database setup required
- **Secure**: No SQL injection risks
- **Performance**: Fast file reads with built-in caching

## Next Steps

After successful installation:
1. Create initial content structure (collections, globals)
2. Set up Vue components and Inertia pages  
3. Configure Tailwind design system
4. Implement Page Builder with replicator fields
5. Set up CI/CD pipeline

## Troubleshooting

**Issue**: Inertia pages not rendering Vue components
**Solution**: Ensure `parallax/inertia-statamic-adapter` is installed

**Issue**: Statamic trying to use database
**Solution**: Verify `.env` has file-based cache/session drivers

**Issue**: Assets not building
**Solution**: Check `vite.config.js` has Vue plugin configured