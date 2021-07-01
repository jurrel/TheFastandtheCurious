const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/create', requireAuth, csrfProtection,
    asyncHandler(async (req, res) => {
        const posts = db.Post.build()
        const newTag = db.Tag.build();
        const tagList = await db.Tag.findAll();

    res.render('create-post', { posts, tagList, newTag, csrfToken: req.csrfToken() });
}));

const postValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please add a title!')
        .isLength({ max: 100 })
        .withMessage('Title has to be less than 100 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('DESCRIBE so your post isn\'t plain and boring')
        .isLength({ max: 100000 })
        .withMessage('What are you writing a book, clean it up'),
    check('image')
        .isLength({ max: 500 })
        .withMessage('Your pic URL is too long'),
];

router.post('/create', requireAuth, csrfProtection, postValidators,
    asyncHandler(async (req, res, next) => {
        // console.log(req.body)
        const {
            title,
            description,
            image,
        } = req.body;

        const post = db.Post.build({
            title,
            description,
            image,
            userId: res.locals.user.id
        });
        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await post.save()
            return res.redirect('/')
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            const tagList = await Tag.findAll();
            res.render('create-post', {

                post,
                errors,
                tagList,
                csrfToken: req.csrfToken(),
            })
        }

    }));


router.post('/delete/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = await db.Post.findByPk(postId);

  if (res.locals.user.id === post.userId) {
      await post.destroy()
    }
    res.redirect('/');


}));


router.get('/edit/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await db.Post.findByPk(postId);

    if (res.locals.user.id === post.userId) {
        res.render('post-edit', {
          title: 'Edit meee',
          post,
          csrfToken: req.csrfToken(),
        });

    }
  }));


const postValidatorss = []

router.post('/edit/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postUpdate = await db.Post.findByPk(postId);

    console.log(req.body)

    const {
        id,
        title,
        description,

    } = req.body;

    const post = {
        id,
        title,
        description,

    };
        await postUpdate.update(post);
        res.redirect('/');
  }));





module.exports = router
