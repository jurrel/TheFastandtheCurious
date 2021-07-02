const express = require('express');
const router = express.Router();
const db = require('../db/models');
// const { Tag, ManyTag, Post } = db;
const { asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const tag = require('../db/models/tag');



//get by tag
router.get('/:id', asyncHandler(async (req, res) => {
    const tagId = parseInt(req.params.id)                  //turn {'1'}  into 1
    const path = req.path.split('/').join('')
    // const posts = await db.Post.findAll({order: [["updatedAt", "desc"]]})
  const tags = await db.Tag.findAll();
  const users = await db.User.findAll({order: [["updatedAt", "desc"]]});
    const posts = await db.Post.findAll({
        where: {
            tagId: path
        },
    })
    res.render('index', {posts, tags, users})
}))

// router.get('/:id', asyncHandler(async (req, res) => {
//     const post = await ManyTag.findAll({
//         // where: { id: req.params.id },
//         // include: postId
//     });
//     console.log(post)
//     // const post = await Tag.findByPk(req.params.id)
//     // console.log(post)
//     // const post = await ManyTag.findAll({
//     //     where: {
//     //         tagsId: tagsId
//     //     },
//     //     include: [{
//     //         as: Tag,
//     //         model: Post,
//     //     }]
//     // })
//     // res.send('success')
//     res.render('specificTag', {
//         post
//     })
// }))


module.exports = router;
