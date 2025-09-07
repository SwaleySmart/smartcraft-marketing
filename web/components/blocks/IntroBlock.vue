<template>
  <section class="bg-black relative overflow-hidden py-20 lg:py-24" ref="sectionRef">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="cyber-grid-intro"></div>
    </div>
    
    <!-- Enhanced Matrix Rain Effect -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div class="matrix-rain-intro"></div>
      <div class="matrix-rain-intro-2"></div>
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
      <div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scan-horizontal animation-delay-3s" />
      <div class="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan-horizontal animation-delay-7s" />
    </div>

    <div class="relative px-4 sm:px-6 md:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div class="text-center mb-16" ref="headerRef">
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

        <!-- Text and Image Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16" ref="contentGridRef">
          
          <!-- Content Side -->
          <div :class="getContentOrderClasses()">
            <!-- Bard Content -->
            <div 
              v-if="parsedContent" 
              class="prose prose-lg prose-invert max-w-none mb-8 font-mono leading-relaxed"
              v-html="parsedContent"
              ref="bardContentRef"
            ></div>

            <!-- CTA Button -->
            <BaseButton 
              v-if="shouldShowCta"
              :href="actualCtaUrl" 
              variant="primary" 
              size="lg"
              icon-right="arrow-right"
            >
              {{ actualCtaText }}
            </BaseButton>
          </div>

          <!-- Image Side -->
          <div v-if="actualImageUrl" :class="getImageOrderClasses()" ref="imageRef">
            <div class="flex justify-center lg:justify-start">
              <img 
                :src="actualImageUrl" 
                :alt="actualImageAlt"
                class="w-2/3 sm:w-1/2 lg:w-full h-auto"
              />
            </div>
          </div>
        </div>

        <!-- Features Row -->
        <div v-if="features && features.length > 0" class="mb-16" ref="featuresRef">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(feature, index) in features" 
              :key="feature.id || index"
              class="flex items-start space-x-4 group feature-item"
              :data-index="index"
            >
              <!-- Feature Icon -->
              <div class="flex-shrink-0 relative">
                <div 
                  class="w-12 h-12 rounded-lg flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                  :class="getFeatureIconClasses(feature.color, index)"
                >
                  <Icon 
                    :name="feature.icon || 'star'" 
                    size="sm" 
                    class="relative z-10 transition-colors duration-300"
                    :class="getFeatureIconColorClasses(feature.color, index)"
                  />
                  
                  <!-- Corner brackets -->
                  <div class="absolute top-0 left-0 w-2 h-2 border-l border-t opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="getFeatureBorderClasses(feature.color, index)"></div>
                  <div class="absolute top-0 right-0 w-2 h-2 border-r border-t opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="getFeatureBorderClasses(feature.color, index)"></div>
                  <div class="absolute bottom-0 left-0 w-2 h-2 border-l border-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="getFeatureBorderClasses(feature.color, index)"></div>
                  <div class="absolute bottom-0 right-0 w-2 h-2 border-r border-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="getFeatureBorderClasses(feature.color, index)"></div>
                </div>
              </div>
              
              <!-- Feature Content -->
              <div class="flex-grow">
                <h3 class="text-lg lg:text-xl font-bold text-white mb-2 font-mono tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-300 font-mono text-sm lg:text-base leading-relaxed group-hover:text-cyan-100 transition-colors duration-300">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics Row -->
        <div v-if="stats && stats.length > 0" class="mb-16" ref="statsRef">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.id || index"
              class="text-center p-6 bg-black/50 backdrop-blur-xl border border-cyan-400/30 rounded-lg stat-item group"
              :data-index="index"
            >
              <div class="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2 font-mono">
                {{ stat.number }}<span v-if="stat.suffix" class="text-lg">{{ stat.suffix }}</span>
              </div>
              <div class="text-gray-300 text-sm font-mono uppercase tracking-wider">{{ stat.label }}</div>
            </div>
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
const contentGridRef = ref(null)
const bardContentRef = ref(null)
const featuresRef = ref(null)
const statsRef = ref(null)
const imageRef = ref(null)

// Get runtime config for CMS base URL
const { $config } = useNuxtApp()
const config = useRuntimeConfig()

const props = defineProps({
  title: {
    type: String,
    default: 'The Anti-Agency'
  },
  subtitle: {
    type: String,
    default: 'AI-native studio delivering enterprise results at agency prices'
  },
  content: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  },
  image: {
    type: Object,
    default: null
  },
  image_position: {
    type: String,
    default: 'right'
  },
  imagePosition: {
    type: String,
    default: 'right'
  },
  stats: {
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
  cta_text: {
    type: String,
    default: 'Discover the Difference'
  },
  ctaText: {
    type: String,
    default: 'Discover the Difference'
  },
  cta_url: {
    type: String,
    default: '/about'
  },
  ctaUrl: {
    type: String,
    default: '/about'
  }
})

