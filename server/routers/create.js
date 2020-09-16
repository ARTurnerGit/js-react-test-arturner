const createRouter = require("express").Router();
const { invalidMethodController } = require("../errors");

createRouter
  .route("/")
  .post(() => {})
  .all(invalidMethodController);

module.exports = { createRouter };
