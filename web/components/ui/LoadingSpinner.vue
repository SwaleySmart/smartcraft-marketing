<template>
  <div :class="containerClasses">
    <svg
      :class="spinnerClasses"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  color: {
    type: String,
    default: 'current',
    validator: (value) => ['current', 'primary', 'secondary', 'white'].includes(value)
  },
  centered: {
    type: Boolean,
    default: false
  }
})

const sizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
}

const colorClasses = {
  current: 'text-current',
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  white: 'text-white'
}

const containerClasses = computed(() => [
  {
    'flex items-center justify-center': props.centered
  }
])

const spinnerClasses = computed(() => [
  'animate-spin',
  sizeClasses[props.size],
  colorClasses[props.color]
])
</script>