// Computed properties
const actualImagePosition = computed(() => {
  return props.image_position || props.imagePosition || 'right'
})

const shouldShowCta = computed(() => {
  return props.show_cta ?? props.showCta ?? true
})

const actualCtaText = computed(() => {
  return props.cta_text || props.ctaText || 'Discover the Difference'
})

const actualCtaUrl = computed(() => {
  return props.cta_url || props.ctaUrl || '/about'
})

// Handle both string and object image formats from Statamic
const actualImageUrl = computed(() => {
  if (!props.image) return null
  
  // If image is a string (file path from Statamic)
  if (typeof props.image === 'string') {
    // If it's already a full URL, return as-is
    if (props.image.startsWith('http')) {
      return props.image
    }
    
    // Prepend CMS base URL for relative paths
    return `${config.public.cmsBaseUrl}${props.image}`
  }
  
  // If image is an object with url property
  if (typeof props.image === 'object' && props.image.url) {
    // If it's already a full URL, return as-is
    if (props.image.url.startsWith('http')) {
      return props.image.url
    }
    
    // Prepend CMS base URL for relative paths from GraphQL
    return `${config.public.cmsBaseUrl}${props.image.url}`
  }
  
  return null
})

const actualImageAlt = computed(() => {
  if (!props.image) return props.title
  
  // If image is an object with alt property
  if (typeof props.image === 'object' && props.image.alt) {
    return props.image.alt
  }
  
  // Fallback to title
  return props.title
})

// Parse Statamic bard content
const parsedContent = computed(() => {
  if (!props.content) return null
  
  // If content is already a string (HTML), return as-is
  if (typeof props.content === 'string') {
    return props.content
  }
  
  // If content is an array of bard blocks, parse them
  if (Array.isArray(props.content)) {
    return props.content.map(block => {
      if (block.type === 'paragraph') {
        const textContent = block.content
          .map(textNode => {
            if (textNode.type === 'text') {
              let text = textNode.text
              
              // Apply marks (bold, italic, etc.)
              if (textNode.marks) {
                textNode.marks.forEach(mark => {
                  switch (mark.type) {
                    case 'bold':
                      text = `<strong>${text}</strong>`
                      break
                    case 'italic':
                      text = `<em>${text}</em>`
                      break
                    case 'link':
                      text = `<a href="${mark.attrs.href}" target="${mark.attrs.target || '_self'}">${text}</a>`
                      break
                  }
                })
              }
              
              return text
            }
            return ''
          })
          .join('')
        
        return `<p>${textContent}</p>`
      }
      
      // Handle other block types as needed
      return ''
    }).join('')
  }
  
  return null
})

// Helper methods for layout
const getContentOrderClasses = () => {
  return actualImagePosition.value === 'left' ? 'order-2' : 'order-1'
}

const getImageOrderClasses = () => {
  return actualImagePosition.value === 'left' ? 'order-1' : 'order-2'
}

// Helper methods for feature styling
const getFeatureIconClasses = (color, index) => {
  const colors = {
    primary: 'border-cyan-400/50 bg-black group-hover:border-cyan-400 group-hover:bg-cyan-400/5',
    blue: 'border-blue-400/50 bg-black group-hover:border-blue-400 group-hover:bg-blue-400/5',
    green: 'border-green-400/50 bg-black group-hover:border-green-400 group-hover:bg-green-400/5',
    orange: 'border-orange-400/50 bg-black group-hover:border-orange-400 group-hover:bg-orange-400/5',
    accent: 'border-purple-400/50 bg-black group-hover:border-purple-400 group-hover:bg-purple-400/5',
    purple: 'border-purple-400/50 bg-black group-hover:border-purple-400 group-hover:bg-purple-400/5',
    pink: 'border-pink-400/50 bg-black group-hover:border-pink-400 group-hover:bg-pink-400/5'
  }
  
  if (!color) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    color = fallbackColors[index % fallbackColors.length]
  }
  
  return colors[color] || colors.primary
}

const getFeatureIconColorClasses = (color, index) => {
  const colors = {
    primary: 'text-cyan-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
    accent: 'text-purple-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  }
  
  if (!color) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    color = fallbackColors[index % fallbackColors.length]
  }
  
  return colors[color] || colors.primary
}

const getFeatureBorderClasses = (color, index) => {
  const colors = {
    primary: 'border-cyan-400',
    blue: 'border-blue-400',
    green: 'border-green-400',
    orange: 'border-orange-400',
    accent: 'border-purple-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400'
  }
  
  if (!color) {
    const fallbackColors = ['primary', 'blue', 'green', 'orange', 'accent']
    color = fallbackColors[index % fallbackColors.length]
  }
  
  return colors[color] || colors.primary
}

