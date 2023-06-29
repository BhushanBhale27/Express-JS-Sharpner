const path = require("path")

const express = require("express");

const router = express.Router();

//custom imports:-
const rootDir = require('../helper/path')

// routing purpose:-

// router.get("/add-product", (req, res, next) => {
//   res.send(
//     '<html><body><form action="/product" method="POST"><label>Product Name :</label><input type="text" name="product" /><br/><label>Size</label><input type="number" name="size" /><button>Add Product</button></form></body></html>'
//   );
// });

// router.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

//filtering task
//we can take same path if methods are different
//now remove /admin and add to task2.js file
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir ,'views','add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
