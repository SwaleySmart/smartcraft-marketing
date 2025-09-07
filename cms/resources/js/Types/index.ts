export interface StatamicEntry {
  id: string
  title: string
  slug: string
  uri: string
  data: Record<string, any>
  augmented: Record<string, any>
}

export interface PageProps {
  entry?: StatamicEntry
  collection?: string
  template?: string
  title?: string
  message?: string
}

export interface InertiaPageProps extends PageProps {
  auth?: {
    user?: any
  }
  flash?: {
    success?: string
    error?: string
  }
}