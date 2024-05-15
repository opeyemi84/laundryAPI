const express = require("express");

//Initialize Express App
const app = express();

//Home Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Twins Laundry Ventures</h1>");
});

//Start Server
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
