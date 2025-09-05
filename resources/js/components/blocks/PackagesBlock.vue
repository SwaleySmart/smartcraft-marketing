<template>
  <section class="bg-black relative overflow-hidden py-20 lg:py-32" ref="sectionRef">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="cyber-grid-packages"></div>
    </div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" />
      <div class="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float animation-delay-2s opacity-40" />
      <div class="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-4s opacity-50" />
      <div class="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float animation-delay-6s opacity-30" />
    </div>
    
    <!-- Scanning Lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scan-horizontal animation-delay-3s" />
      <div class="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan-horizontal animation-delay-7s" />
    </div>
    
    <div class="relative px-4 sm:px-6 md:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <!-- Futuristic Section Header -->
        <div class="text-center mb-20" ref="headerRef">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 relative">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {{ section_title || sectionTitle }}
            </span>
            <!-- Glitch overlay -->
            <span class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent opacity-0 packages-glitch" aria-hidden="true">
              {{ section_title || sectionTitle }}
            </span>
          </h2>
          <p v-if="section_subtitle || sectionSubtitle" class="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-mono">
            {{ section_subtitle || sectionSubtitle }}
          </p>
          
          <!-- Decorative Elements -->
          <div class="flex items-center justify-center mt-8 space-x-4">
            <div class="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div class="w-3 h-3 border-2 border-cyan-400 rotate-45"></div>
            <div class="w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div class="w-24 h-px bg-gradient-to-r from-blue-500 to-purple-400"></div>
            <div class="w-3 h-3 border-2 border-purple-400 rotate-45"></div>
            <div class="w-12 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        <!-- Futuristic Packages Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" ref="packagesGridRef" style="margin-top: 2rem;">
          <div 
            v-for="(pkg, index) in packages" 
            :key="pkg.slug"
            class="package-card relative group min-h-[600px] rounded-xl"
            :data-index="index"
            :style="{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(6,182,212,0.08) 50%, rgba(139,92,246,0.08) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(6,182,212,0.2)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)',
              marginTop: '1.5rem',
              paddingTop: '1rem'
            }"
          >
            <!-- Holographic Featured Badge -->
            <div v-if="(featured_package || featuredPackage) === pkg.slug" class="absolute -top-3 left-0 right-0 z-20 flex justify-center">
              <div class="relative">
                <div class="bg-black/80 backdrop-blur-sm border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-full font-mono uppercase tracking-wider text-xs font-bold shadow-glow badge-popular">
                  <span class="relative z-10">Most Popular</span>
                  <!-- Animated border rings -->
                  <div class="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse"></div>
                  <div class="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse" style="animation-delay: 0.5s; animation-duration: 2s;"></div>
                </div>
                <!-- Glowing corner dots -->
                <div class="absolute -top-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <div class="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse animation-delay-1s"></div>
              </div>
            </div>
            
            <!-- Card Content -->
            <div class="relative p-8 h-full flex flex-col justify-between">
              <!-- Improved contrast overlay -->
              <div class="absolute inset-0 bg-black/20 rounded-xl"></div>
              
              <!-- Top Content -->
              <div class="relative flex-1">
                <!-- Package Header -->
                <div class="relative flex items-center justify-between mb-8">
                <div class="flex-1">
                  <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2 font-mono tracking-wide drop-shadow-sm">{{ pkg.name }}</h3>
                  <div class="w-16 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </div>
                <div class="relative">
                  <!-- Icon Container with Holographic Effect -->
                  <div class="w-16 h-16 bg-black border-2 border-cyan-400/50 rounded-xl flex items-center justify-center relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon :name="pkg.icon" class="text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-300" size="xl" />
                    <!-- Corner accents -->
                    <div class="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-400"></div>
                    <div class="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyan-400"></div>
                    <div class="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cyan-400"></div>
                    <div class="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-400"></div>
                  </div>
                </div>
              </div>
              
              <!-- Pricing with Holographic Display -->
              <div class="relative mb-8">
                <div class="relative">
                  <div class="flex items-baseline mb-2">
                    <span class="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-mono drop-shadow-sm">{{ pkg.price }}</span>
                    <span v-if="pkg.price_suffix" class="text-cyan-300 ml-2 text-sm font-mono uppercase tracking-wider drop-shadow-sm">{{ pkg.price_suffix }}</span>
                  </div>
                  <!-- Price glow effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-500/10 blur-xl -z-10"></div>
                </div>
                <p v-if="pkg.description" class="text-gray-200 text-lg font-mono drop-shadow-sm">{{ pkg.description }}</p>
              </div>

                <!-- Features List with Cyberpunk Style -->
                <ul v-if="pkg.features && pkg.features.length" class="relative space-y-4 mb-6">
                  <li v-for="(feature, featureIndex) in pkg.features" :key="feature" class="flex items-start group">
                    <div class="relative mr-4 mt-0.5">
                      <div class="w-5 h-5 bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-300">
                        <Icon name="check" class="text-cyan-400 w-3 h-3" />
                      </div>
                      <div class="absolute inset-0 bg-cyan-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span class="text-white group-hover:text-cyan-100 transition-colors duration-300 font-mono text-sm lg:text-base leading-relaxed drop-shadow-sm">{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- Bottom Button Section -->
              <div class="relative mt-auto pt-4">
                <!-- Futuristic CTA Button -->
                <div class="relative">
                  <!-- Button glow background -->
                  <div v-if="(featured_package || featuredPackage) === pkg.slug" class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
                
                <BaseButton 
                  href="/contact" 
                  :variant="(featured_package || featuredPackage) === pkg.slug ? 'primary' : 'outline'" 
                  size="lg" 
                  block
                  :class="[
                    'group relative font-mono tracking-wider uppercase text-sm transition-all duration-300',
                    (featured_package || featuredPackage) === pkg.slug 
                      ? 'bg-black border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400' 
                      : 'bg-transparent border-2 border-gray-500 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                  ]"
                >
                  <span class="relative z-10 flex items-center justify-center">
                    Get Started
                    <Icon name="arrow-right" class="ml-3 group-hover:translate-x-1 transition-transform duration-300" size="sm" />
                  </span>
                  
                  <!-- Button corner brackets -->
                  <span class="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-current opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span class="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-current opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span class="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-current opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span class="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-current opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
                </BaseButton>
                </div>
              </div>
            </div>
            
            <!-- Card border glow effect -->
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>

        <!-- Futuristic CTA Section -->
        <div v-if="cta_text || ctaText" class="text-center mb-20" ref="ctaSectionRef">
          <div class="relative inline-block">
            <!-- CTA Glow Background -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-75 blur-lg animate-pulse"></div>
            
            <BaseButton 
              href="/contact" 
              variant="primary" 
              size="xl"
              class="relative bg-black border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400 font-mono tracking-wider uppercase px-12 py-4 text-lg transition-all duration-300 group"
            >
              <span class="relative z-10">{{ cta_text || ctaText }}</span>
              
              <!-- CTA Corner Brackets -->
              <span class="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></span>
              <span class="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></span>
              <span class="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></span>
              <span class="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></span>
            </BaseButton>
          </div>
        </div>

        <!-- Futuristic Comparison Table -->
        <div v-if="(showComparison || show_comparison) && (comparisonFeatures.length || comparison_features.length)" class="mt-20" ref="comparisonRef">
          <!-- Comparison Header -->
          <div class="text-center mb-12">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Package Comparison
              </span>
            </h3>
            <div class="flex items-center justify-center space-x-4">
              <div class="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div class="w-2 h-2 border border-cyan-400 rotate-45"></div>
              <div class="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <div class="w-16 h-px bg-gradient-to-r from-blue-500 to-purple-400"></div>
              <div class="w-2 h-2 border border-purple-400 rotate-45"></div>
              <div class="w-8 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
          </div>
          
          <!-- Comparison Table Container -->
          <div class="relative bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl overflow-hidden">
            <!-- Table Header Glow -->
            <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-black/70">
                  <tr class="border-b border-cyan-400/30">
                    <th class="text-left py-6 px-6 text-white font-mono uppercase tracking-wider text-sm">Feature</th>
                    <th v-for="pkg in packages" :key="pkg.slug" class="text-center py-6 px-4 text-cyan-400 font-mono uppercase tracking-wider text-sm font-bold">{{ pkg.name }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-cyan-400/20">
                  <tr v-for="(feature, index) in actualComparisonFeatures" :key="feature.name" class="comparison-row hover:bg-cyan-400/5 transition-colors duration-300" :data-index="index">
                    <td class="py-4 px-6 text-gray-300 font-medium font-mono">{{ feature.name }}</td>
                    <td v-for="pkg in packages" :key="pkg.slug" class="py-4 px-4 text-center">
                      <template v-if="getComparisonValue(feature, pkg.slug) === 'true'">
                        <div class="flex items-center justify-center">
                          <div class="w-6 h-6 bg-black border border-cyan-400 rounded flex items-center justify-center">
                            <Icon name="check" class="text-cyan-400 w-4 h-4" />
                          </div>
                        </div>
                      </template>
                      <template v-else-if="getComparisonValue(feature, pkg.slug) === 'false'">
                        <div class="flex items-center justify-center">
                          <div class="w-6 h-6 bg-black border border-gray-500 rounded flex items-center justify-center">
                            <Icon name="x-mark" class="text-gray-500 w-4 h-4" />
                          </div>
                        </div>
                      </template>
                      <template v-else>
                        <div class="inline-block px-3 py-1 bg-black/50 border border-cyan-400/50 rounded text-cyan-400 text-sm font-mono">
                          {{ getComparisonValue(feature, pkg.slug) }}
                        </div>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Table Footer Glow -->
            <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '../ui/BaseButton.vue'
import Icon from '../ui/Icon.vue'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Template refs
const sectionRef = ref(null)
const headerRef = ref(null) 
const packagesGridRef = ref(null)
const ctaSectionRef = ref(null)
const comparisonRef = ref(null)

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

// GSAP Animations
onMounted(() => {
  if (!sectionRef.value) return

  const ctx = gsap.context(() => {
    // Animate section header
    if (headerRef.value) {
      gsap.fromTo(headerRef.value.querySelector('h2'), 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.value,
            start: "top 80%",
            once: true
          }
        }
      )
      
      // Animate subtitle
      const subtitle = headerRef.value.querySelector('.subtitle')
      if (subtitle) {
        gsap.fromTo(subtitle, 
          { opacity: 0, y: 30 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.value,
              start: "top 80%",
              once: true
            }
          }
        )
      }
    }

    // Animate packages grid
    if (packagesGridRef.value) {
      const cards = packagesGridRef.value.querySelectorAll('.package-card')
      gsap.fromTo(cards,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: packagesGridRef.value,
            start: "top 85%",
            once: true
          }
        }
      )

      // Animate particles in cards
      const particles = packagesGridRef.value.querySelectorAll('.particle')
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          rotation: 360,
          duration: 20 + (index % 3) * 5,
          ease: "none",
          repeat: -1
        })
        
        gsap.to(particle, {
          y: "-=10",
          duration: 3 + (index % 2),
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.5
        })
      })

      // Add hover effects for cards
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }

    // Animate CTA section
    if (ctaSectionRef.value) {
      gsap.fromTo(ctaSectionRef.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSectionRef.value,
            start: "top 80%",
            once: true
          }
        }
      )
    }

    // Animate comparison table
    if (comparisonRef.value) {
      // Animate table container
      gsap.fromTo(comparisonRef.value,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: comparisonRef.value,
            start: "top 80%",
            once: true
          }
        }
      )

      // Animate table rows
      const rows = comparisonRef.value.querySelectorAll('.comparison-row')
      gsap.fromTo(rows,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: comparisonRef.value.querySelector('table'),
            start: "top 85%",
            once: true
          }
        }
      )
    }
  }, sectionRef.value)

  // Cleanup on unmount
  return () => {
    ctx.revert()
  }
})
</script>

