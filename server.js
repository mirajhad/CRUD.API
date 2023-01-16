const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./app/config/init.js');

config.init();
require('./app/middleware/init')(app);





config.init();

// app.get('/users', UserController.index);
// app.post('/users', UserController.create);
// app.get('/users/:id', UserController.read);
// app.put('/users/:id', UserController.update);
// app.delete('/users/:id', UserController.delete);
// app.post('/users/login', UserController.login);


const appRoutes = require('./app/routes/App.routes');
app.use('/', appRoutes);

app.listen(3000, function() {
    console.log('Server started on port 3000');
});

