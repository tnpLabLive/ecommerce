var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecom'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
    } else {
      console.log('Connected to MySQL database!');
    }
  });

module.exports = connection;