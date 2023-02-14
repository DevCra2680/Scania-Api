const express = require("express");
const trackControllers = require("../controllers/track.controller");
const router = express.Router();

router.get("/trackitems", function (req, res) {
  res.render("trackitems");
});

router.post("/api", trackControllers.insertAsignmentForm);

module.exports = router;
