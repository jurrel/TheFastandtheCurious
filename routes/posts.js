const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Post } = db;
const { Tag } = db;
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


router.get('/create', requireAuth,csrfProtection,
    asyncHandler(async (req, res) => {
        const post = Post.build
        const newTag = Tag.build;
    const tagList = await Tag.findAll();

    res.render('create-post', { post, tagList, newTag, csrfToken: req.csrfToken() });
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
    check('userId')
        .exists({ checkFalsy: true })
        .withMessage('you need a user id')

];

router.post('/create', postValidators,
    asyncHandler(async (req, res, next) => {
        const {
            title,
            description,
            image,
        } = req.body;




        const post = await Post.create({
            title,
            description,
            image,
            userId: res.locals.user.id
        });

        return res.redirect('/')

    }));








module.exports = router
