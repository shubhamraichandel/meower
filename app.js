const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongooes = require("mongoose");

const app = express();

app.use(morgan("dev"));

// Initial route

app.get("/", (req, res) => {
  console.log("ruunning");
  res.json({
    message: "Welcome to Meower 🙀",
  });
});

module.exports = app;
