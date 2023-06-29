const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../helper/path");

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/success",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","formSubmitted.html"))
})



module.exports = router