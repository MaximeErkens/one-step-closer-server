const User = require("../models/User.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ hiClass: "how you doin?" });
});

module.exports = router;