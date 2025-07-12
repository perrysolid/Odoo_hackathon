const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin');

const User = require('../models/User');
const Order = require('../models/Order');
const Listing = require('../models/Listing');

// 🧑‍💼 Get all users
router.get('/users', isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// 📦 Get all orders
router.get('/orders', isAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// 👕 Get all listings
router.get('/listings', isAdmin, async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

// 📊 Get admin metrics for dashboard
router.get('/metrics', isAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalListings = await Listing.countDocuments();
    const totalOrders = await Order.countDocuments();
    const pendingOrders = await Order.countDocuments({ status: 'pending' });

    const totalPoints = await User.aggregate([
      { $group: { _id: null, total: { $sum: '$points' } } }
    ]);

    res.json({
      totalUsers,
      totalListings,
      totalOrders,
      pendingOrders,
      totalPoints: totalPoints[0]?.total || 0,
      lastUpdated: new Date()
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

module.exports = router;
