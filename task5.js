const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/Shop");
const contactusRoutes = require("./routes/contactus");

app.use(bodyParser.urlencoded({ extended: false })); //it parse text related entries
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); // "/admin" is filtering routes
app.use(shopRoutes);
app.use(contactusRoutes);

//adding 404 page

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "pageNotFound.html"));
  //status(404) is for network tab
});

app.listen(3001);
