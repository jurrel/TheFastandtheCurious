var express = require('express');

var router = express.Router();
const db = require('../db/models');
const { Post } = db;






const { csrfProtection, asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', csrfProtection,
  asyncHandler(async (req, res, next) => {
 // const user = db.User.build()


  const posts = await Post.findAll()

    console.log(res.json({ posts }));
    res.render('index', { title: 'The Fast and the Curious  --  A webpage designed for speed freaks!', posts, csrfToken: req.csrfToken() });

}));

module.exports = router;
