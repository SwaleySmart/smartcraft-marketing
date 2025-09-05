# Smartcraft Development with Laravel Herd

## Quick Start

Your site is available at: **http://smartcraft.test**

## Development Commands

### Frontend Development
```bash
# Start Vite dev server with hot reload (recommended for development)
npm run watch

# Alternative dev command (same as watch)
npm run dev

# Build for production
npm run build

# Herd-specific commands (with helpful messages)
npm run herd        # Start dev server with Herd URL reminder
npm run herd:build  # Build and show Herd URL
```

### Laravel Commands
```bash
# Clear all caches
php artisan optimize:clear

# Start Laravel development server (if needed)
php artisan serve --host=smartcraft.test --port=80

# Access Statamic control panel
open http://smartcraft.test/cp
```

## Development Workflow

1. **Start development**: `npm run watch`
2. **Edit content**: Visit `http://smartcraft.test/cp`
3. **Edit code**: Files auto-reload with Vite HMR
4. **View site**: `http://smartcraft.test`

## Configuration

- **Vite Dev Server**: Runs on `localhost:5173`
- **Laravel Herd**: Proxies to `smartcraft.test`
- **Hot Module Reload**: Enabled for Vue components
- **TypeScript**: Configured with path aliases

## Troubleshooting

If the site shows a blank page:
1. Make sure `npm run watch` is running
2. Check that Herd is serving `smartcraft.test`
3. Clear Laravel caches: `php artisan optimize:clear`
4. Restart Vite: Stop and run `npm run watch` again

## Project Structure

```
smartcraft/
├── resources/js/
│   ├── components/
│   │   ├── blocks/         # Page builder blocks
│   │   ├── ui/             # Reusable UI components
│   │   └── PageBuilder.vue # Main page builder
│   ├── Pages/
│   │   └── Page.vue        # Generic page component
│   └── app.js              # Main entry point
├── content/
│   └── collections/
│       └── pages/          # Statamic page content
└── resources/blueprints/   # Statamic field definitions
```
