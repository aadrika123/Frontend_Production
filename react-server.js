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
app.use(express.static("adminControl_build"));
app.use(express.static("rig_build"));
app.use(express.static("fines_app_build"));
app.use(express.static("ptms_build"));
app.use(express.static("parking_build"));
app.use(express.static("septicTank_build"));
app.use(express.static("financeCommission_build"));
app.use(express.static("pms_build"));
app.use(express.static("grievance_build"));
app.use(express.static("edak_build"));
app.use(express.static("masterControl_build"));
app.use(express.static("juidco_swm_app"));
app.use(express.static("parking_app_build"));
app.use(express.static("mobile-lams_build"));
app.use(express.static("legal_build"));
app.use(express.static("market_management_build"));
app.use(express.static("municipal_rental_build"));
app.use(express.static("water_tanker_build"));


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
app.get("/adminControl", (req, res) => {
  res.sendFile(path.join(__dirname, "adminControl_build", "index.html"));
});
app.get("/adminControl/*", (req, res) => {
  res.sendFile(path.join(__dirname, "adminControl_build", "index.html"));
});
app.get("/rig", (req, res) => {
  res.sendFile(path.join(__dirname, "rig_build", "index.html"));
});
app.get("/rig/*", (req, res) => {
  res.sendFile(path.join(__dirname, "rig_build", "index.html"));
});
app.get("/fines-app", (req, res) => {
  res.sendFile(path.join(__dirname, "fines_app_build", "index.html"));
});
app.get("/fines-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "fines_app_build", "index.html"));
});
app.get("/ptms", (req, res) => {
  res.sendFile(path.join(__dirname, "ptms_build", "index.html"));
});
app.get("/ptms/*", (req, res) => {
  res.sendFile(path.join(__dirname, "ptms_build", "index.html"));
});
app.get("/parking", (req, res) => {
  res.sendFile(path.join(__dirname, "parking_build", "index.html"));
});
app.get("/parking/*", (req, res) => {
  res.sendFile(path.join(__dirname, "parking_build", "index.html"));
});
app.get("/septicTank", (req, res) => {
  res.sendFile(path.join(__dirname, "septicTank_build", "index.html"));
});
app.get("/septicTank/*", (req, res) => {
  res.sendFile(path.join(__dirname, "septicTank_build", "index.html"));
});
app.get("/f-commission", (req, res) => {
  res.sendFile(path.join(__dirname, "financeCommission_build", "index.html"));
});
app.get("/f-commission*", (req, res) => {
  res.sendFile(path.join(__dirname, "financeCommission_build", "index.html"));
});
app.get("/procurement", (req, res) => {
  res.sendFile(path.join(__dirname, "pms_build", "index.html"));
});
app.get("/procurement*", (req, res) => {
  res.sendFile(path.join(__dirname, "pms_build", "index.html"));
});
app.get("/grievance", (req, res) => {
  res.sendFile(path.join(__dirname, "grievance_build", "index.html"));
});
app.get("/grievance*", (req, res) => {
  res.sendFile(path.join(__dirname, "grievance_build", "index.html"));
});
app.get("/e-dak", (req, res) => {
  res.sendFile(path.join(__dirname, "edak_build", "index.html"));
});
app.get("/e-dak/*", (req, res) => {
  res.sendFile(path.join(__dirname, "edak_build", "index.html"));
});
app.get("/master-control", (req, res) => {
  res.sendFile(path.join(__dirname, "masterControl_build", "index.html"));
});
app.get("/master-control*", (req, res) => {
  res.sendFile(path.join(__dirname, "masterControl_build", "index.html"));
});
app.get("/juidco-swm-app", (req, res) => {
  res.sendFile(path.join(__dirname, "juidco_swm_app", "index.html"));
});
app.get("/juidco-swm-app*", (req, res) => {
  res.sendFile(path.join(__dirname, "juidco_swm_app", "index.html"));
});
app.get("/parking-app", (req, res) => {
  res.sendFile(path.join(__dirname, "parking_app_build", "index.html"));
});
app.get("/parking-app*", (req, res) => {
  res.sendFile(path.join(__dirname, "parking_app_build", "index.html"));
});
app.get("/mobile-lams", (req, res) => {
  res.sendFile(path.join(__dirname, "mobile-lams_build", "index.html"));
});
app.get("/mobile-lams/*", (req, res) => {
  res.sendFile(path.join(__dirname, "mobile-lams_build", "index.html"));
});
app.get("/legal", (req, res) => {
  res.sendFile(path.join(__dirname, "legal_build", "index.html"));
});
app.get("/legal/*", (req, res) => {
  res.sendFile(path.join(__dirname, "legal_build", "index.html"));
});
app.get("/market-management", (req, res) => {
  res.sendFile(path.join(__dirname, "market_management_build", "index.html"));
});
app.get("/market-management/*", (req, res) => {
  res.sendFile(path.join(__dirname, "market_management_build", "index.html"));
});
app.get("/municipal-rental", (req, res) => {
  res.sendFile(path.join(__dirname, "municipal_rental_build", "index.html"));
});
app.get("/municipal-rental/*", (req, res) => {
  res.sendFile(path.join(__dirname, "municipal_rental_build", "index.html"));
});
app.get("/water-tanker", (req, res) => {
  res.sendFile(path.join(__dirname, "water_tanker_build", "index.html"));
});
app.get("/water-tanker/*", (req, res) => {
  res.sendFile(path.join(__dirname, "water_tanker_build", "index.html"));
});
app.get("/server-health", (req, res) => {
  res.json({ sucess: true, message: 'Server is running Ok' })
});
// start express server on port 80
app.listen(500, () => {
  console.log("server started on port 500");
});
