const router = require("express").Router();
const pages = require("../controller/pages");
router.get("/:name", pages.index);
router.get("/", (req, res) => {
  res.json({
    broh: "look it this brohhh!",
  });
});
module.exports = router;
