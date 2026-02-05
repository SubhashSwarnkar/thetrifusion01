# TheTriFusion Payment API Backend

Backend API server for handling Razorpay payment processing.

## Features

- Create Razorpay payment orders
- Verify payment signatures
- Handle Razorpay webhooks
- CORS support for frontend integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Configure your Razorpay credentials in `.env`:
```
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

4. Start the server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/create-order
Create a new payment order.

**Request Body:**
```json
{
  "amount": 1000,
  "currency": "INR",
  "receipt": "string",
  "customerName": "John Doe",
  "customerEmail": "john.doe@example.com",
  "customerPhone": "+919876543210",
  "templateId": "restaurant-template-full",
  "templateName": "Restaurant Template"
}
```

**Response (200):**
```json
{
  "id": "order_1234567890",
  "entity": "order",
  "amount": 100000,
  "amount_due": 100000,
  "amount_paid": 0,
  "currency": "INR",
  "receipt": "receipt_123",
  "status": "created",
  "attempts": 0,
  "created_at": 1234567890
}
```

### POST /api/verify-payment
Verify a payment signature.

**Request Body:**
```json
{
  "orderId": "order_1234567890",
  "paymentId": "pay_1234567890",
  "signature": "abc123def456..."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "order": {
    "orderId": "order_1234567890",
    "templateId": "restaurant-template-full",
    "templateName": "Restaurant Template",
    "customerEmail": "john.doe@example.com",
    "status": "paid"
  }
}
```

### POST /api/payment-webhook
Razorpay payment webhook endpoint.

**Headers:**
- `x-razorpay-signature`: Webhook signature from Razorpay

**Request Body:**
```json
{
  "event": "payment.captured",
  "payload": {
    "entity": {
      "payment": {},
      "order": {}
    }
  }
}
```

**Response (200):**
```json
{
  "received": true
}
```

## Environment Variables

- `RAZORPAY_KEY_ID`: Your Razorpay Key ID
- `RAZORPAY_KEY_SECRET`: Your Razorpay Key Secret
- `RAZORPAY_WEBHOOK_SECRET`: Your Razorpay Webhook Secret
- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)
- `ALLOWED_ORIGINS`: Comma-separated list of allowed CORS origins

## Database

Currently using an in-memory database for development. For production, replace the `Order` model in `models/Order.js` with a proper database solution like MongoDB or PostgreSQL.

## Webhook Setup

1. Go to Razorpay Dashboard → Settings → Webhooks
2. Add webhook URL: `https://your-domain.com/api/payment-webhook`
3. Select events: `payment.captured`, `payment.failed`, `order.paid`
4. Copy the webhook secret and add it to `.env` as `RAZORPAY_WEBHOOK_SECRET`

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error type",
  "success": false,
  "message": "Detailed error message"
}
```

## Security Notes

- Always use HTTPS in production
- Keep your Razorpay keys secure and never commit them to version control
- Verify webhook signatures to ensure requests are from Razorpay
- Use environment variables for all sensitive configuration

