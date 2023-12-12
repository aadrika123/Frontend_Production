// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app

console.log('before hitt')
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
  console.log('home route hitted')
  res.redirect('/fines')
});

app.use(express.static("fine_penalty_build"));

app.get("/fines", (req, res) => {
  res.sendFile(path.join(__dirname, "fine_penalty_build", "index.html"));
});
app.get("/fines/*", (req, res) => {
  res.sendFile(path.join(__dirname, "fine_penalty_build", "index.html"));
});

// start express server on port 80
app.listen(80, () => {
  console.log("server started on port 80");
});