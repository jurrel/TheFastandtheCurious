const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/', (req, res) => {
    const posts = db.Post.build()
    res.render('likes', {posts})
})


router.get('/create', requireAuth, csrfProtection,
    asyncHandler(async (req, res) => {
        const posts = db.Post.build()
        const newTag = db.Tag.build();
        const tagList = await db.Tag.findAll();

    res.render('likes', { posts, tagList, newTag, csrfToken: req.csrfToken() });
}));

module.exports = router;
