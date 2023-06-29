const path = require("path");

const rootDir = require("../helper/path");

exports.addSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","formSubmitted.html"))
}