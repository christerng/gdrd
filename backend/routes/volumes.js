var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
    res.send(
        {
            1: 42,
            2: 23,
            3: 5,
            4: 4,
            5: 69
        }
    );
});

module.exports = router;