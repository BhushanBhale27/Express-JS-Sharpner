const path = require("path");

const rootDir = require("../helper/path");

exports.addContactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};
