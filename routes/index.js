var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');



/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {

  const posts = await db.Post.findAll({})
  const tags = await db.Tag.findAll();
  const users = await db.User.findAll();


  res.render('index', { title: 'The Fast and the Curious  --  A webpage designed for speed freaks!', posts, tags, users });

}));


router.get('/post/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
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

    console.log(res.locals.user.id)

     res.render('comments', { post, user, users, comments, comm, csrfToken: req.csrfToken() })
  }

}))

const commentValidators = [
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('You\'re need to make a comment if you\'re gonna come to this page')
    .isLength({ max: 1000 })
    .withMessage('You\'re comment is far too long')
]

router.post('/post/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {

    console.log('hello')
    const postIdentity = parseInt(req.params.id, 10);



    const {
      description,
      userId,
      postId,
    } = req.body;

    const comment = db.Comment.build({
      description,
      userId: res.locals.user.id,
      postId: postIdentity,
    })

    await comment.save();
     return res.redirect('/')

    // const validatorErrors = validationResult(req);
    // console.log(validatorErrors);

    // if (validatorErrors.isEmpty()) {
    //   await comment.save();
    //   return res.redirect('/')

    // } else {

    // }
}))

module.exports = router;
