const Post = require('../models/Posts.model');

exports.create = function(req, res) {
    let post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.status(500).send(err);
        res.status(201).json(post);
    });
} 

exports.read = function(req, res) {
    Post.find({}, function(err, posts) {
        if (err) return res.status(500).send(err);
        res.status(200).json(posts);
    })
}