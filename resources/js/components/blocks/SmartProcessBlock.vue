<template>
  <section class="bg-secondary-50 dark:bg-secondary-800 py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6 animate-slide-up">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto animate-slide-up animation-delay-200ms">
            {{ subtitle }}
          </p>
        </div>

        <!-- Process Steps -->
        <div v-if="shouldUseDefaultSteps" class="relative">
          <!-- Progress Line -->
          <div class="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div class="relative h-1 bg-secondary-200 dark:bg-secondary-700 rounded-full">
              <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <!-- Steps Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            <div 
              v-for="(step, index) in defaultSteps" 
              :key="step.letter"
              class="text-center animate-slide-up"
              :class="getAnimationDelay(index)"
            >
              <div class="relative mb-6">
                <div 
                  class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mx-auto relative z-10"
                  :class="getStepColorClasses(step.color, index)"
                >
                  {{ step.letter }}
                </div>
                <div 
                  class="absolute inset-0 w-20 h-20 rounded-full animate-ping mx-auto opacity-75"
                  :class="[getStepColorClasses(step.color, index).replace('shadow-', 'bg-').replace('-500', '-200'), getAnimationDelay(index)]"
                ></div>
              </div>
              <h3 class="text-xl font-bold text-secondary-900 dark:text-white mb-3">{{ step.title }}</h3>
              <p class="text-secondary-600 dark:text-secondary-400 mb-4">{{ step.description }}</p>
              <div v-if="step.duration" class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full" :class="getStepBadgeClasses(step.color, index)">
                <Icon name="clock" class="mr-1" size="xs" />
                {{ step.duration }}
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Steps (if provided from Statamic) -->
        <div v-if="steps && steps.length > 0" class="mt-16">
          <h3 class="text-2xl font-bold text-secondary-900 dark:text-white text-center mb-12">
            Our Process in Detail
          </h3>
          
          <div class="space-y-8">
            <div 
              v-for="(step, index) in steps" 
              :key="step.letter" 
              class="bg-white dark:bg-secondary-900 rounded-xl p-8 shadow-md"
              :class="{ 'animate-slide-up': true, [`animation-delay-${(index + 1) * 200}ms`]: true }"
            >
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {{ step.letter }}
                  </div>
                </div>
                <div class="flex-grow">
                  <h4 class="text-xl font-bold text-secondary-900 dark:text-white mb-3">{{ step.title }}</h4>
                  <p class="text-secondary-600 dark:text-secondary-300 mb-4">{{ step.description }}</p>
                  <div v-if="step.duration" class="inline-flex items-center px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 text-sm font-medium rounded-full">
                    <Icon name="clock" class="mr-1" size="xs" />
                    {{ step.duration }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div v-if="shouldShowCta" class="text-center mt-16">
          <div class="bg-white dark:bg-secondary-900 rounded-xl p-8 shadow-md">
            <h3 class="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              {{ actualCtaTitle }}
            </h3>
            <p v-if="actualCtaSubtitle" class="text-secondary-600 dark:text-secondary-300 mb-6 max-w-2xl mx-auto">
              {{ actualCtaSubtitle }}
            </p>
            <BaseButton 
              :href="actualCtaButtonUrl" 
              variant="primary" 
              size="lg"
              class="shadow-glow hover:shadow-glow-lg"
            >
              {{ actualCtaButtonText }}
              <Icon name="arrow-right" class="ml-2" size="sm" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import Icon from '../ui/Icon.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'The SMART Process'
  },
  subtitle: {
    type: String,
    default: 'Our proven methodology for delivering exceptional results'
  },
  use_default_steps: {
    type: Boolean,
    default: true
  },
  useDefaultSteps: {
    type: Boolean,
    default: true
  },
  steps: {
    type: Array,
    default: () => []
  },
  show_cta: {
    type: Boolean,
    default: true
  },
  showCta: {
    type: Boolean,
    default: true
  },
  cta_title: {
    type: String,
    default: 'Ready to Get Started?'
  },
  ctaTitle: {
    type: String,
    default: 'Ready to Get Started?'
  },
  cta_subtitle: {
    type: String,
    default: 'Let\'s discuss your project and see how our SMART process can help you achieve your goals.'
  },
  ctaSubtitle: {
    type: String,
    default: 'Let\'s discuss your project and see how our SMART process can help you achieve your goals.'
  },
  cta_button_text: {
    type: String,
    default: 'Start Your Project'
  },
  ctaButtonText: {
    type: String,
    default: 'Start Your Project'
  },
  cta_button_url: {
    type: String,
    default: '/contact'
  },
  ctaButtonUrl: {
    type: String,
    default: '/contact'
  }
})

