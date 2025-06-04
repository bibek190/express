const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");

// builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Welcome to my home");
});

app.listen(port, () => {
  console.log(`Listening to the ${port}`);
});
