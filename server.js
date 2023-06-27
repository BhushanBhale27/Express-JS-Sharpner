const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In first middleware");
  next(); // allows to goto next middleware
});

app.use((req, res, next) => {
  console.log("In second middleware");
  //send response
  res.send("<h1>Bhushan Express</h1>");

});
// app.use((req, res, next) => {
//   console.log("In third middleware");
//   //send response
//   res.send({key1:"value1"});
// });

const server = http.createServer(app);

server.listen(3000);
