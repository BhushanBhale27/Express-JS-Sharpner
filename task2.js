const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //it parse text related entries

app.use("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/product" method="POST"><label>Product Name :</label><input type="text" name="product" /><br/><label>Size</label><input type="number" name="size" /><button>Add Product</button></form></body></html>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello Bhushan this is home page</h1>");
});

const server = http.createServer(app);

server.listen(3001);
