var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator')

const { asyncHandler, csrfProtection } = require('./utils');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {

  const posts = await db.Post.findAll({})
  const tags = await db.Tag.findAll();
  const users = await db.User.findAll();


  res.render('index', { title: 'The Fast and the Curious  --  A webpage designed for speed freaks!', posts, tags, users });

}));


router.get('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
  const postId = parseInt(req.params.id, 10);
  const post = await db.Post.findByPk(postId);

  if (post.id) {
    const comments = await db.Comment.findAll({
      where: { postId: postId }
    });

    const comm = db.Comment.build();

    const user = await db.User.findByPk(post.userId);
    const users = await db.User.findAll();


    //const comm = await db.Comment.build();
    // const comments = await db.Comment.findAll();


    return res.render('comments', { post, user, users, comments, comm, csrfToken: req.csrfToken() })
  }
  res.redirect('/')
}))

const validateComment = [
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('You\'re need to make a comment if you\'re gonna come to this page')
    .isLength({ max: 1000 })
    .withMessage('You\'re comment is far too long')
]


module.exports = router;
