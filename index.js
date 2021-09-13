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

// create table port route
app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table created...");
  });
});

// insert post 1
app.get("/addpost1", (req, res) => {
  let post = {
    title: "Post One",
    body: "This is post number one",
  };
  let sql = "INSERT INTO posts set ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 1 added...");
  });
});

// insert post 2
app.get("/addpost2", (req, res) => {
  let post = {
    title: "Post Two",
    body: "This is post number two",
  };
  let sql = "INSERT INTO posts set ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 2 added...");
  });
});

// create connection to mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "blahblah",
  database: "nodemysql",
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
