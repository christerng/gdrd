var express = require("express");
var router = express.Router();

router.post("/", (req, res, next) => {
    res.send("Register a queue scan");
});

module.exports = router;