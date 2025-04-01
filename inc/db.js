const mysql = require('mysql2');

// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'user',
  database: 'saboroso',
  password: 'Zedao123@'
});

module.exports = connection;