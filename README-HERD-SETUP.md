# 🏠 SmartCraft Local Development with Herd

Since **Laravel Herd uses Nginx** (not Apache), we need a slightly different approach for the production-like routing locally.

## 🔧 Herd Configuration Options

### Option 1: **Dual-Domain Setup** (Recommended for Development)

Configure two domains in Herd:

1. **`smartcraft-cms.test`** → Points to `/cms/public` (Statamic backend)
2. **`smartcraft.test`** → Points to `/web` and runs Nuxt dev server

#### Steps:
```bash
# Add both sites to Herd
herd link smartcraft-cms --to cms/public
herd link smartcraft --to web

# Start services
npm run dev:cms    # Statamic at smartcraft-cms.test
npm run dev:web    # Nuxt at localhost:3000 (proxied via smartcraft.test)
```

#### URLs:
- **Main Site**: `http://smartcraft.test` → Nuxt.js (port 3000)
- **Admin Panel**: `http://smartcraft-cms.test/cp` → Statamic
- **GraphQL**: `http://smartcraft-cms.test/graphql` → API

#### Update Web Config:
```env
# web/.env
GRAPHQL_ENDPOINT=http://smartcraft-cms.test/graphql
```

### Option 2: **Single Domain with Manual Nginx Config**

If you want the exact production setup locally, you'd need to:

1. Create custom Nginx config in Herd's config directory
2. Configure proxy_pass rules for specific paths

This requires modifying Herd's nginx configuration directly.

### Option 3: **Use Current Setup for Development**

Keep the current routing and understand that:
- `http://smartcraft.test/cp` → Statamic admin ✅
- `http://smartcraft.test/graphql` → GraphQL API ✅  
- `http://localhost:3000` → Nuxt.js frontend ✅

This works perfectly for development and matches production deployment exactly.

## 🚀 Recommended Development Workflow

**For daily development**, use the current setup:

```bash
# Start both services
npm run dev

# Access points:
# - Admin: http://smartcraft.test/cp
# - GraphQL: http://smartcraft.test/graphql  
# - Frontend: http://localhost:3000
```

**For production testing**, the deployment configuration in `DEPLOYMENT.md` will give you the exact routing you want on Ploi/Hetzner.

## 🎯 Why This Works

- **Development**: Multiple ports (3000 for frontend, smartcraft.test for backend)
- **Production**: Single domain with proper nginx routing
- **Your Vue Components**: Work identically in both environments
- **GraphQL**: Same endpoints, just different hosts during development

The architecture is **production-ready** - the only difference is how we serve the frontend locally vs production! 🎉