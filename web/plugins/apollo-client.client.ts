import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev"

export default defineNuxtPlugin(() => {
  // Load Apollo Client error messages in development
  if (process.env.NODE_ENV !== 'production') {
    // Adds messages only in a dev environment
    loadDevMessages()
    // Loads messages for errors that are raised in all environments
    loadErrorMessages()
  }
})
