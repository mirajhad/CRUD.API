const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');

require('./middleware/init')(app);



const config = require('./config/init.js');

config.init();

app.get('/users', UserController.index);
app.post('/users', UserController.create);
app.get('/users/:id', UserController.read);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);
app.post('/users/login', UserController.login);


const appRoutes = require('./routes/App.routes');
app.use('/', appRoutes);

app.listen(3000, function() {
    console.log('Server started on port 3000');
});

