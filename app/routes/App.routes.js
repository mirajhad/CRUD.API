const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App.controller.js');
const UserController = require('../controllers/User.controller.js');

// Define routes
router.get('/health', AppController.health);
router.get('/user', UserController.create);
router.get('/getusers', UserController.readAll);
// router.get('/about', AppController.about);
// router.get('/contact', AppController.contact);

module.exports = router;
