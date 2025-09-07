interface ErrorOptions {
  showToUser?: boolean
  logToConsole?: boolean
  redirectTo?: string
}

interface AppError {
  message: string
  code?: string | number
  statusCode?: number
  cause?: unknown
}

export const useErrorHandler = () => {
  const handleError = (error: unknown, options: ErrorOptions = {}) => {
    const {
      showToUser = true,
      logToConsole = process.env.NODE_ENV === 'development',
      redirectTo
    } = options

    const appError: AppError = normalizeError(error)

    if (logToConsole) {
      console.error('Application Error:', {
        message: appError.message,
        code: appError.code,
        statusCode: appError.statusCode,
        cause: appError.cause,
        timestamp: new Date().toISOString()
      })
    }

    if (showToUser) {
      // You can integrate with a toast notification system here
      // For now, we'll use a simple alert in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('Error shown to user:', appError.message)
      }
    }

    if (redirectTo) {
      navigateTo(redirectTo)
    }

    return appError
  }

  const normalizeError = (error: unknown): AppError => {
    // GraphQL errors
    if (isGraphQLError(error)) {
      return {
        message: 'Failed to load content. Please try again.',
        code: 'GRAPHQL_ERROR',
        statusCode: 500,
        cause: error
      }
    }

    // Network errors
    if (isNetworkError(error)) {
      return {
        message: 'Network connection failed. Please check your internet connection.',
        code: 'NETWORK_ERROR',
        statusCode: 0,
        cause: error
      }
    }

    // HTTP errors
    if (isHTTPError(error)) {
      const statusCode = (error as any).statusCode || (error as any).status || 500
      return {
        message: getHTTPErrorMessage(statusCode),
        code: 'HTTP_ERROR',
        statusCode,
        cause: error
      }
    }

    // Generic errors
    if (error instanceof Error) {
      return {
        message: error.message || 'An unexpected error occurred',
        code: 'GENERIC_ERROR',
        cause: error
      }
    }

    // Unknown errors
    return {
      message: 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR',
      cause: error
    }
  }

  const isGraphQLError = (error: unknown): boolean => {
    return !!(error && typeof error === 'object' && 
      ('graphQLErrors' in error || 'networkError' in error || 'message' in error))
  }

  const isNetworkError = (error: unknown): boolean => {
    return !!(error && typeof error === 'object' && 
      ('networkError' in error || (error as any).code === 'NETWORK_ERROR'))
  }

  const isHTTPError = (error: unknown): boolean => {
    return !!(error && typeof error === 'object' && 
      ('statusCode' in error || 'status' in error))
  }

  const getHTTPErrorMessage = (statusCode: number): string => {
    switch (statusCode) {
      case 400:
        return 'Bad request. Please check your input.'
      case 401:
        return 'Authentication required. Please log in.'
      case 403:
        return 'You do not have permission to access this content.'
      case 404:
        return 'The requested content was not found.'
      case 429:
        return 'Too many requests. Please try again later.'
      case 500:
        return 'Server error. Please try again later.'
      case 502:
      case 503:
      case 504:
        return 'Service temporarily unavailable. Please try again later.'
      default:
        return 'An error occurred. Please try again.'
    }
  }

  return {
    handleError,
    normalizeError
  }
}