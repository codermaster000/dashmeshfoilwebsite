// Centralized error handling and 404 handler.

export class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Async handler wrapper to avoid repetitive try/catch in controllers
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: 'Route not found'
    }
  });
}

export function errorHandler(err, req, res, next) {
  // If it's a known AppError, use its status code.
  const statusCode = err?.statusCode && Number.isInteger(err.statusCode) ? err.statusCode : 500;

  // Keep messages beginner-friendly and not overly verbose.
  const message = statusCode === 500 ? 'Internal server error' : err.message;

  // If validation-style errors end up here, ensure message is always present.
  const safeMessage = message || 'Internal server error';


  // Optionally log full error for debugging
  console.error('[backend error]', err);

  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode === 500 ? 'INTERNAL_SERVER_ERROR' : 'BAD_REQUEST',
      message: safeMessage
    }
  });

}