<style scoped>
/* Cyber Grid Background */
.cyber-grid {
  background-image:
    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Floating Particles */
.particle {
  animation: particleFloat 6s ease-in-out infinite alternate;
}

@keyframes particleFloat {
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-20px) rotate(180deg); }
}

/* Scanning Lines */
.scanning-line {
  animation: scanMove 4s linear infinite;
}

@keyframes scanMove {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

/* Glitch Text Animation */
@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff,
                 0.025em 0.04em 0 #ffff00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff,
                 0.025em 0.04em 0 #ffff00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff,
                 -0.05em -0.05em 0 #ffff00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff,
                 -0.05em -0.05em 0 #ffff00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff,
                 0 -0.04em 0 #ffff00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff,
                 0 -0.04em 0 #ffff00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00ffff, -0.025em -0.04em 0 #ff00ff,
                 -0.04em -0.025em 0 #ffff00;
  }
}

.glitch-text {
  animation: glitch 1.5s ease-in-out infinite alternate;
}

/* Holographic Effects */
.holographic {
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(6, 182, 212, 0.1) 50%,
    transparent 70%
  );
  background-size: 200% 200%;
  animation: holographic 3s ease-in-out infinite;
}

@keyframes holographic {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Package Card Enhancements */
.package-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
}

