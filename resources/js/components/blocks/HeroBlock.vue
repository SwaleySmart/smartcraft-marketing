<template>
  <section :class="sectionClasses" ref="heroRef">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="cyber-grid-hero opacity-20"></div>
    </div>
    
    <!-- Enhanced Matrix Rain Effect -->
    <div class="absolute inset-0 overflow-hidden opacity-40">
      <div class="matrix-rain"></div>
      <div class="matrix-rain-2"></div>
      <div class="matrix-rain-3"></div>
    </div>
    
    <!-- Futuristic Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Large Glowing Orbs -->
      <div class="absolute -top-64 -right-64 w-96 h-96 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute -bottom-64 -left-64 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-3s" />
      
      <!-- Rotating Elements -->
      <div class="absolute top-1/4 right-1/4 w-64 h-64 border border-cyan-400/30 rounded-full animate-spin-slow" />
      <div class="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-blue-500/20 border-dashed rounded-full animate-spin-reverse" />
      
      <!-- Enhanced Floating Data Nodes -->
      <div class="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-80" />
      <div class="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-float animation-delay-1s" />
      <div class="absolute bottom-32 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-2s" />
      <div class="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-3s" />
      <div class="absolute top-1/3 left-10 w-1.5 h-1.5 bg-green-400 rounded-full animate-float animation-delay-4s" />
      <div class="absolute top-1/2 right-10 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-float animation-delay-1.5s" />
      <div class="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-float animation-delay-5s" />
      <div class="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float animation-delay-2.5s" />
      <div class="absolute top-16 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-float animation-delay-3.5s" />
      <div class="absolute bottom-16 left-2/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-float animation-delay-4.5s" />
      
      <!-- Floating Geometric Shapes -->
      <div class="absolute top-1/4 left-1/5 w-3 h-3 border border-cyan-400/50 rotate-45 animate-float animation-delay-1s" />
      <div class="absolute bottom-1/4 right-1/5 w-2 h-2 border border-blue-400/50 animate-float animation-delay-3s" />
      <div class="absolute top-2/3 left-3/4 w-4 h-4 border border-purple-400/50 rounded-full animate-float animation-delay-2s" />
      <div class="absolute bottom-2/3 right-3/4 w-2 h-2 border border-pink-400/50 rotate-45 animate-float animation-delay-4s" />
      
      <!-- Enhanced Scanning Lines -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-horizontal" />
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-horizontal animation-delay-2s" />
      <div class="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan-horizontal animation-delay-4s" />
      <div class="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scan-horizontal animation-delay-6s" />
      <div class="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-scan-vertical" />
      <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-scan-vertical animation-delay-1s" />
      <div class="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-scan-vertical animation-delay-3s" />
      <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-scan-vertical animation-delay-5s" />
    </div>

    <!-- Content Container -->
    <div class="relative container mx-auto px-4 pt-20 pb-20 lg:pt-32 lg:pb-32 z-10">
      <div :class="contentClasses">
        <!-- Main Content -->
        <div class="text-center lg:text-left space-y-8" ref="contentRef">
          <!-- Futuristic Badge -->
          <div 
            v-if="badge" 
            class="inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-sm font-mono uppercase tracking-wider rounded-lg hero-badge relative overflow-hidden"
            ref="badgeRef"
          >
            <!-- Badge Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <Icon 
              v-if="badgeIcon"
              :name="badgeIcon" 
              size="sm" 
              class="mr-3 text-cyan-400 relative z-10"
            />
            <span class="relative z-10">{{ badge }}</span>
            
            <!-- Corner Brackets -->
            <span class="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400"></span>
            <span class="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400"></span>
            <span class="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400"></span>
            <span class="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400"></span>
          </div>

          <!-- Futuristic Main Headline -->
          <h1 :class="headlineClasses" ref="headlineRef">
            <span class="block hero-text-line">
              {{ headline }}
            </span>
            <span 
              v-if="highlightText" 
              class="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent hero-highlight-text relative"
            >
              {{ highlightText }}
              <!-- Glitch effect overlay -->
              <span class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent opacity-0 hero-glitch" aria-hidden="true">
                {{ highlightText }}
              </span>
            </span>
          </h1>

          <!-- Futuristic Subheadline -->
          <p 
            v-if="subheadline"
            :class="subheadlineClasses"
            ref="subheadlineRef"
          >
            {{ subheadline }}
          </p>

          <!-- Futuristic CTA Buttons -->
          <div 
            v-if="ctaText || secondaryCtaText"
            class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            ref="ctaRef"
          >
            <!-- Primary CTA -->
            <div v-if="ctaText" class="relative group">
              <!-- Glow Background -->
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-75 blur-sm group-hover:blur-md transition-all duration-300"></div>
              
              <BaseButton
                :href="ctaUrl"
                variant="primary"
                size="lg"
                class="relative bg-black border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400 transition-all duration-300 font-mono tracking-wider uppercase text-sm cyberpunk-btn-hero px-8 py-4"
              >
                <span class="relative z-10 flex items-center">
                  {{ ctaText }}
                  <Icon 
                    :name="ctaIcon || 'arrow-right'" 
                    size="sm" 
                    class="ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </span>
                
                <!-- Corner Brackets -->
                <span class="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></span>
                <span class="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></span>
                <span class="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></span>
                <span class="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></span>
              </BaseButton>
            </div>
            
            <!-- Secondary CTA -->
            <div v-if="secondaryCtaText" class="relative group">
              <BaseButton
                :href="secondaryCtaUrl"
                variant="outline"
                size="lg"
                class="bg-transparent border-2 border-gray-500 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-mono tracking-wider uppercase text-sm px-8 py-4 relative overflow-hidden"
              >
                <!-- Hover scan effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <span class="relative z-10 flex items-center">
                  <Icon 
                    v-if="secondaryCtaIcon"
                    :name="secondaryCtaIcon" 
                    size="sm" 
                    class="mr-3" 
                  />
                  {{ secondaryCtaText }}
                </span>
              </BaseButton>
            </div>
          </div>

          <!-- Futuristic Trust Indicators -->
          <div 
            v-if="trustIndicators && trustIndicators.length"
            class="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-12"
            ref="trustRef"
          >
            <span class="text-sm text-cyan-400/80 font-mono uppercase tracking-wider">
              {{ trustLabel || 'Powered by:' }}
            </span>
            <div class="flex flex-wrap gap-6">
              <div 
                v-for="(indicator, index) in trustIndicators" 
                :key="indicator.name"
                class="flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-sm border border-cyan-400/20 rounded-lg trust-indicator transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <div class="relative">
                  <Icon 
                    v-if="indicator.icon" 
                    :name="indicator.icon" 
                    size="sm" 
                    class="text-cyan-400"
                  />
                  <!-- Pulsing dot -->
                  <div class="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <span class="text-sm text-gray-300 font-mono">{{ indicator.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Enhanced Futuristic Scroll Indicator -->
      <div 
        v-if="showScrollIndicator"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        ref="scrollIndicatorRef"
      >
        <div class="relative group cursor-pointer scroll-indicator-container">
          <!-- Outer Pulsing Ring -->
          <div class="absolute w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-ping"></div>
          <div class="absolute w-20 h-20 border border-cyan-400/10 rounded-full animate-pulse animation-delay-1s"></div>
          
          <!-- Main Ring -->
          <div class="relative w-12 h-12 border-2 border-cyan-400/60 rounded-full group-hover:border-cyan-400 transition-all duration-300 bg-black/30 backdrop-blur-sm">
            <!-- Inner Ring -->
            <div class="w-8 h-8 border border-cyan-400/80 rounded-full m-1.5 group-hover:border-cyan-400 transition-colors duration-300 animate-pulse">
              <!-- Glowing Center Dot -->
              <div class="w-2 h-2 bg-cyan-400 rounded-full m-2.5 animate-pulse shadow-glow-small"></div>
            </div>
          </div>
          
          <!-- Animated Arrow -->
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon 
              name="chevron-down" 
              size="lg" 
              class="text-cyan-400 group-hover:text-white transition-colors duration-300 animate-bounce drop-shadow-glow" 
            />
          </div>
          
          <!-- Multiple Scan Lines -->
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-horizontal"></div>
          <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-horizontal animation-delay-2s"></div>
          <div class="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-scan-vertical"></div>
          <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-scan-vertical animation-delay-1s"></div>
          
          <!-- Text Label -->
          <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400/60 font-mono uppercase tracking-wider whitespace-nowrap">
            Scroll Down
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import Icon from '../ui/Icon.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Template refs
const heroRef = ref(null)
const contentRef = ref(null)
const badgeRef = ref(null)
const headlineRef = ref(null)
const subheadlineRef = ref(null)
const ctaRef = ref(null)
const trustRef = ref(null)
const scrollIndicatorRef = ref(null)

