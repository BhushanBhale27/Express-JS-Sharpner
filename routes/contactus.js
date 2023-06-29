const path = require("path");

const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contactus");
const successController = require("../controllers/success");

router.get("/contactus", contactController.addContactUs);

router.post("/success", successController.addSuccess);

module.exports = router;
