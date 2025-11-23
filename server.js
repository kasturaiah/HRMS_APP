require('dotenv').config();
   const express = require('express');
   const path = require('path');
   const cors = require('cors');
   const { sequelize } = require('./models');
   const authRoutes = require('./routes/auth');
   const employeeRoutes = require('./routes/employees');
   const teamRoutes = require('./routes/teams');
   const logRoutes = require('./routes/logs');

   const app = express();
   app.use(cors());
   app.use(express.json());

   // API routes
   app.use('/auth', authRoutes);
   app.use('/employees', employeeRoutes);
   app.use('/teams', teamRoutes);
   app.use('/logs', logRoutes);

   // Serve static files from React build
   app.use(express.static(path.join(__dirname, 'client/build')));

   // Catch all: serve React app for non-API routes
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client/build/index.html'));
   });

   const PORT = process.env.PORT || 5000;
   sequelize.authenticate().then(() => {
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   }).catch(err => console.error('Database connection failed:', err));