require('dotenv').config();
const db = require("./config/database");
const express = require('express');
const route = require('./routes');
const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;
try {
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.log("Connection Error : ", error);
}
app.use(route)
app.get('/', (req, res) => {
  res.json({
    broh: 'look it this brohhh!',
  });
});
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})