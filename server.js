const express = require('express');
const app = express();
require('dotenv').config();
const appConfig = require('./app/config/app.conf');
require('./app/middleware/init')(app);

// connect to mongodb
require('./app/database/Mongo.database');


// app.get('/users', UserController.index);
// app.post('/users', UserController.create);
// app.get('/users/:id', UserController.read);
// app.put('/users/:id', UserController.update);
// app.delete('/users/:id', UserController.delete);
// app.post('/users/login', UserController.login);


const appRoutes = require('./app/routes/App.routes');
const authRoutes = require('./app/routes/Auth.routes');
app.use('/api', appRoutes);
app.use('/api', authRoutes);

app.listen(appConfig.port, () => {
    console.log('Server is running on port', appConfig.port);
});

