var express = require('express');
var router = express.Router();

/* Do I remember?*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
