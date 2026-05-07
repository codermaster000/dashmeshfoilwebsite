// Small security middleware for additional hardening.

export function securityMiddleware() {
  return (req, res, next) => {
    // Prevent basic caching of sensitive responses
    res.setHeader('Cache-Control', 'no-store');
    next();
  };
}

