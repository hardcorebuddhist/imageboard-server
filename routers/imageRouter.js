const { Router } = require("express");
const router = new Router();
const Image = require("../models").image;

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      res.status(400).send("missing parameters");
    } else {
      const newImage = await Image.create({
        title,
        url,
      });
      res.send(newImage);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
