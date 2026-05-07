# Contact Backend (Express + Nodemailer)

Production-ready backend for handling the website contact form.

## Endpoints
- `GET /api/health` - health check
- `POST /api/contact` - send contact email

## Setup
1. Create a Gmail App Password (recommended)

### Gmail App Password instructions
1. Go to your Google Account: https://myaccount.google.com/
2. Enable **2-Step Verification**
3. Create an **App Password**
4. Use the password below as `EMAIL_PASS`

> Note: Gmail may block sign-in attempts if you don’t use an app password.

## Environment variables
Copy `.env.example` → `.env`:

```bash
cp .env.example .env
```

Required:
- `EMAIL_USER` (your Gmail address)
- `EMAIL_PASS` (Gmail App Password)
- `PORT` (optional, default: 4000)

## Run locally
```bash
cd backend
npm install
npm run dev
```

## Test with Postman
See `POSTMAN_CONTACT_EXAMPLE.md` in this folder.

