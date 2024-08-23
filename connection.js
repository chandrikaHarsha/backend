const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
let filePath = path.join(__dirname, "/FormDb.html");
let style = path.join(__dirname, "./assets/css/");

const app = express();
app.use(express.static(style));
app.use(bodyParser.urlencoded({ extended: false }));

let url = "mongodb://127.0.0.1:27017";
let client = new MongoClient(url);
let dbName = "RegisterUsers";

let connDb = async () => {
  await client.connect();
  console.log("Successfully Connected...");
  const db = client.db(dbName);
  //   console.log("Hey Data...", db);
  return db;
};

let user_sign_up = async (req, res, next) => {
  let uName = req.body.user_name;
  let uPass = req.body.user_password;
  console.log(uName, uPass);
  let data = await connDb();
  //   console.log("........",data);
  const collection = data.collection("users");
  collection.insertOne({ name: uName, password: uPass });

  next();
};

app.get("/sign-up", (req, res) => {
  res.sendFile(filePath);
  let body = req.body;
  console.log(body);
});
app.post("/sign-up", user_sign_up, (req, res) => {
  console.log("done");
  let response = `<h1 style="text-align:center; color:#303645; font-family:Arial, Helvetica, sans-serif; font-size:50px; text-transform:uppercase; ">Great welcome to our team ${req.body.user_name}</h1>`;
  res.send(response);
});

app.listen(5000, () => {
  console.log("Server Started At Port 5000");
});
