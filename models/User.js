const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  googleId: {
  type: String,
  unique: true,
  sparse: true
},

});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
