const appConfig = require('./app.config.js');
const dbConfig = require('./db.config.js');
const appKeys = require('./app.keys.js');
const dbKeys = require('./db.keys.js');

module.exports = {
  init: () => {
    // initialize the configuration
    console.log("app config", appConfig);
    console.log("db config", dbConfig);
    console.log("app keys", appKeys);
    console.log("db keys", dbKeys);
  }
};
