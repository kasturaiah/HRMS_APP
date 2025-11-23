const { DataTypes } = require('sequelize');
   const sequelize = require('../config/database');
   const bcrypt = require('bcryptjs');
   const User = sequelize.define('User', {
     email: { type: DataTypes.STRING, unique: true },
     password: { type: DataTypes.STRING },
   });
   User.beforeCreate(async (user) => {
     user.password = await bcrypt.hash(user.password, 10);
   });
   module.exports = User;