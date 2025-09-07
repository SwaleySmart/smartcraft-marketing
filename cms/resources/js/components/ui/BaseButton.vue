<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <Icon
      v-if="iconLeft"
      :name="iconLeft"
      :class="iconClasses"
    />
    <span v-if="$slots.default" class="button-text">
      <slot />
    </span>
    <Icon
      v-if="iconRight"
      :name="iconRight" 
      :class="iconClasses"
    />
    <LoadingSpinner
      v-if="loading"
      :class="spinnerClasses"
    />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import Icon from './Icon.vue'
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconLeft: {
    type: String,
    default: null
  },
  iconRight: {
    type: String,
    default: null
  },
  rounded: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  block: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const tag = computed(() => {
  if (props.href) return Link
  if (props.to) return 'router-link' // For future router integration
  return 'button'
})

const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-md hover:shadow-lg',
  secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500 border border-secondary-200',
  outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
  ghost: 'bg-transparent text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 focus:ring-secondary-500',
  danger: 'bg-danger-500 text-white hover:bg-danger-600 focus:ring-danger-500 shadow-md hover:shadow-lg'
}

const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg'
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
}

const buttonClasses = computed(() => {
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    roundedClasses[props.rounded],
    {
      'w-full': props.block,
      'opacity-75 cursor-not-allowed': props.loading,
      'gap-2': props.iconLeft || props.iconRight
    }
  ]
})

const iconClasses = computed(() => {
  const sizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4', 
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }
  return sizeMap[props.size]
})

const spinnerClasses = computed(() => {
  const sizeMap = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }
  return [sizeMap[props.size], 'ml-2']
})

const handleClick = (event) => {
  if (props.loading || props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.button-text {
  @apply transition-opacity duration-200;
}

.loading .button-text {
  @apply opacity-0;
}
</style>
