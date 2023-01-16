const express = require('express');
const router = express.Router();
const AuthController = require('../app/controllers/Auth.controller.js.js');
const middleware = require('../app/middleware/Auth.middleware.js.js');

// Define routes
router.get('/login', AuthController.loginPage);
router.post('/login', AuthController.login);
router.get('/signup', AuthController.signupPage);
router.post('/signup', AuthController.signup);
router.get('/logout', middleware.isAuthenticated, AuthController.logout);

module.exports = router;