// Default SMART process steps
const defaultSteps = [
  {
    letter: 'S',
    title: 'Strategy',
    description: 'Deep analysis of your business goals, target audience, and competitive landscape to create a winning roadmap.',
    duration: '1-2 weeks',
    color: 'primary'
  },
  {
    letter: 'M',
    title: 'Mockups',
    description: 'High-fidelity designs and prototypes that bring your vision to life before development begins.',
    duration: '1-2 weeks',
    color: 'blue'
  },
  {
    letter: 'A',
    title: 'Architecture',
    description: 'Robust technical foundation using Laravel, Vue, and modern best practices for scalability.',
    duration: '2-3 weeks',
    color: 'green'
  },
  {
    letter: 'R',
    title: 'Results',
    description: 'Deployment, testing, and optimization to ensure your application performs flawlessly.',
    duration: '1-2 weeks',
    color: 'orange'
  },
  {
    letter: 'T',
    title: 'Track',
    description: 'Ongoing monitoring, analytics, and support to measure success and drive continuous improvement.',
    duration: 'Ongoing',
    color: 'accent'
  }
]

// Computed properties to handle both naming conventions
const shouldUseDefaultSteps = computed(() => {
  return props.use_default_steps ?? props.useDefaultSteps ?? true
})

const shouldShowCta = computed(() => {
  return props.show_cta ?? props.showCta ?? true
})

const actualCtaTitle = computed(() => {
  return props.cta_title || props.ctaTitle || 'Ready to Get Started?'
})

const actualCtaSubtitle = computed(() => {
  return props.cta_subtitle || props.ctaSubtitle || 'Let\'s discuss your project and see how our SMART process can help you achieve your goals.'
})

const actualCtaButtonText = computed(() => {
  return props.cta_button_text || props.ctaButtonText || 'Start Your Project'
})

const actualCtaButtonUrl = computed(() => {
  return props.cta_button_url || props.ctaButtonUrl || '/contact'
})

// Helper method to get step color classes
const getStepColorClasses = (color, index) => {
  const colors = {
    primary: 'bg-primary-500 shadow-primary-100',
    blue: 'bg-blue-500 shadow-blue-100',
    green: 'bg-green-500 shadow-green-100',
    orange: 'bg-orange-500 shadow-orange-100',
    accent: 'bg-accent-500 shadow-accent-100',
    purple: 'bg-purple-500 shadow-purple-100'
  }
  
  // Fallback to default progression for hardcoded steps
  if (!color) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    color = fallbackColors[index % fallbackColors.length]
  }
  
  return colors[color] || colors.primary
}

const getStepBadgeClasses = (color, index) => {
  const colors = {
    primary: 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400',
    blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    accent: 'bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400',
    purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
  }
  
  if (!color) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    color = fallbackColors[index % fallbackColors.length]
  }
  
  return colors[color] || colors.primary
}

const getAnimationDelay = (index) => {
  const delays = ['', 'animation-delay-200ms', 'animation-delay-400ms', 'animation-delay-600ms', 'animation-delay-800ms']
  return delays[index] || ''
}
</script>

<style scoped>
.animation-delay-200ms {
  animation-delay: 0.2s;
}

.animation-delay-400ms {
  animation-delay: 0.4s;
}

.animation-delay-600ms {
  animation-delay: 0.6s;
}

.animation-delay-800ms {
  animation-delay: 0.8s;
}

.shadow-glow {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
}

.shadow-glow:hover {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
}

.shadow-glow-lg {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
}

@keyframes animate-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: animate-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
