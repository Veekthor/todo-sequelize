const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    health: "OK",
  });
})

const PORT = process.env.PORT || "5000";

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
