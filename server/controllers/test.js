// Test to make sure the API can talk to React
exports.getTestController = (req, res) => {
  return res.json({
    status: res.statusCode,
    data: {
      message: "API Active",
    },
  });
};

// An echo, to help with debugging
exports.postTestController = (req, res) => {
  return res.json({
    status: res.statusCode,
    data: {
      message: "ECHO!",
      posted: req.body,
    },
  });
};
