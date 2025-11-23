const { Team, Employee, EmployeeTeam, Log } = require('../models');
    const winston = require('winston');
    const logger = winston.createLogger({ transports: [new winston.transports.File({ filename: 'logs/operations.log' })] });

    exports.getTeams = async (req, res) => {
      const teams = await Team.findAll({
        where: { OrganizationId: req.user.OrganizationId },
        include: [{ model: Employee, through: { attributes: [] } }]
      });
      res.json(teams);
    };

    exports.createTeam = async (req, res) => {
      const team = await Team.create({ ...req.body, OrganizationId: req.user.OrganizationId });
      await Log.create({ userId: req.user.id, action: 'Team created', details: `ID: ${team.id}` });
      logger.info(`[${new Date()}] User '${req.user.id}' added team with ID ${team.id}.`);
      res.json(team);
    };

    exports.updateTeam = async (req, res) => {
      const { id } = req.params;
      await Team.update(req.body, { where: { id, OrganizationId: req.user.OrganizationId } });
      await Log.create({ userId: req.user.id, action: 'Team updated', details: `ID: ${id}` });
      logger.info(`[${new Date()}] User '${req.user.id}' updated team ${id}.`);
      res.json({ message: 'Team updated' });
    };

    exports.deleteTeam = async (req, res) => {
      const { id } = req.params;
      await Team.destroy({ where: { id, OrganizationId: req.user.OrganizationId } });
      await Log.create({ userId: req.user.id, action: 'Team deleted', details: `ID: ${id}` });
      logger.info(`[${new Date()}] User '${req.user.id}' deleted team ${id}.`);
      res.json({ message: 'Team deleted' });
    };