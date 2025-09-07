<template>
  <section class="bg-black relative overflow-hidden py-20 lg:py-32" ref="sectionRef">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="cyber-grid-smart"></div>
    </div>
    
    <!-- Enhanced Matrix Rain Effect -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div class="matrix-rain-smart"></div>
      <div class="matrix-rain-smart-2"></div>
    </div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" />
      <div class="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float animation-delay-2s opacity-40" />
      <div class="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-4s opacity-50" />
      <div class="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float animation-delay-6s opacity-30" />
      
      <!-- Geometric shapes -->
      <div class="absolute top-1/3 left-10 w-3 h-3 border border-cyan-400/50 rotate-45 animate-float animation-delay-1s" />
      <div class="absolute bottom-1/3 right-10 w-2 h-2 border border-blue-400/50 animate-float animation-delay-3s" />
    </div>
    
    <!-- Scanning Lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 -left-full w-screen h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scan-horizontal-full animation-delay-2s" />
      <div class="absolute bottom-1/3 -left-full w-screen h-px bg-gradient-to-r from-transparent via-blue-400/35 to-transparent animate-scan-horizontal-full animation-delay-8s" />
    </div>

    <div class="relative px-4 sm:px-6 md:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <!-- Futuristic Section Header -->
        <div class="text-center mb-20" ref="headerRef">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {{ title }}
            </span>
          </h2>
          <p v-if="subtitle" class="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-mono">
            {{ subtitle }}
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

        <!-- Futuristic Process Steps -->
        <div v-if="actualDefaultSteps.length > 0" class="relative" ref="stepsGridRef">
          <!-- Enhanced Holographic Progress Line -->
          <div class="hidden lg:block absolute top-12 left-0 right-0 z-10">
            <div class="relative h-1 bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-full overflow-hidden mx-16">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse smart-progress-line"></div>
              <!-- Enhanced scanning effect that goes full width -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent w-24 animate-scan-progress-full rounded-full"></div>
            </div>
          </div>

          <!-- Futuristic Steps Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            <div 
              v-for="(step, index) in actualDefaultSteps" 
              :key="step.letter"
              class="flex flex-col text-center step-item relative group h-full"
              :data-index="index"
            >
              <!-- Step Container -->
              <div class="relative mb-8">
                <!-- Holographic Step Circle -->
                <div class="relative mx-auto w-24 h-24 smart-step-container">
                  <!-- Outer glow rings -->
                  <div class="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse smart-outer-ring"></div>
                  <div class="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse smart-outer-ring-2" style="animation-delay: 0.5s;"></div>
                  
                  <!-- Main step circle -->
                  <div 
                    class="w-full h-full rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-glow mx-auto relative z-10 font-mono bg-black border-2 transition-all duration-300 group-hover:scale-110"
                    :class="getSmartStepClasses(step.color, index)"
                  >
                    <span class="relative z-20">{{ step.letter }}</span>
                    
                    <!-- Inner holographic overlay -->
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300" :class="getStepGradient(step.color, index)"></div>
                    
                    <!-- Corner brackets -->
                    <div class="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <!-- Vertical scanning line -->
                  <div class="absolute -top-96 left-0 w-px h-screen bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-scan-vertical-full animation-delay-4s"></div>
                </div>
              </div>

              <!-- Step Content -->
              <div class="relative space-y-4 flex-grow flex flex-col">
                <h3 class="text-xl lg:text-2xl font-bold text-white mb-3 font-mono tracking-wide group-hover:text-cyan-300 transition-colors duration-300">{{ step.title }}</h3>
                <p class="text-gray-300 mb-4 font-mono text-sm lg:text-base leading-relaxed group-hover:text-cyan-100 transition-colors duration-300 flex-grow">{{ step.description }}</p>
                
                <!-- Futuristic Duration Badge -->
                <div v-if="step.duration" class="inline-flex items-center px-4 py-2 bg-black/60 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-sm font-mono uppercase tracking-wider rounded-lg group-hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 relative overflow-hidden mt-auto">
                  <!-- Badge glow background -->
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <Icon name="clock" class="mr-2 relative z-10" size="xs" />
                  <span class="relative z-10">{{ step.duration }}</span>
                  
                  <!-- Corner accents -->
                  <div class="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400"></div>
                  <div class="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Steps (if provided from Statamic) -->
        <div v-if="actualDetailedSteps.length > 0" class="mt-20" ref="customStepsRef">
          <h3 class="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Process in Detail
            </span>
          </h3>
          
          <div class="space-y-8">
            <div 
              v-for="(step, index) in actualDetailedSteps" 
              :key="step.letter" 
              class="bg-black/50 backdrop-blur-xl border border-cyan-400/30 rounded-xl p-8 shadow-glow relative group custom-step-card overflow-hidden"
              :data-index="index"
            >
              <!-- Holographic sweep effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <div class="relative flex items-start space-x-6">
                <!-- Futuristic Step Circle -->
                <div class="flex-shrink-0 relative">
                  <div class="w-16 h-16 bg-black border-2 border-cyan-400/50 rounded-xl flex items-center justify-center text-cyan-400 text-xl font-bold shadow-glow font-mono group-hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                    <span class="relative z-10">{{ step.letter }}</span>
                    
                    <!-- Inner glow -->
                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <!-- Corner brackets -->
                    <div class="absolute top-0.5 left-0.5 w-2 h-2 border-l border-t border-cyan-400"></div>
                    <div class="absolute top-0.5 right-0.5 w-2 h-2 border-r border-t border-cyan-400"></div>
                    <div class="absolute bottom-0.5 left-0.5 w-2 h-2 border-l border-b border-cyan-400"></div>
                    <div class="absolute bottom-0.5 right-0.5 w-2 h-2 border-r border-b border-cyan-400"></div>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="flex-grow relative">
                  <h4 class="text-xl lg:text-2xl font-bold text-white mb-4 font-mono tracking-wide group-hover:text-cyan-300 transition-colors duration-300">{{ step.title }}</h4>
                  <p class="text-gray-300 mb-6 font-mono leading-relaxed group-hover:text-cyan-100 transition-colors duration-300">{{ step.description }}</p>
                  
                  <!-- Duration badge -->
                  <div v-if="step.duration" class="inline-flex items-center px-4 py-2 bg-black/60 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-sm font-mono uppercase tracking-wider rounded-lg hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 relative overflow-hidden">
                    <!-- Badge glow background -->
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <Icon name="clock" class="mr-2 relative z-10" size="xs" />
                    <span class="relative z-10">{{ step.duration }}</span>
                    
                    <!-- Corner accents -->
                    <div class="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400"></div>
                    <div class="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-cyan-400"></div>
                  </div>
                </div>
              </div>
              
              <!-- Card border glow effect -->
              <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div v-if="shouldShowCta" class="text-center mt-20" ref="ctaSectionRef">
          <div class="bg-black/50 backdrop-blur-xl border border-cyan-400/30 rounded-xl p-12">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-mono tracking-wide">
                {{ actualCtaTitle }}
              </span>
            </h3>
            <p v-if="actualCtaSubtitle" class="text-gray-300 mb-8 max-w-2xl mx-auto font-mono text-lg leading-relaxed">
              {{ actualCtaSubtitle }}
            </p>
            
            <BaseButton 
              :href="actualCtaButtonUrl" 
              variant="primary" 
              size="xl"
              icon-right="arrow-right"
            >
              {{ actualCtaButtonText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '../ui/BaseButton.vue'
import Icon from '../ui/Icon.vue'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Template refs
const sectionRef = ref(null)
const headerRef = ref(null)
const stepsGridRef = ref(null)
const customStepsRef = ref(null)
const ctaSectionRef = ref(null)

const props = defineProps({
  title: {
    type: String,
    default: 'The SMART Process'
  },
  subtitle: {
    type: String,
    default: 'Our proven methodology for delivering exceptional results'
  },
  default_steps: {
    type: Array,
    default: () => []
  },
  defaultSteps: {
    type: Array,
    default: () => []
  },
  detailed_steps: {
    type: Array,
    default: () => []
  },
  detailedSteps: {
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

// Computed properties to handle both naming conventions
const actualDefaultSteps = computed(() => {
  return props.default_steps?.length ? props.default_steps : props.defaultSteps || []
})

const actualDetailedSteps = computed(() => {
  return props.detailed_steps?.length ? props.detailed_steps : props.detailedSteps || []
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

// Helper method to get futuristic step classes 
const getSmartStepClasses = (color, index) => {
  const colors = {
    primary: 'border-cyan-400 text-cyan-400 hover:border-cyan-300',
    blue: 'border-blue-400 text-blue-400 hover:border-blue-300',
    green: 'border-green-400 text-green-400 hover:border-green-300',
    orange: 'border-orange-400 text-orange-400 hover:border-orange-300',
    accent: 'border-purple-400 text-purple-400 hover:border-purple-300',
    purple: 'border-purple-400 text-purple-400 hover:border-purple-300'
  }
  
  // Extract color value if it's an object (from Statamic)
  let colorValue = color
  if (color && typeof color === 'object' && color.value) {
    colorValue = color.value
  }
  
  // Fallback to default progression for hardcoded steps
  if (!colorValue) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    colorValue = fallbackColors[index % fallbackColors.length]
  }
  
  return colors[colorValue] || colors.primary
}

// Helper method to get step gradient overlay
const getStepGradient = (color, index) => {
  const gradients = {
    primary: 'from-cyan-400/30 to-blue-500/30',
    blue: 'from-blue-400/30 to-cyan-500/30',
    green: 'from-green-400/30 to-emerald-500/30',
    orange: 'from-orange-400/30 to-amber-500/30',
    accent: 'from-purple-400/30 to-pink-500/30',
    purple: 'from-purple-400/30 to-indigo-500/30'
  }
  
  // Extract color value if it's an object (from Statamic)
  let colorValue = color
  if (color && typeof color === 'object' && color.value) {
    colorValue = color.value
  }
  
  if (!colorValue) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    colorValue = fallbackColors[index % fallbackColors.length]
  }
  
  return gradients[colorValue] || gradients.primary
}

// Legacy helper (keeping for compatibility)
const getStepColorClasses = (color, index) => {
  return getSmartStepClasses(color, index)
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

// GSAP Animations
onMounted(() => {
  if (!sectionRef.value) return

  nextTick(() => {
    const ctx = gsap.context(() => {
      // Animate section header with elegant entrance
      if (headerRef.value) {
        const headerElements = [
          headerRef.value.querySelector('h2 span:first-child'),
          headerRef.value.querySelector('p'),
          headerRef.value.querySelector('.flex') // decorative elements
        ].filter(Boolean)

        gsap.fromTo(headerElements, 
          { opacity: 0, y: 60, rotationX: 45 }, 
          { 
            opacity: 1, 
            y: 0, 
            rotationX: 0,
            duration: 0.8, 
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.value,
              start: "top 80%",
              once: true
            }
          }
        )
      }

      // Animate default steps grid
      if (stepsGridRef.value) {
        const stepItems = stepsGridRef.value.querySelectorAll('.step-item')
        gsap.fromTo(stepItems,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: stepsGridRef.value,
              start: "top 85%",
              once: true
            }
          }
        )

        // Add hover effects for step containers
        stepItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.smart-step-container'), { 
              scale: 1.1, 
              duration: 0.3, 
              ease: "power2.out" 
            })
          })
          item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.smart-step-container'), { 
              scale: 1, 
              duration: 0.3, 
              ease: "power2.out" 
            })
          })
        })
      }

      // Animate custom steps
      if (customStepsRef.value) {
        const customStepCards = customStepsRef.value.querySelectorAll('.custom-step-card')
        gsap.fromTo(customStepCards,
          { opacity: 0, x: -50, rotationY: -15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: customStepsRef.value,
              start: "top 85%",
              once: true
            }
          }
        )
      }

      // Animate CTA section
      if (ctaSectionRef.value) {
        gsap.fromTo(ctaSectionRef.value,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaSectionRef.value,
              start: "top 85%",
              once: true
            }
          }
        )
      }


      // CTA button hover animation
      const ctaBtn = document.querySelector('.cyberpunk-btn-smart')
      if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', () => {
          gsap.to(ctaBtn, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
        })
        
        ctaBtn.addEventListener('mouseleave', () => {
          gsap.to(ctaBtn, { scale: 1, duration: 0.3, ease: 'power2.out' })
        })
      }
    }, sectionRef.value)

    // Cleanup on unmount
    return () => {
      ctx.revert()
    }
  })
})
</script>

