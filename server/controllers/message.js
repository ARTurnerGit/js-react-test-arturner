const { insertMessageModel } = require("../models/message");

exports.postMessageController = (req, res) => {
  insertMessageModel(req.body)
    .then(() => {
      return res.status(201).send({ msg: "Message successfully sent" });
    })
    .catch((err) => {
      return res.status(400).send({ msg: "Bad request" });
    });
};