/* Glassmorphism hover gradient sweep */
.package-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(6, 182, 212, 0.05),
    rgba(59, 130, 246, 0.03),
    rgba(139, 92, 246, 0.05),
    transparent
  );
  transition: left 0.8s ease-out;
  z-index: 1;
  border-radius: 1rem;
  pointer-events: none;
}

.package-card:hover::before {
  left: 100%;
}

/* Enhanced hover effects */
.package-card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: rgba(6, 182, 212, 0.4) !important;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.15), 
    0 12px 40px rgba(6, 182, 212, 0.15),
    0 6px 20px rgba(0,0,0,0.4),
    0 0 0 1px rgba(6, 182, 212, 0.2) !important;
  backdrop-filter: blur(22px) !important;
}

/* Ensure content stays above the gradient sweep */
.package-card > div {
  position: relative;
  z-index: 2;
}

/* Badge Glow Effects */
.badge-popular {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), inset 0 1px 0 rgba(255,255,255,0.2);
  animation: badgeGlow 3s ease-in-out infinite;
}

.badge-popular::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2.5s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes badgeGlow {
  0%, 100% { 
    box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), inset 0 1px 0 rgba(255,255,255,0.2);
  }
  50% { 
    box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), inset 0 1px 0 rgba(255,255,255,0.3);
  }
}

