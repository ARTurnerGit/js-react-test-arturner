const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const mysql = require("mysql");
const { db } = require("../db/dbConfig");
const cors = require("cors");
const { testRouter } = require("../routers/test");
const { createRouter } = require("../routers/create");
const { invalidPathRouter } = require("../errors");

const app = express();

//STATIC FOLDER
app.use(express.static(path.join(__dirname, "../client/build")));

// Body Parser Middleware
app.use(bodyParser.json());

// Deal with CORS
app.use(cors());

//CONNECT
db.connect((err) => {
  if (err) throw err;
  // console.log("MySQL Connected...");
});

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// Test
app.use("/", testRouter);

// Create
app.use("/create", createRouter);

// An API endpoint to store form post data
app.post("/create", (req, res) => {
  return res.json({
    status: res.statusCode,
    data: {
      message: "Success",
    },
  });
});

app.use("/*", invalidPathRouter);

module.exports = app;
