const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/**
 * POST /api/create-order
 * Create a new payment order
 */
exports.createOrder = async (req, res) => {
  try {
    const { 
      amount, 
      currency, 
      receipt, 
      customerName, 
      customerEmail, 
      customerPhone, 
      templateId, 
      templateName 
    } = req.body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return res.status(400).json({
        error: 'Invalid amount',
        success: false,
        message: 'Amount is required and must be greater than 0'
      });
    }

    if (!currency) {
      return res.status(400).json({
        error: 'Missing currency',
        success: false,
        message: 'Currency is required'
      });
    }

    if (!customerEmail) {
      return res.status(400).json({
        error: 'Missing customer email',
        success: false,
        message: 'Customer email is required'
      });
    }

    // Create Razorpay order
    const orderOptions = {
      amount: Math.round(amount * 100), // Convert to paise (smallest currency unit)
      currency: currency.toUpperCase(),
      receipt: receipt || `receipt_${Date.now()}`,
      notes: {
        customerName: customerName || '',
        customerEmail: customerEmail,
        customerPhone: customerPhone || '',
        templateId: templateId || '',
        templateName: templateName || ''
      }
    };

    const razorpayOrder = await razorpay.orders.create(orderOptions);

    // Store order in database
    const order = new Order({
      orderId: razorpayOrder.id,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      receipt: razorpayOrder.receipt,
      status: razorpayOrder.status,
      customerName: customerName || '',
      customerEmail: customerEmail,
      customerPhone: customerPhone || '',
      templateId: templateId || '',
      templateName: templateName || '',
      createdAt: new Date(razorpayOrder.created_at * 1000)
    });

    await order.save();

    // Return Razorpay order response
    res.status(200).json({
      id: razorpayOrder.id,
      entity: razorpayOrder.entity,
      amount: razorpayOrder.amount,
      amount_due: razorpayOrder.amount_due,
      amount_paid: razorpayOrder.amount_paid,
      currency: razorpayOrder.currency,
      receipt: razorpayOrder.receipt,
      status: razorpayOrder.status,
      attempts: razorpayOrder.attempts,
      created_at: razorpayOrder.created_at
    });

  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      error: 'Failed to create order',
      success: false,
      message: error.message || 'An error occurred while creating the order'
    });
  }
};

/**
 * POST /api/verify-payment
 * Verify a payment signature
 */
exports.verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    // Validate required fields
    if (!orderId || !paymentId || !signature) {
      return res.status(400).json({
        error: 'Missing required parameters',
        success: false,
        message: 'orderId, paymentId, and signature are required'
      });
    }

    // Find order in database
    const order = await Order.findOne({ orderId: orderId });

    if (!order) {
      return res.status(404).json({
        error: 'Order not found',
        success: false,
        message: 'The specified order was not found'
      });
    }

    // Verify signature
    const text = `${orderId}|${paymentId}`;
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex');

    if (generatedSignature !== signature) {
      return res.status(400).json({
        error: 'Invalid signature',
        success: false,
        message: 'Payment signature verification failed'
      });
    }

    // Update order status
    order.paymentId = paymentId;
    order.status = 'paid';
    order.paidAt = new Date();
    await order.save();

    // Return success response
    res.status(200).json({
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

  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      error: 'Payment verification failed',
      success: false,
      message: error.message || 'An error occurred while verifying the payment'
    });
  }
};

/**
 * POST /api/payment-webhook
 * Razorpay payment webhook endpoint
 */
exports.handleWebhook = async (req, res) => {
  try {
    const webhookSignature = req.headers['x-razorpay-signature'];

    if (!webhookSignature) {
      return res.status(400).json({
        error: 'Missing webhook signature',
        success: false,
        message: 'x-razorpay-signature header is required'
      });
    }

    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('RAZORPAY_WEBHOOK_SECRET is not configured');
      return res.status(500).json({
        error: 'Webhook secret not configured',
        success: false,
        message: 'Server configuration error'
      });
    }

    // Get raw body for signature verification (req.body is Buffer when using express.raw())
    const rawBody = Buffer.isBuffer(req.body) ? req.body.toString('utf8') : JSON.stringify(req.body);
    
    // Verify webhook signature using raw body
    const generatedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody)
      .digest('hex');

    if (generatedSignature !== webhookSignature) {
      return res.status(400).json({
        error: 'Invalid webhook signature',
        success: false,
        message: 'Webhook signature verification failed'
      });
    }

    // Parse the body if it's a string
    const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : req.body;
    const { event, payload } = body;

    // Handle different webhook events
    switch (event) {
      case 'payment.captured':
        await handlePaymentCaptured(payload);
        break;
      case 'payment.failed':
        await handlePaymentFailed(payload);
        break;
      case 'order.paid':
        await handleOrderPaid(payload);
        break;
      default:
        console.log(`Unhandled webhook event: ${event}`);
    }

    res.status(200).json({
      received: true
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({
      error: 'Webhook processing failed',
      success: false,
      message: error.message || 'An error occurred while processing the webhook'
    });
  }
};

/**
 * Handle payment.captured webhook event
 */
async function handlePaymentCaptured(payload) {
  try {
    // Razorpay webhook structure: payload.payment.entity and payload.order.entity
    const payment = payload.payment?.entity || payload.payment;
    const order = payload.order?.entity || payload.order;

    if (!payment || !order) {
      console.error('Invalid webhook payload structure for payment.captured');
      return;
    }

    const dbOrder = await Order.findOne({ orderId: order.id });
    if (dbOrder) {
      dbOrder.paymentId = payment.id;
      dbOrder.status = 'paid';
      dbOrder.paidAt = new Date();
      dbOrder.paymentMethod = payment.method;
      dbOrder.paymentStatus = payment.status;
      await dbOrder.save();
      console.log(`Payment captured for order: ${order.id}`);
    } else {
      console.log(`Order not found in database: ${order.id}`);
    }
  } catch (error) {
    console.error('Error handling payment.captured:', error);
  }
}

/**
 * Handle payment.failed webhook event
 */
async function handlePaymentFailed(payload) {
  try {
    // Razorpay webhook structure: payload.payment.entity and payload.order.entity
    const payment = payload.payment?.entity || payload.payment;
    const order = payload.order?.entity || payload.order;

    if (!payment || !order) {
      console.error('Invalid webhook payload structure for payment.failed');
      return;
    }

    const dbOrder = await Order.findOne({ orderId: order.id });
    if (dbOrder) {
      dbOrder.status = 'failed';
      dbOrder.paymentStatus = payment.status;
      dbOrder.failureReason = payment.error_description || payment.error?.description || 'Payment failed';
      await dbOrder.save();
      console.log(`Payment failed for order: ${order.id}`);
    } else {
      console.log(`Order not found in database: ${order.id}`);
    }
  } catch (error) {
    console.error('Error handling payment.failed:', error);
  }
}

/**
 * Handle order.paid webhook event
 */
async function handleOrderPaid(payload) {
  try {
    // Razorpay webhook structure: payload.order.entity
    const order = payload.order?.entity || payload.order;

    if (!order) {
      console.error('Invalid webhook payload structure for order.paid');
      return;
    }

    const dbOrder = await Order.findOne({ orderId: order.id });
    if (dbOrder) {
      dbOrder.status = 'paid';
      dbOrder.paidAt = new Date();
      await dbOrder.save();
      console.log(`Order paid: ${order.id}`);
    } else {
      console.log(`Order not found in database: ${order.id}`);
    }
  } catch (error) {
    console.error('Error handling order.paid:', error);
  }
}

