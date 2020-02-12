var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Dk', function(req, res, next) {
  res.send('this is some random text');
});
module.exports = router;
