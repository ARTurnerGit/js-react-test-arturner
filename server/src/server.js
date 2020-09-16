// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const { db } = require("../db/dbConfig");

// routers
const { testRouter } = require("../routers/test");
const { createRouter } = require("../routers/create");
const { adminRouter } = require("../routers/admin");
const { invalidPathRouter } = require("../errors");

const app = express();

// static folder, body parser, cors
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());
app.use(cors());

// //CONNECT
// db.connect((err) => {
//   if (err) throw err;
//   // console.log("MySQL Connected...");
// });

// routes
app.use("/", testRouter);
app.use("/create", createRouter);
app.use("/admin", adminRouter);
app.use("/*", invalidPathRouter);

module.exports = app;
