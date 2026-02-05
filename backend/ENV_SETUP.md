# Environment Variables Setup

## Backend Configuration

The backend `.env` file has been created with your Razorpay test credentials:

```
RAZORPAY_KEY_ID=rzp_test_SCXjNYrPfEMs4m
RAZORPAY_KEY_SECRET=9rcUnZ5mOsPqsvqs40v67oHt
```

## Frontend Configuration

The frontend `.env` file has been created with:

```
REACT_APP_RAZORPAY_KEY_ID=rzp_test_SCXjNYrPfEMs4m
REACT_APP_API_URL=http://localhost:3001
```

## Next Steps

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Start the Frontend:**
   ```bash
   npm install
   npm start
   ```

3. **Test Payment Flow:**
   - The payment system is now configured with test keys
   - Use Razorpay test cards for testing payments
   - Test card: 4111 1111 1111 1111 (any CVV, any expiry date)

## Important Notes

- These are **TEST** keys - they won't process real payments
- For production, generate Live keys from Razorpay Dashboard
- Never commit `.env` files to version control
- The webhook secret can be set up later when configuring webhooks in Razorpay Dashboard

