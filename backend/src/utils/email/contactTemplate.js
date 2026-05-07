import { escapeHtml } from './escapeHtml.js';

// Returns a professional HTML email.
// Includes all submitted form fields.
export function buildContactEmailHtml({
  name,
  email,
  phone,
  subject,
  message,
  submittedAt
}) {
  const safeSubmittedAt = escapeHtml(submittedAt.toISOString());

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f7fb;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);">
            <tr>
              <td style="padding:24px 24px 8px 24px;">
                <div style="font-size:14px;color:#6b7280;">Contact Form</div>
                <div style="font-size:20px;font-weight:700;color:#111827;margin-top:6px;">New message received</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 24px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eef2f7;">
                      <strong style="color:#374151;">Submitted At:</strong>
                      <span style="color:#111827;">${safeSubmittedAt}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eef2f7;">
                      <strong style="color:#374151;">Name:</strong>
                      <span style="color:#111827;">${escapeHtml(name)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eef2f7;">
                      <strong style="color:#374151;">Email:</strong>
                      <span style="color:#111827;">${escapeHtml(email)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eef2f7;">
                      <strong style="color:#374151;">Phone:</strong>
                      <span style="color:#111827;">${escapeHtml(phone)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #eef2f7;">
                      <strong style="color:#374151;">Subject:</strong>
                      <span style="color:#111827;">${escapeHtml(subject)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;">
                      <strong style="color:#374151;">Message:</strong>
                      <div style="margin-top:8px;padding:14px;border:1px solid #eef2f7;border-radius:12px;background:#fafafa;color:#111827;line-height:1.5;white-space:pre-wrap;">
                        ${escapeHtml(message)}
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:18px;font-size:12px;color:#6b7280;line-height:1.5;">
                  <strong>Tip:</strong> Reply directly to the sender using the provided email address.
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px;background:#f9fafb;border-top:1px solid #eef2f7;">
                <div style="font-size:12px;color:#6b7280;">
                  This email was sent from your website contact form.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

