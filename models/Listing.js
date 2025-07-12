const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  item: String,
  type: String,
  seller: String,
});

module.exports = mongoose.model('Listing', listingSchema);
