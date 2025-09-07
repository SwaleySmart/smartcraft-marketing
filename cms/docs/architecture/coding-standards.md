# Coding Standards

## Critical Fullstack Rules
- **Type Sharing:** Always define shared TypeScript interfaces in `resources/js/Types/` and ensure backend responses match
- **Component Organization:** Block components must mirror Statamic block types exactly for consistency
- **Environment Variables:** Access only through Laravel config files, never `process.env` directly in frontend
- **Error Handling:** All form submissions must use Inertia's error handling pattern with proper validation display
- **State Management:** Never mutate Inertia props directly - use local state or Pinia stores
- **Cache Strategy:** All page content must be cacheable - avoid user-specific data in page props
- **Asset Handling:** All media assets must go through Statamic's asset management system

## Naming Conventions
| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| Components | PascalCase | - | `HeroBlock.vue` |
| Composables | camelCase with 'use' | - | `useAnalytics.ts` |
| Controllers | - | PascalCase | `PageController.php` |
| Routes | - | kebab-case | `/case-studies` |
| Database Tables | - | snake_case | `form_submissions` |