const express = require("express");

const router = express.Router();

//here "get" is important to do "exact match to url path".. also important for 404 page
router.get("/shop", (req, res, next) => {
  res.send("<h1>Hello Bhushan this is home page</h1>");
});

module.exports = router;
