const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'AW#se4dr5ft6',
        database: 'election'
    },
    console.log('Connected to the DB!')
);

module.exports = db;