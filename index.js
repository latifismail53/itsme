require("dotenv").config();
const db = require("./config/database");
const express = require("express");
const route = require("./routes");
const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(route);
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`Server run on port ${port}!`);
});