const props = defineProps({
  headline: {
    type: String,
    required: true
  },
  highlightText: {
    type: String,
    default: null
  },
  subheadline: {
    type: String,
    default: null
  },
  ctaText: {
    type: String,
    default: null
  },
  ctaUrl: {
    type: String,
    default: null
  },
  ctaIcon: {
    type: String,
    default: null
  },
  secondaryCtaText: {
    type: String,
    default: null
  },
  secondaryCtaUrl: {
    type: String,
    default: null
  },
  secondaryCtaIcon: {
    type: String,
    default: null
  },
  backgroundStyle: {
    type: String,
    default: 'gradient',
    validator: (value) => ['gradient', 'image', 'solid'].includes(value)
  },
  backgroundImage: {
    type: Object,
    default: null
  },
  styleVariant: {
    type: String,
    default: 'standard',
    validator: (value) => ['standard', 'minimal', 'bold'].includes(value)
  },
  badge: {
    type: String,
    default: null
  },
  badgeIcon: {
    type: String,
    default: null
  },
  visualElement: {
    type: Object,
    default: null
  },
  trustIndicators: {
    type: Array,
    default: () => []
  },
  trustLabel: {
    type: String,
    default: 'Trusted by:'
  },
  showScrollIndicator: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['playVideo'])

const sectionClasses = computed(() => [
  'relative min-h-screen flex items-center overflow-hidden bg-black text-white'
])

const contentClasses = computed(() => [
  'grid gap-16 items-center max-w-6xl mx-auto'
])

const headlineClasses = computed(() => [
  'font-bold leading-tight tracking-tight text-white',
  {
    // Size variants
    'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl': props.styleVariant === 'standard',
    'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl': props.styleVariant === 'minimal', 
    'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl': props.styleVariant === 'bold'
  }
])

const subheadlineClasses = computed(() => [
  'text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl text-gray-300'
])

const playVideo = () => {
  emit('playVideo', props.visualElement)
}

// GSAP Animations
onMounted(() => {
  nextTick(() => {
    // Create master timeline
    const tl = gsap.timeline()
    
    // Badge animation
    if (badgeRef.value) {
      tl.fromTo(badgeRef.value, 
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )
    }
    
    // Headline animation with stagger for each word
    if (headlineRef.value) {
      const headlines = headlineRef.value.querySelectorAll('.hero-text-line, .hero-highlight-text')
      tl.fromTo(headlines, 
        { y: 60, opacity: 0, rotationX: 45 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out' 
        }, '-=0.3'
      )
    }
    
    // Subheadline animation
    if (subheadlineRef.value) {
      tl.fromTo(subheadlineRef.value, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4'
      )
    }
    
    // CTA buttons animation
    if (ctaRef.value) {
      const buttons = ctaRef.value.querySelectorAll('div')
      tl.fromTo(buttons, 
        { y: 40, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'back.out(1.3)' 
        }, '-=0.3'
      )
    }
    
    // Trust indicators animation
    if (trustRef.value) {
      const indicators = trustRef.value.querySelectorAll('.trust-indicator')
      tl.fromTo(indicators, 
        { y: 20, opacity: 0, x: -20 },
        { 
          y: 0, 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: 'power2.out' 
        }, '-=0.2'
      )
    }
    
    // Scroll indicator animation
    if (scrollIndicatorRef.value) {
      tl.fromTo(scrollIndicatorRef.value, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.5'
      )
    }
    
    // Enhanced glitch effect for highlight text
    const glitchElements = document.querySelectorAll('.hero-glitch')
    glitchElements.forEach((element, index) => {
      // Random glitch animation
      gsap.to(element, {
        opacity: 1,
        x: gsap.utils.random(-3, 3),
        y: gsap.utils.random(-2, 2),
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: gsap.utils.random(3, 8),
        ease: 'power2.inOut'
      })
      
      // Color shift effect
      gsap.to(element, {
        filter: 'hue-rotate(180deg)',
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        repeatDelay: gsap.utils.random(4, 10),
        ease: 'power2.inOut'
      })
    })
    
    // Add periodic intense glitch to main highlight text
    const mainHighlight = document.querySelector('.hero-highlight-text')
    if (mainHighlight) {
      gsap.to(mainHighlight, {
        x: gsap.utils.random(-5, 5),
        duration: 0.05,
        repeat: 3,
        yoyo: true,
        repeatDelay: gsap.utils.random(5, 12),
        ease: 'power2.inOut',
        onComplete: function() {
          gsap.set(mainHighlight, { x: 0 })
        }
      })
    }
    
    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: heroRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.to('.cyber-grid-hero', {
          y: progress * 50,
          duration: 0.3
        })
        
        gsap.to('.matrix-rain', {
          y: progress * -30,
          duration: 0.3
        })
      }
    })
    
    // Button hover effects
    document.querySelectorAll('.cyberpunk-btn-hero').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      })
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })
  })
})
</script>

