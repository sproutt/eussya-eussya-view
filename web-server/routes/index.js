var express = require("express");
var router = express.Router();
const fileSystem = require("fs");
const path = require("path");

/* GET home page. */
router.get("*", function(req, res, next) {
  fileSystem.readFileSync(path.resolve(__dirname, "/public/index.html"));
});

module.exports = router;
