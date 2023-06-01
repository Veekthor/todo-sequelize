require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const { User } = require("./models/users");
require("./routes")(app);
const PORT = process.env.PORT || "5000";
const initApp = async () => {
  console.log("Testing the database connection..");
  try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
      User.sync({});
      app.listen(PORT, () => {
          console.log(`Server is up and running at: http://localhost:${PORT}`);
      });
  } catch (error) {
      console.error("Unable to connect to the database:", error.original);
  }
};

initApp();

