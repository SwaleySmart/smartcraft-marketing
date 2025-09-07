export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
  // CSS
  css: ['~/assets/css/site.css'],
  
  // Modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss'
  ],

  // Apollo GraphQL Configuration
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://smartcraft-cms.test/graphql',
        httpLinkOptions: {
          fetchOptions: {
            mode: 'cors'
          }
        }
      }
    }
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Build configuration
  build: {
    transpile: ['gsap']
  },

  // Auto-import components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // Environment variables
  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://smartcraft-cms.test/graphql',
      cmsBaseUrl: process.env.NUXT_PUBLIC_CMS_BASE_URL || 'http://smartcraft-cms.test',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Smartcraft',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://smartcraft.test'
    }
  },


  // Vite configuration for aliases (matching your current setup)
  vite: {
    resolve: {
      alias: {
        '@': '~/components',
        '@/components': '~/components',
        '@/types': '~/types',
        '@/utils': '~/utils',
        '@/stores': '~/stores',
        '@/assets': '~/assets'
      }
    }
  }
})