// In-memory database for orders (replace with MongoDB/PostgreSQL in production)
// For production, use a proper database like MongoDB with Mongoose or PostgreSQL with Sequelize

class OrderModel {
  constructor() {
    this.orders = [];
  }

  async save(orderData) {
    const order = {
      _id: this.orders.length + 1,
      ...orderData,
      createdAt: orderData.createdAt || new Date(),
      updatedAt: new Date()
    };
    this.orders.push(order);
    return order;
  }

  async findOne(query) {
    return this.orders.find(order => {
      for (const key in query) {
        if (order[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }

  async find(query = {}) {
    if (Object.keys(query).length === 0) {
      return this.orders;
    }
    return this.orders.filter(order => {
      for (const key in query) {
        if (order[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }

  async findByIdAndUpdate(id, update) {
    const index = this.orders.findIndex(order => order._id === id);
    if (index !== -1) {
      this.orders[index] = {
        ...this.orders[index],
        ...update,
        updatedAt: new Date()
      };
      return this.orders[index];
    }
    return null;
  }

  async updateOne(query, update) {
    const order = await this.findOne(query);
    if (order) {
      Object.assign(order, update, { updatedAt: new Date() });
      return { modifiedCount: 1 };
    }
    return { modifiedCount: 0 };
  }
}

// Export singleton instance
module.exports = new OrderModel();

// For production, replace the above with a proper database model:
/*
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  razorpayOrderId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'INR' },
  receipt: { type: String },
  status: { type: String, default: 'created' },
  customerName: { type: String },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String },
  templateId: { type: String },
  templateName: { type: String },
  paymentId: { type: String },
  paymentMethod: { type: String },
  paymentStatus: { type: String },
  failureReason: { type: String },
  paidAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
*/