/* Neon Button Effects */
.neon-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.neon-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%);
  transition: all 0.3s ease;
  transform: translate(-50%, -50%);
}

.neon-button:hover::before {
  width: 200px;
  height: 200px;
}

.neon-button:hover {
  box-shadow: 
    0 0 20px rgba(6, 182, 212, 0.6),
    inset 0 0 20px rgba(6, 182, 212, 0.1);
}

/* Comparison Table Row Hover */
.comparison-row:hover {
  background: linear-gradient(
    90deg,
    rgba(6, 182, 212, 0.05),
    rgba(6, 182, 212, 0.1),
    rgba(6, 182, 212, 0.05)
  );
}

/* Icon Container Glow */
.icon-container {
  position: relative;
}

.icon-container::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.icon-container:hover::after {
  opacity: 0.7;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Text Gradient Effects */
.gradient-text {
  background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  animation: gradientShift 4s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .cyber-grid {
    background-size: 30px 30px;
  }
  
  .package-card {
    margin-bottom: 2rem;
    margin-top: 2rem !important;
    min-height: 500px;
  }
  
  .badge-popular {
    font-size: 0.7rem;
    padding: 0.4rem 1rem;
  }
}

/* Ensure proper spacing around cards */
.package-card {
  margin-bottom: 2rem;
}

/* Prevent badge from being clipped */
.badge-popular {
  white-space: nowrap;
  z-index: 30;
}

/* Allow badge to overflow while keeping gradient contained */
.package-card {
  margin-top: 1.5rem;
}

.package-card .badge-popular {
  position: absolute;
  z-index: 40;
  display: inline-block;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
