const express = require("express");

const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("chatFile.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No Chat Exists";
    }
    res.send(
      `<html>
        <body>
        <p>${data}</p>
          <form
            action="/"
            method="POST"
            onSubmit="document.getElementById('username').value=localStorage.getItem('username')"
          >
            <label>Your Message : </label>
            <input type="text" name="message" id="message" />
            <input type="hidden" name="username" id="username" />
            <button>SEND</button>
          </form>
        </body>
      </html>`
    );
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body.message);
  fs.writeFile("chatFile.txt", `${req.body.username}  : ${req.body.message}`, { flag: "a" }, (err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

module.exports = router;
