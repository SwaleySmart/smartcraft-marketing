<template>
  <div :class="wrapperClasses">
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
      <span v-if="$slots.default" class="button-text relative z-10">
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
      
      <!-- Corner brackets for cyberpunk styling -->
      <span v-if="showCornerBrackets" class="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400"></span>
      <span v-if="showCornerBrackets" class="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400"></span>
      <span v-if="showCornerBrackets" class="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400"></span>
      <span v-if="showCornerBrackets" class="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400"></span>
    </component>
  </div>
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

const baseClasses = 'relative inline-flex items-center justify-center font-mono tracking-wider uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses = {
  primary: 'bg-black border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400',
  secondary: 'bg-transparent border-2 border-gray-500 text-gray-300 hover:border-cyan-400 hover:text-cyan-400',
  outline: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black',
  ghost: 'bg-transparent text-gray-300 hover:text-cyan-400',
  danger: 'bg-black border-2 border-red-500 text-red-400 hover:text-black hover:bg-red-500'
}

const sizeClasses = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-xs lg:text-sm',
  md: 'px-4 py-2 text-xs lg:text-sm',
  lg: 'px-6 py-3 text-xs lg:text-sm',
  xl: 'px-8 py-4 text-sm lg:text-base'
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
}

const wrapperClasses = computed(() => {
  return [
    'relative inline-block',
    {
      'w-full': props.block
    }
  ]
})

const showCornerBrackets = computed(() => {
  return ['primary', 'outline', 'danger'].includes(props.variant)
})

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
