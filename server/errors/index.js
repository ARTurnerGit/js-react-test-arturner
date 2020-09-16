exports.invalidPathRouter = (req, res, next) => {
  res.status(404).send({ msg: "path not found" });
};

exports.invalidMethodController = (req, res, next) => {
  res.status(405).send({ msg: "invalid method" });
};
