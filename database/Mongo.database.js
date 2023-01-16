const mongoose = require('mongoose');
const dbConfig = require('../config/db.config.js');

// Connect to the MongoDB
mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
