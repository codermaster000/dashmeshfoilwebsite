# Postman example: POST /api/contact

**Request**
- Method: `POST`
- URL: `http://localhost:4000/api/contact`
- Headers:
  - `Content-Type: application/json`

**Body (raw → JSON)**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "subject": "Product inquiry",
  "message": "Hi, I would like to know more about your labels. Please share pricing and lead time."
}
```

**Success response (200)**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "timestamp": "2026-01-01T12:00:00.000Z"
}
```

**Validation error example (400)**
```json
{
  "success": false,
  "error": {
    "code": "BAD_REQUEST",
    "message": "Invalid email address"
  }
}
```

**Rate limit error example (429)**
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later."
  }
}
```

