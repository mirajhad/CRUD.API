const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App.controller');
const UserController = require('../controllers/User.controller');
const PostController = require('../controllers/Posts.controller');
// Define routes
router.get('/health', AppController.health);
router.post('/create-user', UserController.create);
router.get('/get-users', UserController.readAll);
router.post('/create-post', PostController.create);
router.get('/getPosts', PostController.read);
// router.get('/about', AppController.about);
// router.get('/contact', AppController.contact);

module.exports = router;
