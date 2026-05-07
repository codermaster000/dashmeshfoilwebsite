import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import contactRoutes from './routes/contact.routes.js';
import { healthRouter } from './routes/health.routes.js';

import { notFoundHandler, errorHandler } from './middleware/error.middleware.js';

import { contactRateLimiter } from './middleware/rateLimit.middleware.js';
import { securityMiddleware } from './middleware/security.middleware.js';


const app = express();

// --- Basic security headers ---
app.use(helmet());
app.use(securityMiddleware());

// --- CORS setup ---
// In production, restrict origin to your frontend URL(s).
app.use(
  cors({
    origin: true,
    credentials: false
  })
);

// --- Parse JSON body ---
app.use(express.json({ limit: '200kb' }));

// --- Routes ---
app.use('/api/health', healthRouter);

// Contact endpoint with rate limiting (spam protection)
app.use('/api/contact', contactRateLimiter, contactRoutes);

// --- 404 + Centralized error handling ---
app.use(notFoundHandler);
app.use(errorHandler);

export default app;

