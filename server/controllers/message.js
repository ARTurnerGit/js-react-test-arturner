const {
  insertMessageModel,
  selectAllMessagesModel,
} = require("../models/message");

exports.postMessageController = (req, res) => {
  insertMessageModel(req.body)
    .then(() => {
      return res.status(201).send({ msg: "Message successfully sent" });
    })
    .catch((err) => {
      return res.status(400).send({ msg: "Bad request" });
    });
};

exports.getAllMessagesController = (req, res) => {
  selectAllMessagesModel()
    .then(({ results, fields }) => {
      return res.status(200).json({ results });
    })
    .catch((err) => {
      return res.status(400).send({ msg: "Bad request" });
    });
};
