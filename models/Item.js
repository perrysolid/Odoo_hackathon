const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  size: String,
  condition: String,
  tags: [String],
  images: [String],
  status: { type: String, default: 'available' },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Item || mongoose.model('Item', itemSchema);