<style scoped>
/* Cyber Grid Background */
.cyber-grid-smart {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.15) 2px, transparent 2px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.15) 2px, transparent 2px),
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 80px 80px, 80px 80px, 20px 20px, 20px 20px;
  animation: grid-move-smart 25s linear infinite;
}

@keyframes grid-move-smart {
  0% { transform: translate(0, 0); }
  100% { transform: translate(80px, 80px); }
}

/* Enhanced Matrix Rain Effect */
.matrix-rain-smart {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 25px,
      rgba(6, 182, 212, 0.08) 26px,
      rgba(6, 182, 212, 0.08) 27px,
      transparent 28px,
      transparent 50px,
      rgba(59, 130, 246, 0.06) 51px,
      rgba(59, 130, 246, 0.06) 52px,
      transparent 53px
    );
  animation: matrix-fall-smart 10s linear infinite;
}

.matrix-rain-smart-2 {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 40px,
      rgba(168, 85, 247, 0.05) 41px,
      rgba(168, 85, 247, 0.05) 42px,
      transparent 43px,
      transparent 80px,
      rgba(236, 72, 153, 0.04) 81px,
      rgba(236, 72, 153, 0.04) 82px,
      transparent 83px
    );
  animation: matrix-fall-smart-2 14s linear infinite;
}

