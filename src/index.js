const express = require("express");
const app = express();
const path = require("path");

// builtin Middleware
const staticPath = path.join(__dirname, "../public");

// To set the view engine
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index.hbs");
});
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("About us");
});
app.get("/contact", (req, res) => {
  res.send("Contact us");
});
app.get("/temp", (req, res) => {
  res.send("Temperature");
});

app.listen(8000, () => {
  console.log("Listening to the port....");
});
