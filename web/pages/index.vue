<template>
  <div class="min-h-screen bg-black">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <LoadingSpinner />
    </div>

    <!-- Error State -->
    <div v-else-if="error || (!pending && !transformedEntry)" class="flex items-center justify-center min-h-screen">
      <div class="text-center max-w-md mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">
          {{ errorMessage.title }}
        </h1>
        <p class="text-gray-400 mb-6">
          {{ errorMessage.description }}
        </p>
        <button 
          @click="refreshPage"
          class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>

    <!-- Content -->
    <div v-else-if="transformedEntry">
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
          v-if="transformedEntry?.blocks && transformedEntry.blocks.length"
          :blocks="transformedEntry.blocks"
          @block-event="handleBlockEvent"
        />
      </main>
      
      <!-- Fallback Content for pages without blocks -->
      <main v-if="!transformedEntry?.blocks || !transformedEntry.blocks.length" :class="{ 'pt-16 lg:pt-20': header?.sticky_header !== false }">
        <div class="container mx-auto px-4 py-16">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-secondary-900 dark:text-white mb-8">
              {{ transformedEntry?.title }}
            </h1>
            
            <div class="prose prose-lg max-w-none dark:prose-invert">
              <div v-if="transformedEntry?.content" class="content">
                {{ transformedEntry.content }}
              </div>
              <div v-else class="text-secondary-600 dark:text-secondary-400">
                <p>This page doesn't have any content blocks configured yet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { handleError } = useErrorHandler()

// Home page - always use root path
const slug = computed(() => '/')

// Complete GraphQL Query with blocks
const GET_PAGE = gql`
  query GetPage($uri: String!) {
    entry(uri: $uri) {
      id
      title
      slug
      uri
      url
      ... on Entry_Pages_Pages {
        blocks {
          __typename
          ... on Set_Blocks_Hero {
            headline
            subheadline
            cta_text
            cta_url
            background_style {
              value
              label
            }
            background_image {
              ... on Asset_Assets {
                url
                alt
              }
            }
            style_variant {
              value
              label
            }
          }
          ... on Set_Blocks_Intro {
            title
            subtitle
            content
            image {
              ... on Asset_Assets {
                url
                alt
              }
            }
            image_position {
              value
              label
            }
            show_cta
            cta_text
            cta_url
            features {
              ... on Set_Blocks_Features_Feature {
                title
                description
                icon
                color {
                  value
                  label
                }
              }
            }
            stats {
              ... on Set_Blocks_Stats_Stat {
                number
                label
                suffix
              }
            }
          }
          ... on Set_Blocks_Packages {
            section_title
            section_subtitle
            featured_package {
              value
              label
            }
            show_comparison
            comparison_features {
              ... on Set_Blocks_ComparisonFeatures_Feature {
                name
                launch
                growth
                dominate
              }
            }
            cta_text
            packages {
              ... on Set_Blocks_Packages_Package {
                name
                slug
                price
                price_suffix
                description
                icon
                icon_color {
                  value
                  label
                }
                features
              }
            }
          }
          ... on Set_Blocks_SmartProcess {
            title
            subtitle
            default_steps {
              ... on Set_Blocks_DefaultSteps_Step {
                letter
                title
                description
                duration
                color {
                  value
                  label
                }
              }
            }
            detailed_steps {
              ... on Set_Blocks_DetailedSteps_Step {
                letter
                title
                description
                duration
              }
            }
            show_cta
            cta_title
            cta_subtitle
            cta_button_text
            cta_button_url
          }
        }
        meta_title
        meta_description
        og_image {
          ... on Asset_Assets {
            url
            alt
          }
        }
        canonical_url
        robots {
          value
          label
        }
      }
    }
    nav(handle: "main_nav") {
      tree {
        page {
          id
          title
          url
        }
        children {
          page {
            id
            title
            url
          }
        }
      }
    }
    headerGlobal: globalSet(handle: "header") {
      ... on GlobalSet_Header {
        site_name
        cta_button {
          text
          url
        }
        sticky_header
        transparent_header
      }
    }
    seoGlobal: globalSet(handle: "seo") {
      ... on GlobalSet_Seo {
        site_title
        site_description
        default_og_image {
          ... on Asset_Assets {
            url
            alt
          }
        }
        default_robots {
          value
          label
        }
        google_site_verification
        bing_site_verification
        dns_prefetch
        preconnect_domains
      }
    }
  }
`

