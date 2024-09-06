const router = require("express").Router();
const links = require("../models/Link");
router.get("/:name", async (req, res) => {
    try {
      const name = req.params.name;
      const linkData = await links.findOne({
        where: { name: name }
      });
      if (linkData) {
          res.redirect(linkData.link);
        // res.status(200).send(linkData.link)
      } else {
        res.status(404).send('Ahhh! Link not found');
      }
    } catch (error) {
      console.error('Error fetching link:', error);
      res.status(500).send('Server error');
    }
  });
module.exports = router;