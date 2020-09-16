const adminRouter = require("express").Router();
const { getAllMessagesController } = require("../controllers/message");
const { invalidMethodController } = require("../errors");

adminRouter
  .route("/")
  .get(getAllMessagesController)
  .all(invalidMethodController);

module.exports = { adminRouter };
