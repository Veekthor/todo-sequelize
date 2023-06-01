const users = require("./user.routes");
const error = require("../middlewares/error");
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
  app.use(error)
}