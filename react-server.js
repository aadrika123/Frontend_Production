// // successfull react serve working code for react
// const path = require("path");
// const express = require("express");
// const app = express(); // create express app

// console.log('before hitt')
// //home route will redirect to the citizen-pannel route
// app.get("/", (req, res) => {
//   console.log('home route hitted')
//   res.redirect('/fines')
// });

// app.use(express.static("fine_penalty_build"));

// app.get("/fines", (req, res) => {
//   res.sendFile(path.join(__dirname, "fine_penalty_build", "index.html"));
// });
// app.get("/fines/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "fine_penalty_build", "index.html"));
// });

// // start express server on port 80
// app.listen(80, () => {
//   console.log("server started on port 80");
// });


// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app

console.log('before hitt')
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
  console.log('home route hitted')
  res.redirect('/citizen')
});

//middleware to server static files also
app.use(express.static("citizen_build"));
app.use(express.static("admin_build"));
app.use(express.static("property_build"));
app.use(express.static("water_build"));
app.use(express.static("trade_build"));
app.use(express.static("dashboard_build"));
app.use(express.static("advertisement_build"));
app.use(express.static("citizen_mb_build"));
app.use(express.static("dashboard_property_build"));
app.use(express.static("swm_build"));
app.use(express.static("marriage_build"));
app.use(express.static("admin_control_build"));
app.use(express.static("fine_penalty_build"));
app.use(express.static("pet_build"));
app.use(express.static("lv_dashboard_build"));
app.use(express.static("agency_build"));
app.use(express.static("citizen_app_build"));
app.use(express.static("userControl_build"));

//actual routes
app.get("/citizen", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});
app.get("/citizen/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});
app.get("/fines", (req, res) => {
  res.sendFile(path.join(__dirname, "fine_penalty_build", "index.html"));
});
app.get("/fines/*", (req, res) => {
  res.sendFile(path.join(__dirname, "fine_penalty_build", "index.html"));
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin_build", "index.html"));
});
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "admin_build", "index.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_build", "index.html"));
});
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_build", "index.html"));
});
app.get("/property", (req, res) => {
  res.sendFile(path.join(__dirname, "property_build", "index.html"));
});
app.get("/property/*", (req, res) => {
  res.sendFile(path.join(__dirname, "property_build", "index.html"));
});
app.get("/water", (req, res) => {
  res.sendFile(path.join(__dirname, "water_build", "index.html"));
});
app.get("/water/*", (req, res) => {
  res.sendFile(path.join(__dirname, "water_build", "index.html"));
});
app.get("/trade", (req, res) => {
  res.sendFile(path.join(__dirname, "trade_build", "index.html"));
});
app.get("/trade/*", (req, res) => {
  res.sendFile(path.join(__dirname, "trade_build", "index.html"));
});
app.get("/advertisement", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement_build", "index.html"));
});
app.get("/advertisement/*", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement_build", "index.html"));
});
app.get("/mobile", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});
app.get("/mobile/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});
app.get("/propdashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_property_build", "index.html"));
});
app.get("/propdashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_property_build", "index.html"));
});
app.get("/swm", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});
app.get("/swm/*", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});

app.get("/marriage", (req, res) => {
  res.sendFile(path.join(__dirname, "marriage_build", "index.html"));
});
app.get("/marriage/*", (req, res) => {
  res.sendFile(path.join(__dirname, "marriage_build", "index.html"));
});
app.get("/pet", (req, res) => {
  res.sendFile(path.join(__dirname, "pet_build", "index.html"));
});
app.get("/pet/*", (req, res) => {
  res.sendFile(path.join(__dirname, "pet_build", "index.html"));
});
app.get("/liveDashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "lv_dashboard_build", "index.html"));
});
app.get("/liveDashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "lv_dashboard_build", "index.html"));
});
app.get("/agency", (req, res) => {
  res.sendFile(path.join(__dirname, "agency_build", "index.html"));
});
app.get("/agency/*", (req, res) => {
  res.sendFile(path.join(__dirname, "agency_build", "index.html"));
});
app.get("/juidco-app", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_app_build", "index.html"));
});
app.get("/juidco-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_app_build", "index.html"));
});
app.get("/userControl", (req, res) => {
  res.sendFile(path.join(__dirname, "userControl_build", "index.html"));
});
app.get("/userControl/*", (req, res) => {
  res.sendFile(path.join(__dirname, "userControl_build", "index.html"));
});



// start express server on port 80
app.listen(500, () => {
  console.log("server started on port 500");
});
