const { Router } = require("express");
const router = new Router();
const Image = require("../models").image;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Image.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
