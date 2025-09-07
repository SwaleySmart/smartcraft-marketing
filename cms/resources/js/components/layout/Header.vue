<template>
  <header :class="headerClasses" ref="headerRef">
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="cyber-grid"></div>
    </div>
    
    <!-- Glow Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-32 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
      <div class="absolute top-0 right-1/4 w-96 h-32 bg-gradient-to-l from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex items-center" ref="logoRef">
          <Link 
            :href="homeUrl" 
            class="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <!-- Futuristic Logo Container -->
            <div class="relative">
              <!-- Outer Glow Ring -->
              <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <!-- Inner Container -->
              <div class="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-xl border border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300 transform group-hover:rotate-3">
                <Icon name="rocket-launch" class="text-cyan-400 group-hover:text-white transition-colors duration-300" size="lg" />
              </div>
              <!-- Corner Accents -->
              <div class="absolute -top-0.5 -left-0.5 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -top-0.5 -right-0.5 w-3 h-3 border-r-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-l-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <!-- Brand Text -->
            <div class="flex flex-col">
              <span class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-white group-hover:via-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                {{ siteName }}
              </span>
            </div>
          </Link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-4 xl:space-x-8" ref="navRef">
          <template v-for="item in navigation" :key="item.id">
            <!-- Dropdown Menu -->
            <div 
              v-if="item.children && item.children.length > 0"
              class="relative group"
              @mouseenter="showDropdown = item.id"
              @mouseleave="showDropdown = null"
            >
              <button
                :class="navLinkClasses"
                class="flex items-center space-x-1 nav-item"
              >
                <span>{{ item.title }}</span>
                <Icon 
                  name="chevron-down" 
                  size="xs" 
                  :class="[
                    'transition-transform duration-300 text-cyan-400',
                    showDropdown === item.id ? 'rotate-180' : ''
                  ]"
                />
              </button>
              
              <!-- Futuristic Dropdown -->
              <div 
                :class="[
                  'absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl rounded-xl border border-cyan-400/30 shadow-2xl overflow-hidden transition-all duration-300',
                  showDropdown === item.id ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-95'
                ]"
                style="box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.25), 0 0 0 1px rgba(6, 182, 212, 0.1);"
              >
                <!-- Dropdown Header Glow -->
                <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                
                <div class="p-3 space-y-1">
                  <Link
                    v-for="child in item.children"
                    :key="child.id"
                    :href="child.url"
                    class="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all duration-300 group dropdown-item"
                  >
                    <div class="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg border border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300">
                      <Icon :name="getServiceIcon(child.id)" size="xs" class="text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div class="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {{ child.title }}
                      </div>
                      <div class="text-xs text-gray-400 group-hover:text-cyan-400/70 mt-1 transition-colors duration-300">
                        {{ getServiceDescription(child.id) }}
                      </div>
                    </div>
                    <!-- Hover accent -->
                    <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <!-- Regular Link -->
            <Link 
              v-else
              :href="item.url"
              :class="[navLinkClasses, { 'text-cyan-400 after:scale-x-100': isActiveLink(item.url) }]"
              class="nav-item"
            >
              {{ item.title }}
            </Link>
          </template>
        </nav>

        <!-- CTA Button & Mobile Menu -->
        <div class="flex items-center space-x-3 lg:space-x-4" ref="ctaRef">
          <!-- Futuristic CTA Button -->
          <div v-if="ctaButton?.enabled" class="hidden md:block relative">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-75 blur-sm animate-pulse"></div>
              <BaseButton
                :href="ctaButton.url"
                :variant="ctaButton.style || 'primary'"
                size="sm"
                class="relative bg-black border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400 transition-all duration-300 font-mono tracking-wider uppercase text-xs lg:text-sm cyberpunk-btn px-4 py-2 lg:px-6 lg:py-3"
              >
              <span class="relative z-10">{{ ctaButton.text }}</span>
              <!-- Corner brackets -->
              <span class="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400"></span>
              <span class="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400"></span>
              <span class="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400"></span>
              <span class="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400"></span>
            </BaseButton>
          </div>

          <!-- Futuristic Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden relative flex items-center justify-center w-10 h-10 bg-black border border-cyan-400/50 rounded-lg transition-all duration-300 hover:border-cyan-400 group"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Icon 
              :name="mobileMenuOpen ? 'x-mark' : 'bars-3'"
              size="md"
              class="text-cyan-400 group-hover:text-white transition-colors duration-300 relative z-10"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Futuristic Mobile Menu -->
    <div 
      :class="[
        'lg:hidden absolute inset-x-0 top-full bg-black/95 backdrop-blur-xl border-t border-cyan-400/30 shadow-2xl transition-all duration-300 z-50',
        mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      ]"
      style="box-shadow: 0 25px 50px -12px rgba(6, 182, 212, 0.25);"
    >
      <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-6">
        <nav class="space-y-1">
          <template v-for="item in navigation" :key="`mobile-${item.id}`">
            <!-- Menu Item with Children -->
            <div v-if="item.children && item.children.length > 0">
              <button
                @click="toggleMobileDropdown(item.id)"
                class="flex items-center justify-between w-full p-3 text-left font-medium text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-lg transition-colors duration-150"
              >
                <span>{{ item.title }}</span>
                <Icon 
                  name="chevron-down" 
                  size="sm" 
                  :class="[
                    'transition-transform duration-200',
                    mobileDropdowns.includes(item.id) ? 'rotate-180' : ''
                  ]"
                />
              </button>
              
              <!-- Mobile Submenu -->
              <div 
                :class="[
                  'mt-2 ml-4 space-y-1 transition-all duration-200',
                  mobileDropdowns.includes(item.id) ? 'block' : 'hidden'
                ]"
              >
                <Link
                  v-for="child in item.children"
                  :key="child.id"
                  :href="child.url"
                  @click="closeMobileMenu"
                  class="flex items-center space-x-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors duration-150"
                >
                  <Icon :name="getServiceIcon(child.id)" size="xs" />
                  <span>{{ child.title }}</span>
                </Link>
              </div>
            </div>

            <!-- Regular Mobile Link -->
            <Link
              v-else
              :href="item.url"
              @click="closeMobileMenu"
              :class="[
                'block p-3 font-medium rounded-lg transition-colors duration-150',
                isActiveLink(item.url) 
                  ? 'text-cyan-400 bg-cyan-400/20' 
                  : 'text-white hover:text-cyan-400 hover:bg-cyan-400/10'
              ]"
            >
              {{ item.title }}
            </Link>
          </template>

          <!-- Mobile CTA -->
          <div v-if="ctaButton?.enabled" class="pt-4 border-t border-cyan-400/30">
            <BaseButton
              :href="ctaButton.url"
              :variant="ctaButton.style || 'primary'"
              size="lg"
              block
              @click="closeMobileMenu"
              class="bg-black border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400 font-mono tracking-wider uppercase"
            >
              {{ ctaButton.text }}
            </BaseButton>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import BaseButton from '../ui/BaseButton.vue'
