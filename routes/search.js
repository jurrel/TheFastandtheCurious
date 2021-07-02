const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


// router.get('/search', requireAuth, csrfProtection,
//     asyncHandler(async (req, res) => {
//         const posts = db.Post.build()
//         const newTag = db.Tag.build();
//         const tagList = await db.Tag.findAll();

//         res.render('create-post', { posts, tagList, newTag, csrfToken: req.csrfToken() });
//     }));
router.post("/search", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    const post = req.get("Post");
    const { q } = req.body;
    const post = await db.ManyTag.findAll({
        where: { id: req.params.id }
        include: postId
    }
    if (post === null) {
        res.redirect()
    }
});