// Execute GraphQL query with error handling
const { data, pending, error } = await useAsyncQuery(GET_PAGE, {
  uri: slug.value
}).catch((err) => {
  handleError(err, { 
    showToUser: true,
    logToConsole: true 
  })
  return { data: ref(null), pending: ref(false), error: ref(err) }
})

// Extract data from GraphQL response
const entry = computed(() => data.value?.entry)
const navigation = computed(() => {
  // Transform navigation data to match expected format
  const navTree = data.value?.nav?.tree
  if (!navTree) return null
  
  return navTree.map(item => ({
    title: item.page?.title,
    url: item.page?.url,
    children: item.children?.map(child => ({
      title: child.page?.title,
      url: child.page?.url
    })) || []
  }))
})
const header = computed(() => data.value?.headerGlobal)
const seo = computed(() => data.value?.seoGlobal)

// Transform blocks data for Vue components
const transformedEntry = computed(() => {
  if (!entry.value) return null
  
  const transformed = { ...entry.value }
  
  if (entry.value.blocks && Array.isArray(entry.value.blocks)) {
    transformed.blocks = entry.value.blocks.map(block => {
      if (!block || !block.__typename) return null
      
      // Transform GraphQL type names to simple component names
      const typeMapping = {
        'Set_Blocks_Hero': 'hero',
        'Set_Blocks_Intro': 'intro',
        'Set_Blocks_Packages': 'packages',
        'Set_Blocks_SmartProcess': 'smart_process',
        'Set_Blocks_Comparison': 'comparison',
        'Set_Blocks_AntiWp': 'anti_wp',
        'Set_Blocks_Devops': 'devops',
        'Set_Blocks_Analytics': 'analytics',
        'Set_Blocks_CaseStudies': 'case_studies',
        'Set_Blocks_Contact': 'contact'
      }
      
      const simpleType = typeMapping[block.__typename] || block.__typename.toLowerCase().replace('set_blocks_', '')
      
      // Transform block data based on type
      let transformedData = { ...block }
      delete transformedData.__typename
      
      // Hero block specific transformations
      if (simpleType === 'hero') {
        transformedData = {
          // Only include the fields we want - don't spread original data to avoid conflicts
          headline: transformedData.headline,
          subheadline: transformedData.subheadline,
          ctaText: transformedData.cta_text,
          ctaUrl: transformedData.cta_url,
          backgroundStyle: transformedData.background_style?.value || transformedData.background_style,
          backgroundImage: transformedData.background_image,
          styleVariant: transformedData.style_variant?.value || transformedData.style_variant
        }
      }
      
      // Intro block specific transformations
      if (simpleType === 'intro') {
        transformedData = {
          ...transformedData,
          imagePosition: transformedData.image_position?.value || transformedData.image_position,
          showCta: transformedData.show_cta,
          ctaText: transformedData.cta_text,
          ctaUrl: transformedData.cta_url,
          features: transformedData.features?.map(feature => ({
            ...feature,
            color: feature.color?.value || feature.color
          })) || []
        }
        
        // Remove original snake_case properties
        delete transformedData.image_position
        delete transformedData.show_cta
        delete transformedData.cta_text
        delete transformedData.cta_url
      }
      
      // SmartProcess block specific transformations
      if (simpleType === 'smart_process') {
        transformedData = {
          ...transformedData,
          defaultSteps: transformedData.default_steps?.map(step => ({
            ...step,
            color: step.color?.value || step.color
          })) || [],
          detailedSteps: transformedData.detailed_steps,
          showCta: transformedData.show_cta,
          ctaTitle: transformedData.cta_title,
          ctaSubtitle: transformedData.cta_subtitle,
          ctaButtonText: transformedData.cta_button_text,
          ctaButtonUrl: transformedData.cta_button_url
        }
        
        // Remove original snake_case properties
        delete transformedData.default_steps
        delete transformedData.detailed_steps
        delete transformedData.show_cta
        delete transformedData.cta_title
        delete transformedData.cta_subtitle
        delete transformedData.cta_button_text
        delete transformedData.cta_button_url
      }
      
      // Packages block specific transformations
      if (simpleType === 'packages') {
        transformedData = {
          ...transformedData,
          sectionTitle: transformedData.section_title,
          sectionSubtitle: transformedData.section_subtitle,
          featuredPackage: transformedData.featured_package?.value || transformedData.featured_package,
          showComparison: transformedData.show_comparison,
          comparisonFeatures: transformedData.comparison_features,
          ctaText: transformedData.cta_text,
          // Transform packages array to extract icon_color values and handle title/name mapping
          packages: transformedData.packages?.map(pkg => ({
            ...pkg,
            title: pkg.name, // Map name to title for component compatibility
            icon_color: pkg.icon_color?.value || pkg.icon_color
          })) || []
        }
        
        // Remove original snake_case properties
        delete transformedData.section_title
        delete transformedData.section_subtitle
        delete transformedData.featured_package
        delete transformedData.show_comparison
        delete transformedData.comparison_features
        delete transformedData.cta_text
      }
      
      // Create the block data structure expected by PageBuilder
      return {
        type: simpleType,
        data: transformedData
      }
    }).filter(Boolean)
  }
  
  return transformed
})

