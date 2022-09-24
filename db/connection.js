// Import and require mysql2
const mysql = require("mysql2");
require("dotenv").config();

// Connect to my database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: DB_USER,
    // MySQL password
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  console.log(`Connected to the myEmployees_db database.`)
);

module.exports = { db };
