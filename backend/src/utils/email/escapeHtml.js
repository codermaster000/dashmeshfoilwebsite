// Minimal HTML escaping to prevent HTML injection in the email template.
// (Even though email sending is server-side, it's still best practice.)

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '<')
    .replaceAll('>', '>')
    .replaceAll('"', '"')
    .replaceAll("'", '&#039;');
}

