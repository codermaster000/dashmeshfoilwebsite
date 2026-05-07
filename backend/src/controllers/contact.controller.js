import { z } from 'zod';

import { sendContactEmail } from '../utils/email/transporter.js';
import { buildContactEmailHtml } from '../utils/email/contactTemplate.js';

import { AppError, asyncHandler } from '../middleware/validate.middleware.js';

// --- Validation schema ---
const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),

  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Invalid email address')
    .max(254, 'Email is too long'),

  phone: z
    .string({ required_error: 'Phone is required' })
    .trim()
    // Basic validation: allows +, spaces, dashes, parentheses and digits.
    // Keeps it beginner-friendly and practical.
    .regex(/^[0-9+()\-\s]{7,20}$/, 'Invalid phone number')
    .max(20, 'Phone is too long'),

  subject: z
    .string({ required_error: 'Subject is required' })
    .trim()
    .min(2, 'Subject must be at least 2 characters')
    .max(150, 'Subject must be at most 150 characters'),

  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long')
});

export const postContact = asyncHandler(async (req, res) => {
  // Validate request body
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message || 'Invalid request';
    throw new AppError(400, firstError);
  }

  const { name, email, phone, subject, message } = parsed.data;

  // Build professional HTML email (with HTML escaping)
  const html = buildContactEmailHtml({
    name,
    email,
    phone,
    subject,
    message,
    submittedAt: new Date()
  });

  // Send email via Gmail SMTP
  try {
    await sendContactEmail({
      subject,
      html,
      replyTo: email,
      // You can optionally pass plain text too, but HTML is required.
    });
  } catch (err) {
    if (err?.code === 'EMAIL_NOT_CONFIGURED' || err?.statusCode === 503) {
      // Provide a clean API error instead of a 500 stack trace.
      throw new AppError(503, 'Email service is not configured. Please try again later.');
    }
    throw err;
  }


  // Success response
  return res.status(200).json({
    success: true,
    message: 'Message sent successfully',
    timestamp: new Date().toISOString()
  });
});

