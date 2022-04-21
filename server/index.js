//conect mysql database
let mysql = require('mysql');

//import dotenv
require('dotenv').config();

let connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWD,
  database: process.env.DBNAME,
});

try {
  connection.connect();
  console.log('Connected to database');
} catch (error) {
  console.log(error);
}
