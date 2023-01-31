const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/work", (req, res) => {
  res.render("work");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
