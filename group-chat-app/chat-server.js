const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoute = require("./chatRoutes/login");
const messageRoute = require("./chatRoutes/message")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoute);
app.use(messageRoute)


//404 page
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page Not Found</h2>')
})

app.listen(4001);
