
const { Client } = require('pg');
const dbConfig = require('../config/db.conf');

const client = new Client({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.name,
    password: dbConfig.password,
    port: dbConfig.port,
});

client.connect();