import Icon from '../ui/Icon.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Get current page data for active states
const page = usePage()

const props = defineProps({
  navigation: {
    type: Array,
    default: () => []
  },
  siteName: {
    type: String,
    default: 'Smartcraft'
  },
  tagline: {
    type: String,
    default: 'The AI-Native Anti-Agency'
  },
  ctaButton: {
    type: Object,
    default: null
  },
  stickyHeader: {
    type: Boolean,
    default: true
  },
  transparentHeader: {
    type: Boolean,
    default: false
  }
})

// Template refs
const headerRef = ref(null)
const logoRef = ref(null)
const navRef = ref(null)
const ctaRef = ref(null)

// State
const mobileMenuOpen = ref(false)
const showDropdown = ref(null)
const mobileDropdowns = ref([])
const isScrolled = ref(false)
const isHeaderVisible = ref(true)
const lastScrollY = ref(0)
const scrollDirection = ref('up')
const isScrolling = ref(false)

// Computed
const homeUrl = computed(() => '/')

const headerClasses = computed(() => [
  'z-50 transition-all duration-500 ease-out',
  {
    'fixed top-0 inset-x-0': props.stickyHeader,
    'relative': !props.stickyHeader,
    'bg-black/90 backdrop-blur-xl border-b border-cyan-400/30': 
      props.stickyHeader && (isScrolled.value || !props.transparentHeader),
    'bg-transparent': props.transparentHeader && !isScrolled.value,
    'bg-black border-b border-cyan-400/30': !props.transparentHeader,
    'transform -translate-y-full': props.stickyHeader && !isHeaderVisible.value,
    'transform translate-y-0': props.stickyHeader && isHeaderVisible.value
  }
])

const navLinkClasses = computed(() => [
  'text-gray-300 hover:text-cyan-400 font-medium font-mono transition-all duration-300 relative group tracking-wide uppercase text-xs lg:text-sm',
  'after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300',
  'before:absolute before:inset-0 before:bg-cyan-400/5 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:rounded-md before:-z-10'
])

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    mobileDropdowns.value = []
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
  mobileDropdowns.value = []
}

