import { Router } from 'express';

export const healthRouter = Router();

// Health check for uptime monitors / deployment platforms.
healthRouter.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'OK',
    timestamp: new Date().toISOString()
  });
});

