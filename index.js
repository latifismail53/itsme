require("dotenv").config();
const express = require("express");
const route = require("./routes");
const path = require("path");
const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(route);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server run on port ${port}!`);
});
