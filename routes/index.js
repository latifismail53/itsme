const router = require("express").Router();
const { name } = require("ejs");
const pages = require("../controller/pages");
router.get("/:name", pages.index);
router.get("/", (req, res) => {
  res.json({
    status: res.statusCode,
    lastUpdatedAt: new Date() + "",
    session: "valid",
    message: "look it this brohhh!",
    data: {
      device: req.headers["user-agent"],
      device_type: req.headers["user-agent"].split(" ")[0],
      device_id: Math.floor(Math.random() * 99999999),
    },
  });
});
module.exports = router;
