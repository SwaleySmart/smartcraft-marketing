# Frontend Architecture

## Component Architecture

### Component Organization
```
resources/js/
├── Components/           # Reusable UI components
│   ├── UI/              # Base UI elements (buttons, inputs, etc.)
│   ├── Blocks/          # Statamic block components
│   ├── Layout/          # Layout components (header, footer, nav)
│   └── Forms/           # Form components
├── Pages/               # Inertia page components
├── Composables/         # Vue composition functions
├── Stores/              # Pinia stores
├── Types/               # TypeScript type definitions
└── Utils/               # Utility functions
```

### Component Template
```typescript
<template>
  <div class="component-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  // Define component props
}

const props = defineProps<Props>()
const emit = defineEmits<{
  // Define component events
}>()

// Component logic using Composition API
</script>
```

## State Management Architecture

### State Structure
```typescript
// stores/main.ts
export const useMainStore = defineStore('main', () => {
  const loading = ref(false)
  const user = ref(null)
  const flashMessages = ref([])
  
  const setLoading = (value: boolean) => {
    loading.value = value
  }
  
  return {
    loading,
    user,
    flashMessages,
    setLoading
  }
})
```

### State Management Patterns
- Use Pinia for global application state
- Keep component-specific state local using refs/reactive
- Use composables for shared business logic
- Leverage Inertia's built-in form handling for form state

## Routing Architecture

### Route Organization
```
routes/web.php handles all routing:
├── / (home)
├── /packages (service packages)
├── /services/{service} (individual services)
├── /process (SMART methodology)
├── /case-studies (portfolio)
├── /insights (blog)
├── /about (company info)
└── /contact (contact forms)

Statamic handles content routing automatically
```

### Protected Route Pattern
```typescript
// middleware/auth.ts (Inertia middleware)
export default function auth(next: Function) {
  if (!user.value) {
    return redirect('/login')
  }
  return next()
}
```

## Frontend Services Layer

### API Client Setup
```typescript
// services/api.ts
import { router } from '@inertiajs/vue3'

export const api = {
  post: (url: string, data: any, options = {}) => {
    return router.post(url, data, {
      preserveScroll: true,
      ...options
    })
  },
  
  visit: (url: string, options = {}) => {
    return router.visit(url, {
      preserveState: true,
      ...options
    })
  }
}
```

### Service Example
```typescript
// services/contact.ts
export const contactService = {
  submitForm: async (formData: ContactForm) => {
    return api.post('/contact', formData, {
      onSuccess: () => {
        // Handle success
      },
      onError: (errors) => {
        // Handle validation errors
      }
    })
  }
}
```