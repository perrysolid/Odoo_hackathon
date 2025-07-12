const { Router } = require('express');
const authController = require('../Controller/auth_controller');
const { requireAuth, requireAdmin } = require('../MiddleWare/auth_middleware');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = Router();
router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.get('/me', requireAuth, authController.me_get);


router.get('/admin-only', requireAdmin, (req, res) => {
  res.json({ message: "You are an admin ✅" });
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, {
      expiresIn: 3 * 24 * 60 * 60 // 3 days
    });

    res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 });
    res.redirect('/dashboard'); // Change based on frontend route
  }
);

module.exports = router;
