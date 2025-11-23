const sequelize = require('../config/database');
   const Organization = require('./Organization');
   const User = require('./User');
   const Employee = require('./Employee');
   const Team = require('./Team');
   const EmployeeTeam = require('./EmployeeTeam');
   const Log = require('./Log');

   Organization.hasMany(User);
   User.belongsTo(Organization);
   Organization.hasMany(Employee);
   Organization.hasMany(Team);
   Employee.belongsToMany(Team, { through: EmployeeTeam });
   Team.belongsToMany(Employee, { through: EmployeeTeam });

   sequelize.sync();
   module.exports = { sequelize, Organization, User, Employee, Team, EmployeeTeam, Log };
