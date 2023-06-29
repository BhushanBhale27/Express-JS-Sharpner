//core modules:-
const path = require("path")


//express(library):-
const express = require("express");

//custom imports:-
const rootDir = require('../helper/path')

const router = express.Router();

//here "get" is important to do "exact match to url path".. also important for 404 page
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir , 'views' , 'shop.html'));
});

module.exports = router;
