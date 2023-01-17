const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App.controller.js');
const UserController = require('../controllers/User.controller.js');

// Define routes
router.get('/health', AppController.health);
router.post('/create-user', UserController.create);
router.get('/get-users', UserController.readAll);
// router.get('/about', AppController.about);
// router.get('/contact', AppController.contact);

module.exports = router;
