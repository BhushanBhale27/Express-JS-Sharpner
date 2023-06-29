const express = require("express");

const fs = require("fs");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<html>
      <head>
        <title>Group Chat App</title>
      </head>
      <body>
        <form onsubmit='localStorage.setItem("username", document.getElementById("username").value)' action="/users" method="POST">
          <label>User Name :</label>
          <input type="text" name="username" id="username" />
          <button type="submit">Login</button>
        </form>
      </body>
    </html>`
  );
});

router.post("/users", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
