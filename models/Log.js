const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database');
    const Log = sequelize.define('Log', {
      timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      userId: { type: DataTypes.INTEGER },
      action: { type: DataTypes.STRING },
      details: { type: DataTypes.TEXT },
    });
    module.exports = Log;