<style scoped>
/* Cyber Grid Background */
.cyber-grid-hero {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.15) 2px, transparent 2px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.15) 2px, transparent 2px),
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  animation: grid-move-hero 30s linear infinite;
}

@keyframes grid-move-hero {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}

/* Enhanced Matrix Rain Effect */
.matrix-rain {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      rgba(0, 255, 255, 0.1) 21px,
      rgba(0, 255, 255, 0.1) 22px,
      transparent 23px,
      transparent 40px,
      rgba(59, 130, 246, 0.08) 41px,
      rgba(59, 130, 246, 0.08) 42px,
      transparent 43px
    );
  animation: matrix-fall 8s linear infinite;
}

.matrix-rain-2 {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 35px,
      rgba(168, 85, 247, 0.06) 36px,
      rgba(168, 85, 247, 0.06) 37px,
      transparent 38px,
      transparent 70px,
      rgba(236, 72, 153, 0.05) 71px,
      rgba(236, 72, 153, 0.05) 72px,
      transparent 73px
    );
  animation: matrix-fall-2 12s linear infinite;
}

.matrix-rain-3 {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 55px,
      rgba(34, 197, 94, 0.04) 56px,
      rgba(34, 197, 94, 0.04) 57px,
      transparent 58px,
      transparent 90px,
      rgba(251, 191, 36, 0.03) 91px,
      rgba(251, 191, 36, 0.03) 92px,
      transparent 93px
    );
  animation: matrix-fall-3 15s linear infinite;
}

