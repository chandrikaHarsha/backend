const express = require("express");
// const fs = require("fs");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

let fileName = path.join(__dirname, "/index.html");
let LoginFilePath = path.join(__dirname, "/login.html");
let staticFilePath = path.join(__dirname, "/assets/css/");
app.use(express.static(staticFilePath));
// let file = fs.readFile(fileName, (err, data) => {
//   try {
//     data ? console.log("data read...") : console.log(err);
//   } catch (err) {
//     console.log(err);
//   }
// });
let Router = express.Router();
let roleLogin = (req, res, next) => {
  let userName = req.body.user_name;
  let userPassword = req.body.user_password;
  if (userName === "Admin" && userPassword === "admin@1234") {
    res.send(
      `<h1 style="color:#303640 ; text-align:center">Welcome Admin</h1>`
    );
  } else if (userName === "User" && userPassword === "user@1234") {
    res.send(`<h1 style="color:#303640 ; text-align:center">Welcome User</h1>`);
  } else {
    res.send(
      `<h1 style="color:red ; text-align:center">Unauthorized Access... Access Denied</h1>`
    );
  }
  //   console.log("data", req.body);
  next();
};
app.get("/home", (req, res) => {
  res.sendFile(fileName);
});

app
  .get("/admin", (req, res) => {
    res.sendFile(LoginFilePath);
  })
  .get("/user", (req, res) => {
    res.sendFile(LoginFilePath);
  });
app.post("/login", roleLogin, (req, res) => {
  console.log("admin");
});

app.listen(5000, () => {
  console.log("Server Started at port 5000...");
});
