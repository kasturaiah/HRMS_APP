const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const { Organization, User, Log } = require('../models');
    const winston = require('winston');
    const logger = winston.createLogger({ transports: [new winston.transports.File({ filename: 'logs/operations.log' })] });

    exports.registerOrg = async (req, res) => {
      const { orgName, email, password } = req.body;
      const org = await Organization.create({ name: orgName });
      const user = await User.create({ email, password, OrganizationId: org.id });
      await Log.create({ userId: user.id, action: 'Organization created', details: `Org: ${orgName}` });
      logger.info(`[${new Date()}] User '${user.id}' created organization '${orgName}'.`);
      res.json({ message: 'Organization created' });
    };

    exports.login = async (req, res) => {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ error: 'Invalid credentials' });
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      await Log.create({ userId: user.id, action: 'Login', details: '' });
      logger.info(`[${new Date()}] User '${user.id}' logged in.`);
      res.json({ token });
    };

    exports.logout = async (req, res) => {
      await Log.create({ userId: req.user.id, action: 'Logout', details: '' });
      logger.info(`[${new Date()}] User '${req.user.id}' logged out.`);
      res.json({ message: 'Logged out' });
    };