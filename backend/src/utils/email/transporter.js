import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
// Load env vars in case transporter is imported directly.
// (server.js already loads dotenv, but this keeps the module safe.)
dotenv.config();

// Create Nodemailer transport using Gmail SMTP.
function getTransport() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    const err = new Error('Email service is not configured');
    err.statusCode = 503;
    err.code = 'EMAIL_NOT_CONFIGURED';
    throw err;
  }


  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  });
}

export async function sendContactEmail({ subject, html, replyTo }) {
  const transporter = getTransport();

  // Nodemailer requires "to".
  // Requirement says: send to my email address.
  // We'll use EMAIL_USER as the recipient.
  // (If you want a different recipient later, we can add EMAIL_TO env var.)
  const to = process.env.EMAIL_USER;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: `Website contact: ${subject}`,
    html,
    replyTo
  });
}

