const { DataTypes } = require('sequelize');
   const sequelize = require('../config/database');
   const Employee = sequelize.define('Employee', {
     name: { type: DataTypes.STRING },
     email: { type: DataTypes.STRING },
     position: { type: DataTypes.STRING },
   });
   module.exports = Employee;