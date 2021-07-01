var express = require('express');
var router = express.Router();
const db = require('../db/models');
<<<<<<< HEAD

const { asyncHandler, csrfProtection } = require('./utils');
=======
const { check, validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');


>>>>>>> comments

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {

<<<<<<< HEAD
  const posts = await db.Post.findAll({order: [["updatedAt", "desc"]]})
  const tags = await db.Tag.findAll();
  const users = await db.User.findAll();
=======
  const posts = await db.Post.findAll({})
  const tags = await db.Tag.findAll();
  const users = await db.User.findAll();

>>>>>>> comments

  res.render('index', { title: 'The Fast and the Curious  --  A webpage designed for speed freaks!', posts, tags, users });

}));





module.exports = router;
