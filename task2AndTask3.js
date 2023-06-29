const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/task3Admin");
const shopRoutes = require("./routes/task3Shop");

app.use(bodyParser.urlencoded({ extended: false })); //it parse text related entries

app.use( "/admin" ,adminRoutes); // "/admin" is filtering routes
app.use(shopRoutes);

//adding 404 page

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not found</h1>')
  //status(404) is for network tab
})

app.listen(3001)
