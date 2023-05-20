var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Heroku is pulling from GitHub automatically\nYes, this is what you\'re supposed to see');
});

module.exports = router;
