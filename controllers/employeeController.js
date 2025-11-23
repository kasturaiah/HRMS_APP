const { Employee, Team, EmployeeTeam, Log } = require('../models');
    const winston = require('winston');
    const logger = winston.createLogger({ transports: [new winston.transports.File({ filename: 'logs/operations.log' })] });

    exports.getEmployees = async (req, res) => {
      const employees = await Employee.findAll({
        where: { OrganizationId: req.user.OrganizationId },
        include: [{ model: Team, through: { attributes: [] } }]
      });
      res.json(employees);
    };

    exports.createEmployee = async (req, res) => {
      const employee = await Employee.create({ ...req.body, OrganizationId: req.user.OrganizationId });
      await Log.create({ userId: req.user.id, action: 'Employee created', details: `ID: ${employee.id}` });
      logger.info(`[${new Date()}] User '${req.user.id}' added employee with ID ${employee.id}.`);
      res.json(employee);
    };

    exports.updateEmployee = async (req, res) => {
      const { id } = req.params;
      await Employee.update(req.body, { where: { id, OrganizationId: req.user.OrganizationId } });
      await Log.create({ userId: req.user.id, action: 'Employee updated', details: `ID: ${id}` });
      logger.info(`[${new Date()}] User '${req.user.id}' updated employee ${id}.`);
      res.json({ message: 'Employee updated' });
    };

    exports.deleteEmployee = async (req, res) => {
      const { id } = req.params;
      await Employee.destroy({ where: { id, OrganizationId: req.user.OrganizationId } });
      await Log.create({ userId: req.user.id, action: 'Employee deleted', details: `ID: ${id}` });
      logger.info(`[${new Date()}] User '${req.user.id}' deleted employee ${id}.`);
      res.json({ message: 'Employee deleted' });
    };

    exports.assignToTeam = async (req, res) => {
      const { employeeId, teamId } = req.body;
      await EmployeeTeam.create({ employeeId, teamId });
      await Log.create({ userId: req.user.id, action: 'Employee assigned to team', details: `Employee: ${employeeId}, Team: ${teamId}` });
      logger.info(`[${new Date()}] User '${req.user.id}' assigned employee ${employeeId} to team ${teamId}.`);
      res.json({ message: 'Assigned' });
    };

    exports.removeFromTeam = async (req, res) => {
      const { employeeId, teamId } = req.body;
      await EmployeeTeam.destroy({ where: { employeeId, teamId } });
      await Log.create({ userId: req.user.id, action: 'Employee removed from team', details: `Employee: ${employeeId}, Team: ${teamId}` });
      logger.info(`[${new Date()}] User '${req.user.id}' removed employee ${employeeId} from team ${teamId}.`);
      res.json({ message: 'Removed' });
    };
