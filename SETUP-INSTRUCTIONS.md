# 🚀 SmartCraft Setup Instructions

## Current Status
✅ Development landing page removed  
✅ All domain references updated to `.co`  
✅ Monorepo structure clean and organized  

## 🔧 Complete Local Development Setup

Since **Laravel Herd uses Nginx** (not Apache), we need to configure it properly for our monorepo structure.

### **Option 1: Dual Domain Setup (Recommended)**

Set up two separate Herd sites:

```bash
# Navigate to your project root
cd /Users/swaleysmart/Herd/smartcraft

# Link the CMS to a separate domain
herd link smartcraft-cms --to cms/public

# Link the main domain to web directory  
herd link smartcraft --to web

# Verify both sites are linked
herd links
```

**Result:**
- `http://smartcraft-cms.test` → Statamic backend
- `http://smartcraft.test` → Nuxt.js frontend (when dev server running)

**Update web config:**
```bash
# Update web/.env
sed -i '' 's|smartcraft.test/graphql|smartcraft-cms.test/graphql|g' web/.env
```

### **Option 2: Simple Development Setup**

Keep it simple and use:
- `http://smartcraft.test` → Points to CMS (for admin access)  
- `http://localhost:3000` → Nuxt.js dev server

### **Development Commands:**

```bash
# Start both services
npm run dev

# Access points:
# - CMS Admin: http://smartcraft-cms.test/cp (Option 1) or http://smartcraft.test/cp
# - GraphQL: http://smartcraft-cms.test/graphql (Option 1) or http://smartcraft.test/graphql  
# - Frontend: http://localhost:3000
```

### **Production Deployment**
Your `DEPLOYMENT.md` file contains the complete production setup for Ploi + Hetzner where:
- `smartcraft.co` → Nuxt.js frontend
- `smartcraft.co/cp` → Statamic admin  
- `smartcraft.co/graphql` → GraphQL API

## 🎯 Next Steps

1. Choose Option 1 or Option 2 above
2. Run the appropriate Herd commands  
3. Start development with `npm run dev`
4. Access your admin panel and start building!

Your **Vue components are preserved** and ready to work with the new GraphQL data! 🎉