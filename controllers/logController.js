const { Log } = require('../models');

    exports.getLogs = async (req, res) => {
      const logs = await Log.findAll({ where: { userId: req.user.id } });
      res.json(logs);
    };