@keyframes matrix-fall-smart {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes matrix-fall-smart-2 {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}

/* Futuristic Animations */
.animation-delay-1s { animation-delay: 1s; }
.animation-delay-2s { animation-delay: 2s; }
.animation-delay-3s { animation-delay: 3s; }
.animation-delay-4s { animation-delay: 4s; }
.animation-delay-5s { animation-delay: 5s; }
.animation-delay-6s { animation-delay: 6s; }
.animation-delay-7s { animation-delay: 7s; }
.animation-delay-200ms { animation-delay: 0.2s; }
.animation-delay-400ms { animation-delay: 0.4s; }
.animation-delay-600ms { animation-delay: 0.6s; }
.animation-delay-800ms { animation-delay: 0.8s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes scan-horizontal {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
}

@keyframes scan-horizontal-full {
  0% { transform: translateX(0%); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { transform: translateX(200vw); opacity: 0; }
}

@keyframes scan-vertical {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes scan-vertical-full {
  0% { transform: translateY(0%); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { transform: translateY(200vh); opacity: 0; }
}

@keyframes scan-progress {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

@keyframes scan-progress-full {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(calc(100vw)); }
}

.animate-float { animation: float 4s ease-in-out infinite; }
.animate-scan-horizontal { animation: scan-horizontal 6s linear infinite; }
.animate-scan-horizontal-full { animation: scan-horizontal-full 12s linear infinite; }
.animate-scan-vertical { animation: scan-vertical 8s linear infinite; }
.animate-scan-vertical-full { animation: scan-vertical-full 10s linear infinite; }
.animate-scan-progress { animation: scan-progress 3s linear infinite; }
.animate-scan-progress-full { animation: scan-progress-full 4s linear infinite; }


/* Enhanced Shadow Effects */
.shadow-glow {
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1);
}

.shadow-glow:hover {
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2);
}

/* Step Container Effects */
.smart-step-container {
  position: relative;
  filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.3));
}

.smart-step-container:hover {
  filter: drop-shadow(0 0 25px rgba(6, 182, 212, 0.5));
}

.smart-outer-ring {
  transform: scale(1.2);
}

.smart-outer-ring-2 {
  transform: scale(1.4);
}

.smart-progress-line {
  background: linear-gradient(90deg, 
    rgba(6, 182, 212, 0.8) 0%, 
    rgba(59, 130, 246, 0.8) 50%, 
    rgba(168, 85, 247, 0.8) 100%);
}

/* Step Item Hover Effects */
.step-item:hover .smart-step-container {
  animation: step-glow 2s ease-in-out infinite;
}

@keyframes step-glow {
  0%, 100% { 
    filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.3));
  }
  50% { 
    filter: drop-shadow(0 0 30px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.3));
  }
}

