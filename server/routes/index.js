const users = require("./user.routes");
const express = require("express");
module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use("/api/users", users);

  app.get("/api/health", (req, res) => {
    res.json({
      health: "OK",
    });
  })
}