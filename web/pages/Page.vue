<template>
  <Head>
    <title>{{ pageTitle }}</title>
    <meta name="description" :content="metaDescription" />
    <meta name="robots" :content="robotsContent" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="entry.permalink || entry.uri" />
    <meta property="og:title" :content="pageTitle" />
    <meta property="og:description" :content="metaDescription" />
    <meta v-if="ogImage" property="og:image" :content="ogImage" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" :content="entry.permalink || entry.uri" />
    <meta property="twitter:title" :content="pageTitle" />
    <meta property="twitter:description" :content="metaDescription" />
    <meta v-if="ogImage" property="twitter:image" :content="ogImage" />
    
    <!-- Canonical URL -->
    <link rel="canonical" :href="canonicalUrl" />
    
    <!-- Site verification -->
    <meta v-if="seo?.google_site_verification" name="google-site-verification" :content="seo.google_site_verification" />
    <meta v-if="seo?.bing_site_verification" name="msvalidate.01" :content="seo.bing_site_verification" />
    
    <!-- DNS Prefetch -->
    <link v-for="domain in seo?.dns_prefetch || []" :key="domain" rel="dns-prefetch" :href="'//' + domain" />
    
    <!-- Preconnect -->
    <link v-for="domain in seo?.preconnect_domains || []" :key="domain" rel="preconnect" :href="'//' + domain" crossorigin />
    
    <!-- Preload Fonts -->
    <link 
      v-for="font in seo?.preload_fonts || []" 
      :key="font.url" 
      rel="preload" 
      :href="font.url" 
      :as="'font'" 
      :type="font.type" 
      crossorigin
    />
  </Head>
  
  <div class="min-h-screen bg-black">
    <!-- Header -->
    <Header
      v-if="navigation && header"
      :navigation="navigation"
      :site-name="header.site_name || 'Smartcraft'"
      :tagline="header.tagline || 'The AI-Native Anti-Agency'"
      :cta-button="header.cta_button"
      :sticky-header="header.sticky_header !== false"
      :transparent-header="header.transparent_header === true"
    />
    
    <!-- Main Content -->
    <main>
    <!-- Page Builder Content -->
    <PageBuilder 
      v-if="entry.data.blocks && entry.data.blocks.length"
      :blocks="entry.data.blocks"
      @block-event="handleBlockEvent"
    />
    
    </main>
    
    <!-- Fallback Content -->
    <main v-if="!entry.data.blocks || !entry.data.blocks.length" :class="{ 'pt-16 lg:pt-20': header?.sticky_header !== false }">
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-secondary-900 dark:text-white mb-8">
            {{ entry.title }}
          </h1>
          
          <div class="prose prose-lg max-w-none dark:prose-invert">
            <div v-if="entry.data.content" class="content">
              {{ entry.data.content }}
            </div>
            <div v-else class="text-secondary-600 dark:text-secondary-400">
              <p>This is a Statamic entry rendered through Inertia.js and Vue.js!</p>
              <p><strong>Collection:</strong> {{ collection }}</p>
              <p><strong>Template:</strong> {{ template || 'Default' }}</p>
              <p><strong>URI:</strong> {{ entry.uri }}</p>
            </div>
          </div>

          <!-- Debug info (remove in production) -->
          <details class="mt-12 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
            <summary class="font-semibold text-secondary-700 dark:text-secondary-300 cursor-pointer">Debug Info</summary>
            <pre class="mt-4 text-xs bg-secondary-100 dark:bg-secondary-900 p-4 rounded overflow-x-auto text-secondary-900 dark:text-secondary-100">{{ JSON.stringify({ entry, collection, template }, null, 2) }}</pre>
          </details>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { Head } from '@inertiajs/vue3'
import PageBuilder from '../components/PageBuilder.vue'
import Header from '../components/layout/Header.vue'

const props = defineProps({
  entry: Object,
  collection: String,
  template: String,
  navigation: Array,
  header: Object,
  footer: Object,
  seo: Object
})

// SEO computed properties
const pageTitle = computed(() => {
  // Priority: Page meta_title -> Page title -> Site default title
  if (props.entry?.meta_title) {
    return props.entry.meta_title
  }
  if (props.entry?.title) {
    return `${props.entry.title} - ${props.seo?.site_title || 'Smartcraft'}`
  }
  return props.seo?.site_title || 'Smartcraft - The AI-Native Anti-Agency'
})

const metaDescription = computed(() => {
  // Priority: Page meta_description -> Site default description
  return props.entry?.meta_description || props.seo?.site_description || 'Enterprise-grade websites and software at agency prices.'
})

const robotsContent = computed(() => {
  // Priority: Page robots -> Site default robots
  return props.entry?.robots || props.seo?.default_robots || 'index, follow'
})

const ogImage = computed(() => {
  // Priority: Page og_image -> Site default og_image
  if (props.entry?.og_image) {
    return props.entry.og_image.url || props.entry.og_image
  }
  if (props.seo?.default_og_image) {
    return props.seo.default_og_image.url || props.seo.default_og_image
  }
  return null
})

const canonicalUrl = computed(() => {
  // Priority: Page canonical_url -> Page permalink -> entry URL
  return props.entry?.canonical_url || props.entry?.permalink || props.entry?.uri || '/'
})

const handleBlockEvent = (event) => {
  console.log('Block event:', event)
  // Handle block-specific events (analytics, form submissions, etc.)
}
</script>