@keyframes matrix-fall {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes matrix-fall-2 {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
}

@keyframes matrix-fall-3 {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(150%); }
}

/* Futuristic Animations */
.animation-delay-1s { animation-delay: 1s; }
.animation-delay-1\.5s { animation-delay: 1.5s; }
.animation-delay-2s { animation-delay: 2s; }
.animation-delay-2\.5s { animation-delay: 2.5s; }
.animation-delay-3s { animation-delay: 3s; }
.animation-delay-3\.5s { animation-delay: 3.5s; }
.animation-delay-4s { animation-delay: 4s; }
.animation-delay-4\.5s { animation-delay: 4.5s; }
.animation-delay-5s { animation-delay: 5s; }
.animation-delay-6s { animation-delay: 6s; }

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes scan-horizontal {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
}

@keyframes scan-vertical {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

.animate-spin-slow { animation: spin-slow 20s linear infinite; }
.animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-scan-horizontal { animation: scan-horizontal 4s linear infinite; }
.animate-scan-vertical { animation: scan-vertical 6s linear infinite; }

/* Cyberpunk Button Effects */
.cyberpunk-btn-hero {
  position: relative;
  overflow: hidden;
}

.cyberpunk-btn-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent);
  transition: left 0.6s;
}

.cyberpunk-btn-hero:hover::before {
  left: 100%;
}

/* Hero Text Effects */
.hero-badge {
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.hero-text-line {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.hero-highlight-text {
  animation: text-glow 2s ease-in-out infinite alternate;
}

.hero-glitch {
  animation: glitch 0.3s linear infinite;
}

@keyframes text-glow {
  from {
    text-shadow: 0 0 20px #06b6d4, 0 0 30px #06b6d4, 0 0 40px #06b6d4;
  }
  to {
    text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6;
  }
}

@keyframes glitch {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-1px); }
  40% { transform: translateX(1px); }
  50% { transform: translateX(-2px); }
  60% { transform: translateX(2px); }
  70% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
  90% { transform: translateX(-2px); }
}

/* Trust Indicators */
.trust-indicator {
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
}

/* Scroll Indicator Effects */
.scroll-indicator-container {
  filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.6));
}

.shadow-glow-small {
  box-shadow: 0 0 10px currentColor;
}

.drop-shadow-glow {
  filter: drop-shadow(0 0 8px currentColor);
}

/* Enhanced Glitch Effects */
.hero-glitch {
  animation: glitch-intense 0.3s linear infinite;
}

@keyframes glitch-intense {
  0%, 100% { 
    transform: translateX(0);
    filter: hue-rotate(0deg);
  }
  10% { 
    transform: translateX(-3px) translateY(1px);
    filter: hue-rotate(90deg);
  }
  20% { 
    transform: translateX(3px) translateY(-1px);
    filter: hue-rotate(180deg);
  }
  30% { 
    transform: translateX(-2px) translateY(2px);
    filter: hue-rotate(270deg);
  }
  40% { 
    transform: translateX(2px) translateY(-2px);
    filter: hue-rotate(360deg);
  }
  50% { 
    transform: translateX(-4px) translateY(1px);
    filter: hue-rotate(45deg);
  }
  60% { 
    transform: translateX(4px) translateY(-1px);
    filter: hue-rotate(135deg);
  }
  70% { 
    transform: translateX(-1px) translateY(3px);
    filter: hue-rotate(225deg);
  }
  80% { 
    transform: translateX(1px) translateY(-3px);
    filter: hue-rotate(315deg);
  }
  90% { 
    transform: translateX(-5px) translateY(0px);
    filter: hue-rotate(180deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .cyber-grid-hero {
    background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  }
  
  .matrix-rain {
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 48px,
      rgba(0, 255, 255, 0.03) 50px
    );
  }
}
</style>
