const createRouter = require("express").Router();
const { postMessageController } = require("../controllers/message");
const { invalidMethodController } = require("../errors");

createRouter
  .route("/")
  .post(postMessageController)
  .all(invalidMethodController);

module.exports = { createRouter };
