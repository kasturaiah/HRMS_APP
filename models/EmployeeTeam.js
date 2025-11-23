const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database');
    const EmployeeTeam = sequelize.define('EmployeeTeam', {});
    module.exports = EmployeeTeam;