require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require("./db");
const { User } = require("./models/users");
const { Todo } = require("./models/todo");

app.use(express.static(path.resolve(__dirname, '../client/build')))

require("./routes")(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || "5000";
const initApp = async () => {
  console.log("Testing the database connection..");
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    User.sync();
    Todo.sync();
    app.listen(PORT, () => {
      console.log(`Server is up and running at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.original);
  }
};

initApp();
