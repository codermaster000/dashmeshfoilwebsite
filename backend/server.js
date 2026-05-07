// Entry point for the backend.
// Uses ES Modules ("type": "module" in package.json).

import dotenv from 'dotenv';
import app from './src/app.js';

// Load environment variables from .env (if present)
dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(port, () => {
  console.log(`[backend] Server listening on port ${port}`);
});

