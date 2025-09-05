<template>
  <section class="bg-white dark:bg-secondary-900 py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6 animate-slide-up">
            {{ section_title || sectionTitle }}
          </h2>
          <p v-if="section_subtitle || sectionSubtitle" class="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto animate-slide-up animation-delay-200ms">
            {{ section_subtitle || sectionSubtitle }}
          </p>
        </div>

        <!-- Packages Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div 
            v-for="pkg in packages" 
            :key="pkg.slug"
            :class="packageCardClasses(pkg.slug)"
          >
            <!-- Featured Badge -->
            <div v-if="(featured_package || featuredPackage) === pkg.slug" class="bg-primary-500 text-white text-center py-3 px-6 rounded-t-xl">
              <span class="font-semibold">Most Popular</span>
            </div>
            
            <div class="p-8">
              <!-- Package Header -->
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-secondary-900 dark:text-white">{{ pkg.name }}</h3>
                <div :class="getIconClasses(pkg.icon_color)">
                  <Icon :name="pkg.icon" :class="getIconTextColor(pkg.icon_color)" size="lg" />
                </div>
              </div>
              
              <!-- Pricing -->
              <div class="mb-6">
                <div class="flex items-baseline">
                  <span class="text-4xl font-bold text-secondary-900 dark:text-white">{{ pkg.price }}</span>
                  <span v-if="pkg.price_suffix" class="text-secondary-600 dark:text-secondary-400 ml-2">{{ pkg.price_suffix }}</span>
                </div>
                <p v-if="pkg.description" class="text-secondary-600 dark:text-secondary-400 mt-2">{{ pkg.description }}</p>
              </div>

              <!-- Features List -->
              <ul v-if="pkg.features && pkg.features.length" class="space-y-4 mb-8">
                <li v-for="feature in pkg.features" :key="feature" class="flex items-start">
                  <Icon name="check" class="text-success-500 mt-1 mr-3 flex-shrink-0" size="sm" />
                  <span class="text-secondary-700 dark:text-secondary-300">{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <BaseButton 
                href="/contact" 
                :variant="(featured_package || featuredPackage) === pkg.slug ? 'primary' : 'outline'" 
                size="lg" 
                block
                class="group"
              >
                Get Started
                <Icon name="arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform" size="sm" />
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div v-if="cta_text || ctaText" class="text-center">
          <BaseButton 
            href="/contact" 
            variant="primary" 
            size="xl"
            class="shadow-glow hover:shadow-glow-lg"
          >
            {{ cta_text || ctaText }}
          </BaseButton>
        </div>

        <!-- Comparison Table (if enabled) -->
        <div v-if="(showComparison || show_comparison) && (comparisonFeatures.length || comparison_features.length)" class="mt-16 bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8">
          <h3 class="text-2xl font-bold text-secondary-900 dark:text-white text-center mb-8">
            Package Comparison
          </h3>
          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-secondary-200 dark:border-secondary-700">
                  <th class="text-left py-4 text-secondary-900 dark:text-white font-semibold">Feature</th>
                  <th v-for="pkg in packages" :key="pkg.slug" class="text-center py-4 text-secondary-900 dark:text-white font-semibold">{{ pkg.name }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-secondary-200 dark:divide-secondary-700">
                <tr v-for="feature in actualComparisonFeatures" :key="feature.name" class="py-4">
                  <td class="py-4 text-secondary-700 dark:text-secondary-300 font-medium">{{ feature.name }}</td>
                  <td v-for="pkg in packages" :key="pkg.slug" class="py-4 text-center">
                    <template v-if="getComparisonValue(feature, pkg.slug) === 'true'">
                      <Icon name="check" class="text-success-500 mx-auto" size="sm" />
                    </template>
                    <template v-else-if="getComparisonValue(feature, pkg.slug) === 'false'">
                      <Icon name="x-mark" class="text-secondary-400 mx-auto" size="sm" />
                    </template>
                    <template v-else>
                      <span class="text-secondary-600 dark:text-secondary-400">{{ getComparisonValue(feature, pkg.slug) }}</span>
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
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
  sectionTitle: {
    type: String,
    default: 'Our Service Packages'
  },
  section_title: {
    type: String,
    default: 'Our Service Packages'
  },
  sectionSubtitle: {
    type: String,
    default: null
  },
  section_subtitle: {
    type: String,
    default: null
  },
  featuredPackage: {
    type: String,
    default: 'growth'
  },
  featured_package: {
    type: String,
    default: 'growth'
  },
  packages: {
    type: Array,
    default: () => []
  },
  showComparison: {
    type: Boolean,
    default: true
  },
  show_comparison: {
    type: Boolean,
    default: true
  },
  comparisonFeatures: {
    type: Array,
    default: () => []
  },
  comparison_features: {
    type: Array,
    default: () => []
  },
  ctaText: {
    type: String,
    default: 'Choose Your Package'
  },
  cta_text: {
    type: String,
    default: 'Choose Your Package'
  }
})

// Handle both snake_case and camelCase properties (from Statamic and Laravel)
const actualComparisonFeatures = computed(() => {
  return props.comparison_features?.length ? props.comparison_features : props.comparisonFeatures
})

const packageCardClasses = computed(() => (packageSlug) => {
  const featuredSlug = props.featured_package || props.featuredPackage
  return [
    'bg-white dark:bg-secondary-800 rounded-xl shadow-md border-2 transition-all duration-300 hover:shadow-xl',
    {
      'border-primary-500 shadow-primary-100 dark:shadow-primary-900/20': featuredSlug === packageSlug,
      'border-secondary-200 dark:border-secondary-700 hover:border-secondary-300 dark:hover:border-secondary-600': featuredSlug !== packageSlug
    }
  ]
})

// Helper methods for icon styling
const getIconClasses = (color) => {
  const baseClasses = 'w-12 h-12 rounded-xl flex items-center justify-center'
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/20',
    primary: 'bg-primary-100 dark:bg-primary-900/20',
    green: 'bg-green-100 dark:bg-green-900/20',
    orange: 'bg-orange-100 dark:bg-orange-900/20',
    accent: 'bg-accent-100 dark:bg-accent-900/20',
    purple: 'bg-purple-100 dark:bg-purple-900/20'
  }
  return `${baseClasses} ${colorClasses[color] || colorClasses.primary}`
}

const getIconTextColor = (color) => {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    primary: 'text-primary-600 dark:text-primary-400',
    green: 'text-green-600 dark:text-green-400',
    orange: 'text-orange-600 dark:text-orange-400',
    accent: 'text-accent-600 dark:text-accent-400',
    purple: 'text-purple-600 dark:text-purple-400'
  }
  return colorClasses[color] || colorClasses.primary
}

// Helper method to get comparison value for a specific package
const getComparisonValue = (feature, packageSlug) => {
  // Handle different package slug formats (launch, growth, dominate)
  if (packageSlug === 'launch' && feature.launch !== undefined) {
    return feature.launch
  }
  if (packageSlug === 'growth' && feature.growth !== undefined) {
    return feature.growth
  }
  if (packageSlug === 'dominate' && feature.dominate !== undefined) {
    return feature.dominate
  }
  return 'N/A'
}
</script>

<style scoped>
.animation-delay-200ms {
  animation-delay: 0.2s;
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
</style>
