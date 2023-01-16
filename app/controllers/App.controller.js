const App = require('../models/User.model');

exports.index = function(req, res) {
    App.find({}, function(err, apps) {
        if (err) return res.status(500).send(err);
        res.status(200).json(apps);
    });
};

exports.create = function(req, res) {
    let app = new App(req.body);
    app.save(function(err) {
        if (err) return res.status(500).send(err);
        res.status(201).json(app);
    });
};

exports.read = function(req, res) {
    App.findById(req.params.id, function(err, app) {
        if (err) return res.status(500).send(err);
        if (!app) return res.status(404).json({ message: 'App not found' });
        res.status(200).json(app);
    });
};

exports.update = function(req, res) {
    App.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, app) {
        if (err) return res.status(500).send(err);
        if (!app) return res.status(404).json({ message: 'App not found' });
        res.status(200).json(app);
    });
};

exports.delete = function(req, res) {
    App.findByIdAndRemove(req.params.id, function(err) {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'App deleted' });
    });
};
