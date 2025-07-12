const mongoose = require('mongoose');

const swapRequestSchema = new mongoose.Schema({
  itemOfferedId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  itemRequestedId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.SwapRequest || mongoose.model('SwapRequest', swapRequestSchema);
