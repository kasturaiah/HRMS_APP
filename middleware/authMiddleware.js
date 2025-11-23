const jwt = require('jsonwebtoken');
    const { User } = require('../models');
    const authenticate = async (req, res, next) => {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) return res.status(401).json({ error: 'Access denied' });
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id);
        next();
      } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
      }
    };
    module.exports = { authenticate };
