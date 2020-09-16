const testRouter = require("express").Router();

const {
  getTestController,
  postTestController,
} = require("../controllers/test");
const { invalidMethodController } = require("../errors");

testRouter
  .route("/")
  .get(getTestController)
  .post(postTestController)
  .all(invalidMethodController);

module.exports = { testRouter };
