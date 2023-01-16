const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    dbUsername: 'development_username',
    dbPassword: 'development_password'
  },
  test: {
    dbUsername: 'test_username',
    dbPassword: 'test_password'
  },
  production: {
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD
  }
};

module.exports = config[env];
