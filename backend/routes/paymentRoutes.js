const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Create a new payment order
router.post('/create-order', paymentController.createOrder);

// Verify a payment signature
router.post('/verify-payment', paymentController.verifyPayment);

// Razorpay payment webhook endpoint
router.post('/payment-webhook', paymentController.handleWebhook);

module.exports = router;

