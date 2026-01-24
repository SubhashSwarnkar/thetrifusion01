const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/orderModel');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, customerName, customerEmail, customerPhone, templateId, templateName } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    if (!templateId) {
      return res.status(400).json({ error: 'Template ID is required' });
    }

    // Generate receipt if not provided, or truncate if too long (Razorpay max 40 chars)
    let receiptId = receipt;
    if (!receiptId) {
      // Generate receipt using timestamp
      receiptId = `receipt_${Date.now()}`;
    }
    // Ensure receipt is max 40 characters
    if (receiptId.length > 40) {
      receiptId = receiptId.substring(0, 40);
    }

    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt: receiptId,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // Save to MongoDB
    const newOrder = new Order({
      orderId: razorpayOrder.id,
      amount: amount,
      currency: currency,
      receipt: receiptId,
      customerName,
      customerEmail,
      customerPhone,
      templateId,
      templateName,
      status: 'created',
    });

    await newOrder.save();

    res.json(razorpayOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Something went wrong while creating order' });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    if (!orderId || !paymentId || !signature) {
      return res.status(400).json({ success: false, error: 'Missing required parameters' });
    }

    const body = orderId + '|' + paymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === signature) {
      // Payment is legit
      
      // Update order in MongoDB
      const order = await Order.findOne({ orderId: orderId });
      if (order) {
        order.status = 'paid';
        order.paymentId = paymentId;
        order.signature = signature;
        await order.save();

        res.json({ 
          success: true, 
          message: 'Payment verified successfully',
          order: {
            orderId: order.orderId,
            templateId: order.templateId,
            templateName: order.templateName,
            customerEmail: order.customerEmail,
            status: order.status
          }
        });
      } else {
        res.status(404).json({ success: false, error: 'Order not found' });
      }
    } else {
      res.status(400).json({ success: false, error: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Webhook handler for Razorpay payment callbacks
exports.paymentWebhook = async (req, res) => {
  try {
    const webhookSignature = req.headers['x-razorpay-signature'];
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // Parse raw body to JSON
    const body = req.body.toString();
    let webhookData;
    try {
      webhookData = JSON.parse(body);
    } catch (parseError) {
      console.error('Error parsing webhook body:', parseError);
      return res.status(400).json({ error: 'Invalid JSON in webhook body' });
    }

    if (!webhookSecret) {
      console.warn('RAZORPAY_WEBHOOK_SECRET not set, skipping webhook verification');
    } else {
      // Verify webhook signature
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(body)
        .digest('hex');

      if (expectedSignature !== webhookSignature) {
        console.error('Invalid webhook signature');
        return res.status(400).json({ error: 'Invalid signature' });
      }
    }

    const { event, payload } = webhookData;

    // Handle payment success event
    if (event === 'payment.captured' || event === 'payment.authorized') {
      const payment = payload.payment.entity;
      const orderId = payment.order_id;

      // Find and update order
      const order = await Order.findOne({ orderId: orderId });
      if (order) {
        order.status = 'paid';
        order.paymentId = payment.id;
        await order.save();
        console.log(`Order ${orderId} marked as paid via webhook`);
      } else {
        console.warn(`Order ${orderId} not found for webhook`);
      }
    }

    // Handle payment failure event
    if (event === 'payment.failed') {
      const payment = payload.payment.entity;
      const orderId = payment.order_id;

      const order = await Order.findOne({ orderId: orderId });
      if (order) {
        order.status = 'failed';
        await order.save();
        console.log(`Order ${orderId} marked as failed via webhook`);
      }
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
};
