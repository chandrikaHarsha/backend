// const express = require("express");
// const app = express();

// const router1 = express.Router();
// const router2 = express.Router();

// let m1 = (req, res, next) => {
//   console.log("Middleware 1");
//   next();
// };
// let m2 = (req, res, next) => {
//   console.log("Middleware 2");
//   next();
// };
// let m3 = (req, res, next) => {
//   console.log("Middleware 3");
//   next();
// };

// app.use(m1);
// router1.use(m2);
// router2.use(m3);

// app.get("/api1", (req, res) => {
//   res.send("API 1");
//   console.log("Api 1");
// });
// router1.get("/api2", (req, res) => {
//   res.send("API 2");
//   console.log("Api 2");
// });
// router2.get("/api3", (req, res) => {
//   res.send("API 3");
//   console.log("Api 3");
// });

// app.use("/api2test", router1);
// app.use("/api3test", router2);

// app.listen(5000, () => {
//   console.log("Server Running at Port 5000...");
// });

const express = require("express");
const app = express();
const router1 = express.Router();
const router2 = express.Router();

let m1 = (req, res, next) => {
  console.log("Middleware 1");
  next();
};

let m2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};
let m3 = (req, res, next) => {
  console.log("Middleware 3");
  next();
};

app.use(m1); //working
router1.use(m2);
router2.use(m3);

app.use("/2", router1); //working
app.use("/3", router1, router2); //working
app.use("/4", router2); //working

app.get("/api1", (req, res) => {
  res.send("API 1");
  console.log("API 1");
});

router1.get("/api2", (req, res) => {
  res.send("API 2");
  console.log("API 2");
});
router2.get("/api3", (req, res) => {
  res.send("API 3");
  console.log("API 3");
});

router2.get("/api4", (req, res) => {
  res.send("API 4");
  console.log("API 4");
});

app.listen(3200, () => {
  console.log("Server running at port 3200");
});
