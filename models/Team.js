const { DataTypes } = require('sequelize');
   const sequelize = require('../config/database');
   const Team = sequelize.define('Team', {
     name: { type: DataTypes.STRING },
     description: { type: DataTypes.TEXT },
   });
   module.exports = Team;
