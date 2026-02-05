# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory with the following variables:
   
   ```env
   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
   
   # Server Configuration
   PORT=3001
   NODE_ENV=development
   
   # CORS Configuration (comma-separated)
   ALLOWED_ORIGINS=https://thetrifusion.in,https://www.thetrifusion.in,http://localhost:3000
   ```

3. **Get Razorpay Credentials**
   
   - Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Go to Settings → API Keys
   - Generate Test/Live keys
   - Copy Key ID and Key Secret to `.env`

4. **Configure Webhook**
   
   - Go to Razorpay Dashboard → Settings → Webhooks
   - Add webhook URL: `https://your-domain.com/api/payment-webhook`
   - Select events: `payment.captured`, `payment.failed`, `order.paid`
   - Copy the webhook secret to `.env` as `RAZORPAY_WEBHOOK_SECRET`

5. **Start the Server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

## Testing the API

### 1. Create Order
```bash
curl -X POST http://localhost:3001/api/create-order \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 1000,
    "currency": "INR",
    "receipt": "test_receipt_001",
    "customerName": "John Doe",
    "customerEmail": "john.doe@example.com",
    "customerPhone": "+919876543210",
    "templateId": "restaurant-template-full",
    "templateName": "Restaurant Template"
  }'
```

### 2. Verify Payment
```bash
curl -X POST http://localhost:3001/api/verify-payment \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "order_xxxxx",
    "paymentId": "pay_xxxxx",
    "signature": "signature_xxxxx"
  }'
```

## Production Deployment

1. **Use a Production Database**
   - Replace the in-memory Order model with MongoDB or PostgreSQL
   - Update `backend/models/Order.js` with your database connection

2. **Environment Variables**
   - Use environment-specific `.env` files
   - Never commit `.env` files to version control
   - Use secure secret management in production

3. **HTTPS**
   - Always use HTTPS in production
   - Configure SSL certificates

4. **Monitoring**
   - Set up error logging and monitoring
   - Monitor webhook delivery and payment statuses

## Troubleshooting

### CORS Errors
- Ensure your frontend domain is in `ALLOWED_ORIGINS`
- Check that CORS middleware is properly configured

### Webhook Not Working
- Verify webhook URL is accessible from internet
- Check webhook secret matches Razorpay dashboard
- Ensure webhook events are enabled in Razorpay dashboard

### Payment Verification Fails
- Verify Razorpay keys are correct
- Check that order exists in database
- Ensure signature is generated correctly

