const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "sync360db"
});

module.exports = { db };
