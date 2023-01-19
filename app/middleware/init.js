const AppMiddleware = require('./App.middleware.js');
const ErrorHandlerMiddleware = require('./ErrorHandler.middleware.js');
const AuthMiddleware = require('./Auth.middleware.js');

module.exports = function(app) {
    AppMiddleware(app);
    // app.use(ErrorHandlerMiddleware);
    // app.use(AuthMiddleware)
};
