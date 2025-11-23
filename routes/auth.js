const express = require('express');
    const { registerOrg, login, logout } = require('../controllers/authController');
    const { authenticate } = require('../middleware/authMiddleware');
    const router = express.Router();
    router.post('/register', registerOrg);
    router.post('/login', login);
    router.post('/logout', authenticate, logout);
    module.exports = router;
