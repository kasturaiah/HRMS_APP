const express = require('express');
    const { getTeams, createTeam, updateTeam, deleteTeam } = require('../controllers/teamController');
    const { authenticate } = require('../middleware/authMiddleware');
    const router = express.Router();
    router.get('/', authenticate, getTeams);
    router.post('/', authenticate, createTeam);
    router.put('/:id', authenticate, updateTeam);
    router.delete('/:id', authenticate, deleteTeam);
    module.exports = router;