// SEO computed properties
const pageTitle = computed(() => {
  if (transformedEntry.value?.meta_title) {
    return transformedEntry.value.meta_title
  }
  if (transformedEntry.value?.title) {
    return `${transformedEntry.value.title} - ${seo.value?.site_title || 'Smartcraft'}`
  }
  return seo.value?.site_title || 'Smartcraft - The AI-Native Anti-Agency'
})

const metaDescription = computed(() => {
  return transformedEntry.value?.meta_description || seo.value?.site_description || 'Enterprise-grade websites and software at agency prices.'
})

const robotsContent = computed(() => {
  const robots = transformedEntry.value?.robots?.value || transformedEntry.value?.robots
  const defaultRobots = seo.value?.default_robots?.value || seo.value?.default_robots
  return robots || defaultRobots || 'index, follow'
})

const ogImage = computed(() => {
  if (transformedEntry.value?.og_image) {
    return transformedEntry.value.og_image.url || transformedEntry.value.og_image
  }
  if (seo.value?.default_og_image) {
    return seo.value.default_og_image.url || seo.value.default_og_image
  }
  return null
})

const canonicalUrl = computed(() => {
  return transformedEntry.value?.canonical_url || transformedEntry.value?.url || `${useRuntimeConfig().public.siteUrl}${slug.value}`
})

// Set SEO meta tags using Nuxt's useSeoMeta
useSeoMeta({
  title: pageTitle,
  description: metaDescription,
  robots: robotsContent,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogTitle: pageTitle,
  ogDescription: metaDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image',
  twitterUrl: canonicalUrl,
  twitterTitle: pageTitle,
  twitterDescription: metaDescription,
  twitterImage: ogImage
})

// Set canonical URL
useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    // DNS Prefetch
    ...(seo.value?.dns_prefetch || []).map(domain => ({
      rel: 'dns-prefetch',
      href: `//${domain}`
    })),
    // Preconnect
    ...(seo.value?.preconnect_domains || []).map(domain => ({
      rel: 'preconnect',
      href: `//${domain}`,
      crossorigin: true
    })),
  ],
  meta: [
    // Site verification
    ...(seo.value?.google_site_verification ? [{ name: 'google-site-verification', content: seo.value.google_site_verification }] : []),
    ...(seo.value?.bing_site_verification ? [{ name: 'msvalidate.01', content: seo.value.bing_site_verification }] : [])
  ]
})

// Error message handling
const errorMessage = computed(() => {
  if (error.value) {
    const normalizedError = handleError(error.value, { showToUser: false, logToConsole: false })
    return {
      title: 'Oops! Something went wrong',
      description: normalizedError.message
    }
  }
  
  if (!pending.value && !transformedEntry.value) {
    return {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or couldn't be loaded."
    }
  }
  
  return {
    title: 'Error',
    description: 'An unexpected error occurred.'
  }
})

const refreshPage = () => {
  window.location.reload()
}

const handleBlockEvent = (event) => {
  // Handle block-specific events (analytics, form submissions, etc.)
  // Add proper event handling logic here
}
</script>