const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Post } = db;
const { Tag } = db;
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');



router.get('/create', asyncHandler(async (req, res) => {
    const post = db.Post.build
    const tags = await Tag.findAll();

    res.render('create-post', { post, tags });
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
        let {
            title,
            description,
            image,
            userId
        } = req.body;

        userId = Number(userId);
        console.log({ title, description, image, userId });

        const post = await Post.create({
            title,
            description,
            image,
            userId
        });


    //     const post = Post.build({
    //         title,
    //         description,
    //         image,
    //         userId,
    //     });
    //     console.log(title);
    //     // const validatorErrors = validationResult(req);

    //     // if (validatorErrors.isEmpty()) {
    //     //     await
    //     // };



    //    // console.log(title);

    //     await post.save();

        return res.redirect('/posts/create')

    }));








module.exports = router
