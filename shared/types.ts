// Shared TypeScript interfaces for Statamic data structures

export interface StatamicEntry {
  id: string
  title: string
  slug: string
  uri: string
  url: string
  permalink?: string
  collection: string
  template?: string
  status: 'published' | 'draft'
  meta_title?: string
  meta_description?: string
  og_image?: StatamicAsset
  canonical_url?: string
  robots?: string
  blocks?: StatamicBlock[]
  content?: string
  data?: Record<string, any>
}

export interface StatamicBlock {
  type: string
  data: Record<string, any>
}

export interface StatamicAsset {
  id: string
  url: string
  title?: string
  alt?: string
  width?: number
  height?: number
}

export interface StatamicNavItem {
  title: string
  url: string
  children?: StatamicNavItem[]
}

export interface StatamicGlobal {
  handle: string
  data: Record<string, any>
}

export interface HeaderGlobal {
  site_name: string
  tagline: string
  cta_button?: {
    text: string
    url: string
    style?: string
  }
  sticky_header: boolean
  transparent_header: boolean
}

export interface SEOGlobal {
  site_title: string
  site_description: string
  default_robots: string
  default_og_image?: StatamicAsset
  google_site_verification?: string
  bing_site_verification?: string
  dns_prefetch?: string[]
  preconnect_domains?: string[]
  preload_fonts?: {
    url: string
    type: string
  }[]
}

// GraphQL Response Types
export interface PageData {
  entry: StatamicEntry
  nav?: {
    tree: StatamicNavItem[]
  }
  globalSet?: HeaderGlobal
  seoGlobal?: SEOGlobal
}