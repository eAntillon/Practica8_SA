var mysql = require("mysql");
var connection = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "info",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  connection.query("SELECT * from users", function (err, rows, fields) {
    if (err) throw err;
    console.log("info usuario 0: ", rows[0]);
    res.send(rows);
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`servidor web en  http://localhost:${port}`);
});
