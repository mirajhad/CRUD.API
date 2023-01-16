const AppMiddleware = require('./App.middleware.js');
const ErrorHandlerMiddleware = require('./ErrorHandler.middleware.js');

module.exports = function(app) {
    AppMiddleware(app);
    app.use(ErrorHandlerMiddleware);
};
