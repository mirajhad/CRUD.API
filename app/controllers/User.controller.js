const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const config = require('../config/init');

exports.index = function(req, res) {
    User.find({}, function(err, users) {
        if (err) return res.status(500).send(err);
        res.status(200).json(users);
    });
};

exports.create = function(req, res) {
    let user = new User(req.body);
    user.save(function(err) {
        if (err) return res.status(500).send(err);
        res.status(201).json(user);
    });
};

exports.read = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    });
};

exports.readAll = function(req, res){
    User.find({}, function(err, users) {
        if (err) return res.status(500).send(err);
        res.status(200).json(users);
    });
}

exports.update = function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    })};
