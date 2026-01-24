const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/create-order', paymentController.createOrder);
router.post('/verify-payment', paymentController.verifyPayment);
router.post('/payment-webhook', express.raw({ type: 'application/json' }), paymentController.paymentWebhook);

module.exports = router;
