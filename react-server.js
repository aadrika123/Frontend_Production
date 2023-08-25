//////////////////////////////////////////////////////////////////////////////////////

//    Author - Talib Hussain
//    Version - 1.0
//    Date - 06 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  -  react-server.js
//    DESCRIPTION -  THIS IS CONFIGURATION FILE FOR THE SERVER FOR REACT PRODUCTION BUILD FILES
//                     1. CONTAINING 12 BUILD FIELS FOR JUIDCO PROJECT
//                     2. CONTAINING 3 BUILD FILES FOR OTHER PROJECTS
//////////////////////////////////////////////////////////////////////////////////////
const path = require("path");
const express = require("express");
const app = express(); 

// ═════════════════║🔰 THESE CODES ENSURES STATIC FILES IMPORT IN PROJECT 🔰║══════════════════════
app.use(express.static("citizen_build"));
app.use(express.static("property_build"));
app.use(express.static("water_build"));
app.use(express.static("trade_build"));
app.use(express.static("dashboard_build"));
app.use(express.static("advertisement_build"));
app.use(express.static("citizen_mb_build"));
app.use(express.static("swm_build"));
app.use(express.static("tanker_admin_build"));
app.use(express.static("tanker_citizen_build"));
app.use(express.static("marriage_build"));
app.use(express.static("reporting_build"));

app.use(express.static("csms_build"));
app.use(express.static("fee_mgmt_build"));
app.use(express.static("csms_madhupur_build"));

app.use(express.static("404"));

// ═════════════════║🔰 THESE ARE AVAILABLE ROUTES FOR THE PROJECT 🔰║══════════════════════
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
  res.redirect('/citizen')
});
app.get("/citizen", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});
app.get("/citizen/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
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
app.get("/swm", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});
app.get("/swm/*", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});
app.get("/csms", (req, res) => {
  res.sendFile(path.join(__dirname, "csms_build", "index.html"));
});
app.get("/csms/*", (req, res) => {
  res.sendFile(path.join(__dirname, "csms_build", "index.html"));
});
app.get("/fee-mgmt", (req, res) => {
  res.sendFile(path.join(__dirname, "fee_mgmt_build", "index.html"));
});
app.get("/fee-mgmt/*", (req, res) => {
  res.sendFile(path.join(__dirname, "fee_mgmt_build", "index.html"));
});
app.get("/agency", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_admin_build", "index.html"));
});
app.get("/agency/*", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_admin_build", "index.html"));
});
app.get("/tankerCitizen", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_citizen_build", "index.html"));
});
app.get("/tankerCitizen/*", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_citizen_build", "index.html"));
});
app.get("/madhupur", (req, res) => {
  res.sendFile(path.join(__dirname, "csms_madhupur_build", "index.html"));
});
app.get("/madhupur/*", (req, res) => {
  res.sendFile(path.join(__dirname, "csms_madhupur_build", "index.html"));
});
app.get("/marriage", (req, res) => {
  res.sendFile(path.join(__dirname, "marriage_build", "index.html"));
});
app.get("/marriage/*", (req, res) => {
  res.sendFile(path.join(__dirname, "marriage_build", "index.html"));
});
app.get("/reporting", (req, res) => {
  res.sendFile(path.join(__dirname, "reporting_build", "index.html"));
});
app.get("/reporting/*", (req, res) => {
  res.sendFile(path.join(__dirname, "reporting_build", "index.html"));
});
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./404/404.html"));
});

// ═════════════════║🔰 THIS CODE BLOCK STARTS THE SERVER AT PORT 80 🔰║══════════════════════
app.listen(80, () => {
  console.log("server started on port 80");
});