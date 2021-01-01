var express = require("express");
var router = express.Router();
let path = require("path");

/* GET home page. */
router.get("/*", function (req, res, next) {
  res.sendFile(express.static(path.join(__dirname, "../../build/index.html")));
});

module.exports = router;
