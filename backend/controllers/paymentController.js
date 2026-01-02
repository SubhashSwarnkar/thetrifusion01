const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/orderModel');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, customerName, customerEmail, customerPhone } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // Save to MongoDB
    const newOrder = new Order({
      orderId: razorpayOrder.id,
      amount: amount,
      currency: currency,
      receipt: receipt,
      customerName,
      customerEmail,
      customerPhone,
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
      }

      res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ success: false, error: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
