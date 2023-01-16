require("dotenv").config();
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.DEV_PORT || 3000,
    sessionSecret: 'development_secret',
    corsOrigin: 'http://localhost:4200'
  },
  test: {
    port: 3001,
    sessionSecret: 'test_secret',
    corsOrigin: 'http://localhost:4201'
  },
  production: {
    port: process.env.PORT,
    sessionSecret: process.env.SESSION_SECRET,
    corsOrigin: process.env.CORS_ORIGIN
  }
};

module.exports = config[env];