const toggleMobileDropdown = (itemId) => {
  const index = mobileDropdowns.value.indexOf(itemId)
  if (index > -1) {
    mobileDropdowns.value.splice(index, 1)
  } else {
    mobileDropdowns.value.push(itemId)
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Update scrolled state for styling
  isScrolled.value = currentScrollY > 20
  
  // Determine scroll direction
  if (currentScrollY > lastScrollY.value) {
    scrollDirection.value = 'down'
  } else {
    scrollDirection.value = 'up'
  }
  
  // Show/hide header logic
  if (currentScrollY <= 100) {
    // Always show header at the top
    isHeaderVisible.value = true
  } else if (scrollDirection.value === 'down' && currentScrollY > lastScrollY.value + 10) {
    // Hide header when scrolling down (with threshold to prevent jitter)
    isHeaderVisible.value = false
  } else if (scrollDirection.value === 'up' && currentScrollY < lastScrollY.value - 10) {
    // Show header when scrolling up (with threshold to prevent jitter)
    isHeaderVisible.value = true
  }
  
  // Update last scroll position
  lastScrollY.value = currentScrollY
  
  // Use GSAP for smoother header animation
  if (props.stickyHeader && headerRef.value) {
    if (isHeaderVisible.value) {
      gsap.to(headerRef.value, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      gsap.to(headerRef.value, {
        y: -100,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }
}

const getServiceIcon = (serviceId) => {
  const iconMap = {
    engineering: 'cpu-chip',
    seo: 'chart-bar',
    devops: 'server',
    analytics: 'presentation-chart-line'
  }
  return iconMap[serviceId] || 'cog-6-tooth'
}

const getServiceDescription = (serviceId) => {
  const descriptions = {
    engineering: 'Custom web applications and software',
    seo: 'Search optimization and digital marketing', 
    devops: 'Cloud hosting and deployment automation',
    analytics: 'Data tracking and performance monitoring'
  }
  return descriptions[serviceId] || 'Professional service'
}

// Check if a navigation link is active
const isActiveLink = (url) => {
  if (url === '/') {
    return page.url === '/'
  }
  return page.url.startsWith(url)
}

// Throttled scroll handler for better performance
const throttledScrollHandler = () => {
  if (!isScrolling.value) {
    requestAnimationFrame(() => {
      handleScroll()
      isScrolling.value = false
    })
    isScrolling.value = true
  }
}

// Lifecycle
onMounted(() => {
  if (props.stickyHeader) {
    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    handleScroll() // Check initial state
  }
  
  // GSAP Animations
  nextTick(() => {
    // Header entrance animation (only on initial load)
    if (headerRef.value) {
      gsap.set(headerRef.value, { y: 0 }) // Ensure starting position
      gsap.fromTo(headerRef.value, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
    }
    
    // Logo animation
    gsap.fromTo(logoRef.value?.children[0], 
      { scale: 0, rotation: -45 },
      { scale: 1, rotation: 0, duration: 0.8, delay: 0.2, ease: 'back.out(1.7)' }
    )
    
    // Navigation items stagger animation
    gsap.fromTo('.nav-item', 
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        delay: 0.4, 
        ease: 'power2.out' 
      }
    )
    
    // CTA button animation
    gsap.fromTo(ctaRef.value, 
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, delay: 0.6, ease: 'power2.out' }
    )
    
    // Hover animations for nav items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      })
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })
    
    // Dropdown items animation
    document.querySelectorAll('.dropdown-item').forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { x: 5, duration: 0.2, ease: 'power2.out' })
      })
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { x: 0, duration: 0.2, ease: 'power2.out' })
      })
    })
    
    // CTA button hover animation
    const ctaBtn = document.querySelector('.cyberpunk-btn')
    if (ctaBtn) {
      ctaBtn.addEventListener('mouseenter', () => {
        gsap.to(ctaBtn, { scale: 1.05, duration: 0.2, ease: 'power2.out' })
      })
      
      ctaBtn.addEventListener('mouseleave', () => {
        gsap.to(ctaBtn, { scale: 1, duration: 0.2, ease: 'power2.out' })
      })
    }
  })
})

onUnmounted(() => {
  if (props.stickyHeader) {
    window.removeEventListener('scroll', throttledScrollHandler)
  }
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Cyber Grid Background */
.cyber-grid {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

/* Glowing Effects */
.shadow-large {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Cyberpunk button effects */
.cyberpunk-btn {
  position: relative;
  overflow: hidden;
}

.cyberpunk-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent);
  transition: left 0.5s;
}

.cyberpunk-btn:hover::before {
  left: 100%;
}

/* Navigation hover effects */
.nav-item {
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-item:hover::after {
  transform: scaleX(1);
}

/* Futuristic animations */
@keyframes cyber-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes data-flow {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

/* Mobile menu animations */
@media (max-width: 1023px) {
  .mobile-nav-item {
    transform: translateX(-20px);
    opacity: 0;
    animation: slideInLeft 0.3s ease forwards;
  }
  
  .mobile-nav-item:nth-child(2) { animation-delay: 0.1s; }
  .mobile-nav-item:nth-child(3) { animation-delay: 0.2s; }
  .mobile-nav-item:nth-child(4) { animation-delay: 0.3s; }
}

@keyframes slideInLeft {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Glow text effect */
.text-glow {
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
}
</style>
