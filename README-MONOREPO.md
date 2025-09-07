# SmartCraft Monorepo

🎉 **Successfully migrated to Nuxt.js + Statamic GraphQL monorepo architecture!**

## 📁 Project Structure

```
smartcraft/
├── cms/                    # Statamic Backend (Laravel)
│   ├── app/               # Laravel application code
│   ├── config/            # Configuration files
│   ├── content/           # Statamic content files
│   ├── public/            # Public assets
│   └── composer.json      # PHP dependencies
│
├── web/                   # Nuxt.js Frontend
│   ├── components/        # 🎨 Your preserved Vue components!
│   │   ├── blocks/        # - HeroBlock, IntroBlock, PackagesBlock, SmartProcessBlock
│   │   ├── layout/        # - Header
│   │   └── ui/           # - BaseButton, Icon, LoadingSpinner
│   ├── pages/             # Nuxt.js pages (index.vue, [...slug].vue)
│   ├── assets/            # CSS and static assets
│   ├── nuxt.config.ts     # Nuxt configuration
│   └── package.json       # Node.js dependencies
│
├── shared/                # Shared TypeScript types
│   └── types.ts           # Common interfaces
│
└── package.json           # Monorepo root scripts
```

## 🚀 Development Commands

### Start Both Services
```bash
npm run dev                 # Starts both CMS and frontend
```

### Individual Services
```bash
npm run dev:cms            # Statamic backend only (localhost:8000)
npm run dev:web            # Nuxt.js frontend only (localhost:3000)
```

### Build & Deploy
```bash
npm run build              # Build frontend for production
npm run install:all        # Install all dependencies
```

## ✨ What's New & Improved

### ✅ **Your Components Are Preserved!**
All your beautiful Vue components have been migrated and are working:
- `HeroBlock.vue` - Your hero sections
- `IntroBlock.vue` - Introduction blocks  
- `PackagesBlock.vue` - Package displays
- `SmartProcessBlock.vue` - Process workflows
- `Header.vue` - Navigation header
- `BaseButton.vue`, `Icon.vue`, `LoadingSpinner.vue` - UI components
- `PageBuilder.vue` - Block-based page building

### ✅ **GraphQL API Enabled**
- Statamic GraphQL API is now active at `http://localhost:8000/graphql`
- Better performance with precise data fetching
- Live preview functionality works properly (unlike REST API)

### ✅ **Modern Architecture**
- **Statamic 5.x** backend with GraphQL
- **Nuxt.js 3.x** frontend with SSR/SSG capabilities  
- **TypeScript** support throughout
- **Tailwind CSS 3.x** with your existing styling
- **Pinia** state management
- **GSAP** animations preserved

### ✅ **SEO Optimized**  
- Server-side rendering
- Automatic meta tag generation
- Open Graph & Twitter cards
- Canonical URLs
- Robots meta tags

## 🔧 Local Development

1. **Install Dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start Development:**
   ```bash
   npm run dev
   ```

3. **Access Your Sites:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8000
   - GraphQL Playground: http://localhost:8000/graphql

## 🚀 Hetzner + Ploi Deployment

This monorepo works perfectly on a single server:

### Backend (CMS)
- Deploy `cms/` to `/var/www/smartcraft-cms`
- Nginx serves GraphQL API at `api.smartcraft.com/graphql`

### Frontend (Web)
- Build: `npm run build` in `web/`
- Deploy to `/var/www/smartcraft-web`  
- Nginx serves at `smartcraft.com`

### Nginx Configuration
```nginx
# Frontend
server {
    server_name smartcraft.com;
    root /var/www/smartcraft-web/dist;
}

# API  
server {
    server_name api.smartcraft.com;
    root /var/www/smartcraft-cms/public;
}
```

## 🎯 Benefits Achieved

- ✅ **Preserved Components**: All your Vue.js components work exactly as before
- ✅ **Better Performance**: GraphQL + SSR/SSG optimization
- ✅ **Scalable Architecture**: Can scale frontend/backend independently
- ✅ **Modern Tooling**: Latest Nuxt.js, TypeScript, Tailwind
- ✅ **SEO Friendly**: Better search engine optimization
- ✅ **Developer Experience**: Hot reload, type safety, better debugging
- ✅ **Single Server Deployment**: Still works great on Hetzner + Ploi
- ✅ **Maintainable**: Clean separation of concerns

Your beautiful SmartCraft components and styling are preserved while gaining all the benefits of modern web architecture! 🎉