/* Custom Step Cards */
.custom-step-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.custom-step-card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: rgba(6, 182, 212, 0.5) !important;
  box-shadow: 
    0 20px 40px rgba(6, 182, 212, 0.15),
    0 10px 20px rgba(0,0,0,0.2),
    inset 0 1px 0 rgba(255,255,255,0.1) !important;
  backdrop-filter: blur(25px) !important;
}

/* Cyberpunk Button Effects */
.cyberpunk-btn-smart {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cyberpunk-btn-smart::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.4), transparent);
  transition: left 0.6s;
  z-index: 1;
}

.cyberpunk-btn-smart:hover::before {
  left: 100%;
}

.cyberpunk-btn-smart:hover {
  box-shadow: 
    0 0 30px rgba(6, 182, 212, 0.8),
    0 0 60px rgba(6, 182, 212, 0.4),
    inset 0 0 20px rgba(6, 182, 212, 0.1);
  text-shadow: 0 0 10px currentColor;
}

/* Enhanced Pulse Animation */
@keyframes pulse-enhanced {
  0%, 100% { 
    opacity: 0.6; 
    transform: scale(1);
  }
  50% { 
    opacity: 1; 
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse-enhanced 3s ease-in-out infinite;
}

/* Holographic Effects */
.holographic-sweep {
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(6, 182, 212, 0.1) 50%,
    transparent 70%
  );
  background-size: 200% 200%;
  animation: holographic-sweep 4s ease-in-out infinite;
}

@keyframes holographic-sweep {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Badge Glow Effects */
.badge-glow {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255,255,255,0.2);
  animation: badge-glow 3s ease-in-out infinite;
}

@keyframes badge-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255,255,255,0.2);
  }
  50% { 
    box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), inset 0 1px 0 rgba(255,255,255,0.3);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .cyber-grid-smart {
    background-size: 40px 40px, 40px 40px, 10px 10px, 10px 10px;
  }
  
  .matrix-rain-smart {
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      rgba(6, 182, 212, 0.05) 21px,
      transparent 22px
    );
  }
  
  .smart-step-container {
    width: 20px !important;
    height: 20px !important;
  }
}

/* Improved text readability */
.step-item h3,
.step-item p,
.custom-step-card h4,
.custom-step-card p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Ensure proper z-index stacking */
.step-item {
  position: relative;
  z-index: 10;
}

.custom-step-card {
  position: relative;
  z-index: 10;
}
</style>
