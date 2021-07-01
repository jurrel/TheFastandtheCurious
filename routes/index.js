var express = require('express');

var router = express.Router();
const db = require('../db/models');
const { Post } = db;
const cors = require("cors");





const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/',
  cors(),
  asyncHandler(async (req, res, next) => {
  const user = db.User.build()


  const posts = await Post.findAll()

  res.json({ posts });
  // res.render('index', { title: 'The Fast and the Curious  --  A webpage designed for speed freaks!', user, posts });

}));

module.exports = router;
