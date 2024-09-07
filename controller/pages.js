const links = require("../models/Link");

module.exports = {
  index: async (req, res) => {
    try {
      const name = req.params.name;
      const linkData = await links.findOne({
        where: { name: name },
      });
      if (linkData) {
        res.render("index", { link: linkData.link });
      } else {
        res.redirect("/");
      }
    } catch (error) {
      console.error("Error fetching link:", error);
      res.status(500).send("Server error");
    }
  },
};
