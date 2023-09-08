const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