// GSAP Animations
onMounted(() => {
  if (!sectionRef.value) return

  nextTick(() => {
    const ctx = gsap.context(() => {
      // Animate section header
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

      // Animate content grid
      if (contentGridRef.value) {
        gsap.fromTo(contentGridRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentGridRef.value,
              start: "top 85%",
              once: true
            }
          }
        )
      }

      // Animate features
      if (featuresRef.value) {
        const featureItems = featuresRef.value.querySelectorAll('.feature-item')
        gsap.fromTo(featureItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.value,
              start: "top 85%",
              once: true
            }
          }
        )
      }

      // Animate stats
      if (statsRef.value) {
        const statItems = statsRef.value.querySelectorAll('.stat-item')
        gsap.fromTo(statItems,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.value,
              start: "top 85%",
              once: true
            }
          }
        )
      }

      // Animate image
      if (imageRef.value) {
        gsap.fromTo(imageRef.value,
          { opacity: 0, scale: 0.9, rotationY: actualImagePosition.value === 'left' ? -15 : 15 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.value,
              start: "top 85%",
              once: true
            }
          }
        )
      }

      // CTA button hover animation
      const ctaBtn = document.querySelector('.cyberpunk-btn-intro')
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
.cyber-grid-intro {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.1) 2px, transparent 2px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 2px, transparent 2px),
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 25px 25px, 25px 25px;
  animation: grid-move-intro 30s linear infinite;
}

@keyframes grid-move-intro {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}

/* Matrix Rain Effect */
.matrix-rain-intro {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 30px,
      rgba(6, 182, 212, 0.06) 31px,
      rgba(6, 182, 212, 0.06) 32px,
      transparent 33px,
      transparent 60px,
      rgba(59, 130, 246, 0.04) 61px,
      rgba(59, 130, 246, 0.04) 62px,
      transparent 63px
    );
  animation: matrix-fall-intro 12s linear infinite;
}

.matrix-rain-intro-2 {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 45px,
      rgba(168, 85, 247, 0.04) 46px,
      rgba(168, 85, 247, 0.04) 47px,
      transparent 48px,
      transparent 90px,
      rgba(236, 72, 153, 0.03) 91px,
      rgba(236, 72, 153, 0.03) 92px,
      transparent 93px
    );
  animation: matrix-fall-intro-2 16s linear infinite;
}

@keyframes matrix-fall-intro {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes matrix-fall-intro-2 {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}

/* Animations */
.animation-delay-1s { animation-delay: 1s; }
.animation-delay-2s { animation-delay: 2s; }
.animation-delay-3s { animation-delay: 3s; }
.animation-delay-4s { animation-delay: 4s; }
.animation-delay-5s { animation-delay: 5s; }
.animation-delay-6s { animation-delay: 6s; }
.animation-delay-7s { animation-delay: 7s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes scan-horizontal {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
}

.animate-float { animation: float 4s ease-in-out infinite; }
.animate-scan-horizontal { animation: scan-horizontal 8s linear infinite; }

/* Shadow Effects */
.shadow-glow {
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1);
}

.shadow-glow:hover {
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2);
}

/* Cyberpunk Button Effects */
.cyberpunk-btn-intro {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cyberpunk-btn-intro::before {
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

.cyberpunk-btn-intro:hover::before {
  left: 100%;
}

.cyberpunk-btn-intro:hover {
  box-shadow: 
    0 0 30px rgba(6, 182, 212, 0.8),
    0 0 60px rgba(6, 182, 212, 0.4),
    inset 0 0 20px rgba(6, 182, 212, 0.1);
  text-shadow: 0 0 10px currentColor;
}

/* Stat Items */
.stat-item {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.stat-item:hover {
  transform: translateY(-2px) scale(1.02);
  border-color: rgba(6, 182, 212, 0.5) !important;
  box-shadow: 
    0 10px 25px rgba(6, 182, 212, 0.15),
    0 5px 10px rgba(0,0,0,0.2),
    inset 0 1px 0 rgba(255,255,255,0.1) !important;
}

/* Prose styling for bard content */
.prose-invert {
  color: rgb(209 213 219);
}

.prose-invert h1,
.prose-invert h2,
.prose-invert h3,
.prose-invert h4 {
  color: rgb(255 255 255);
}

.prose-invert strong {
  color: rgb(6 182 212);
}

.prose-invert a {
  color: rgb(6 182 212);
  text-decoration: none;
}

.prose-invert a:hover {
  color: rgb(34 211 238);
  text-decoration: underline;
}

.prose-invert ul,
.prose-invert ol {
  color: rgb(209 213 219);
}

.prose-invert blockquote {
  border-left: 4px solid rgb(6 182 212);
  background: rgba(6, 182, 212, 0.1);
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .cyber-grid-intro {
    background-size: 50px 50px, 50px 50px, 12px 12px, 12px 12px;
  }
}
</style>