const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Post } = db;
const { Tag } = db;
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/create', requireAuth, csrfProtection,
    asyncHandler(async (req, res) => {
        const posts = Post.build()
        const newTag = Tag.build();
        const tagList = await Tag.findAll();

    res.render('create-post', { posts, tagList, newTag, csrfToken: req.csrfToken() });
}));

const postValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Title PLEASE!')
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
        const {
            title,
            description,
            image,
        } = req.body;

        const post = Post.build({
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








module.exports = router
