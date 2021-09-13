const express = require("express");
const mysql = require("mysql");

const app = express();

// create db
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  console.log("route hit");
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

// create connection to mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "blahblah",
});

// connec to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

app.listen("3000", () => {
  console.log("server started on port 3000");
});
