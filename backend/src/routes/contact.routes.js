import { Router } from 'express';

import { postContact } from '../controllers/contact.controller.js';

export const contactRouter = Router();

// POST /api/contact
contactRouter.post('/', postContact);

export default contactRouter;

