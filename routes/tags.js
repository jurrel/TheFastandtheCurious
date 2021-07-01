const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Tag, ManyTag, Post } = db;
const { asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const tag = require('../db/models/tag');



// //get by tag
// router.get('/:id', asyncHandler(async (req, res) => {
//     const tagId = parseInt(req.params.id)                  //turn {'1'}  into 1
//     // const tags = await Tag.findByPk(req.params.id); 
//     const tag = await Tag.findAll({
//         where: {
//             tagId: tagId
//         },
//         include: [{
//             as: 'posts',
//             model: ManyTag,                 
//             attributes: ["postId"]
//         }]
//     })
//     res.render('specificTag')
// }))
// router.get('/:id', asyncHandler(async (req, res) => {
//     const tagId = parseInt(req.params.id)                  //turn {'1'}  into 1
//     // const tags = await Tag.findByPk(req.params.id); 
//     const tag = await ManyTag.findAll({
//         where: {
//             tagId: tagId
//         },
//         include: [{
//             as: 'tag',  //
//             // as: 'Tag',
//             model: Post,                
//             attributes: ["postId"]
//         }]
//     })
//     res.render('specificTag')
// }))
router.get('/:id', asyncHandler(async (req, res) => {
    const post = await Tag.findOne({
        where: { id: req.params.id },
        include: Post
    });
    // const post = await Tag.findByPk(req.params.id)
    console.log(post)
    // const post = await ManyTag.findAll({
    //     where: {
    //         tagsId: tagsId
    //     },
    //     include: [{
    //         as: Tag,
    //         model: Post,
    //     }]
    // })
    res.send('success')
    // res.render('specificTag', {
    //     post, tagsId
    // })
}))


module.exports = router;

