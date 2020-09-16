const testRouter = require("express").Router();

const {
  getTestController,
  postTestController,
} = require("../controllers/test");

testRouter.route("/").get(getTestController).post(postTestController);

module.exports = { testRouter };
