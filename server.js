const express = require("express");
const bodyparser = require("body-parser");

//Initialize Express App
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home</h1>");
});

//Home Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Twins Laundry Ventures</h1>");
});

//Start Server
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
