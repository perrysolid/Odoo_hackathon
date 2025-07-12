const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  type: String,
  status: String,
  users: String,
});

module.exports = mongoose.model('Order', orderSchema);
