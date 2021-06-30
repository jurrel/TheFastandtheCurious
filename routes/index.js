var express = require('express');
var router = express.Router();
const db = require('../db/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = db.User.build()
  res.render('index', { title: 'The Fast and the Curious  --  A webpage designed for speed freaks!', user });
});

module.exports = router;
