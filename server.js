const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');

require('./middleware/init')(app);



const config = require('./config/init.js');

config.init();


const appRoutes = require('./routes/App.routes');
app.use('/', appRoutes);

