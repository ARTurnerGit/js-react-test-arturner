const mysql = require("mysql");

// @see documententation at https://github.com/mysqljs/mysql
exports.db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3307,
  insecureAuth: true,
});
