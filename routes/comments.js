const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


router.get('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.id, 10);
    const post = await db.Post.findByPk(postId);
    const comments = await db.Comment.findAll({where: {postId}});

    const comm = db.Comment.build();
    const users = await db.User.findAll();
    // const comm = await db.Comment.build();
    // const comments = await db.Comment.findAll();

    const postIdentity = parseInt(req.params.id, 10);
    console.log(postIdentity)

    res.render('comments', { post, users, comments, comm })
}))

const commentValidators = [
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('You\'re need to make a comment if you\'re gonna come to this page')
        .isLength({ max: 1000 })
        .withMessage('You\'re comment is far too long')
]

router.post('/:id(\\d+)', requireAuth, commentValidators, asyncHandler(async (req, res, next) => {
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
    const validatorErrors = validationResult(req);
    console.log(validatorErrors);

    if (validatorErrors.isEmpty()) {
        await comment.save();
        return res.redirect(`/comments/${postIdentity}`)
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        const comments = await db.Comment.findAll();
        res.render('create-post', {
            commments,
            errors,
            csrfToken: req.csrfToken(),
        })
}
}));

router.post('/edit/:id(\\d+)', csrfProtection,
    asyncHandler(async (req, res) => {
        const commentId = parseInt(req.params.id, 10);
        const comment = await db.Comment.findByPk(commentId);

        if (res.locals.user.id === comment.userId) {
            res.render("")
        }

}))

router.post('/delete/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(commentId);

    if (res.locals.user.id === comment.userId) {
        await comment.destroy();
        res.redirect('/');
    }
}));

module.exports=router
