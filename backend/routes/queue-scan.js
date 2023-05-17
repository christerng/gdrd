var express = require("express");
var router = express.Router();

router.get("/", (res) => {
    res.send("Register a queue scan");
});

module.exports = router;