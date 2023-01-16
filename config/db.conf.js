const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    host: 'localhost',
    port: 27017,
    name: 'dev_db'
  },
  test: {
    host: 'localhost',
    port: 27017,
    name: 'test_db'
  },
  production: {
    host: 'localhost',
    port: 27017,
    name: 'prod_db'
  }
};

module.exports = config[env];
