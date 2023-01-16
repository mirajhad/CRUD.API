const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/Dashboard.controller.js');
const middleware = require('../middleware/Auth.middleware.js');

// Define routes
router.get('/', middleware.isAuthenticated, DashboardController.index);
router.get('/settings', middleware.isAuthenticated, DashboardController.settings);
router.post('/settings', middleware.isAuthenticated, DashboardController.updateSettings);
router.get('/profile', middleware.isAuthenticated, DashboardController.profile);
router.post('/profile', middleware.isAuthenticated, DashboardController.updateProfile);

module.exports = router;
