var mysql = require("mysql2/promise");
const bluebird = require("bluebird");

const express = require("express");
const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  var connection = await mysql.createConnection({
    host: "db",
    user: "root",
    password: "password",
    database: "info",
    Promise: bluebird,
  });

  const [rows, fields] = await connection.execute("SELECT * from users");
  console.log(rows[0]);
  if (rows.length > 0) {
    res.send(rows);
    return;
  }
  res.send("No data");
});

app.listen(port, () => {
  console.log(`servidor web en  http://localhost:${port}`);
});
