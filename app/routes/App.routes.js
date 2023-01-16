const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App.controller.js');

// Define routes
router.get('/health', AppController.health);
// router.get('/user', AppController.index);
// router.get('/about', AppController.about);
// router.get('/contact', AppController.contact);

module.exports = router;
