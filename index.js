const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport');

const authRoutes = require('./Routes/authRoutes');
const adminRoutes = require('./Routes/adminRoutes'); // ✅ New admin routes

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'rewear-session-secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// 🔐 Auth routes
app.use('/api/auth', authRoutes);

// 🧑‍💼 Admin routes
app.use('/api/admin', adminRoutes);

// 🌍 Health check
app.get('/', (req, res) => {
  res.send("🌍 ReWear API running...");
});

// ⚡ MongoDB connect & server start
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
const express = require('express')
const cors = require('cors') // if frontend is on another port
const app = express()

app.use(cors())
app.use(express.json())

const itemRoute = require('./routes/itemroute')
app.use('/items', itemRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


