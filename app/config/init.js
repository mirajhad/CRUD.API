const appConfig = require('./app.conf');
const dbConfig = require('./db.conf');
const appKeys = require('./app.keys');
const dbKeys = require('./db.keys');

module.exports = {
  init: () => {
    // initialize the configuration
    console.log("app config", appConfig);
    console.log("db config", dbConfig);
    console.log("app keys", appKeys);
    console.log("db keys", dbKeys);
  }
};
