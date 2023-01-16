const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    jwtSecret: 'development_secret_key',
    encryptionSecret: 'development_encryption_key'
  },
  test: {
    jwtSecret: 'test_secret_key',
    encryptionSecret: 'test_encryption_key'
  },
  production: {
    jwtSecret: process.env.JWT_SECRET,
    encryptionSecret: process.env.ENCRYPTION_SECRET
  }
};

module.exports = config[env];
