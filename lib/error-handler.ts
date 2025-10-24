// Error Handling Service
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: string
}

export class ErrorHandler {
  private static instance: ErrorHandler

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  // Create standardized error
  createError(code: string, message: string, details?: any): AppError {
    return {
      code,
      message,
      details,
      timestamp: new Date().toISOString()
    }
  }

  // Handle API errors
  handleAPIError(error: any): AppError {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status
      const data = error.response.data

      switch (status) {
        case 400:
          return this.createError('BAD_REQUEST', data.message || 'Invalid request', data)
        case 401:
          return this.createError('UNAUTHORIZED', 'Authentication required', data)
        case 403:
          return this.createError('FORBIDDEN', 'Access denied', data)
        case 404:
          return this.createError('NOT_FOUND', 'Resource not found', data)
        case 429:
          return this.createError('RATE_LIMITED', 'Too many requests. Please try again later.', data)
        case 500:
          return this.createError('SERVER_ERROR', 'Internal server error. Please try again later.', data)
        default:
          return this.createError('API_ERROR', data.message || 'An error occurred', data)
      }
    } else if (error.request) {
      // Network error
      return this.createError('NETWORK_ERROR', 'Unable to connect to server. Please check your internet connection.')
    } else {
      // Other error
      return this.createError('UNKNOWN_ERROR', error.message || 'An unexpected error occurred')
    }
  }

  // Handle validation errors
  handleValidationError(errors: any[]): AppError {
    return this.createError('VALIDATION_ERROR', 'Please check your input and try again', errors)
  }

  // Handle authentication errors
  handleAuthError(error: any): AppError {
    if (error.code === 'INVALID_CREDENTIALS') {
      return this.createError('INVALID_CREDENTIALS', 'Invalid email or password')
    } else if (error.code === 'ACCOUNT_LOCKED') {
      return this.createError('ACCOUNT_LOCKED', 'Account has been locked. Please contact support.')
    } else if (error.code === 'EMAIL_NOT_VERIFIED') {
      return this.createError('EMAIL_NOT_VERIFIED', 'Please verify your email address before signing in')
    } else {
      return this.createError('AUTH_ERROR', 'Authentication failed. Please try again.')
    }
  }

  // Handle file upload errors
  handleFileError(error: any): AppError {
    if (error.code === 'FILE_TOO_LARGE') {
      return this.createError('FILE_TOO_LARGE', 'File is too large. Maximum size is 10MB.')
    } else if (error.code === 'INVALID_FILE_TYPE') {
      return this.createError('INVALID_FILE_TYPE', 'Invalid file type. Please upload a PDF or image.')
    } else {
      return this.createError('FILE_ERROR', 'File upload failed. Please try again.')
    }
  }

  // Handle AI service errors
  handleAIError(error: any): AppError {
    if (error.code === 'RATE_LIMITED') {
      return this.createError('AI_RATE_LIMITED', 'AI service is temporarily unavailable. Please try again in a few minutes.')
    } else if (error.code === 'INSUFFICIENT_CREDITS') {
      return this.createError('INSUFFICIENT_CREDITS', 'You have run out of AI credits. Please upgrade your plan.')
    } else {
      return this.createError('AI_ERROR', 'AI service is temporarily unavailable. Please try again later.')
    }
  }

  // Log error for debugging
  logError(error: AppError, context?: string) {
    console.error(`[${context || 'ERROR'}]`, {
      code: error.code,
      message: error.message,
      details: error.details,
      timestamp: error.timestamp
    })
  }

  // Show user-friendly error message
  showError(error: AppError, toast?: any) {
    const userMessage = this.getUserFriendlyMessage(error)
    
    if (toast) {
      toast({
        title: "Error",
        description: userMessage,
        variant: "destructive"
      })
    } else {
      alert(userMessage)
    }
  }

  // Get user-friendly error message
  getUserFriendlyMessage(error: AppError): string {
    const messages: Record<string, string> = {
      'BAD_REQUEST': 'Please check your input and try again.',
      'UNAUTHORIZED': 'Please sign in to continue.',
      'FORBIDDEN': 'You don\'t have permission to perform this action.',
      'NOT_FOUND': 'The requested resource was not found.',
      'RATE_LIMITED': 'Too many requests. Please wait a moment and try again.',
      'SERVER_ERROR': 'Something went wrong. Please try again later.',
      'NETWORK_ERROR': 'Please check your internet connection and try again.',
      'VALIDATION_ERROR': 'Please check your input and try again.',
      'INVALID_CREDENTIALS': 'Invalid email or password.',
      'ACCOUNT_LOCKED': 'Your account has been locked. Please contact support.',
      'EMAIL_NOT_VERIFIED': 'Please verify your email address before signing in.',
      'FILE_TOO_LARGE': 'File is too large. Please choose a smaller file.',
      'INVALID_FILE_TYPE': 'Invalid file type. Please choose a supported file format.',
      'AI_RATE_LIMITED': 'AI service is busy. Please try again in a few minutes.',
      'INSUFFICIENT_CREDITS': 'You have run out of AI credits. Please upgrade your plan.',
      'AI_ERROR': 'AI service is temporarily unavailable. Please try again later.'
    }

    return messages[error.code] || error.message || 'An unexpected error occurred.'
  }
}

export const errorHandler = ErrorHandler.getInstance()

